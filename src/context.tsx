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
	const browser_is = typeof window !== "undefined";
	let language: Lang = "fr";
  if (browser_is) {
    const stored = localStorage.getItem(LANG_STORAGE_KEY) as Lang | null;
    if (stored === "fr" || stored === "en") {
      language = stored;
    } else {
      const nav_lang = window.navigator.language;
      if (!nav_lang.startsWith("fr")) {
        language = "en";
      }
    }
  }

  const [lang, set_lang_state] = useState<Lang>(language);

  const set_lang = (newLang: Lang) => {
    if (browser_is) localStorage.setItem(LANG_STORAGE_KEY, newLang);
    set_lang_state(newLang);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

	const setting = { lang, set_lang };
	return <RegionContext.Provider value={setting}>{children}</RegionContext.Provider>;
}




