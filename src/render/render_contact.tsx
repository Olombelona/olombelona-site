/**
 * Render Contact
 * 2023-2023
 * v 0.0.2
 * 
 * */

// REACT
import React, { FC } from "react";
import{ useContext } from "react";
// GATSBY
import { useStaticQuery, graphql } from "gatsby";

// APP
import { FormNetlify, Form } from "../components/hc.tsx";
import { useNode } from "../utils/hu.tsx";
import { RegionContext } from "../context.tsx";

// need to define properly the any... it's very too much and very lazy !
interface Props {
  style_form: any;
  style_cell: any;
  style_box : any;
}


export const RenderContact: FC<Props> =({style_box, style_cell, style_form}) => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "contact"}}}) {
          edges {
            node {
              frontmatter {
                title
                lang
                firstname
                lastname
                mail
                message
                send
              }
            }
          }
        }
      }
    `
  )
  const { lang } = useContext(RegionContext);
  
  const {frontmatter} = useNode(data, lang);
  const info = frontmatter;
  return <>
    <h1>{info.title}</h1>
    {/* <ContentMarkdownHtml html={node.html} /> */}
    <FormNetlify style={style_form} id_name="contact">
      {/* The dot notation give the opportunity to only load Form */}
      <Form.Input type="text" name="first name" placeholder={info.firstname}/>
      <Form.Input type="text" name="family name" placeholder={info.lastname}/>
      <Form.Input type="email" name="email" placeholder={info.mail}/>
      <Form.TextArea name="message" placeholder={info.message}/>
      <Form.Submit style_box={style_box} style_cell={style_cell} type="submit">{info.send}</Form.Submit>
    </FormNetlify>
  </>
}