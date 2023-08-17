/**
 * Index
 * 2023-2023
 * v 0.0.3
 * 
 * */
// REACT
import React, { FC } from "react";
// GATSBY
import type { HeadFC, PageProps } from "gatsby"
// APP
import { RenderContact } from "../render/hr.tsx"
import { Layout } from "../components/hc.tsx";
import { get_css_value } from "../utils/hu.tsx";


const Contact: FC<PageProps> = () => {
  const style_cell = {
    width: "100px",
    height: "42px",
    fontFamily: get_css_value("--font_title"),
    fontWeight: 700,
    fontSize: 18,
    color: get_css_value("--color_text_light"),
    background: get_css_value("--color_button")
  }

  const style_box = {
    padding:"0.5em",
  }

  const style_form = {
    display: "flex",
    flexDirection: "column"
  }
  return (
    <Layout>
      <RenderContact  style_box={style_box}
                      style_cell={style_cell}
                      style_form={style_form}/>
    </Layout>
  )
}

export default Contact;

export const Head: HeadFC = () => <title>Olombelona Software</title>
