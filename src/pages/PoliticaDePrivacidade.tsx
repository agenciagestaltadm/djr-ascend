import SectionHeading from "@/components/shared/SectionHeading";

const PoliticaDePrivacidade = () => {
  return (
    <main className="section-padding">
      <div className="container-djr">
        <SectionHeading
          badge="Legal"
          title="Política de Privacidade"
          subtitle="Este documento descreve como coletamos e utilizamos informações quando você utiliza o site."
          centered={false}
        />

        <div className="glass-card p-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            Podemos coletar informações fornecidas por você ao entrar em contato, como nome, telefone, e-mail e dados da
            empresa, exclusivamente para retorno e atendimento.
          </p>
          <p>
            Também podemos coletar dados técnicos de navegação (por exemplo, páginas acessadas e informações do
            dispositivo) para fins de melhoria de experiência e segurança.
          </p>
          <p>
            Não comercializamos dados pessoais. O compartilhamento, quando necessário, ocorre apenas com prestadores de
            serviço essenciais ao funcionamento do site e conforme obrigações legais.
          </p>
          <p>
            Para solicitar atualização, correção ou exclusão de informações pessoais, utilize os canais de contato
            indicados no rodapé.
          </p>
        </div>
      </div>
    </main>
  );
};

export default PoliticaDePrivacidade;
