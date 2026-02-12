import { useEffect, useState } from "react";
import type { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ResponsiveImageSource = {
  type: string;
  srcSet: string;
  sizes?: string;
};

type ResponsiveImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
  src: string;
  alt: string;
  fallbackSrc?: string;
  sources?: ResponsiveImageSource[];
};

const ResponsiveImage = ({
  src,
  alt,
  fallbackSrc = "/placeholder.svg",
  sources,
  className,
  loading = "lazy",
  decoding = "async",
  onError,
  ...props
}: ResponsiveImageProps) => {
  const [resolvedSrc, setResolvedSrc] = useState(src);

  useEffect(() => {
    setResolvedSrc(src);
  }, [src]);

  const { fetchPriority, ...imgProps } = props;

  const img = (
    <img
      {...imgProps}
      {...(fetchPriority ? ({ fetchpriority: fetchPriority } as Record<string, unknown>) : {})}
      src={resolvedSrc}
      alt={alt}
      loading={loading}
      decoding={decoding}
      className={cn("max-w-full h-auto", className)}
      onError={(e) => {
        if (resolvedSrc !== fallbackSrc) setResolvedSrc(fallbackSrc);
        onError?.(e);
      }}
    />
  );

  if (!sources?.length) return img;

  return (
    <picture>
      {sources.map((source) => (
        <source key={`${source.type}-${source.srcSet}`} type={source.type} srcSet={source.srcSet} sizes={source.sizes} />
      ))}
      {img}
    </picture>
  );
};

export default ResponsiveImage;
