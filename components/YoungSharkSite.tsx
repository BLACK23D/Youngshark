"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Check,
  Code2,
  Cpu,
  Database,
  Linkedin,
  Layers3,
  Menu,
  Network,
  Phone,
  Send,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { useRef, useState } from "react";
import { AmbientVideo } from "@/components/AmbientVideo";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const phoneDisplay = siteConfig.phoneDisplay;
const phoneHref = `tel:${siteConfig.phone}`;
const linkedInHref = siteConfig.linkedin;

const products = [
  {
    name: "Roycss",
    description:
      "A modern frontend tool engineered for faster, more consistent web experiences.",
    action: "Discuss this work",
    icon: Code2,
    className: "product-roycss",
    accent: "#315BFF",
  },
  {
    name: "Ferrumengine",
    description:
      "A robust backend engine designed for dependable infrastructure and scale.",
    action: "Discuss this work",
    icon: Cpu,
    className: "product-ferrum",
    accent: "#8B5CF6",
  },
  {
    name: "Youngsend",
    description:
      "A financial operations platform built to make money movement clear and reliable.",
    action: "Discuss this work",
    icon: Send,
    className: "product-youngsend",
    accent: "#18CDB1",
  },
];

const services = [
  {
    name: "Android Development",
    description:
      "High-performance native mobile apps built for reliability, speed, and real-world use.",
    icon: Smartphone,
    className: "service-android",
    accent: "#06B6D4",
  },
  {
    name: "Fullstack & E-commerce",
    description:
      "Complete web products and commerce platforms engineered from interface to infrastructure.",
    icon: ShoppingCart,
    className: "service-fullstack",
    accent: "#315BFF",
  },
  {
    name: "ERP Solutions",
    description:
      "Enterprise systems that connect operations, finance, inventory, and reporting.",
    icon: Layers3,
    className: "service-erp",
    accent: "#8B5CF6",
  },
  {
    name: "Quickbase Consultation",
    description:
      "Purpose-built workflows and low-code databases that remove operational friction.",
    icon: Database,
    className: "service-quickbase",
    accent: "#EC4899",
  },
  {
    name: "Workday Integration",
    description:
      "Structured HR and finance integrations designed for dependable enterprise adoption.",
    icon: Workflow,
    className: "service-workday",
    accent: "#18CDB1",
  },
];

function ArrowIcon() {
  return <ArrowRight aria-hidden="true" size={18} strokeWidth={2} />;
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Image
      src={
        compact
          ? "/brand/youngshark-icon-fullcolor.svg"
          : "/brand/youngshark-horizontal-fullcolor.svg"
      }
      alt="YoungShark Technologies"
      width={compact ? 52 : 254}
      height={compact ? 52 : 76}
      priority
      className={compact ? "size-11" : "h-auto w-[190px] sm:w-[218px]"}
    />
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header className="fixed inset-x-0 top-3 z-50 mx-auto w-[calc(100%-1.25rem)] max-w-[1240px] sm:top-5">
      <nav className="ys-glass flex h-[68px] items-center justify-between rounded-[22px] px-3.5 sm:h-[78px] sm:rounded-[26px] sm:px-5">
        <a href="#home" aria-label="YoungShark Technologies home">
          <span className="sm:hidden">
            <Logo compact />
          </span>
          <span className="hidden sm:block">
            <Logo />
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-semibold text-navy/65 transition-colors hover:text-cobalt"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="button-primary nav-primary-cta hidden sm:inline-flex"
          >
            Book a consultation <ArrowIcon />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid size-11 place-items-center rounded-2xl border border-navy/10 bg-white text-navy lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            className="mobile-menu ys-glass mt-2 grid gap-1 rounded-[22px] p-3 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-navy/75 hover:bg-cobalt/[.06] hover:text-cobalt"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="button-primary mt-1 justify-center sm:hidden"
            >
              Book a consultation <ArrowIcon />
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

function MiniProductSurface({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  const Icon = product.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: 52, y: 26 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        delay: 0.22 + index * 0.12,
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`hero-surface hero-surface-${index + 1}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span
            className="grid size-9 place-items-center rounded-xl text-white"
            style={{ background: product.accent }}
          >
            <Icon size={17} />
          </span>
          <span className="font-display text-base font-bold text-navy">
            {product.name}
          </span>
        </div>
        <span className="size-2 rounded-full bg-teal shadow-[0_0_0_5px_rgba(24,205,177,.12)]" />
      </div>
      <div className="mt-5 grid grid-cols-[1fr_.8fr] gap-3">
        <div className="space-y-2">
          <span className="block h-2 w-4/5 rounded-full bg-cobalt/15" />
          <span className="block h-2 w-3/5 rounded-full bg-navy/10" />
          <span className="block h-2 w-full rounded-full bg-navy/[.06]" />
          <span className="block h-2 w-2/3 rounded-full bg-navy/[.06]" />
        </div>
        <div className="surface-chart flex items-end gap-1.5">
          {[38, 58, 46, 76, 64, 88].map((height) => (
            <span
              key={height}
              className="flex-1 rounded-t-md"
              style={{
                height: `${height}%`,
                background: index === 2 ? "#18CDB1" : "#315BFF",
                opacity: 0.35 + height / 150,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-3, 3]), {
    stiffness: 120,
    damping: 24,
  });
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [3, -3]), {
    stiffness: 120,
    damping: 24,
  });

  return (
    <section
      ref={sectionRef}
      id="home"
      onMouseMove={(event) => {
        pointerX.set(event.clientX / window.innerWidth - 0.5);
        pointerY.set(event.clientY / window.innerHeight - 0.5);
      }}
      className="relative min-h-[920px] overflow-hidden bg-white pt-28 sm:pt-32 lg:min-h-[780px] lg:pt-24"
    >
      <div className="hero-network absolute inset-0" aria-hidden="true" />
      <div className="hero-media absolute right-[-18%] top-16 h-[760px] w-[78%] opacity-[.42] [mask-image:linear-gradient(to_left,black_55%,transparent_96%)]">
        <AmbientVideo
          desktopSrc="/videos/architecture-bg.mp4"
          mobileSrc="/videos/architecture-mobile.mp4"
          poster="/images/architecture-poster.jpg"
          className="size-full object-cover"
          priority
        />
      </div>

      <div className="section-shell relative z-10 grid min-h-[735px] items-center gap-12 pb-24 pt-12 lg:min-h-[650px] lg:grid-cols-[.92fr_1.08fr] lg:pb-16 lg:pt-6">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[690px] font-display text-[clamp(3.65rem,7vw,6.6rem)] font-semibold leading-[.92] tracking-[-.065em] text-navy"
          >
            Engineering the Future of{" "}
            <span className="text-brand-gradient">Digital Enterprise.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.7 }}
            className="mt-7 max-w-xl text-base leading-7 text-navy/64 sm:text-lg sm:leading-8"
          >
            From custom Android apps to Workday integration and ERP solutions,
            YoungShark Technologies builds the robust tech innovations your
            business needs to scale.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.7 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#work" className="button-primary">
              View our work <ArrowIcon />
            </a>
            <a href="#services" className="button-secondary">
              Explore services <ArrowIcon />
            </a>
          </motion.div>
        </div>

        <motion.div
          style={{ rotateX, rotateY, transformPerspective: 1400 }}
          className="relative mx-auto h-[460px] w-full max-w-[660px] sm:h-[550px]"
        >
          {products.map((product, index) => (
            <MiniProductSurface
              key={product.name}
              product={product}
              index={index}
            />
          ))}
        </motion.div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-mist to-transparent" />
    </section>
  );
}

function ServiceVisual({ name }: { name: string }) {
  if (name === "Android Development") {
    return (
      <div className="service-phone" aria-hidden="true">
        <div className="service-phone-speaker" />
        <div className="service-phone-screen">
          <span className="service-mobile-title" />
          <div className="service-mobile-chart">
            {[42, 65, 54, 82, 70].map((height) => (
              <span key={height} style={{ height: `${height}%` }} />
            ))}
          </div>
          <span className="service-mobile-row" />
          <span className="service-mobile-row short" />
        </div>
      </div>
    );
  }

  if (name === "Fullstack & E-commerce") {
    return (
      <div className="service-browser" aria-hidden="true">
        <div className="service-browser-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="service-browser-body">
          <div className="service-browser-nav" />
          <div className="service-orders">
            {[0, 1, 2, 3].map((row) => (
              <div key={row}>
                <span />
                <span />
                <span />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (name === "ERP Solutions") {
    return (
      <div className="service-bars" aria-hidden="true">
        {[42, 70, 54, 88, 66].map((height) => (
          <span key={height} style={{ height: `${height}%` }} />
        ))}
      </div>
    );
  }

  if (name === "Quickbase Consultation") {
    return (
      <div className="service-workflow" aria-hidden="true">
        <span />
        <span />
        <span />
        <b />
      </div>
    );
  }

  return (
    <div className="service-integration" aria-hidden="true">
      <span>HR</span>
      <b>W</b>
      <span>FIN</span>
      <i />
      <i />
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          className="max-w-4xl"
        >
          <p className="section-label">Services</p>
          <h2 className="section-title">Engineering capability, end to end.</h2>
          <p className="section-copy">
            From native mobile products to enterprise platforms, we build the
            systems businesses depend on.
          </p>
        </motion.div>

        <div className="services-bento mt-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.name}
                initial={{ opacity: 0, y: 34, rotateX: 2 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                whileHover={{
                  y: -8,
                  rotateX: 1.5,
                  rotateY: index % 2 ? -1.5 : 1.5,
                }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.65, delay: index * 0.06 }}
                style={{ transformPerspective: 1200 }}
                className={`service-card ${service.className}`}
              >
                <div className="service-card-heading">
                  <span
                    className="service-card-icon"
                    style={{ color: service.accent }}
                  >
                    <Icon size={21} />
                  </span>
                  <h3>{service.name}</h3>
                </div>
                <p>{service.description}</p>
                <ServiceVisual name={service.name} />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductVisual({ type }: { type: string }) {
  if (type === "Roycss") {
    return (
      <div className="visual-code">
        <div className="code-window">
          <span />
          <span />
          <span />
        </div>
        <div className="mt-7 space-y-3 font-mono text-xs text-navy/75">
          <p>
            <b className="text-cobalt">import</b> {"{ Button }"}{" "}
            <b className="text-cobalt">from</b> &quot;roycss&quot;
          </p>
          <p className="pl-5 text-navy/55">
            &lt;Button intent=&quot;bold&quot; /&gt;
          </p>
          <p className="pl-10 text-teal">beautiful by default</p>
        </div>
        <div className="visual-token">Aa</div>
      </div>
    );
  }

  if (type === "Ferrumengine") {
    return (
      <div className="visual-engine">
        {[0, 1, 2, 3].map((layer) => (
          <div
            key={layer}
            className="engine-layer"
            style={{ transform: `translateY(${layer * 34}px)` }}
          >
            <span />
            <span />
            <span />
          </div>
        ))}
        <div className="engine-status">
          <ShieldCheck size={17} /> All systems ready
        </div>
      </div>
    );
  }

  return (
    <div className="visual-send">
      <div className="send-orbit orbit-one" />
      <div className="send-orbit orbit-two" />
      <div className="send-core">
        <Check size={28} />
      </div>
      <div className="send-card send-card-one">KES 12,540</div>
      <div className="send-card send-card-two">Payment sent</div>
    </div>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="relative bg-mist py-24 sm:py-32">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          className="max-w-3xl"
        >
          <p className="section-label">Selected work</p>
          <h2 className="section-title">Innovations We&apos;ve Engineered.</h2>
          <p className="section-copy">
            Platforms we helped bring to life through focused product strategy,
            experience design, and engineering.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-7">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.article
                key={product.name}
                initial={{
                  opacity: 0,
                  y: 42,
                  rotateY: index === 1 ? 0 : index ? 5 : -5,
                }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                whileHover={{
                  y: -10,
                  rotateX: 1.5,
                  rotateY: index === 1 ? 0 : index ? -2 : 2,
                }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                style={{ transformPerspective: 1200 }}
                className="group"
              >
                <div className={`product-visual ${product.className}`}>
                  <ProductVisual type={product.name} />
                </div>
                <div className="px-1 pt-7">
                  <div className="flex items-center gap-3">
                    <span
                      className="grid size-10 place-items-center rounded-2xl text-white"
                      style={{ background: product.accent }}
                    >
                      <Icon size={19} />
                    </span>
                    <h3
                      className="font-display text-3xl font-semibold tracking-[-.035em]"
                      style={{ color: product.accent }}
                    >
                      {product.name}
                    </h3>
                  </div>
                  <p className="mt-4 max-w-sm leading-7 text-navy/64">
                    {product.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold"
                    style={{ color: product.accent }}
                  >
                    {product.action} <ArrowIcon />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TechnologyArchitecture() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="section-shell">
        <div className="grid items-end gap-8 lg:grid-cols-[1.08fr_.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label">Technology &amp; UI</p>
            <h2 className="section-title max-w-3xl">
              Crafting Digital Experiences with Precision.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl text-base leading-8 text-navy/62 sm:justify-self-end sm:text-lg"
          >
            We connect intuitive interfaces, dependable infrastructure, and
            enterprise workflows into one coherent product experience.
          </motion.p>
        </div>

        <div className="tech-architecture mt-16">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            className="architecture-copy"
          >
            <p className="text-sm font-bold uppercase tracking-[.16em] text-cobalt">
              From interface to infrastructure
            </p>
            <h3 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.04] tracking-[-.045em] text-navy sm:text-5xl">
              Every layer designed to work together.
            </h3>

            <div className="mt-10 space-y-7">
              {[
                {
                  number: "01",
                  name: "Roycss",
                  layer: "Experience layer",
                  detail: "Design systems · Interfaces · Frontend workflows",
                  color: "#315BFF",
                },
                {
                  number: "02",
                  name: "Ferrumengine",
                  layer: "Infrastructure layer",
                  detail: "APIs · Compute · Security",
                  color: "#8B5CF6",
                },
                {
                  number: "03",
                  name: "Youngsend",
                  layer: "Transaction layer",
                  detail: "Payments · Operations · Financial flows",
                  color: "#18CDB1",
                },
              ].map((item) => (
                <div key={item.name} className="architecture-item">
                  <span style={{ color: item.color }}>{item.number}</span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h4 className="font-display text-xl font-bold text-navy">
                        {item.name}
                      </h4>
                      <p className="text-xs font-bold uppercase tracking-[.14em] text-navy/42">
                        {item.layer}
                      </p>
                    </div>
                    <p className="mt-1.5 text-sm leading-6 text-navy/58">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32, rotateY: -4 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="technology-canvas"
          >
            <div className="technology-grid" aria-hidden="true" />
            <div className="technology-mark" aria-hidden="true">
              <Image
                src="/brand/youngshark-icon-fullcolor.svg"
                alt=""
                width={64}
                height={64}
              />
            </div>

            <div className="technology-stack">
              <div className="tech-layer tech-layer-interface">
                <div className="tech-layer-heading">
                  <span className="tech-layer-icon bg-cobalt">
                    <Code2 size={18} />
                  </span>
                  <div>
                    <p>Experience layer</p>
                    <h4>Roycss</h4>
                  </div>
                  <span className="tech-status">Composable</span>
                </div>
                <div className="tech-code-rail" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="tech-connector" aria-hidden="true">
                <span />
              </div>

              <div className="tech-layer tech-layer-engine">
                <div className="tech-layer-heading">
                  <span className="tech-layer-icon bg-violet">
                    <Cpu size={18} />
                  </span>
                  <div>
                    <p>Infrastructure layer</p>
                    <h4>Ferrumengine</h4>
                  </div>
                  <span className="tech-status">Secure by design</span>
                </div>
                <div className="tech-node-rail" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((node) => (
                    <span key={node} />
                  ))}
                </div>
              </div>

              <div className="tech-connector" aria-hidden="true">
                <span />
              </div>

              <div className="tech-layer tech-layer-send">
                <div className="tech-layer-heading">
                  <span className="tech-layer-icon bg-teal">
                    <Send size={18} />
                  </span>
                  <div>
                    <p>Transaction layer</p>
                    <h4>Youngsend</h4>
                  </div>
                  <span className="tech-status">Built to scale</span>
                </div>
                <div className="tech-flow-rail" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>

            <div className="technology-footer">
              <span>
                <Network size={15} /> Connected delivery
              </span>
              <span>
                <ShieldCheck size={15} /> Shared standards
              </span>
              <span>
                <Zap size={15} /> Engineered in Nairobi
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section id="contact" className="bg-white pb-10 pt-16 sm:pb-12">
      <div className="section-shell">
        <div className="cta-band noise relative overflow-hidden rounded-[32px] px-6 py-12 text-white sm:px-10 lg:px-14">
          <div className="network-lines absolute inset-0 opacity-30" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[.8fr_1fr_auto]">
            <div>
              <Sparkles className="mb-5" size={25} />
              <h2 className="font-display text-4xl font-semibold tracking-[-.045em] sm:text-5xl">
                Let&apos;s engineer what&apos;s next.
              </h2>
            </div>
            <p className="max-w-xl border-white/30 text-base leading-7 text-white/85 lg:border-l lg:pl-9">
              Book a focused consultation to turn your next mobile, commerce,
              ERP, Quickbase, or Workday initiative into a resilient product.
            </p>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a href={phoneHref} className="button-light">
                <Phone size={18} aria-hidden="true" /> Call {phoneDisplay}
              </a>
              <a
                href={linkedInHref}
                target="_blank"
                rel="noreferrer"
                className="button-ghost-light"
              >
                <Linkedin size={18} aria-hidden="true" /> Find us on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer-mesh relative overflow-hidden pb-8 pt-10">
      <div className="network-footer absolute inset-0 opacity-50" />
      <div className="section-shell relative">
        <div className="footer-panel">
          <div className="footer-brand">
            <Logo />
            <p>
              Enterprise technology, thoughtfully engineered in Nairobi for
              teams ready to scale.
            </p>
          </div>

          <div>
            <p className="footer-heading">Navigate</p>
            <div className="footer-links">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="footer-heading">Contact</p>
            <div className="footer-links">
              <a href={phoneHref}>
                <Phone size={16} aria-hidden="true" /> {phoneDisplay}
              </a>
              <a href={linkedInHref} target="_blank" rel="noreferrer">
                <Linkedin size={16} aria-hidden="true" /> LinkedIn
              </a>
              <span>Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} YoungShark Technologies.</p>
          <p>Engineering the future of digital enterprise.</p>
        </div>
      </div>
    </footer>
  );
}

export function YoungSharkSite() {
  return (
    <>
      <Navbar />
      <main className="overflow-clip">
        <Hero />
        <Services />
        <SelectedWork />
        <TechnologyArchitecture />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
