import portrait from "../assets/charles-portrait.jpg";

const timeline = [
  { year: "2013", title: "Graduação em Direito", desc: "Faculdade Integrada da Grande Fortaleza — FGF. Inscrição na OAB/CE no mesmo ano." },
  { year: "2013–2014", title: "Secretaria de Justiça e Cidadania", desc: "Atuação como advogado na SEJUS/CE." },
  { year: "2014–2017", title: "Ministério Público do Ceará", desc: "Assessor Jurídico Especial na Procuradoria Geral de Justiça, com atuação em matéria criminal." },
  { year: "2016", title: "JURDECON", desc: "Assessor jurídico na Junta Recursal do Programa Estadual de Proteção e Defesa do Consumidor." },
  { year: "2017", title: "Doutorado em Direito Penal", desc: "Aceito como aluno na Universidade de Buenos Aires (UBA), Argentina." },
  { year: "2019", title: "Mestrado em Criminologia", desc: "UCES — Universidad de Ciencias Empresariales y Sociales, Buenos Aires." },
  { year: "Hoje", title: "Advocacia Criminal e Empresarial", desc: "Atuação como advogado criminalista, consultor jurídico empresarial e pesquisador." },
];

export default function Sobre() {
  return (
    <>
      <section className="relative py-32 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-md">
              <div className="absolute -inset-4 border border-gold/30" />
              <img src={portrait} alt="Dr. Charles Siqueira" loading="lazy" className="relative w-full h-full object-cover grayscale-[20%]" />
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Sobre</span>
            <h1 className="font-serif text-5xl md:text-7xl mt-6 leading-[0.95]">Dr. Charles<br /><span className="italic text-gradient-gold">Siqueira</span></h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Advogado criminalista, consultor jurídico empresarial e pesquisador em Direitos Humanos,
              Novos Direitos e Direito Penal. Mais de uma década dedicada à advocacia, com formação
              internacional na Argentina.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[{ n: "10+", l: "Anos de atuação" }, { n: "5", l: "Áreas de prática" }, { n: "2", l: "Pós-graduações" }].map((s) => (
                <div key={s.l} className="border-l border-gold/40 pl-4">
                  <div className="font-serif text-3xl text-gold">{s.n}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Experiência</span>
          <h2 className="font-serif text-4xl md:text-6xl mt-6 leading-tight">Uma trajetória de<br /><span className="italic text-gradient-gold">construção contínua.</span></h2>

          <div className="mt-20 relative">
            <div className="absolute left-0 md:left-32 top-2 bottom-2 w-px bg-gradient-to-b from-gold/60 via-border to-transparent" />
            <div className="space-y-12">
              {timeline.map((item) => (
                <div key={item.year} className="relative grid md:grid-cols-[8rem_1fr] gap-6 md:gap-12 pl-8 md:pl-0">
                  <div className="md:text-right">
                    <span className="text-xs uppercase tracking-[0.2em] text-gold">{item.year}</span>
                  </div>
                  <div className="absolute left-0 md:left-32 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-gold ring-4 ring-background" />
                  <div className="md:pl-8">
                    <h3 className="font-serif text-2xl text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-card/30 border-y border-border/50">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Pesquisa & Docência</span>
              <h3 className="font-serif text-3xl mt-6 mb-6">Áreas de pesquisa</h3>
              <ul className="space-y-3 text-muted-foreground">
                {["Direitos Humanos", "Novos Direitos", "Direitos Homoafetivos", "Direito Penal", "Crimes Informáticos"].map((t) => (
                  <li key={t} className="flex items-center gap-3"><span className="h-px w-6 bg-gold" /> {t}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Palestras & Trabalhos</span>
              <h3 className="font-serif text-3xl mt-6 mb-6">Expositor</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li>"Procriação assistida como exercício da homoparentalidade"</li>
                <li>"Direito Criminal e o sistema penitenciário cearense"</li>
                <li className="text-sm italic">Trabalho voluntário <em>pro bono</em> em Previdência Social para pessoas de baixa renda.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
