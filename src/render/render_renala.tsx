import React, { FC, useContext } from "react";
import { RegionContext } from "../context";
import { useFadeIn } from "../utils/hu";
import { RENALA_CONTENT, APP_STORE_URL } from "./renala_content";
import "./renala.css";

const Screenshot: FC<{
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}> = ({ src, alt, className = "", loading = "lazy" }) => (
  <picture>
    <source srcSet={`${src}.webp`} type="image/webp" />
    <img
      src={`${src}.png`}
      alt={alt}
      width={1440}
      height={900}
      loading={loading}
      className={`renala__screenshot ${className}`}
    />
  </picture>
);

const FadeIn: FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  const [ref, visible] = useFadeIn();
  return (
    <div
      ref={ref}
      className={`renala__fade-in ${visible ? "renala__fade-in--visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export const RenderRenala: FC = () => {
  const { lang } = useContext(RegionContext);
  const c = RENALA_CONTENT[lang];

  return (
    <div className="renala">
      <noscript>
        <style>{`.renala__fade-in { opacity: 1 !important; transform: none !important; }`}</style>
      </noscript>

      {/* Hero */}
      <section className="renala__hero" aria-labelledby="renala-hero-heading">
        <h1 id="renala-hero-heading" className="renala__hero-title">
          {c.hero.title}
        </h1>
        <p className="renala__hero-tagline">
          {c.hero.tagline.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {i > 0 && <br />}
              {line}
            </React.Fragment>
          ))}
        </p>
        <div className="renala__full-width renala__showcase">
          <div className="renala__showcase-inner">
            <Screenshot
              src="/renala/01-hero-treemap"
              alt={c.hero.heroAlt}
              className="renala__hero-screenshot"
              loading="eager"
            />
          </div>
        </div>
        <div style={{ paddingTop: 40 }}>
          <a
            href={APP_STORE_URL}
            rel="noopener"
            className="renala__btn renala__btn--primary"
          >
            {c.hero.ctaLabel}
          </a>
        </div>
      </section>

      {/* Features */}
      {c.features.map((feature, i) => (
        <FadeIn key={i}>
          <section aria-labelledby={`renala-feature-${i}-heading`}>
            <div className="renala__feature-text">
              <h2 id={`renala-feature-${i}-heading`}>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
            <div
              className={`renala__full-width renala__showcase`}
            >
              <div className="renala__showcase-inner">
                <div
                  className={`renala__feature-image-wrap ${
                    i % 2 === 0
                      ? "renala__feature-image-wrap--left"
                      : "renala__feature-image-wrap--right"
                  }`}
                >
                  <Screenshot src={feature.image} alt={feature.imageAlt} />
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
      ))}

      {/* Accessibility */}
      <FadeIn>
        <section
          className="renala__a11y"
          aria-labelledby="renala-a11y-heading"
        >
          <span className="renala__a11y-icon" aria-hidden="true">
            &#x2328;&#xFE0F;
          </span>
          <h2 id="renala-a11y-heading">{c.accessibility.title}</h2>
          <p>{c.accessibility.description}</p>
          <ul className="renala__a11y-list">
            {c.accessibility.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      </FadeIn>

      {/* Privacy */}
      <FadeIn>
        <section
          className="renala__privacy"
          aria-labelledby="renala-privacy-heading"
        >
          <span className="renala__privacy-icon" aria-hidden="true">
            &#x1F512;
          </span>
          <h2 id="renala-privacy-heading">{c.privacy.title}</h2>
          <p>{c.privacy.description}</p>
        </section>
      </FadeIn>

      {/* Dark mode */}
      <FadeIn>
        <div className="renala__full-width renala__showcase">
          <section
            className="renala__darkmode"
            aria-labelledby="renala-darkmode-heading"
          >
            <h2 id="renala-darkmode-heading">{c.darkMode.title}</h2>
            <p>{c.darkMode.description}</p>
            <Screenshot
              src="/renala/05-dark-mode"
              alt={c.darkMode.imageAlt}
            />
          </section>
        </div>
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <div className="renala__full-width renala__cta">
          <section aria-labelledby="renala-cta-heading">
            <h2 id="renala-cta-heading">{c.cta.title}</h2>
            <p className="renala__cta-subtitle">{c.cta.subtitle}</p>
            <a
              href={APP_STORE_URL}
              rel="noopener"
              className="renala__btn renala__btn--cta"
            >
              {c.cta.ctaLabel}
            </a>
            <p className="renala__cta-requirements">{c.cta.requirements}</p>
          </section>
        </div>
      </FadeIn>

      {/* Footer links */}
      <nav className="renala__links" aria-label="Renala">
        <a href={c.links.supportHref}>{c.links.support}</a>
        <a href={c.links.privacyHref}>{c.links.privacy}</a>
      </nav>
    </div>
  );
};
