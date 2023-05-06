/**
 * Render Contact
 * 2023-2023
 * v 0.0.1
 * 
 * */

// REACT
import React, { FC } from "react";

// APP
import { FormNetlify, Form } from "./h.tsx";
import { useNode } from "./../utils/h";

// need to define properly the any... it's very too much and very lazy !
interface Props {
  style_form: any;
  style_cell: any;
  style_box : any;
  data : any;
}


export const RenderPageContact: FC<Props> =({data, style_box, style_cell, style_form}) => {
  const node = useNode(data);
  return <>
    {/* <h1>{node.frontmatter.title}</h1> */}
    {/* <ContentMarkdownHtml html={node.html} /> */}
    <FormNetlify style={style_form} id_name="contact">
      {/* The dot notation give the opportunity to only load Form */}
      <Form.Input type="text" name="first name" placeholder={node.frontmatter.firstname}/>
      <Form.Input type="text" name="family name" placeholder={node.frontmatter.lastname}/>
      <Form.Input type="email" name="email" placeholder={node.frontmatter.mail}/>
      <Form.TextArea name="message" placeholder={node.frontmatter.message}/>
      <Form.Submit style_box={style_box} style_cell={style_cell} type="submit">{node.frontmatter.send}</Form.Submit>
    </FormNetlify>
  </>
}