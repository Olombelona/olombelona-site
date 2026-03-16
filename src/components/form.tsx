/**
 * Form
 * 2023-2023
 * v 0.0.2
 *
 * */
import React, { FC } from "react";

// https://stackoverflow.com/questions/60883388/using-dot-notation-with-functional-component-in-typescript
// https://www.skovy.dev/blog/using-component-dot-notation-with-typescript-to-create-a-set-of-components?seed=1egekj

const FORMSPREE_ENDPOINT = process.env.GATSBY_FORMSPREE_ENDPOINT || "https://formspree.io/f/XXXXXXXX";

interface FormProps {
  children?: any;
  id_name?: string;
  method?: string;
  className?: string;
  style?: any;
}

interface FormFieldProps {
  children?: any;
  className_box?: string;
  style_box?: any;
  className_cell?: string;
  style_cell?: any;
  type?: string;
  name?: string;
  placeholder?: string;
}

export const Form: FC<FormProps> & {  Input: typeof FormInput,
                                  TextArea: typeof FormTextArea,
                                  Submit: typeof FormSubmit,} = (props) => {
	return (
    <form name={props.id_name} method={props.method} action={FORMSPREE_ENDPOINT}>
      <input type="text" name="_gotcha" style={{display: "none"}} tabIndex={-1} autoComplete="off" />
			<div className={props.className} style={props.style}>
				{props.children}
			</div>
    </form>
  );
}

export const FormNetlify : FC<FormProps> = (props) => {
  return (
		<>
		<Form {...props} method="POST" />
		</>
  );
}


// The dot notation give the opportunity to only export Form, because the function is attached to From
const FormInput: FC<FormFieldProps> = ({className_box, style_box, className_cell, style_cell, type, name, placeholder}) => {
	return <div className={className_box} style={style_box}>
		<label>
			<input className={className_cell} style={style_cell} type={type} name={name} placeholder={placeholder} aria-label={placeholder} />
		</label>
	</div>
}
 
// The dot notation give the opportunity to only export Form, because the function is attached to From
const FormTextArea: FC<FormFieldProps> =({className_box, style_box, className_cell, style_cell, placeholder, name}) => {
	return <div className={className_box} style={style_box}>
		<label>
			<textarea className={className_cell} style={style_cell} name={name} placeholder={placeholder} aria-label={placeholder}/>
		</label>
	</div>
}

// The dot notation give the opportunity to only export Form, because the function is attached to From
const FormSubmit : FC<FormFieldProps> =({className_box, style_box, className_cell, style_cell, type, children})  => {
	return <div className={className_box} style={style_box}>
			<button className={className_cell} style={style_cell} type={type as "button" | "reset" | "submit" | undefined}>{children}</button>
		</div>

}

Form.Input = FormInput;
Form.TextArea = FormTextArea;
Form.Submit = FormSubmit;
