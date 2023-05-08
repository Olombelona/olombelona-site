/**
 * 
 * Context
 * version 0.0.1
 * 2023-2023
 * 
 * */

//REACT
import React, { FC } from "react";
import { useState, createContext, useEffect } from "react";

interface PropsContext {
  children? : React.ReactNode;
}

////////////////////
// REGION CONTEXT
////////////////////
/*
* Here it's necessary to init the context, before because this one
* it use at the top level in the gatsby-browser.js
*/

type type_region_context = {
  lang: string | null,
  set_lang: (newValue : string) => void
};

const init_region_context = {
  lang: "en",
  set_lang: function() {}
};

export const RegionContext = createContext<type_region_context>(init_region_context);

export const RegionContextProvider: FC<PropsContext> = ({children}) => {
	const browser_is = typeof window !== "undefined";
	let language = "fr"
  if(browser_is) {
    language = window.navigator.language;
    // Problem with this feature in typeScript, maybe becaise it's obsolete ???
    // https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/478
		// language = window.navigator.userLanguage || window.navigator.language;
	}
	if(language !== "fr") {
		language = "en";
	}
	
  const [lang, set_lang] = useState(language);

	const setting = {
		lang, set_lang
	}
	return <RegionContext.Provider value={setting}>{children}</ RegionContext.Provider>
}




////////////////////
// HEADER CONTEXT
////////////////////
type type_header_context = {
  other_db_is: boolean | null,
  set_other_db_is: (newValue : boolean) => void
	lang_db_is: boolean | null,
  set_lang_db_is: (newValue : boolean) => void
	num_item_bd: number | null,
  set_num_item_bd: (newValue : number) => void
};

const init_header_context = {
  // your code
};



export const HeaderContext = createContext<type_header_context>(init_header_context);

export const HeaderContextProvider: FC<PropsContext> = ({children}) => {
	const [other_db_is, set_other_db_is] = useState(false);
	const [lang_db_is, set_lang_db_is] = useState(false);
	const [num_item_bd, set_num_item_bd] = useState(0);

	const setting = {
		other_db_is, set_other_db_is,
		lang_db_is, set_lang_db_is,
		num_item_bd, set_num_item_bd,
	}
	return <HeaderContext.Provider value={setting}>{children}</ HeaderContext.Provider>
}



//////////////////////
// in progress
// DROPDOWN CONTEXT
///////////////////

// type type_dropdown_context = {
//   default_value: string | null,
// 	value: any | null,

// };

// const init_dropdown_context = {
// 	default_value: "",
// 	value: "",
// };

// interface PropsDropdownContext extends PropsContext {
//   default_value : string;
// }

// export const DropdownRadioContext = createContext<type_dropdown_context>(init_dropdown_context);

// export const DropdownContextProvider: FC<PropsDropdownContext> = ({ children, default_value}) => {
// 	const [toggle_is, set_toggle_is] = useState("");
// 	useEffect(() => {
//     set_toggle_is(default_value);
//   }, [default_value]);

//   function toggle_state(value: React.SetStateAction<string>) {
//     set_toggle_is(value);
//   }

// 	const setting = [toggle_is, toggle_state];

// 	return (
//     <DropdownRadioContext.Provider value={setting}>
//       <div role="radiogroup">{children}</div>
//     </DropdownRadioContext.Provider>
//   );
// }