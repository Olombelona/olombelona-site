/**
 * 
 * Context
 * version 0.0.1
 * 2023-2023
 * 
 * */

//REACT
import React, { FC } from "react";
import { useState, createContext } from "react";

interface PropsContext {
  children? : React.ReactNode;
}

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