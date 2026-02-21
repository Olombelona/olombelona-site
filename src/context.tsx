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

////////////////////
// REGION CONTEXT
////////////////////
/*
* Here it's necessary to init the context, before because this one
* it use at the top level in the gatsby-browser.js
*/

export type Lang = "fr" | "en";

type type_region_context = {
  lang: Lang,
  set_lang: (newValue : Lang) => void
};

const init_region_context: type_region_context = {
  lang: "en",
  set_lang: function() {}
};

export const RegionContext = createContext<type_region_context>(init_region_context);

export const RegionContextProvider: FC<PropsContext> = ({children}) => {
	const browser_is = typeof window !== "undefined";
	let language: Lang = "fr"
  if(browser_is) {
    const nav_lang = window.navigator.language;
    if(!nav_lang.startsWith("fr")) {
		  language = "en";
	  }
	}

  const [lang, set_lang] = useState<Lang>(language);

	const setting = {
		lang, set_lang
	}
	return <RegionContext.Provider value={setting}>{children}</ RegionContext.Provider>
}




