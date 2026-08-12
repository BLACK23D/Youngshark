"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Blocks,
  Bot,
  BrainCircuit,
  Check,
  CloudCog,
  Code2,
  Database,
  Globe2,
  Layers3,
  Linkedin,
  Menu,
  Network,
  Phone,
  Radar,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { TubesCursor } from "@/components/TubesCursor";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Solutions", href: "#solutions" },
  { label: "Labs", href: "#labs" },
  { label: "Approach", href: "#approach" },
];

const capabilities = [
  [
    "AI & Intelligent Automation",
    "Production-grade AI systems, copilots and workflows that turn repetitive operations into dependable intelligence.",
    BrainCircuit,
  ],
  [
    "Digital Product Engineering",
    "Web, mobile and enterprise products engineered from first prototype to resilient, scalable platform.",
    Code2,
  ],
  [
    "Product Design & Experience",
    "Research-led interfaces and design systems that make sophisticated technology clear, useful and human.",
    Layers3,
  ],
  [
    "Cloud, DevOps & Platforms",
    "Secure cloud foundations, delivery pipelines and platform architecture designed for speed without fragility.",
    CloudCog,
  ],
  [
    "Data & Intelligence",
    "Connected data platforms, analytics and decision systems that convert signals into actionable insight.",
    Database,
  ],
  [
    "Digital Trust & Cybersecurity",
    "Security-by-design across identity, applications, infrastructure and the software delivery lifecycle.",
    ShieldCheck,
  ],
] as const;

const solutions = [
  [
    "YS Launch",
    "From validated opportunity to production-ready digital product.",
    Zap,
  ],
  [
    "YS Automate",
    "AI-assisted workflows that reduce operational friction and manual work.",
    Bot,
  ],
  [
    "YS Connect",
    "APIs and integration layers that make fragmented systems work together.",
    Network,
  ],
  [
    "YS Intelligence",
    "Data foundations, dashboards and AI insight built around real decisions.",
    Radar,
  ],
  [
    "YS Scale",
    "Cloud and platform modernization for reliability, performance and growth.",
    CloudCog,
  ],
  [
    "YS Care",
    "Continuous product improvement, observability and engineering support.",
    ShieldCheck,
  ],
] as const;

const productConcepts = [
  [
    "Roycss",
    "Design systems concept",
    "A composable interface foundation exploring how teams can ship consistent digital experiences faster.",
    Blocks,
  ],
  [
    "Ferrumengine",
    "Platform engineering concept",
    "A resilient application engine concept for dependable services, workflows and infrastructure orchestration.",
    Workflow,
  ],
  [
    "Youngsend",
    "Fintech infrastructure concept",
    "A financial operations concept focused on transparent, reliable and locally relevant money movement.",
    Globe2,
  ],
] as const;

const industries = [
  "Financial services & fintech",
  "Commerce & retail",
  "Logistics & mobility",
  "Health & professional services",
  "Real estate, hospitality & travel",
];

function Brand() {
  return (
    <span className="ys2-brand">
      <Image
        src="/brand/youngshark-icon-fullcolor.svg"
        alt=""
        width={42}
        height={42}
        priority
      />
      <span>
        YoungShark <small>Technologies</small>
      </span>
    </span>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="ys2-nav-wrap">
      <nav className="ys2-nav" aria-label="Primary navigation">
        <a href="#home" aria-label="YoungShark Technologies home">
          <Brand />
        </a>
        <div className="ys2-nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a className="ys2-button ys2-button-small ys2-nav-cta" href="#contact">
          Start a conversation <ArrowRight size={16} />
        </a>
        <button
          type="button"
          className="ys2-menu-button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            className="ys2-mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}>
              Start a conversation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <motion.div
      className="ys2-section-intro"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
    >
      <p className="ys2-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="home" className="ys2-hero">
      <Image
        src="/images/youngshark-cinematic-ecosystem-hero.webp"
        alt="Abstract interconnected technology ecosystem centred on a sculptural YoungShark monolith"
        fill
        priority
        sizes="100vw"
        className="ys2-hero-image"
      />
      <div className="ys2-hero-shade" aria-hidden="true" />
      <div className="ys2-hero-grid" aria-hidden="true" />
      <TubesCursor />
      <div className="ys2-shell ys2-hero-content">
        <motion.div
          className="ys2-hero-copy"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="ys2-kicker">
            <span /> AI-native digital engineering
          </p>
          <h1>Technology built for what comes next.</h1>
          <p className="ys2-hero-lede">
            We combine AI, software engineering, product design, cloud and data
            to build intelligent products and transform operations.
          </p>
          <div className="ys2-actions">
            <a className="ys2-button" href="#contact">
              Start a project <ArrowRight size={18} />
            </a>
            <a className="ys2-button ys2-button-ghost" href="#capabilities">
              Explore capabilities
            </a>
          </div>
          <p className="ys2-origin">
            <Globe2 size={16} /> From Nairobi to the world.
          </p>
        </motion.div>
      </div>
      <div className="ys2-hero-index" aria-hidden="true">
        <span>AI</span>
        <span>SOFTWARE</span>
        <span>CLOUD</span>
        <span>DATA</span>
      </div>
    </section>
  );
}

function Credibility() {
  return (
    <section className="ys2-proof" aria-label="YoungShark operating principles">
      <div className="ys2-shell ys2-proof-grid">
        <p>One connected engineering partner</p>
        <div>
          <Check size={17} /> Strategy to scale
        </div>
        <div>
          <Check size={17} /> Security by design
        </div>
        <div>
          <Check size={17} /> Built for African and global markets
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="ys2-section ys2-light">
      <div className="ys2-shell">
        <SectionIntro
          eyebrow="Core capabilities"
          title="The disciplines modern products need, working as one."
          copy="We unite product thinking, deep engineering and operational intelligence so every layer of the solution supports the outcome."
        />
        <div className="ys2-capability-grid">
          {capabilities.map(([title, text, Icon], index) => (
            <motion.article
              key={title}
              className="ys2-capability-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="ys2-card-number">0{index + 1}</span>
              <Icon size={25} />
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="ys2-card-line" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="ys2-section ys2-dark">
      <div className="ys2-shell">
        <SectionIntro
          eyebrow="Productized solutions"
          title="A clearer route from ambition to working technology."
          copy="Focused engagements designed around a business outcome, with the flexibility to connect into a larger transformation."
        />
        <div className="ys2-solution-grid">
          {solutions.map(([name, text, Icon], index) => (
            <motion.article
              key={name}
              className="ys2-solution-card"
              initial={{ opacity: 0, x: index % 2 ? 18 : -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span>
                <Icon size={22} />
              </span>
              <div>
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
              <ArrowRight className="ys2-solution-arrow" size={20} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductConcepts() {
  return (
    <section className="ys2-section ys2-light" id="work">
      <div className="ys2-shell">
        <SectionIntro
          eyebrow="YoungShark product concepts"
          title="We explore the infrastructure behind tomorrow’s products."
          copy="These are internal concepts and research directions—not published client case studies. Scope, maturity and availability are confirmed during discovery."
        />
        <div className="ys2-concept-grid">
          {productConcepts.map(([name, label, text, Icon], index) => (
            <motion.article
              key={name}
              className="ys2-concept-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="ys2-concept-visual" aria-hidden="true">
                <span className="ys2-orbit ys2-orbit-one" />
                <span className="ys2-orbit ys2-orbit-two" />
                <Icon size={30} />
              </div>
              <p className="ys2-concept-label">{label}</p>
              <h3>{name}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Africa() {
  return (
    <section className="ys2-africa">
      <div className="ys2-shell ys2-africa-grid">
        <div>
          <p className="ys2-eyebrow">Connected intelligence</p>
          <h2>Built in Africa. Designed to connect globally.</h2>
          <p>
            We engineer for the realities of fast-growing
            markets—interoperability, mobile-first behaviour, trust, resilience
            and global-grade performance.
          </p>
          <div className="ys2-industry-list">
            {industries.map((i) => (
              <span key={i}>{i}</span>
            ))}
          </div>
        </div>
        <div
          className="ys2-network-map"
          aria-label="Illustration of Nairobi connected to global technology markets"
        >
          <span className="ys2-map-ring ring-a" />
          <span className="ys2-map-ring ring-b" />
          <div className="ys2-nairobi-node">
            <span /> Nairobi <small>Engineering hub</small>
          </div>
          <span className="ys2-node node-a">Global products</span>
          <span className="ys2-node node-b">Cloud platforms</span>
          <span className="ys2-node node-c">Digital commerce</span>
        </div>
      </div>
    </section>
  );
}

function Labs() {
  const themes = [
    "Agentic AI",
    "Voice & multimodal AI",
    "African-language AI",
    "Computer vision",
    "Intelligent commerce",
    "Identity & fintech infrastructure",
    "IoT",
    "Emerging interfaces",
  ];
  return (
    <section id="labs" className="ys2-section ys2-labs">
      <div className="ys2-shell ys2-labs-grid">
        <div>
          <p className="ys2-eyebrow">YoungShark Labs · Experimental</p>
          <h2>Researching what becomes practical next.</h2>
          <p>
            Labs is our exploration space for emerging technology. Themes shown
            here are research directions, not claims of released products.
          </p>
          <a className="ys2-text-link" href="#contact">
            Explore an R&amp;D partnership <ArrowRight size={17} />
          </a>
        </div>
        <div className="ys2-theme-cloud">
          {themes.map((theme, index) => (
            <span key={theme} className={index % 3 === 0 ? "featured" : ""}>
              <Sparkles size={14} /> {theme}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const process = ["Discover", "Design", "Build", "Launch", "Scale"];
  return (
    <section id="approach" className="ys2-section ys2-light">
      <div className="ys2-shell">
        <SectionIntro
          eyebrow="Delivery approach"
          title="Momentum without losing control."
          copy="A transparent product lifecycle that turns uncertainty into decisions, and decisions into measurable releases."
        />
        <ol className="ys2-process">
          {process.map((step, index) => (
            <li key={step}>
              <span>0{index + 1}</span>
              <strong>{step}</strong>
            </li>
          ))}
        </ol>
        <div className="ys2-tech-strip">
          {[
            "Artificial intelligence",
            "Applications",
            "APIs",
            "Cloud",
            "Data",
            "Analytics",
            "Payments",
            "Automation",
          ].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="ys2-contact">
      <div className="ys2-shell ys2-contact-panel">
        <div>
          <p className="ys2-eyebrow">Build what comes next</p>
          <h2>Bring us the hard problem.</h2>
          <p>
            Tell us what needs to change. We’ll help shape the most useful path
            from opportunity to production.
          </p>
        </div>
        <div className="ys2-contact-actions">
          <a className="ys2-button" href={`tel:${siteConfig.phone}`}>
            <Phone size={18} /> {siteConfig.phoneDisplay}
          </a>
          <a
            className="ys2-button ys2-button-ghost"
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="ys2-footer">
      <div className="ys2-shell ys2-footer-grid">
        <div>
          <Brand />
          <p>AI-native digital engineering from Nairobi to the world.</p>
        </div>
        <div>
          <strong>Navigate</strong>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <div>
          <strong>Contact</strong>
          <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span>{siteConfig.location}</span>
        </div>
      </div>
      <div className="ys2-shell ys2-footer-bottom">
        <span>© {new Date().getFullYear()} YoungShark Technologies.</span>
        <span>Intelligence. Engineering. Impact.</span>
      </div>
    </footer>
  );
}

export function YoungSharkSite() {
  return (
    <main>
      <a className="ys2-skip" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <div id="main-content">
        <Hero />
        <Credibility />
        <Capabilities />
        <Solutions />
        <ProductConcepts />
        <Africa />
        <Labs />
        <Approach />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
