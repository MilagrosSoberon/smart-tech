const FACEBOOK_URL = "https://facebook.com/share/1JcwmPBJfV/?mibextid=wwXlfr";

const formats = [
  {
    number: "01",
    type: "Web catálogo",
    title: "Tu negocio, bien presentado",
    description:
      "Una landing para promocionar tu negocio con secciones de nosotros, servicios, una selección de productos y contacto. Ideal para profesionales y comercios que necesitan una presencia clara y confiable.",
    detail: "Nosotros · Servicios · Productos · Contacto",
    image: "/images/formato-catalogo.jpg",
    demo: "https://dra-cc.vercel.app/",
    id: "catalog",
  },
  {
    number: "02",
    type: "Landing portfolio",
    title: "Tu experiencia, en un solo lugar",
    description:
      "Un portfolio profesional para quienes buscan empleo y quieren mostrar sus proyectos, formación académica, medios de contacto y un CV listo para descargar.",
    detail: "Sobre mí · Formación · Experiencia · Habilidades · Proyectos · Contacto · CV",
    image: "/images/formato-portfolio.jpg",
    demo: "https://portfolio-web-delta-gilt.vercel.app/",
    id: "portfolio",
  },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function Logo({ light = false }) {
  return (
    <a
      href="#inicio"
      aria-label="sMART Tech, inicio"
      className="inline-flex items-center gap-2"
      style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.04em" }}
    >
      <span
        className="block overflow-hidden relative shrink-0"
        style={{ width: 44, height: 42, background: light ? "transparent" : "white", borderRadius: light ? 8 : 0 }}
        aria-hidden="true"
      >
        <img
          src="/images/logo.jpg"
          alt=""
          className="absolute"
          style={{ width: 229, height: "auto", left: -94, top: -31, maxWidth: "none" }}
        />
      </span>
      <span
        style={{
          color: light ? "white" : "#405568",
          fontSize: 15,
          letterSpacing: "0.02em",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        <b style={{ color: light ? "white" : "#2e7b9c", fontWeight: 700 }}>sMART</b> TECH
      </span>
    </a>
  );
}

export default function App() {
  return (
    <main>
      {/* ── HEADER ── */}
      <header
        style={{ borderBottom: "1px solid #d7dde3" }}
        className="sticky top-0 z-50 bg-[#f7f8f9]"
      >
        <div className="mx-auto flex h-[78px] max-w-[1240px] items-center justify-between px-5 md:h-[94px] md:px-[30px]">
          <Logo />
          <nav className="flex items-center gap-5 text-[13px] md:gap-[38px]">
            <a
              href="#formatos"
              className="relative hidden after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#1659f5] after:transition-transform after:duration-180 hover:after:scale-x-100 sm:block"
            >
              Formatos
            </a>
            <a
              href="#como-funciona"
              className="relative hidden after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#1659f5] after:transition-transform after:duration-180 hover:after:scale-x-100 sm:block"
            >
              Cómo funciona
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-full bg-[#152331] px-[14px] py-[11px] text-white transition-colors duration-180 hover:bg-[#1659f5] md:gap-[26px] md:px-[17px] md:py-[13px]"
            >
              Hablemos <ArrowIcon />
            </a>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section
        id="inicio"
        className="mx-auto grid max-w-[1240px] min-h-[calc(100vh-78px)] px-5 pb-8 pt-12 md:min-h-[calc(100vh-94px)] md:grid-cols-[1fr_minmax(390px,0.88fr)] md:px-[30px] md:pt-[76px]"
      >
        {/* copy */}
        <div className="flex flex-col justify-center pb-0 md:pb-20">
          <div className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.18em] text-[#687684]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1659f5]" />
            TU WEB PROFESIONAL, SIN COMPLICACIONES
          </div>
          <h1
            className="my-6 leading-[0.98] md:my-[30px]"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 500,
              letterSpacing: "-0.065em",
              fontSize: "clamp(52px, 8vw, 94px)",
            }}
          >
            Elegí. Cargá.
            <br />
            Salí <em className="text-[#1659f5]">online.</em>
          </h1>
          <p className="text-[16px] leading-[1.65] text-[#687684] md:max-w-[495px] md:text-[18px]">
            Dos formatos simples y listos para activar: una web catálogo para tu negocio
            o un portfolio para impulsar tu carrera.
          </p>
          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-[30px] md:mt-[38px]">
            <a
              href="#formatos"
              className="inline-flex min-w-[190px] items-center justify-between gap-8 rounded-full bg-[#1659f5] px-[19px] py-[16px] text-[14px] font-medium text-white transition-transform duration-180 hover:-translate-y-1 hover:bg-[#0b47d4]"
            >
              Ver formatos <ArrowIcon />
            </a>
            <a
              href="#como-funciona"
              className="border-b border-[#9aa5af] pb-[5px] text-[13px] text-[#152331]"
            >
              Cómo funciona <span className="ml-1.5 text-[#1659f5]">↓</span>
            </a>
          </div>
        </div>

        {/* visual */}
        <div
          className="relative mx-auto mt-10 flex w-full max-w-[500px] items-center self-center md:mt-0 md:max-w-none"
          style={{ height: "clamp(340px, 45vw, 540px)" }}
          aria-hidden="true"
        >
          {/* orbits */}
          <div
            className="absolute rounded-full border border-[#d9dfe5]"
            style={{ width: "min(440px,88%)", height: "min(440px,88%)", top: "6%", left: "6%" }}
          />
          <div
            className="absolute rounded-full border border-[#d9dfe5]"
            style={{ width: "min(330px,66%)", height: "min(330px,66%)", top: "18%", left: "18%" }}
          />
          {/* card back */}
          <div
            className="absolute rounded-sm bg-[#b7c2cb] text-white"
            style={{
              width: "min(210px,42%)",
              height: "min(280px,56%)",
              left: "3%",
              top: "8%",
              transform: "rotate(-8deg)",
              padding: "clamp(16px,3%,27px)",
              boxShadow: "0 28px 70px rgba(21,35,49,.15)",
            }}
          >
            <p className="text-[8px] tracking-[0.2em]">PORTFOLIO</p>
            <p
              className="absolute bottom-6 left-6 leading-[1.05]"
              style={{ fontFamily: "Manrope, sans-serif", fontWeight: 500, fontSize: "clamp(18px,4%,28px)", letterSpacing: "-0.05em" }}
            >
              Tu perfil.
              <br />
              Más profesional.
            </p>
          </div>
          {/* card front */}
          <div
            className="absolute overflow-hidden rounded-sm bg-white"
            style={{
              width: "min(330px,66%)",
              height: "min(352px,70%)",
              left: "27%",
              top: "18%",
              transform: "rotate(4deg)",
              boxShadow: "0 28px 70px rgba(21,35,49,.15)",
            }}
          >
            <div className="flex h-6 items-center gap-1.5 bg-[#e9edf1] px-2.5">
              {[0, 1, 2].map((i) => (
                <span key={i} className="h-1 w-1 rounded-full bg-[#b8c0c8]" />
              ))}
            </div>
            <div className="flex justify-between p-[18px] text-[8px]">
              <b>sMART</b>
              <span>CATÁLOGO</span>
            </div>
            <div className="relative z-10 flex flex-col px-5 py-4">
              <small className="text-[7px] tracking-[0.16em] text-[#1659f5]">LISTO PARA PUBLICAR</small>
              <strong
                className="mt-2 leading-[1.05]"
                style={{ fontFamily: "Manrope, sans-serif", fontSize: "clamp(18px,5%,27px)", letterSpacing: "-0.06em" }}
              >
                Tu negocio.
                <br />
                Bien visible.
              </strong>
              <span className="mt-4 w-fit border-b border-[#a4adb5] pb-1 text-[8px]">
                Conocer formato →
              </span>
            </div>
            <div
              className="absolute bg-[#1659f5]"
              style={{
                width: "min(175px,53%)",
                height: "min(220px,62%)",
                borderRadius: "50% 50% 0 0",
                bottom: "-90px",
                right: "-47px",
                transform: "rotate(-25deg)",
              }}
            />
          </div>
          {/* floating pill */}
          <div
            className="absolute bg-white text-[10px]"
            style={{
              padding: "13px 18px",
              boxShadow: "0 15px 40px rgba(21,35,49,.12)",
              transform: "rotate(-5deg)",
              bottom: "8%",
              left: "10%",
            }}
          >
            Contenido editable
          </div>
          {/* dot */}
          <div
            className="absolute h-4 w-4 rounded-full bg-[#1659f5]"
            style={{ top: "10%", right: "5%" }}
          />
        </div>

        {/* foot */}
        <div className="hidden items-end justify-between md:col-span-2 md:flex">
          <span className="text-[9px] tracking-[0.18em] text-[#8d98a2]">01 — SIMPLE Y RÁPIDO</span>
          <p className="text-right text-[12px] leading-[1.45] text-[#152331]" style={{ width: 250 }}>
            Cargás tu información.
            <br />
            Nosotros hacemos el resto.
          </p>
        </div>
      </section>

      {/* ── FORMATOS INTRO ── */}
      <section
        id="formatos"
        className="bg-[#152331] text-white"
        style={{ padding: "85px max(20px, calc((100vw - 1180px) / 2)) 80px" }}
      >
        <div className="grid gap-10 md:grid-cols-[0.55fr_1fr] md:gap-20">
          <p className="pt-3 text-[10px] font-semibold tracking-[0.18em] text-[#7f8f9e]">
            DOS FORMATOS. UNA DECISIÓN SIMPLE.
          </p>
          <div>
            <h2
              className="leading-[0.98]"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 500,
                letterSpacing: "-0.065em",
                fontSize: "clamp(42px, 5.5vw, 76px)",
              }}
            >
              Elegí la web que
              <br />
              <em className="text-[#1659f5]">necesitás.</em>
            </h2>
            <p className="mt-8 text-[16px] leading-[1.7] text-[#99a7b4] md:max-w-[500px]">
              Trabajamos con formatos definidos para entregar más rápido, mantener un diseño
              profesional y hacer que cargar tu contenido sea muy fácil.
            </p>
          </div>
        </div>
      </section>

      {/* ── FORMATOS ── */}
      <section className="bg-[#152331] text-white pb-16 md:pb-[110px]">
        {formats.map((fmt, index) => (
          <article
            key={fmt.id}
            className={`mx-auto grid max-w-[1240px] items-center gap-10 px-5 py-10 md:gap-[clamp(60px,8vw,125px)] md:px-[30px] md:py-[65px] ${
              index % 2 === 1 ? "md:grid-cols-[minmax(300px,0.75fr)_minmax(0,1.15fr)]" : "md:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.75fr)]"
            }`}
          >
            {/* visual */}
            <div
              className={`relative flex aspect-[1.16/1] items-center justify-center rounded-sm ${
                index % 2 === 1 ? "md:order-2" : ""
              }`}
              style={{ background: index === 0 ? "#c9dce0" : "#c9c3d8" }}
            >
              <span className="absolute left-5 top-[18px] z-10 text-[8px] tracking-[0.18em] text-[rgba(21,35,49,0.6)]">
                {fmt.number}
              </span>
              {/* imagen real */}
              <img
                src={fmt.image}
                alt={`Vista previa formato ${fmt.type}`}
                className="w-[82%] shadow-[0_28px_55px_rgba(15,28,40,0.22)]"
                style={{ transform: index % 2 === 0 ? "rotate(-5deg)" : "rotate(5deg)" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextSibling.style.display = "flex";
                }}
              />
              {/* fallback si no hay imagen */}
              <div className="absolute inset-0 hidden items-center justify-center text-[rgba(21,35,49,0.4)] text-sm">
                Imagen próximamente
              </div>
              <span className="absolute bottom-[17px] right-5 z-10 text-[8px] tracking-[0.18em] text-[rgba(21,35,49,0.6)]">
                sMART TECH — FORMATO WEB
              </span>
            </div>

            {/* copy */}
            <div className={`max-w-[390px] ${index % 2 === 1 ? "md:order-1" : ""}`}>
              <span className="text-[9px] font-semibold tracking-[0.18em] text-[#7b8c9b] uppercase">
                {fmt.type}
              </span>
              <h3
                className="my-4 leading-[0.98] md:my-[16px]"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 500,
                  letterSpacing: "-0.06em",
                  fontSize: "clamp(32px, 4vw, 56px)",
                }}
              >
                {fmt.title}
              </h3>
              <p className="text-[15px] leading-[1.75] text-[#a5b0ba]">{fmt.description}</p>
              <div
                className="my-7 border-y border-[#384957] py-[15px] text-[9px] tracking-[0.1em] text-[#798b99] uppercase"
              >
                {fmt.detail}
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href={fmt.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-7 rounded-full border border-white/30 px-5 py-3 text-[13px] text-white transition-colors hover:border-white hover:text-white"
                >
                  Ver ejemplo en vivo <ArrowIcon />
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-7 rounded-full text-[13px] text-[#7b8c9b] transition-colors hover:text-[#1659f5]"
                >
                  Consultar por este formato <ArrowIcon />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ── CÓMO FUNCIONA ── */}
      <section
        id="como-funciona"
        className="mx-auto grid max-w-[1240px] gap-14 px-5 py-20 md:grid-cols-[0.8fr_1.2fr] md:gap-[90px] md:px-[30px] md:py-[130px]"
      >
        <div>
          <span className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.18em] text-[#687684]">
            ASÍ DE SIMPLE
          </span>
          <h2
            className="mt-7 leading-[0.98]"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 500,
              letterSpacing: "-0.065em",
              fontSize: "clamp(42px, 5vw, 68px)",
            }}
          >
            Tu web lista
            <br />
            en poco <em className="text-[#1659f5]">tiempo.</em>
          </h2>
          <p className="mt-7 max-w-[390px] text-[15px] leading-[1.7] text-[#687684]">
            Sin procesos largos: elegís una opción, completás tus datos y activamos tu sitio.
          </p>
        </div>

        <div>
          {[
            {
              n: "01",
              title: "Elegí tu formato",
              desc: "Catálogo para tu negocio o portfolio para tu perfil profesional.",
              highlight: false,
            },
            {
              n: "02",
              title: "Cargá tu información",
              desc: "Te damos un archivo simple para completar textos, enlaces, proyectos y datos.",
              highlight: false,
            },
            {
              n: "03",
              title: "Publicamos tu web",
              desc: "Integramos el contenido y dejamos todo listo para compartir en poco tiempo.",
              highlight: false,
            },
            {
              n: "+",
              title: "Actualizala cuando quieras",
              desc: "Modificás el mismo archivo y los cambios se reflejan rápidamente en tu web.",
              highlight: true,
            },
          ].map((step) => (
            <div
              key={step.n}
              className={`${
                step.highlight
                  ? "rounded-[18px] bg-[#eef5ff] px-6 py-7"
                  : "border-t border-[#d7dde3] py-8"
              } grid gap-4 md:grid-cols-[35px_1fr_1.2fr] md:gap-6`}
            >
              {step.highlight ? (
                <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#1659f5] text-[10px] font-semibold text-white">
                  {step.n}
                </span>
              ) : (
                <span className="text-[10px] font-semibold text-[#1659f5]">{step.n}</span>
              )}
              <h3
                className="text-[17px] font-semibold leading-snug"
                style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.03em" }}
              >
                {step.title}
              </h3>
              <p className="text-[13px] leading-[1.6] text-[#687684] md:col-start-2 md:col-end-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section
        id="contacto"
        className="relative min-h-[690px] overflow-hidden bg-[#1659f5] text-white md:min-h-[720px]"
        style={{ padding: "42px max(20px, calc((100vw - 1180px) / 2)) 24px" }}
      >
        {/* glow rings */}
        <div
          className="pointer-events-none absolute"
          style={{
            border: "1px solid rgba(255,255,255,.2)",
            borderRadius: "50%",
            width: 780,
            height: 780,
            left: "50%",
            top: 0,
            transform: "translate(-10%, -22%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              border: "1px solid rgba(255,255,255,.14)",
              borderRadius: "inherit",
              inset: 80,
            }}
          />
        </div>

        <Logo light />

        <div className="relative z-10 mx-auto max-w-[780px] py-28 text-center md:py-[125px]">
          <span className="text-[10px] tracking-[0.2em]">¿LISTO PARA ESTAR ONLINE?</span>
          <h2
            className="my-6 leading-[0.98] md:my-[25px]"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 500,
              letterSpacing: "-0.065em",
              fontSize: "clamp(52px, 7vw, 94px)",
            }}
          >
            Elegí tu formato.
            <br />
            <em className="text-white">Empecemos.</em>
          </h2>
          <p className="mx-auto mb-8 max-w-[475px] text-[16px] leading-[1.7] text-[#cbd9ff]">
            Escribinos por Facebook y te contamos cuál de las dos opciones se adapta mejor a
            lo que necesitás.
          </p>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-w-[235px] items-center justify-between gap-8 rounded-full bg-white px-[19px] py-[16px] text-[14px] font-medium text-[#1659f5] transition-colors duration-180 hover:bg-[#152331] hover:text-white"
          >
            Escribinos por Facebook <ArrowIcon />
          </a>
        </div>

        {/* footer */}
        <footer className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(calc(100%-40px),1180px)] border-t border-white/30 py-[22px]">
          <div className="flex flex-col gap-3 text-[10px] tracking-[0.06em] sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} sMART Tech</span>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Facebook <ArrowIcon />
            </a>
            <span>Tu web profesional. Simple y rápida.</span>
          </div>
        </footer>
      </section>
    </main>
  );
}
