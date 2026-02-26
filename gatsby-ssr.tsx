//REACT
import React from "react";
// APP
import { RegionContextProvider } from "./src/context";

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => (
  <RegionContextProvider>{element}</RegionContextProvider>
)

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
}: {
  setHeadComponents: (components: React.ReactNode[]) => void;
  setHtmlAttributes: (attributes: Record<string, string>) => void;
}) => {
  setHtmlAttributes({ lang: "fr" });
  setHeadComponents([
    <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />,
    <meta key="robots" name="robots" content="noindex, nofollow" />,
  ]);
};
