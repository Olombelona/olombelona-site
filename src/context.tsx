/**
 * 
 * Context
 * version 0.0.1
 * 2023-2023
 * 
 * */

//REACT
import React, { FC } from "react";
import { useState, useEffect, createContext } from "react";

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

const LANG_STORAGE_KEY = "olombelona_lang";

export const RegionContextProvider: FC<PropsContext> = ({children}) => {
  // Always initialise with "fr" to match SSR — client language is resolved
  // after hydration in the useEffect below, avoiding hydration mismatches.
  const [lang, set_lang_state] = useState<Lang>("fr");

  const set_lang = (newLang: Lang) => {
    localStorage.setItem(LANG_STORAGE_KEY, newLang);
    set_lang_state(newLang);
  };

  useEffect(() => {
    const stored = localStorage.getItem(LANG_STORAGE_KEY) as Lang | null;
    if (stored === "fr" || stored === "en") {
      set_lang_state(stored);
    } else if (!window.navigator.language.startsWith("fr")) {
      set_lang_state("en");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

	const setting = { lang, set_lang };
	return <RegionContext.Provider value={setting}>{children}</RegionContext.Provider>;
}




