/**
 * GUI
 * 2023-2023
 * v 0.0.2
 * 
 * */
// REACT
import React, { FC } from "react";
import { useContext } from "react";
// GATSBY
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
// APP
import tree from "./../../medias/tree.json";
import { Box } from "./hc.tsx";
import { get_css_value } from "../utils/hu.tsx";
import { RegionContext, Lang } from "../context.tsx";

interface DesignProps {
  className_box?: string;
  style_box?: any;
  className_cell?: string;
  style_cell?: any;
}
//////////////////////////
// NAVIGATION
////////////////////////


/////////////
// NAVIGATION
/////////////
interface NavProps extends DesignProps {
  children ?: any;
  to?: string;
  className?: string;
  style?: any;

}

// NavCell
//////////
export const NavCell: FC<NavProps> = ({to, className, style, children}) => {
	function mouse_click(event: { preventDefault: () => void; }) {
		event.preventDefault();
		if(to) navigate(to);
	}
	return <div className={className} style={style} onClick={mouse_click}
		role="button" tabIndex={0}
		onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') mouse_click(e); }}
	>{children}</div>
}

// NavCellBox
//////////////
export const NavCellBox: FC<NavProps> = ({to, className_box, style_box, className_cell, style_cell, children}) =>{
	return <Box className={className_box} style={style_box}>
			<NavCell to={to} className={className_cell} style={style_cell}>{children}</NavCell>
		</Box>
}

// ButtonCodeNav
/////////////////
interface ButtonProps {
  what: string;
  to: string;
}

export const ButtonCodeNav: FC<ButtonProps> = ({what, to}) => {
  const button_style = {
    color: "yellow",
    padding: 4,
    background: "magenta",
    fontSize: "1.25rem",
    borderRadius: 4,
    cursor: "pointer",
  }
  return (
    <NavCell to={to}>
      <span style={button_style}>{what}</span>
    </NavCell>
  )
}



// GO HOME
//////////////////
export const GoHome: FC<NavProps> = ({className_box, style_box, className_cell, style_cell}) => {
	const raw = get_css_value("--height_header_cell");
	const sizeNum = raw ? parseInt(raw, 10) : 100;

	return (
    <NavCellBox to="/" className_box={className_box} style_box={style_box} className_cell={className_cell} style_cell={style_cell}>
      <div style={{maxWidth: sizeNum, maxHeight: sizeNum}}>
        <StaticImage 	src="./../../medias/home.png" alt="Home" 
                      placeholder="blurred" layout="constrained"
                      // imgStyle={img_style} 
                      />
      </div>
	  </NavCellBox>
  )
}


/////////////////////////////
// LANG TOGGLE
/////////////////////////////

export const LangToggle: FC<DesignProps> = ({className_box, style_box, style_cell}) => {
  const { lang, set_lang } = useContext(RegionContext);
  const langs: Lang[] = ["fr", "en"];

  const style_toggle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  };

  return (
    <Box className={className_box} style={style_box}>
      <nav aria-label="Language" style={{...style_cell, ...style_toggle}}>
        {langs.map((code, idx) => (
          <React.Fragment key={code}>
            {idx > 0 && (
              <span aria-hidden="true" style={{ opacity: 0.5, userSelect: "none" }}>|</span>
            )}
            <button
              lang={code}
              aria-pressed={lang === code}
              onClick={() => set_lang(code)}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                font: "inherit",
                color: "inherit",
                cursor: lang === code ? "default" : "pointer",
                fontWeight: lang === code ? 700 : 400,
                opacity: lang === code ? 1 : 0.5,
              }}
            >
              {tree[code].lang[code]}
            </button>
          </React.Fragment>
        ))}
      </nav>
    </Box>
  );
};


