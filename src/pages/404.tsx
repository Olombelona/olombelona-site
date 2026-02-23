import React, { useContext } from "react";
import { Link } from "gatsby";
import type { HeadFC } from "gatsby";
import { Layout } from "../components/hc";
import { RegionContext } from "../context";

const copy = {
  fr: { heading: "Page introuvable", body: "Cette page n'existe pas.", home: "Retour à l'accueil" },
  en: { heading: "Page not found",   body: "This page does not exist.", home: "Back to home" },
};

const NotFoundPage = () => {
  const { lang } = useContext(RegionContext);
  const t = copy[lang];
  return (
    <Layout>
      <h1>{t.heading}</h1>
      <p>{t.body}</p>
      <p><Link to="/">{t.home}</Link></p>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Olombelona — 404</title>;
