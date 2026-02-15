/*
Brand Vigilant — Next.js (App Router) Multi-Page Website
======================================================

How to use
----------
1) Create a Next.js project (recommended):
   npx create-next-app@latest brand-vigilant --ts --app --tailwind --eslint

2) Replace the generated files with the structure below.

3) Run:
   npm run dev

Notes
-----
- Uses App Router (Next 13+ / 14+ / 15+)
- SEO: metadata per page + JSON-LD (ProfessionalService)
- Fully responsive, enterprise UI with Tailwind
- Blogs: 5 OBP posts using route segment /blog/[slug]
- Forms are demo-only (no backend). Connect to HubSpot/Zoho/Resend later.

File Tree
---------
app/
  layout.tsx
  page.tsx
  services/page.tsx
  blog/page.tsx
  blog/[slug]/page.tsx
  demo/page.tsx
  contact/page.tsx
  sitemap.ts
  robots.ts
components/
  site/Nav.tsx
  site/Footer.tsx
  site/SectionTitle.tsx
  site/CTABox.tsx
  site/FeatureCard.tsx
  site/ServiceRow.tsx
  site/Field.tsx
  site/LogosRow.tsx
  site/Background.tsx
  site/JsonLd.tsx
lib/
  brand.ts
  services.ts
  blogs.ts
  utils.ts

======================================================

Below is the FULL code for each file.
*/

// =========================
// lib/brand.ts
// =========================
export const BRAND = {
  name: "Brand Vigilant",
  tagline: "Online Brand Protection for Global Brands",
  subtagline:
    "Detect counterfeits, stop impersonation, and protect your reputation across marketplaces, social media, ads, and domains.",
  email: "hello@brandvigilant.com",
  phone: "+91 90000 00000",
  location: "India (serving Europe & North America)",
  url: "https://brandvigilant.com",
  primaryCta: "Get a Free Demo",
};

// =========================
// lib/utils.ts
// =========================
export function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

// =========================
// lib/services.ts
// =========================
import {
  Shield,
  Search,
  Globe,
  BadgeCheck,
  FileSearch,
  Siren,
  Scale,
} from "lucide-react";

export const SERVICES = [
  {
    title: "Marketplace Monitoring & Takedowns",
    icon: Shield,
    desc: "Identify counterfeit listings, unauthorized sellers, and listing hijacks across Amazon, eBay, Etsy, Walmart, AliExpress, and regional marketplaces.",
    bullets: [
      "Daily/weekly scans for your trademarks, logos, and product images",
      "Evidence capture (screenshots, seller IDs, ASIN/SKU mapping)",
      "Takedown workflows aligned to each marketplace policy",
      "Escalation support for repeat infringers",
    ],
    visual: {
      title: "Marketplace Coverage",
      note: "Automated discovery + human verification",
      kpis: [
        { label: "Listings reviewed", value: "10k+" },
        { label: "Avg. response", value: "24–72h" },
        { label: "Policy-aligned", value: "Yes" },
      ],
    },
  },
  {
    title: "Social Media Impersonation Removal",
    icon: Siren,
    desc: "Detect fake accounts, phishing pages, and brand impersonation across Instagram, Facebook, TikTok, X, YouTube, and LinkedIn.",
    bullets: [
      "Username + logo similarity detection",
      "Phishing risk assessment and reporting",
      "Platform-specific reporting & escalation",
      "Brand safety playbooks for customer support teams",
    ],
    visual: {
      title: "Account Risk Signals",
      note: "Fast triage for high-impact impersonations",
      kpis: [
        { label: "Fake profiles", value: "Flagged" },
        { label: "Phishing pages", value: "Removed" },
        { label: "Escalations", value: "Handled" },
      ],
    },
  },
  {
    title: "Domain, DNS & Typosquat Monitoring",
    icon: Globe,
    desc: "Monitor newly registered domains that mimic your brand to prevent scams, credential theft, and SEO abuse.",
    bullets: [
      "Typosquat + homoglyph detection",
      "WHOIS and hosting intelligence",
      "DMARC/SPF/DKIM recommendations",
      "Abuse reporting to registrars and hosts",
    ],
    visual: {
      title: "Domain Threat Map",
      note: "Stop scams before customers see them",
      kpis: [
        { label: "New domains", value: "Tracked" },
        { label: "Risk scoring", value: "Enabled" },
        { label: "Registrar notices", value: "Filed" },
      ],
    },
  },
  {
    title: "Paid Ads & Search Misuse Monitoring",
    icon: Search,
    desc: "Detect brand keyword bidding, fake lead-gen, and malicious ads using your trademarks across Google, Bing, Meta, and more.",
    bullets: [
      "Trademark misuse detection",
      "Ad copy + landing page evidence",
      "Policy-based complaints",
      "Competitor monitoring for brand defense",
    ],
    visual: {
      title: "Ad Misuse Dashboard",
      note: "Protect customers from deceptive clicks",
      kpis: [
        { label: "Ad scans", value: "Scheduled" },
        { label: "Landing checks", value: "Verified" },
        { label: "Complaints", value: "Submitted" },
      ],
    },
  },
  {
    title: "IP Enforcement & Case Management",
    icon: Scale,
    desc: "Structured case management, evidence logs, and reporting aligned to your legal and compliance requirements.",
    bullets: [
      "Case IDs, evidence packs, and audit trail",
      "Repeat infringer tracking",
      "Monthly executive reporting",
      "Support for legal teams and outside counsel",
    ],
    visual: {
      title: "Executive Reporting",
      note: "Clear metrics for leadership",
      kpis: [
        { label: "Cases", value: "Tracked" },
        { label: "Evidence", value: "Archived" },
        { label: "Reports", value: "Monthly" },
      ],
    },
  },
  {
    title: "Online Brand Protection Profile (OBP Profile)",
    icon: FileSearch,
    desc: "A comprehensive profile of your brand’s online presence, threats, and enforcement readiness—ideal for leadership and audits.",
    bullets: [
      "Presence map across marketplaces, social, ads, and domains",
      "Threat inventory (counterfeit, impersonation, scam, misuse)",
      "Protection coverage review (trademarks, registries, verification)",
      "Prioritized remediation roadmap",
    ],
    visual: {
      title: "Risk & Readiness",
      note: "A practical baseline for protection",
      kpis: [
        { label: "Coverage", value: "Assessed" },
        { label: "Gaps", value: "Identified" },
        { label: "Roadmap", value: "Delivered" },
      ],
    },
  },
] as const;

// =========================
// lib/blogs.ts
// =========================
export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  sections: Array<{ h: string; p: string }>;
};

export const BLOGS: BlogPost[] = [
  {
    slug: "what-is-online-brand-protection",
    title: "What Is Online Brand Protection (and Why It Matters in 2026)",
    date: "Jan 2026",
    readTime: "6 min",
    summary:
      "A clear, non-technical guide to online brand protection—what it covers, common threats, and how modern teams measure success.",
    sections: [
      {
        h: "Online brand protection: the real definition",
        p: "Online brand protection is the ongoing process of identifying and stopping misuse of your brand across the internet—counterfeits, impersonation, scam domains, trademark abuse in ads, and unauthorized resellers. It’s not just about takedowns; it’s about reducing customer harm and revenue leakage while protecting long-term brand trust.",
      },
      {
        h: "What threats look like today",
        p: "In 2026, the most common threats include marketplace counterfeits, fake Instagram stores, phishing domains, and misleading paid ads. Many brands are surprised by how fast new abuse appears—often within days of a product launch.",
      },
      {
        h: "How success is measured",
        p: "Strong programs track: number of infringements found, takedown rate, time-to-removal, repeat infringer reduction, and customer impact. The goal is sustainable reduction, not endless whack-a-mole.",
      },
    ],
  },
  {
    slug: "marketplace-counterfeits-playbook",
    title: "Marketplace Counterfeits: A Practical Takedown Playbook",
    date: "Jan 2026",
    readTime: "7 min",
    summary:
      "How to spot counterfeit listings, build evidence, and submit takedowns effectively across Amazon, eBay, Etsy, and more.",
    sections: [
      {
        h: "Why marketplaces are the #1 risk",
        p: "Marketplaces combine high buyer intent with low friction for sellers. That makes them a prime target for counterfeiters and listing hijackers.",
      },
      {
        h: "Evidence that wins",
        p: "The best takedowns include: trademark details, side-by-side comparisons, product image matches, listing IDs, seller IDs, and timestamps. Consistency matters more than volume.",
      },
      {
        h: "Repeat infringers",
        p: "Track repeat sellers across platforms. Many counterfeit operations recycle assets and brand names. A structured case log helps you escalate faster.",
      },
    ],
  },
  {
    slug: "social-media-impersonation",
    title: "Social Media Impersonation: How to Remove Fake Accounts Faster",
    date: "Dec 2025",
    readTime: "5 min",
    summary:
      "A step-by-step approach to detecting impersonation accounts, prioritizing risk, and reducing customer scams on social platforms.",
    sections: [
      {
        h: "The most dangerous impersonations",
        p: "Accounts that collect payments, run fake giveaways, or DM customers are the highest risk. They should be triaged first.",
      },
      {
        h: "Signals to monitor",
        p: "Look for logo reuse, bio keyword matches, suspicious links, new accounts with rapid follower spikes, and comments directing users to WhatsApp/Telegram.",
      },
      {
        h: "Make reporting scalable",
        p: "Create a consistent evidence template, track ticket IDs, and keep a removal timeline. Platforms respond better when your reports are structured.",
      },
    ],
  },
  {
    slug: "typosquatting-phishing-domains",
    title: "Typosquatting & Phishing Domains: What to Monitor and Why",
    date: "Dec 2025",
    readTime: "6 min",
    summary:
      "How scammers register look-alike domains, what risk signals matter, and what brands can do to reduce customer harm.",
    sections: [
      {
        h: "What typosquatting really is",
        p: "Typosquatting is the registration of domains that look like your brand name—often with a missing letter, swapped characters, or different TLD. These domains are used for phishing, fake stores, or SEO spam.",
      },
      {
        h: "High-risk indicators",
        p: "The riskiest domains are those with active MX records (email), live checkout pages, or redirects to ad networks. Prioritize those first.",
      },
      {
        h: "Defense basics",
        p: "A strong baseline includes DMARC, SPF, DKIM, and monitoring new domain registrations. You don’t need to buy every domain—just the right ones.",
      },
    ],
  },
  {
    slug: "obp-profile-template",
    title: "Online Brand Protection Profile: A Simple Template for Leadership",
    date: "Nov 2025",
    readTime: "8 min",
    summary:
      "What an OBP profile includes, how to structure it, and how it helps legal, marketing, and leadership align.",
    sections: [
      {
        h: "What an OBP profile is",
        p: "An Online Brand Protection Profile is a structured snapshot of where your brand appears online, what threats exist, and what protection controls are currently in place. It is used to align teams and prioritize enforcement.",
      },
      {
        h: "Recommended sections",
        p: "A strong profile includes: presence map, threat inventory, enforcement readiness, key platforms, escalation contacts, and a 30/60/90-day action plan.",
      },
      {
        h: "How Brand Vigilant delivers it",
        p: "We combine automated discovery with human verification to create an executive-ready document plus a working case tracker your team can use immediately.",
      },
    ],
  },
];

export function getBlogBySlug(slug: string) {
  return BLOGS.find((b) => b.slug === slug);
}

// =========================
// components/site/Background.tsx
// =========================
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(56,189,248,0.16),transparent_55%),radial-gradient(1000px_circle_at_80%_0%,rgba(99,102,241,0.14),transparent_55%),radial-gradient(900px_circle_at_70%_80%,rgba(34,197,94,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.2),rgba(2,6,23,0.92))]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:56px_56px]" />
    </div>
  );
}

// =========================
// components/site/JsonLd.tsx
// =========================
import Script from "next/script";
import { BRAND } from "@/lib/brand";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: BRAND.name,
    description:
      "Enterprise online brand protection services: marketplace monitoring, counterfeit takedowns, social impersonation removal, domain & typosquat monitoring, and IP enforcement reporting.",
    areaServed: ["United States", "Canada", "United Kingdom", "Europe"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    email: BRAND.email,
    telephone: BRAND.phone,
    url: BRAND.url,
    sameAs: [],
    serviceType: [
      "Online Brand Protection",
      "Marketplace Monitoring",
      "Counterfeit Takedowns",
      "Social Media Impersonation Removal",
      "Domain Monitoring",
      "Trademark Misuse Reporting",
    ],
  };

  return (
    <Script
      id="bv-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// =========================
// components/site/SectionTitle.tsx
// =========================
export function SectionTitle({
  kicker,
  title,
  desc,
}: {
  kicker?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker && (
        <div className="text-xs font-semibold uppercase tracking-wider text-sky-300">
          {kicker}
        </div>
      )}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {desc && (
        <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
          {desc}
        </p>
      )}
    </div>
  );
}

// =========================
// components/site/CTABox.tsx
// =========================
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTABox({
  title,
  desc,
  primary,
  primaryHref,
  secondary,
  secondaryHref,
}: {
  title: string;
  desc: string;
  primary: string;
  primaryHref: string;
  secondary: string;
  secondaryHref: string;
}) {
  return (
    <div className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{desc}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href={primaryHref}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px]"
        >
          {primary}
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href={secondaryHref}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/12 transition hover:bg-white/8"
        >
          {secondary}
        </Link>
      </div>
    </div>
  );
}

// =========================
// components/site/FeatureCard.tsx
// =========================
import { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/7">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
          <Icon className="h-5 w-5 text-sky-300" />
        </div>
        <div className="text-lg font-semibold">{title}</div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{desc}</p>
    </div>
  );
}

// =========================
// components/site/ServiceRow.tsx
// =========================
import { LucideIcon, BadgeCheck, FileSearch, Shield } from "lucide-react";

export function ServiceRow({
  service,
}: {
  service: {
    title: string;
    icon: LucideIcon;
    desc: string;
    bullets: string[];
    visual: {
      title: string;
      note: string;
      kpis: Array<{ label: string; value: string }>;
    };
  };
}) {
  const Icon = service.icon;

  return (
    <div className="grid gap-6 rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 md:grid-cols-2 md:items-start">
      <div>
        <div className="flex items-start gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
            <Icon className="h-6 w-6 text-sky-300" />
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-tight">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {service.desc}
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-2 text-sm text-slate-300">
          {service.bullets.map((b) => (
            <div key={b} className="flex items-start gap-2">
              <span className="mt-0.5 inline-block h-4 w-4 rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/25" />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-slate-950/40 p-6 ring-1 ring-white/10">
        <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-sky-500/15 blur-2xl" />
        <div className="absolute -left-10 -bottom-12 h-44 w-44 rounded-full bg-indigo-500/15 blur-2xl" />

        <div className="relative">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold">{service.visual.title}</div>
            <div className="text-xs text-slate-400">{service.visual.note}</div>
          </div>

          <div className="mt-5 grid gap-3">
            {service.visual.kpis.map((k) => (
              <div
                key={k.label}
                className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10"
              >
                <div className="text-sm text-slate-300">{k.label}</div>
                <div className="text-sm font-semibold text-white">{k.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { label: "Discover", icon: FileSearch },
              { label: "Verify", icon: BadgeCheck },
              { label: "Enforce", icon: Shield },
            ].map((x) => (
              <div
                key={x.label}
                className="grid place-items-center gap-2 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
              >
                <x.icon className="h-5 w-5 text-sky-300" />
                <div className="text-xs text-slate-200">{x.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================
// components/site/Field.tsx
// =========================
export function Field({
  label,
  placeholder,
  type = "text",
  required,
  textarea,
}: {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold">{label}</span>
      {textarea ? (
        <textarea
          required={required}
          placeholder={placeholder}
          rows={5}
          className="w-full resize-none rounded-2xl bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-sky-500/40"
        />
      ) : (
        <input
          required={required}
          type={type}
          placeholder={placeholder}
          className="w-full rounded-2xl bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-sky-500/40"
        />
      )}
    </label>
  );
}

// =========================
// components/site/LogosRow.tsx
// =========================
export function LogosRow() {
  const items = [
    "Amazon",
    "eBay",
    "Etsy",
    "Walmart",
    "Instagram",
    "TikTok",
    "Google",
    "Shopify",
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 pb-8">
      <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
        <div className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400">
          Coverage across the platforms where brand abuse happens
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-8">
          {items.map((x) => (
            <div
              key={x}
              className="grid place-items-center rounded-2xl bg-slate-950/40 px-3 py-3 text-sm text-slate-200 ring-1 ring-white/10"
            >
              {x}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================
// components/site/Nav.tsx
// =========================
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Shield, Sparkles } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blogs" },
  { href: "/demo", label: "Get a Free Demo" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="group flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-sm">
            <Shield className="h-5 w-5 text-sky-300" />
          </div>
          <div className="leading-tight">
            <div className="text-base font-semibold tracking-tight">
              {BRAND.name}
            </div>
            <div className="text-xs text-slate-400">Enterprise OBP</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((r) => {
            const active = pathname === r.href;
            return (
              <Link
                key={r.href}
                href={r.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm transition",
                  active
                    ? "bg-white/8 text-white ring-1 ring-white/12"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                )}
              >
                {r.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm transition hover:translate-y-[-1px]"
          >
            <Sparkles className="h-4 w-4" />
            {BRAND.primaryCta}
          </Link>
        </div>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="grid gap-2">
              {NAV.map((r) => {
                const active = pathname === r.href;
                return (
                  <Link
                    key={r.href}
                    href={r.href}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-sm transition",
                      active
                        ? "bg-white/8 text-white ring-1 ring-white/12"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {r.label}
                  </Link>
                );
              })}
              <Link
                href="/demo"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950"
              >
                <Sparkles className="h-4 w-4" />
                {BRAND.primaryCta}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// =========================
// components/site/Footer.tsx
// =========================
import Link from "next/link";
import {
  Shield,
  Lock,
  BarChart3,
  Globe,
  BadgeCheck,
  Building2,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { BRAND } from "@/lib/brand";

export function Footer() {
  const ROUTES = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blogs" },
    { href: "/demo", label: "Get a Free Demo" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
              <Shield className="h-5 w-5 text-sky-300" />
            </div>
            <div>
              <div className="text-base font-semibold">{BRAND.name}</div>
              <div className="text-sm text-slate-400">{BRAND.tagline}</div>
            </div>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300">
            We help brands reduce counterfeit sales, remove impersonation
            accounts, stop phishing domains, and protect trademark integrity
            across the internet—with enterprise reporting for leadership.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
              <Lock className="h-3.5 w-3.5" />
              Policy-aligned workflows
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
              <BarChart3 className="h-3.5 w-3.5" />
              Executive reporting
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
              <Globe className="h-3.5 w-3.5" />
              EU + US coverage
            </span>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold">Pages</div>
          <div className="mt-3 grid gap-2 text-sm">
            {ROUTES.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="text-slate-300 hover:text-white"
              >
                {r.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold">Contact</div>
          <div className="mt-3 grid gap-2 text-sm text-slate-300">
            <div className="inline-flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-slate-400" />
              <span>{BRAND.email}</span>
            </div>
            <div className="inline-flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-slate-400" />
              <span>{BRAND.phone}</span>
            </div>
            <div className="inline-flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-slate-400" />
              <span>{BRAND.location}</span>
            </div>
          </div>

          <Link
            href="/demo"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950"
          >
            {BRAND.primaryCta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2">
              <BadgeCheck className="h-4 w-4" />
              GDPR-aware processes
            </span>
            <span className="inline-flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Enterprise-ready
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// =========================
// app/layout.tsx
// =========================
import "./globals.css";
import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import { Background } from "@/components/site/Background";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { JsonLd } from "@/components/site/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: `${BRAND.name} — Online Brand Protection for Europe & North America`,
    template: `%s — ${BRAND.name}`,
  },
  description:
    "Brand Vigilant helps brands stop counterfeits, impersonation, and trademark misuse across marketplaces, social media, ads, and domains with enterprise reporting.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: `${BRAND.name} — Online Brand Protection`,
    description:
      "Enterprise online brand protection services: marketplace monitoring, counterfeit takedowns, social impersonation removal, domain & typosquat monitoring, and IP enforcement reporting.",
    url: BRAND.url,
    siteName: BRAND.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <Background />
        <JsonLd />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// =========================
// app/page.tsx (HOME)
// =========================
import Link from "next/link";
import {
  Shield,
  FileSearch,
  BadgeCheck,
  BarChart3,
  Users,
  TrendingUp,
  Globe,
  Search,
  Siren,
  ExternalLink,
  Quote,
} from "lucide-react";
import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import { SectionTitle } from "@/components/site/SectionTitle";
import { FeatureCard } from "@/components/site/FeatureCard";
import { LogosRow } from "@/components/site/LogosRow";
import { CTABox } from "@/components/site/CTABox";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Brand Vigilant helps brands stop counterfeits, impersonation, and trademark misuse across marketplaces, social media, ads, and domains with enterprise reporting.",
  alternates: { canonical: "/" },
};

function RiskRow({
  icon: Icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: "High" | "Medium" | "Low";
}) {
  const tone =
    value === "High"
      ? "text-rose-300"
      : value === "Medium"
      ? "text-amber-300"
      : "text-emerald-300";
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
          <Icon className="h-4 w-4 text-sky-300" />
        </div>
        <div className="text-sm text-slate-200">{label}</div>
      </div>
      <div className={`text-sm font-semibold ${tone}`}>{value}</div>
    </div>
  );
}

function KPI({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
      <div className="text-sm text-slate-300">{label}</div>
      <div className="text-sm font-semibold text-white">{value}</div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10 md:pt-20 md:pb-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-slate-200 ring-1 ring-white/10">
              <Shield className="h-4 w-4 text-sky-300" />
              <span>Built for EU & North American brands</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-400">India-based operations</span>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              Stop counterfeits.
              <span className="text-sky-300"> Remove impersonation.</span>
              <span className="text-indigo-300"> Protect trust.</span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              {BRAND.name} provides enterprise-grade Online Brand Protection
              services—monitoring, evidence, takedowns, and reporting—across
              marketplaces, social platforms, domains, and paid ads.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:translate-y-[-1px]"
              >
                {BRAND.primaryCta}
                <span className="text-slate-500">→</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/12 transition hover:bg-white/8"
              >
                View Services
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-300 sm:grid-cols-4">
              {[
                { icon: FileSearch, label: "Threat discovery" },
                { icon: BadgeCheck, label: "Verified evidence" },
                { icon: Shield, label: "Policy takedowns" },
                { icon: BarChart3, label: "Executive reporting" },
              ].map((x) => (
                <div
                  key={x.label}
                  className="flex items-center gap-2 rounded-2xl bg-white/5 px-3 py-3 ring-1 ring-white/10"
                >
                  <x.icon className="h-4 w-4 text-sky-300" />
                  <span className="text-xs sm:text-sm">{x.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-500/20 blur-2xl" />
              <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-2xl" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">Brand Risk Snapshot</div>
                  <div className="text-xs text-slate-400">Sample</div>
                </div>

                <div className="mt-4 grid gap-3">
                  <RiskRow
                    icon={Shield}
                    label="Marketplace counterfeits"
                    value="High"
                  />
                  <RiskRow
                    icon={Siren}
                    label="Social impersonation"
                    value="Medium"
                  />
                  <RiskRow
                    icon={Globe}
                    label="Typosquat domains"
                    value="Medium"
                  />
                  <RiskRow
                    icon={Search}
                    label="Paid ads misuse"
                    value="Low"
                  />
                </div>

                <div className="mt-6 rounded-2xl bg-slate-950/40 p-4 ring-1 ring-white/10">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <TrendingUp className="h-4 w-4 text-emerald-300" />
                    What you get every month
                  </div>
                  <ul className="mt-3 grid gap-2 text-sm text-slate-300">
                    {[
                      "Prioritized infringement list",
                      "Takedown outcomes & timelines",
                      "Repeat infringer tracking",
                      "Executive-ready KPI summary",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-4 w-4 rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/25" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="text-xs text-slate-400">
                    Designed for D2C, luxury, consumer goods, SaaS.
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs ring-1 ring-white/10">
                    <Users className="h-3.5 w-3.5 text-sky-300" />
                    Client-first
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogosRow />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle
          kicker="What we do"
          title="Enterprise-grade Online Brand Protection"
          desc="We combine continuous monitoring, evidence capture, policy-aligned takedowns, and executive reporting—so your team can focus on growth, not cleanup."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={FileSearch}
            title="Discover"
            desc="Find infringements across marketplaces, social platforms, ads, and domains using keywords, image matches, and similarity signals."
          />
          <FeatureCard
            icon={BadgeCheck}
            title="Verify"
            desc="Every case is human-verified with evidence packs, timestamps, and platform identifiers to improve removal success."
          />
          <FeatureCard
            icon={Shield}
            title="Enforce"
            desc="Submit takedowns aligned to platform policy, track outcomes, and escalate repeat infringers with structured reporting."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="grid gap-6 rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-slate-200 ring-1 ring-white/10">
              <Quote className="h-4 w-4 text-sky-300" />
              Trusted process, clear outcomes
            </div>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
              Built for leadership visibility
            </h3>
            <p className="mt-3 text-slate-300">
              Most brand protection fails because results aren’t measurable.
              Brand Vigilant provides a monthly executive summary with trends,
              takedown rates, time-to-removal, and repeat infringer reduction.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-300">
              {[
                "Monthly KPI dashboard + narrative insights",
                "Case log with audit trail",
                "Priority matrix: high-risk first",
                "Support for legal, marketing, and customer teams",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-4 w-4 rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/25" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950/40 p-6 ring-1 ring-white/10">
            <div className="text-sm font-semibold">Sample Executive KPIs</div>
            <div className="mt-4 grid gap-3">
              <KPI label="Infringements discovered" value="1,248" />
              <KPI label="Takedowns successful" value="83%" />
              <KPI label="Avg. time to removal" value="42h" />
              <KPI label="Repeat infringers" value="Down 27%" />
            </div>
            <div className="mt-5 text-xs text-slate-400">
              Metrics shown are examples. Your reporting is customized to your
              industry and platforms.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <CTABox
            title="Want a fast risk snapshot?"
            desc="We’ll run a sample scan across marketplaces, social, and domains—then show what a real monthly report looks like."
            primary="Request Free Demo"
            primaryHref="/demo"
            secondary="Explore Services"
            secondaryHref="/services"
          />
          <CTABox
            title="Need help with a counterfeit surge?"
            desc="We can prioritize high-impact platforms and launch an enforcement sprint with evidence packs and takedowns."
            primary="Talk to Us"
            primaryHref="/contact"
            secondary="Read Blogs"
            secondaryHref="/blog"
          />
        </div>
      </section>
    </main>
  );
}

// =========================
// app/services/page.tsx
// =========================
import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, FileSearch, Shield, Scale, Users } from "lucide-react";
import { SectionTitle } from "@/components/site/SectionTitle";
import { ServiceRow } from "@/components/site/ServiceRow";
import { SERVICES } from "@/lib/services";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Brand Vigilant services: marketplace takedowns, social impersonation removal, typosquat monitoring, paid ads misuse detection, and OBP profiles.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <SectionTitle
        kicker="Services"
        title="Everything you need to protect your brand online"
        desc="Brand Vigilant supports end-to-end protection: discovery, verification, enforcement, and leadership reporting—across the platforms where brand abuse happens."
      />

      <div className="mt-10 grid gap-6">
        {SERVICES.map((s) => (
          <ServiceRow key={s.title} service={s} />
        ))}
      </div>

      <div className="mt-12">
        <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-slate-200 ring-1 ring-white/10">
                <BadgeCheck className="h-4 w-4 text-sky-300" />
                Enterprise onboarding
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                How onboarding works
              </h3>
              <p className="mt-3 text-slate-300">
                We keep onboarding lightweight and structured. You’ll get a clear
                scope, a reporting format, and a secure workflow for evidence and
                approvals.
              </p>

              <div className="mt-6 grid gap-3 text-sm text-slate-300">
                {[
                  "1) Brand assets: trademarks, logos, product catalog",
                  "2) Platform list + priority markets",
                  "3) Reporting cadence (weekly/monthly)",
                  "4) Enforcement workflow + escalation rules",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-4 w-4 rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/25" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-slate-950/40 p-6 ring-1 ring-white/10">
              <div className="text-sm font-semibold">Typical Deliverables</div>
              <div className="mt-4 grid gap-3">
                {[
                  {
                    icon: FileSearch,
                    title: "Monthly OBP report",
                    desc: "KPIs + insights + priority threats",
                  },
                  {
                    icon: Shield,
                    title: "Takedown tracker",
                    desc: "Status, timestamps, and outcomes",
                  },
                  {
                    icon: Scale,
                    title: "Evidence packs",
                    desc: "Screenshots, URLs, seller IDs",
                  },
                  {
                    icon: Users,
                    title: "Stakeholder alignment",
                    desc: "Legal + marketing + customer support",
                  },
                ].map((x) => (
                  <div
                    key={x.title}
                    className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                      <x.icon className="h-5 w-5 text-sky-300" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{x.title}</div>
                      <div className="text-sm text-slate-300">{x.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950"
            >
              {BRAND.primaryCta}
              <span className="text-slate-500">→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/12 transition hover:bg-white/8"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

// =========================
// app/blog/page.tsx
// =========================
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/site/SectionTitle";
import { BLOGS } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides and playbooks on online brand protection, counterfeit detection, social impersonation, typosquatting, and enforcement best practices.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <SectionTitle
        kicker="Blogs"
        title="Guides and playbooks for online brand protection"
        desc="Practical content for brand owners, legal teams, and e-commerce leaders—focused on what works in the real world."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {BLOGS.map((b) => (
          <Link
            key={b.slug}
            href={`/blog/${b.slug}`}
            className="text-left rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 transition hover:bg-white/7"
          >
            <div className="flex items-center justify-between">
              <div className="text-xs text-slate-400">{b.date}</div>
              <div className="text-xs text-slate-400">{b.readTime}</div>
            </div>
            <div className="mt-3 text-xl font-semibold tracking-tight">
              {b.title}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {b.summary}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-300">
              Read article
              <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

// =========================
// app/blog/[slug]/page.tsx
// =========================
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BLOGS, getBlogBySlug } from "@/lib/blogs";

export function generateStaticParams() {
  return BLOGS.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getBlogBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogBySlug(params.slug);
  if (!post) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to blog
      </Link>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
        {post.title}
      </h1>
      <div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>

      <div className="mt-8 grid gap-6">
        {post.sections.map((s) => (
          <section
            key={s.h}
            className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10"
          >
            <h2 className="text-xl font-semibold">{s.h}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {s.p}
            </p>
          </section>
        ))}
      </div>

      <div className="mt-10 rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
        <div className="text-lg font-semibold">Want help applying this?</div>
        <p className="mt-2 text-sm text-slate-300">
          Get a free demo with a sample scan across marketplaces, social, and
          domains.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/demo"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950"
          >
            Request Free Demo
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/12 transition hover:bg-white/8"
          >
            View Services
          </Link>
        </div>
      </div>
    </main>
  );
}

// =========================
// app/demo/page.tsx
// =========================
"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { BadgeCheck, Building2, Shield, Users, BarChart3 } from "lucide-react";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Field } from "@/components/site/Field";

// NOTE: metadata cannot be exported from a Client Component.
// If you want metadata, move the form into a child client component.

const FAQ = [
  {
    q: "Do you work with US and European brands while operating from India?",
    a: "Yes. Brand Vigilant is India-based and supports North American and European clients with flexible time-zone coverage, documented processes, and enterprise-grade reporting.",
  },
  {
    q: "Can you submit takedowns on our behalf?",
    a: "Yes. We can submit policy-based takedowns where permitted. For legal actions, we support your counsel with evidence packs and case logs.",
  },
  {
    q: "What does a free demo include?",
    a: "A short discovery call, a sample threat scan (marketplace + social + domain), and a walkthrough of the reporting you’ll receive.",
  },
  {
    q: "How quickly can you start?",
    a: "Typically within 3–5 business days after onboarding, depending on trademark documentation and platform access requirements.",
  },
];

export default function DemoPage() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <SectionTitle
        kicker="Free Demo"
        title="Get a sample brand risk scan"
        desc="Share your brand name and key marketplaces. We’ll prepare a quick snapshot and show how Brand Vigilant reports, prioritizes, and removes infringements."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
          <div className="text-lg font-semibold tracking-tight">
            What you’ll receive
          </div>
          <div className="mt-5 grid gap-3 text-sm text-slate-300">
            {[
              "Sample scan: marketplaces + social + domains",
              "Top threats ranked by customer risk",
              "Example takedown tracker",
              "Recommended next steps (30/60/90 days)",
            ].map((t) => (
              <div key={t} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-4 w-4 rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/25" />
                <span>{t}</span>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-3xl bg-slate-950/40 p-6 ring-1 ring-white/10">
            <div className="text-sm font-semibold">Ideal for</div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { icon: Building2, t: "E-commerce brands" },
                { icon: Shield, t: "Luxury & fashion" },
                { icon: Users, t: "Consumer goods" },
                { icon: BarChart3, t: "High-growth D2C" },
              ].map((x) => (
                <div
                  key={x.t}
                  className="flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10"
                >
                  <x.icon className="h-4 w-4 text-sky-300" />
                  <span className="text-sm text-slate-200">{x.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
          <div className="text-lg font-semibold tracking-tight">
            Request your demo
          </div>
          <p className="mt-2 text-sm text-slate-300">
            We respond within 1 business day.
          </p>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <Field label="Full Name" placeholder="Jane Doe" required />
            <Field
              label="Work Email"
              placeholder="jane@company.com"
              type="email"
              required
            />
            <Field label="Company" placeholder="Your Company" required />
            <Field
              label="Brand / Trademark"
              placeholder="Brand name to monitor"
              required
            />
            <Field
              label="Primary Marketplaces"
              placeholder="Amazon, eBay, Etsy, Walmart…"
              required
            />
            <Field
              label="Notes (optional)"
              placeholder="Any specific issues: counterfeits, fake social pages, scam domains…"
              textarea
            />

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950"
            >
              Request Demo
              <span className="text-slate-500">→</span>
            </button>

            {status === "success" && (
              <div className="rounded-2xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200 ring-1 ring-emerald-500/20">
                Thanks! Your demo request is captured. (In a real deployment,
                connect this form to email/CRM.)
              </div>
            )}

            <div className="text-xs text-slate-400">
              By submitting, you agree to be contacted about this request.
            </div>
          </form>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {FAQ.map((f) => (
          <div
            key={f.q}
            className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10"
          >
            <div className="text-sm font-semibold">{f.q}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {f.a}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

// =========================
// app/contact/page.tsx
// =========================
"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import { BRAND } from "@/lib/brand";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Field } from "@/components/site/Field";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <SectionTitle
        kicker="Contact"
        title="Talk to Brand Vigilant"
        desc="Tell us what you’re seeing—counterfeits, fake social accounts, scam domains, or ad misuse. We’ll suggest a practical plan and timeline."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
          <div className="text-lg font-semibold tracking-tight">
            Contact details
          </div>
          <div className="mt-5 grid gap-3 text-sm text-slate-300">
            <div className="flex items-start gap-3 rounded-2xl bg-slate-950/40 p-4 ring-1 ring-white/10">
              <Mail className="mt-0.5 h-5 w-5 text-sky-300" />
              <div>
                <div className="text-sm font-semibold">Email</div>
                <div className="text-sm text-slate-300">{BRAND.email}</div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-slate-950/40 p-4 ring-1 ring-white/10">
              <Phone className="mt-0.5 h-5 w-5 text-sky-300" />
              <div>
                <div className="text-sm font-semibold">Phone</div>
                <div className="text-sm text-slate-300">{BRAND.phone}</div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-slate-950/40 p-4 ring-1 ring-white/10">
              <MapPin className="mt-0.5 h-5 w-5 text-sky-300" />
              <div>
                <div className="text-sm font-semibold">Location</div>
                <div className="text-sm text-slate-300">{BRAND.location}</div>
              </div>
            </div>
          </div>

          <div className="mt-7 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <div className="text-sm font-semibold">Working model</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              India-based operations with EU/US client support. We work with
              documented processes, structured reporting, and clear escalation
              paths.
            </p>
            <div className="mt-4 grid gap-2 text-sm text-slate-300">
              {[
                "Time-zone overlap options",
                "Weekly + monthly reporting",
                "Confidentiality-first",
                "Policy-aligned enforcement",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-4 w-4 rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/25" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
          <div className="text-lg font-semibold tracking-tight">
            Send a message
          </div>
          <p className="mt-2 text-sm text-slate-300">
            We reply within 1 business day.
          </p>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <Field label="Name" placeholder="Your name" required />
            <Field
              label="Email"
              placeholder="you@company.com"
              type="email"
              required
            />
            <Field label="Company" placeholder="Company name" required />
            <Field
              label="What do you need help with?"
              placeholder="Counterfeits, impersonation, scam domains, ad misuse…"
              textarea
              required
            />

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950"
            >
              Send Message
              <ArrowRight className="h-4 w-4" />
            </button>

            {status === "success" && (
              <div className="rounded-2xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200 ring-1 ring-emerald-500/20">
                Message captured. (In a real deployment, connect to email/CRM.)
              </div>
            )}

            <div className="text-xs text-slate-400">
              We never sell your information.
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

// =========================
// app/robots.ts
// =========================
import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/brand";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BRAND.url}/sitemap.xml`,
  };
}

// =========================
// app/sitemap.ts
// =========================
import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/brand";
import { BLOGS } from "@/lib/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BRAND.url}/`, lastModified: now },
    { url: `${BRAND.url}/services`, lastModified: now },
    { url: `${BRAND.url}/blog`, lastModified: now },
    { url: `${BRAND.url}/demo`, lastModified: now },
    { url: `${BRAND.url}/contact`, lastModified: now },
  ];

  const blogRoutes: MetadataRoute.Sitemap = BLOGS.map((b) => ({
    url: `${BRAND.url}/blog/${b.slug}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...blogRoutes];
}

// =========================
// app/globals.css
// =========================
/* Tailwind will generate this file.
   Keep the default from create-next-app.

@tailwind base;
@tailwind components;
@tailwind utilities;

*/
