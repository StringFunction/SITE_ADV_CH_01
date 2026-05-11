import { Link } from "react-router-dom";
import portrait from "../assets/charles-portrait.jpg";
import heroBg from "../assets/hero-bg.jpg";

const areas = [
  { num: "01", title: "Direito de Família", desc: "Divórcios, guarda, pensão alimentícia, inventários e questões sucessórias conduzidas com discrição e sensibilidade." },
  { num: "02", title: "Previdenciário", desc: "Aposentadorias, benefícios por incapacidade, revisões e planejamento previdenciário estratégico." },
  { num: "03", title: "Trabalhista", desc: "Defesa de direitos do trabalhador e assessoria empresarial em contencioso trabalhista." },
  { num: "04", title: "Empresarial", desc: "Consultoria jurídica para empresas, contratos, governança e gestão de riscos." },
  { num: "05", title: "Criminal", desc: "Defesa criminal especializada em todas as fases do processo, com atuação em crimes informáticos." },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-7 z-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Charles Siqueira Advocacia</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground">
              Cada caso<br />é uma <span className="italic text-gradient-gold">história.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Mais de uma década conduzindo pessoalmente os casos mais sensíveis,
              onde técnica jurídica e atenção humana caminham lado a lado.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link to="/contato" className="px-8 py-4 bg-gold text-primary-foreground text-xs uppercase tracking-[0.25em] hover:bg-gold-muted transition-all">Agendar Consulta</Link>
              <Link to="/sobre" className="px-8 py-4 border border-border text-xs uppercase tracking-[0.25em] text-foreground hover:border-gold hover:text-gold transition-all">Conheça o Escritório</Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute -inset-4 border border-gold/30" />
              <div className="absolute inset-0 overflow-hidden">
                <img src={portrait} alt="Dr. Charles Siqueira" className="w-full h-full object-cover grayscale-[20%]" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background border border-gold/40 px-6 py-4">
                <div className="text-xs uppercase tracking-[0.2em] text-gold">Dr. Charles Siqueira</div>
                <div className="text-xs text-muted-foreground mt-1">Advogado · OAB/CE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Biografia</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-6 leading-tight">Convicção e<br /><span className="italic text-gradient-gold">precisão.</span></h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>Advogado com atuação consolidada em direito previdenciário, empresarial e criminal, <span className="text-foreground">Charles Siqueira</span> fundou o escritório com a convicção de que cada caso é uma história — e merece ser tratado como tal.</p>
            <p>Pós-graduado em Direito e com mais de uma década de experiência em contencioso e consultoria, conduz pessoalmente os casos mais sensíveis do escritório, garantindo que técnica e atenção caminhem lado a lado.</p>
            <p>A atuação combina a precisão do conhecimento jurídico com a sensibilidade necessária para compreender o impacto humano e econômico de cada decisão.</p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-card/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Atuação</span>
              <h2 className="font-serif text-4xl md:text-6xl mt-6 leading-tight">Áreas de <span className="italic text-gradient-gold">atendimento</span></h2>
            </div>
            <p className="text-muted-foreground max-w-md">Cinco frentes de atuação consolidadas, conduzidas com o mesmo compromisso de dedicação técnica e proximidade humana.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {areas.map((area) => (
              <div key={area.num} className="group bg-background p-10 lg:p-12 hover:bg-card transition-all duration-500">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-serif text-5xl text-gold/40 group-hover:text-gold transition-colors">{area.num}</span>
                  <span className="h-px flex-1 bg-border group-hover:bg-gold/40 transition-colors" />
                </div>
                <h3 className="font-serif text-2xl mb-4 text-foreground">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
              </div>
            ))}
            <div className="bg-background p-10 lg:p-12 flex flex-col justify-center">
              <p className="font-serif text-2xl italic text-gradient-gold leading-tight mb-6">"Técnica e atenção, lado a lado."</p>
              <Link to="/contato" className="text-xs uppercase tracking-[0.25em] text-gold inline-flex items-center gap-2 group">
                Iniciar atendimento <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Sua causa</span>
          <h2 className="font-serif text-4xl md:text-6xl mt-6 leading-tight">Pronto para conversar<br />sobre o seu <span className="italic text-gradient-gold">caso?</span></h2>
          <p className="mt-8 text-muted-foreground max-w-xl mx-auto">O primeiro contato é uma escuta. Conte sua história e vamos avaliar juntos os caminhos jurídicos mais adequados.</p>
          <div className="mt-12">
            <Link to="/contato" className="inline-flex px-10 py-4 bg-gold text-primary-foreground text-xs uppercase tracking-[0.25em] hover:bg-gold-muted transition-all">Falar com Dr. Charles</Link>
          </div>
        </div>
      </section>
    </>
  );
}
