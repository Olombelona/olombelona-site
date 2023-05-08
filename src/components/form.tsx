/**
 * Form
 * 2023-2023
 * v 0.0.1
 * 
 * */
import React, { FC } from "react";

// https://stackoverflow.com/questions/60883388/using-dot-notation-with-functional-component-in-typescript
// https://www.skovy.dev/blog/using-component-dot-notation-with-typescript-to-create-a-set-of-components?seed=1egekj


// need to define properly the any... it's very too much and very lazy !
interface Props {
  children? : any;
  // children? : React.ReactNode;
  id_name: any;
  method: any;
  form_name : any;
  className : any;
  style : any;

  className_box: any;
  style_box : any;
  className_cell : any;
  style_cell: any;
  type : any;
  name : any;
  placeholder : any;
}

// https://www.seancdavis.com/posts/how-to-use-netlify-forms-with-gatsby/

export const Form: FC<Props> & {  Input: typeof FormInput, 
                                  TextArea: typeof FormTextArea, 
                                  Submit: typeof FormSubmit,} = (props) => {
	return (
    <form name={props.id_name} method={props.method} data-netlify={'props.data_netlify'}>
      <input type="hidden" name="form-name" value={props.form_name} />
			<div className={props.className} style={props.style}>
				{props.children}
			</div>
    </form>
  );
}

export const FormNetlify : FC<Props> = (props) => {
  // Problem with props method, because the value "POST" have a risk to be remplace by the props incoming.
  // If I understand well the functionnement of the warning message
  return (
		<>
		<Form method="POST" data-netlify="true" {...props}>
		{/* <Form className={props.className} style={props.style} method="POST" data-netlify="true" {...props}> */}
			{props.children}
		</Form>
		</>
  );
}


// The dot notation give the opportunity to only export Form, because the function is attached to From
const FormInput: FC<Props> = ({className_box, style_box, className_cell, style_cell, type, name, placeholder}) => {
	return <div className={className_box} style={style_box}>
		<label>
			<input className={className_cell} style={style_cell} type={type} name={name} placeholder={placeholder} />
		</label>
	</div>
}
 
// The dot notation give the opportunity to only export Form, because the function is attached to From
const FormTextArea: FC<Props> =({className_box, style_box, className_cell, style_cell, placeholder, name}) => {
	return <div className={className_box} style={style_box}>
		<label>
			<textarea className={className_cell} style={style_cell} name={name} placeholder={placeholder}/>
		</label>
	</div>
}

// The dot notation give the opportunity to only export Form, because the function is attached to From
const FormSubmit : FC<Props> =({className_box, style_box, className_cell, style_cell, type, children})  => {
	return <div className={className_box} style={style_box}>
			<button className={className_cell} style={style_cell} type={type}>{children}</button>
		</div>

}

Form.Input = FormInput;
Form.TextArea = FormTextArea;
Form.Submit = FormSubmit;
