import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, "public");
const outDir = path.join(publicDir, "optimized");

const ensureDir = async (dir) => {
  await fs.mkdir(dir, { recursive: true });
};

const exists = async (filePath) => {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
};

const toSafeKey = (input) =>
  input
    .toLowerCase()
    .replace(/\.(png|jpe?g)$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const writeWebpVariants = async ({
  inputFile,
  key,
  widths,
  quality,
  allowUpscale = false,
  sharpen = false,
}) => {
  const inputPath = path.join(publicDir, inputFile);
  if (!(await exists(inputPath))) {
    process.stderr.write(`Aviso: arquivo não encontrado, pulando otimização: ${inputFile}\n`);
    return;
  }

  const base = sharp(inputPath).rotate();
  const pipeline = sharpen ? base.sharpen(0.8, 0.4, 0.8) : base;

  for (const width of widths) {
    const outputFile = `${key}-${width}.webp`;
    const outputPath = path.join(outDir, outputFile);

    await pipeline
      .clone()
      .resize({ width, withoutEnlargement: !allowUpscale })
      .webp({ quality })
      .toFile(outputPath);
  }
};

const run = async () => {
  await ensureDir(outDir);

  const entries = await fs.readdir(publicDir);
  const whatsAppJpegs = entries
    .filter((f) => /^WhatsApp Image .*\.jpeg$/i.test(f))
    .sort((a, b) => a.localeCompare(b, "pt-BR", { numeric: true, sensitivity: "base" }));

  const jobs = [
    {
      inputFile: "Black And White Minimalist Typography Personal Logo.png",
      key: "logo-djr",
      widths: [256, 512],
      quality: 90,
    },
    {
      inputFile: "screencapture-teiahealth-ninsaude-clinic-lp-ads-2026-02-10-13_23_11.png",
      key: "banner-screencapture",
      widths: [960, 1280, 1920],
      quality: 78,
    },
    {
      inputFile: "hero-bg.jpg",
      key: "hero-bg",
      widths: [960, 1280, 1920, 2560],
      quality: 78,
    },
    {
      inputFile: "𝓓𝓻_ 𝓜𝓲𝓴𝓮_.png",
      key: "hero-dr-mike",
      widths: [768, 1024, 1440, 1920],
      quality: 86,
      allowUpscale: true,
      sharpen: true,
    },
    ...whatsAppJpegs.map((fileName, index) => ({
      inputFile: fileName,
      key: `gallery-${String(index + 1).padStart(2, "0")}`,
      widths: [480, 768, 1024],
      quality: 80,
    })),
  ];

  for (const job of jobs) {
    const normalizedKey = job.key || toSafeKey(job.inputFile);
    await writeWebpVariants({ ...job, key: normalizedKey });
  }

  const manifest = jobs.map((job) => ({
    key: job.key || toSafeKey(job.inputFile),
    inputFile: job.inputFile,
    widths: job.widths,
  }));

  await fs.writeFile(path.join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf-8");

  process.stdout.write(`OK: gerado em ${path.relative(projectRoot, outDir)} (${manifest.length} itens)\n`);
};

run().catch((err) => {
  process.stderr.write(`${err instanceof Error ? err.message : String(err)}\n`);
  process.exit(1);
});
