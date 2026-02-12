import SectionHeading from "@/components/shared/SectionHeading";

const TermosDeUso = () => {
  return (
    <main className="section-padding">
      <div className="container-djr">
        <SectionHeading
          badge="Legal"
          title="Termos de Uso"
          subtitle="Ao acessar este site, você concorda com os termos descritos abaixo."
          centered={false}
        />

        <div className="glass-card p-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            O conteúdo deste site tem finalidade informativa e não substitui orientação técnica, contratual ou
            profissional. As informações podem ser atualizadas sem aviso prévio.
          </p>
          <p>
            Você concorda em utilizar o site de forma lícita, sem tentar interromper, explorar vulnerabilidades ou
            acessar áreas restritas.
          </p>
          <p>
            Marcas, textos e materiais podem estar protegidos por direitos autorais. O uso indevido pode gerar
            responsabilização.
          </p>
          <p>
            Em caso de dúvidas sobre estes termos, utilize os canais de contato indicados no rodapé.
          </p>
        </div>
      </div>
    </main>
  );
};

export default TermosDeUso;
