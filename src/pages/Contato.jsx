import { useState } from "react";

export default function Contato() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="py-24 border-b border-border/50">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Contato</span>
          <h1 className="font-serif text-5xl md:text-7xl mt-6 leading-[0.95]">Conte sua<br /><span className="italic text-gradient-gold">história.</span></h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
            O primeiro contato é uma escuta. Preencha o formulário ou utilize um dos
            canais abaixo — responderemos em até 24 horas úteis.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Endereço</span>
              <p className="mt-3 text-foreground font-serif text-xl">Fortaleza — Ceará</p>
              <p className="text-muted-foreground text-sm mt-1">Atendimento mediante agendamento prévio</p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">E-mail</span>
              <a href="mailto:contato@charlessiqueira.adv.br" className="block mt-3 text-foreground hover:text-gold transition-colors">contato@charlessiqueira.adv.br</a>
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Telefone</span>
              <a href="tel:+5585999999999" className="block mt-3 text-foreground hover:text-gold transition-colors">+55 (85) 99999-9999</a>
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Horário</span>
              <p className="mt-3 text-foreground">Segunda à Sexta</p>
              <p className="text-muted-foreground text-sm">09h00 — 18h00</p>
            </div>
            <div className="pt-8 border-t border-border">
              <p className="font-serif italic text-gold text-lg leading-relaxed">"Cada caso é uma história — e merece ser tratado como tal."</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            {sent ? (
              <div className="border border-gold/40 p-12 text-center">
                <div className="font-serif text-3xl text-gradient-gold mb-4">Mensagem enviada</div>
                <p className="text-muted-foreground">Obrigado pelo contato. Retornaremos em até 24 horas úteis.</p>
                <button onClick={() => setSent(false)} className="mt-8 text-xs uppercase tracking-[0.25em] text-gold hover:underline">Enviar nova mensagem</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-8">
                <Field label="Nome completo" name="nome" required />
                <div className="grid sm:grid-cols-2 gap-8">
                  <Field label="E-mail" name="email" type="email" required />
                  <Field label="Telefone" name="telefone" type="tel" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.25em] text-gold">Área de interesse</label>
                  <select name="area" required className="mt-3 w-full bg-transparent border-b border-border focus:border-gold py-3 text-foreground outline-none transition-colors">
                    <option className="bg-background" value="">Selecione</option>
                    <option className="bg-background">Direito de Família</option>
                    <option className="bg-background">Previdenciário</option>
                    <option className="bg-background">Trabalhista</option>
                    <option className="bg-background">Empresarial</option>
                    <option className="bg-background">Criminal</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.25em] text-gold">Sua mensagem</label>
                  <textarea name="mensagem" rows={5} required placeholder="Conte brevemente sua situação..." className="mt-3 w-full bg-transparent border-b border-border focus:border-gold py-3 text-foreground outline-none transition-colors resize-none placeholder:text-muted-foreground/60" />
                </div>
                <button type="submit" className="w-full sm:w-auto px-10 py-4 bg-gold text-primary-foreground text-xs uppercase tracking-[0.25em] hover:bg-gold-muted transition-all">Enviar mensagem</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.25em] text-gold">{label}</label>
      <input type={type} name={name} required={required} className="mt-3 w-full bg-transparent border-b border-border focus:border-gold py-3 text-foreground outline-none transition-colors" />
    </div>
  );
}
