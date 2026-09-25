import { useMemo, useState } from 'react';

// Hero Quick Highlights
const heroHighlights = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
    title: 'Fácil de usar'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
        <line x1="1" y1="10" x2="23" y2="10"></line>
      </svg>
    ),
    title: 'Todos los medios de pago'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    ),
    title: 'Control total de tu negocio'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
      </svg>
    ),
    title: 'Soporte en tu idioma'
  }
];

// 6 Core Features & Benefits
const coreFeatures = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a77f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
    ),
    title: 'Ventas rápidas y fáciles',
    description: 'Interfaz ágil para vender, aplicar promociones y aceptar todos los medios de pago.'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a77f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
    title: 'Control de inventario',
    description: 'Gestiona tu stock en tiempo real, recibe alertas de productos de baja existencia.'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a77f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
    title: 'Facturación electrónica',
    description: 'Emite facturas, notas y documentos comerciales de forma rápida y segura.'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a77f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    ),
    title: 'Reportes en tiempo real',
    description: 'Conoce tus ventas, productos más vendidos y el desempeño de tu negocio al instante.'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a77f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    title: 'Clientes y caja',
    description: 'Administra clientes, controla tu caja y maneja múltiples usuarios con permisos.'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a77f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    ),
    title: 'Operación eficiente',
    description: 'Todo integrado en un solo sistema, accesible desde tu local o desde la nube.'
  }
];

// 4 Payment Highlights
const paymentFeatures = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a77f5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
        <line x1="1" y1="10" x2="23" y2="10"></line>
      </svg>
    ),
    title: 'Múltiples medios de pago',
    description: 'Efectivo, débito, transferencias, QR y mucho más.'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a77f5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    ),
    title: 'Transacciones seguras',
    description: 'Cobros confiables y registrados automáticamente.'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a77f5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    ),
    title: 'Control del recaudo',
    description: 'Consulta tus ventas y conciliaciones en tiempo real.'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a77f5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
    title: 'Proceso ágil y sin complicaciones',
    description: 'Una experiencia rápida tanto para tu equipo como para tus clientes.'
  }
];

// 4 Sectors
const sectors = [
  {
    src: './images/store-qr.webp',
    alt: 'Punto de venta y cobro en tiendas de barrio',
    width: 1289,
    height: 860,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a77f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
      </svg>
    ),
    title: 'Tiendas de barrio',
    description: 'Controla tus ventas, inventario y medios de pago fácilmente.'
  },
  {
    src: './images/store-owner.webp',
    alt: 'Administración y caja en minimercados',
    width: 1600,
    height: 1067,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a77f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
    title: 'Minimercados',
    description: 'Gestiona tu negocio de forma rápida, segura y ordenada.'
  },
  {
    src: './images/bakery-store.webp',
    alt: 'Operación ágil en panaderías y cafeterías',
    width: 1290,
    height: 860,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a77f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="12" rx="10" ry="6"></ellipse>
        <line x1="8" y1="10" x2="8.01" y2="10"></line>
        <line x1="12" y1="10" x2="12.01" y2="10"></line>
        <line x1="16" y1="10" x2="16.01" y2="10"></line>
      </svg>
    ),
    title: 'Panaderías',
    description: 'Lleva el control de tus ventas e inventario en un solo lugar.'
  },
  {
    src: './images/cashier-retail.webp',
    alt: 'Cajero atendiendo en comercio minorista y retail',
    width: 1289,
    height: 860,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a77f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
    ),
    title: 'Retail y otros comercios',
    description: 'Una solución completa y flexible para todo tipo de negocios.'
  }
];

// FAQs for SEO Schema.org match
const faqs = [
  {
    question: '¿Qué tipos de negocios pueden utilizar EMAUS POS?',
    answer: 'EMAUS POS está diseñado para tiendas, minimercados, panaderías, cafeterías, droguerías y comercios minoristas que requieren agilidad en el cobro y control de inventario.'
  },
  {
    question: '¿Qué medios de pago admite el sistema?',
    answer: 'Permite registrar cobros en efectivo, tarjetas de débito y crédito, transferencias bancarias, códigos QR interoperables Bre-B y billeteras digitales con registro de referencia.'
  },
  {
    question: '¿Funciona en pantallas táctiles y computadores convencionales?',
    answer: 'Sí, la interfaz se adapta tanto a monitores táctiles como a computadores con teclado y lector de código de barras para una atención fluida.'
  },
  {
    question: '¿Cómo puedo solicitar una demostración?',
    answer: 'Puedes solicitar una demostración personalizada haciendo clic en el botón "Solicitar demostración" o contactándonos a través de WhatsApp.'
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const demoUrl = useMemo(() => import.meta.env.VITE_DEMO_URL || 'https://centrivosoft.com/', []);
  const whatsapp = useMemo(() => (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, ''), []);
  const whatsappUrl = whatsapp ? `https://wa.me/${whatsapp}?text=${encodeURIComponent('Hola, quiero conocer EMAUS POS.')}` : null;

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-wrapper">
      <a className="skip-link" href="#contenido">Saltar al contenido principal</a>

      {/* Header */}
      <header className="site-header" role="banner">
        <div className="container nav-shell">
          <a className="brand" href="#inicio" aria-label="EMAUS POS de centrivosoft.com - Inicio">
            <img
              src="./images/emaus-header-brand.webp"
              width="240"
              height="55"
              alt="EMAUS POS - de centrivosoft.com"
              className="brand-main-logo"
              loading="eager"
            />
          </a>

          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label={menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">{menuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
            <span></span><span></span><span></span>
          </button>

          <nav id="main-nav" className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegación principal">
            <a href="#inicio" className="nav-link active" onClick={closeMenu}>
              <span>Inicio</span>
              <span className="nav-active-pill" aria-hidden="true"></span>
            </a>
            <a href="#funcionalidades" className="nav-link" onClick={closeMenu}>Funcionalidades</a>
            <a href="#pagos" className="nav-link" onClick={closeMenu}>Medios de Pago</a>
            <a href="#sectores" className="nav-link" onClick={closeMenu}>Sectores</a>
            <a href="#faq" className="nav-link" onClick={closeMenu}>Preguntas</a>
            <a className="nav-cta" href={demoUrl} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>Solicitar demostración</span>
              <span className="cta-arrow">→</span>
            </a>
          </nav>
        </div>
      </header>

      <main id="contenido">
        {/* HERO SECTION */}
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="section-eyebrow">
                <span className="eyebrow-dash"></span>
                <span>SISTEMA POS PARA TU NEGOCIO</span>
              </div>
              <h1 className="hero-heading">
                <span className="hero-brand-name">EMAUS</span>
                <span className="hero-tagline">
                  Ventas, facturación,<br />
                  <em className="accent-blue">control e inventario</em>
                </span>
              </h1>
              <p className="hero-lead">
                Impulsa tu negocio con un sistema POS completo, fácil de usar y diseñado para el crecimiento de comercios como el tuyo. Gestiona tus ventas, controla tu inventario, factura y acepta todos los medios de pago, desde un solo lugar.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <span className="play-icon">▶</span>
                  <span>Solicitar demostración</span>
                </a>
                <a className="btn btn-outline" href="#funcionalidades">
                  <span>Conocer más</span>
                  <span>→</span>
                </a>
              </div>

              {/* 4 Feature Highlights */}
              <div className="hero-highlights-grid" aria-label="Ventajas principales de EMAUS POS">
                {heroHighlights.map((item) => (
                  <div className="highlight-pill" key={item.title}>
                    <div className="highlight-icon-box">{item.icon}</div>
                    <span className="highlight-title">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual Composition Mockup */}
            <div className="hero-visual" aria-label="Vista real de la interfaz y operación de EMAUS POS">
              <div className="hero-visual-container">
                <img
                  src="./images/hero-pos-visual.webp"
                  width="664"
                  height="536"
                  alt="Sistema de punto de venta EMAUS POS con comerciantes, monitor de ventas, escáner y ventana de cobro"
                  fetchpriority="high"
                  className="hero-main-composition"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: FUNCIONALIDADES Y BENEFICIOS */}
        <section className="section features-section" id="funcionalidades">
          <div className="container">
            <div className="section-header-compact">
              <div className="section-eyebrow">
                <span className="eyebrow-dash"></span>
                <span>FUNCIONALIDADES Y BENEFICIOS</span>
              </div>
              <h2 className="section-heading">
                Un negocio más simple <span className="accent-blue">con EMAUS</span>
              </h2>
              <p className="section-subtext">
                EMAUS de centrivosoft.com te da todo lo que necesitas para operar, controlar tu inventario, vender y facturar desde un solo lugar, con una interfaz moderna, fácil de usar y pensada para hacer crecer tu negocio.
              </p>
            </div>

            <div className="features-showcase-grid">
              <div className="features-cards-col">
                <div className="features-grid">
                  {coreFeatures.map((feat) => (
                    <article className="feature-card-item" key={feat.title}>
                      <div className="feature-icon-wrapper">{feat.icon}</div>
                      <div className="feature-card-body">
                        <h3 className="feature-item-title">{feat.title}</h3>
                        <p className="feature-item-desc">{feat.description}</p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="features-bottom-action">
                  <a className="btn btn-primary btn-pill" href={demoUrl} target="_blank" rel="noopener noreferrer">
                    <span className="play-icon">▶</span>
                    <span>Ver funcionalidades</span>
                    <span>→</span>
                  </a>
                  <div className="provider-badge">
                    <span className="provider-lead">Un producto de <strong>centrivosoft.com</strong></span>
                    <span className="provider-tag">SOLUCIONES TECNOLÓGICAS PARA TU NEGOCIO</span>
                  </div>
                </div>
              </div>

              {/* Visual Showcase Right */}
              <div className="features-visual-col">
                <div className="features-screen-wrap">
                  <img
                    src="./images/funcionalidades-showcase.webp"
                    width="534"
                    height="500"
                    alt="Catálogo, gestión en local y en la nube con EMAUS POS"
                    loading="lazy"
                    decoding="async"
                    className="features-showcase-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: MEDIOS DE PAGO Y COBRO */}
        <section className="section payment-section" id="pagos">
          <div className="container">
            <div className="payment-showcase-grid">
              <div className="payment-copy-col">
                <div className="section-eyebrow">
                  <span className="eyebrow-dash"></span>
                  <span>MEDIOS DE PAGO Y COBRO</span>
                </div>
                <h2 className="section-heading">
                  Todos los medios de pago <span className="accent-blue">en un solo lugar</span>
                </h2>
                <p className="section-subtext">
                  Acepta efectivo, débito, transferencias, QR y más, desde una interfaz simple y segura. Centraliza tus cobros, agiliza la atención y mantén un control total del recaudo en tiempo real.
                </p>

                <div className="payment-features-grid">
                  {paymentFeatures.map((item) => (
                    <article className="payment-feature-card" key={item.title}>
                      <div className="payment-icon-box">{item.icon}</div>
                      <div>
                        <h3 className="payment-feat-title">{item.title}</h3>
                        <p className="payment-feat-desc">{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="payment-actions">
                  <a className="btn btn-primary" href={demoUrl} target="_blank" rel="noopener noreferrer">
                    <span className="play-icon">▶</span>
                    <span>Solicitar demostración</span>
                  </a>
                  <a className="btn btn-outline" href="#sectores">
                    <span>Conocer más</span>
                    <span>→</span>
                  </a>
                </div>

                <div className="payment-bottom-tag">
                  <span>EMAUS POS — DE CENTRIVOSOFT.COM</span>
                </div>
              </div>

              {/* Payment Visual Simulation Screen */}
              <div className="payment-visual-col">
                <div className="payment-screen-frame">
                  <img
                    src="./images/pagos-showcase.webp"
                    width="684"
                    height="536"
                    alt="Ventana de cobro y registro de medios de pago en EMAUS POS"
                    loading="lazy"
                    decoding="async"
                    className="payment-showcase-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: SECTORES */}
        <section className="section sectors-section" id="sectores">
          <div className="container">
            <div className="section-header-compact centered">
              <div className="section-eyebrow">
                <span className="eyebrow-dash"></span>
                <span>SECTORES</span>
              </div>
              <h2 className="section-heading">
                Soluciones <span className="accent-blue">para cada sector</span>
              </h2>
              <p className="section-subtext">
                EMAUS se adapta a las necesidades de tu negocio, sin importar su tamaño. Miles de comercios ya gestionan sus ventas, inventario y facturación con nosotros.
              </p>
            </div>

            <div className="sectors-grid">
              {sectors.map((sec) => (
                <article className="sector-card" key={sec.title}>
                  <div className="sector-image-wrap">
                    <img
                      src={sec.src}
                      alt={sec.alt}
                      width={sec.width}
                      height={sec.height}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="sector-card-body">
                    <div className="sector-header-row">
                      <div className="sector-icon-box">{sec.icon}</div>
                      <a className="sector-arrow-btn" href={demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Solicitar demo para ${sec.title}`}>
                        →
                      </a>
                    </div>
                    <h3 className="sector-title">{sec.title}</h3>
                    <p className="sector-desc">{sec.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: PREGUNTAS FRECUENTES (SEO FAQPage) */}
        <section className="section faq-section" id="faq">
          <div className="container">
            <div className="section-header-compact centered">
              <div className="section-eyebrow">
                <span className="eyebrow-dash"></span>
                <span>PREGUNTAS FRECUENTES</span>
              </div>
              <h2 className="section-heading">
                Resolvemos <span className="accent-blue">tus dudas</span>
              </h2>
              <p className="section-subtext">
                Todo lo que necesitas saber antes de implementar EMAUS POS en tu punto de venta.
              </p>
            </div>

            <div className="faq-grid">
              {faqs.map((faq, index) => (
                <details className="faq-item" key={faq.question} open={index === 0}>
                  <summary className="faq-question">
                    <span>{faq.question}</span>
                    <span className="faq-arrow" aria-hidden="true">▾</span>
                  </summary>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: FINAL CTA BOX */}
        <section className="section cta-section" id="contacto">
          <div className="container">
            <div className="cta-box-card">
              <div className="cta-box-content">
                <div className="section-eyebrow light">
                  <span className="eyebrow-dash light"></span>
                  <span>DA EL SIGUIENTE PASO</span>
                </div>
                <h2 className="cta-box-heading">¿Listo para empezar con EMAUS?</h2>
                <p className="cta-box-lead">
                  Únete a los comercios que ya están creciendo con EMAUS. Solicita una demostración y descubre cómo simplificar la gestión de tu negocio desde un solo lugar.
                </p>

                <div className="cta-box-actions">
                  <a className="btn btn-primary btn-large" href={demoUrl} target="_blank" rel="noopener noreferrer">
                    <span className="play-icon">▶</span>
                    <span>Solicitar demostración</span>
                    <span>→</span>
                  </a>
                  {whatsappUrl && (
                    <a className="btn btn-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <span>Hablar por WhatsApp</span>
                    </a>
                  )}
                </div>

                <div className="cta-perks-row">
                  <div className="perk-item">
                    <span className="perk-icon">⚡</span>
                    <span>Rápido y sin compromiso</span>
                  </div>
                  <div className="perk-item">
                    <span className="perk-icon">👤</span>
                    <span>Asesoría personalizada</span>
                  </div>
                  <div className="perk-item">
                    <span className="perk-icon">📊</span>
                    <span>Conoce todas las funcionalidades</span>
                  </div>
                </div>
              </div>

              <div className="cta-box-visual" aria-hidden="true">
                <img
                  src="./images/product-grid.webp"
                  width="1294"
                  height="809"
                  alt="Vista del sistema EMAUS POS"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer" role="contentinfo">
        <div className="container footer-shell">
          <div className="footer-left">
            <div className="brand footer-brand">
              <svg className="brand-svg-icon" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="2" y="2" width="38" height="26" rx="5" stroke="#0a77f5" strokeWidth="3" fill="#eaf3ff"/>
                <path d="M12 12h18M12 18h12" stroke="#0a77f5" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M16 28l-4 8h20l-4-8" fill="#082347"/>
                <path d="M10 36h24" stroke="#082347" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="37" cy="11" r="7" fill="#0a77f5"/>
                <path d="M34 11l2 2 4-4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="brand-text">
                <span className="brand-title"><strong>EMAUS</strong></span>
                <span className="brand-sub">Un software de centrivosoft.com</span>
              </div>
            </div>
          </div>

          <div className="footer-center">
            <span className="footer-tagline">— Impulsando comercios más eficientes</span>
          </div>

          <div className="footer-right">
            <span className="copyright-text">© {new Date().getFullYear()} centrivosoft.com · Todos los derechos reservados</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
