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
import { RenderContact } from "../render/h_r.tsx"
import { Layout } from "../components/h_c.tsx";
import { get_css_value } from "../utils/h_u.tsx";


const Contact: FC<PageProps> = () => {
  const style_cell = {
    width: "100px",
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
