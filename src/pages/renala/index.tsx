import React, { FC } from "react";
import type { HeadFC } from "gatsby";
import { Layout } from "../../components/hc";
import { RenderRenala } from "../../render/hr";

const RenalaStorePage: FC = () => {
  return <Layout>
    <RenderRenala />
  </Layout>;
};

export default RenalaStorePage;

export const Head: HeadFC = () => <>
  <title>Renala — Disk Space Visualizer for macOS</title>
  <meta name="description" content="Renala helps you find what is taking space on your Mac with an interactive treemap, fast drill-down, and clear cleanup insights." />
</>;
