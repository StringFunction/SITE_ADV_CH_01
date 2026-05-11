import { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const nav = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span className="text-gold font-serif text-2xl tracking-wider">CS</span>
            <div className="hidden sm:block h-8 w-px bg-border" />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-serif text-base text-foreground">Charles Siqueira</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Advocacia</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {nav.map((item) => {
              const active = pathname === item.to;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="relative text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className={active ? "text-foreground" : ""}>{item.label}</span>
                  {active && <span className="absolute -bottom-2 left-0 right-0 h-px bg-gold" />}
                </NavLink>
              );
            })}
            <Link
              to="/contato"
              className="ml-4 px-5 py-2.5 text-xs uppercase tracking-[0.2em] border border-gold text-gold hover:bg-gold hover:text-primary-foreground transition-all"
            >
              Agendar Consulta
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground p-2"
            aria-label="Menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`h-px bg-current transition-transform ${open ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`h-px bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-px bg-current transition-transform ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-border bg-background/95">
            <div className="px-6 py-6 flex flex-col gap-4">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      <footer className="border-t border-border/50 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-8 text-sm text-muted-foreground">
          <div>
            <div className="font-serif text-foreground text-lg">Charles Siqueira Advocacia</div>
            <p className="mt-2 text-xs">OAB/CE — Fortaleza, Ceará</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold mb-2">Contato</div>
            <p>contato@charlessiqueira.adv.br</p>
            <p>+55 (85) 99999-9999</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold mb-2">Áreas</div>
            <p>Família · Previdenciário · Trabalhista</p>
            <p>Empresarial · Criminal</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-8 pt-6 border-t border-border/30 text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} Charles Siqueira Advocacia. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
