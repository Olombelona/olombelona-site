/**
 * GUI
 * 2023-2023
 * v 0.0.2
 * 
 * */
// REACT
import React, { FC, ReactNode } from "react";
import { useContext } from "react";
// GATSBY
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
// APP
import tree from "./../../medias/tree.json";
import { Box } from "./hc.tsx";
import { get_css_value } from "../utils/hu.tsx";
import { RegionContext, HeaderContext } from "../context.tsx";

interface DesignProps {
  className_box?: string;
  style_box?: any;
  className_cell?: string;
  style_cell?: any;
}
///////////////////
// BUTTON
///////////////////
interface ButtonProps {
  what: string;
  to: string;
}

//////////////////////////
// NAVIGATION
////////////////////////


// ButtonCodeNav
////////////////
// in progress
///////////////
export const ButtonCodeNav : FC<ButtonProps> = ({what, to}) => {
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
        <code style={button_style}>{what}</code>
    </NavCell>
  )
}



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
/////////////////////////////
// DROPDOWN
////////////////////////////
/////////////////////////////


//////////////////
// DROPDOWN SIMPLE
//////////////////

interface DropdownProps extends NavProps {
  name?: string;
  is: boolean | null;
  set_is(action: boolean): void;
  offset? : string;
  value?: any;
}

export const Dropdown: FC<DropdownProps> = ({name,
                                            className_box, style_box, className_cell, style_cell, offset,
                                            is, set_is,  
                                            children}) => {
    const style_display: React.CSSProperties = {
      display: "flex",
      flexDirection: "column",
      padding: offset + " 0",
    }

    function mouse_click(event: { preventDefault: () => void; }) {
      event.preventDefault();
      is ? set_is(false) : set_is(true); // context
    }

    // close the dropdown after use it
    function close(event: { preventDefault: () => void; }) {
      event.preventDefault();
      set_is(false);
    }

    return <Box className={className_box} style={style_box}>
      <div className={className_cell} style={style_cell} onClick={mouse_click}
        role="button" tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') mouse_click(e); }}
      >{name}</div>
      {is ? 
      <div style={style_display} onClick={close}>
      {children}
      </div> : <></>}
    </Box>
}


interface DropdowRegionsProps extends DesignProps {
  offset?: string;
}

export const DropdowRegions: FC<DropdowRegionsProps>= ({className_box, style_box, className_cell, style_cell, offset}) => {
	const { lang_db_is, set_lang_db_is } = useContext(HeaderContext);
	const { lang } = useContext(RegionContext);

	return <Dropdown 	name={tree[lang].lang[lang]}
										style_box={style_box} style_cell={style_cell} 
										offset={offset}
										is={lang_db_is} set_is={set_lang_db_is}>
		<SelectRegions  style_box={style_box} style_cell={style_cell} 
								    values={Object.values(tree[lang].lang)} keys={Object.keys(tree[lang].lang)} />
	</Dropdown>
}

interface RegionProps extends DesignProps {
  children?: ReactNode,
  index: number,
  keys: string[],
}

// we cannot use key for the props because it's react reserved word
export const Region:FC<RegionProps>= ({className_box, style_box, className_cell, style_cell, keys, index, children}) => {
	const { set_lang } = useContext(RegionContext);


	function mouse_click(event: { preventDefault: () => void; }) {
		event.preventDefault();
		set_lang(keys[index] as "fr" | "en");
	}

	return <Box className={className_box} style={style_box}>
		<div className={className_cell} style={style_cell} onClick={mouse_click}
			role="button" tabIndex={0}
			onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') mouse_click(e); }}
		>
			{children}
		</div>
	</Box>
}

interface SelectRegionProps extends DesignProps {
  children?: ReactNode,
  keys: string[],
  values?: any
}

export const SelectRegions :FC<SelectRegionProps>= ({className_box, style_box, className_cell, style_cell, values, keys}) => {
	// we cannot use key for the props because it's react reserved word
	return <>
		{values.map((elem : any, idx : number) => {
			return <Region key={keys[idx]} className_box={className_box} style_box={style_box}
										className_cell={className_cell} style_cell={style_cell}
										keys={keys} index={idx}>
					{elem}
				</Region>
		})}
	</>	
}

//////////////////
//
// DON'T WORK YET
//
// DROPDOWN RADIO
//
// 
//
//////////////////


/*
export const DropdownRadio: FC<DropdownProps> = ({	name,
                                                    className_box, style_box, className_cell, style_cell, offset,
                                                    value, 
                                                    children}) => {
  // context
  const [toggle_is, set_toggle_is] = useContext(DropdownRadioContext);
  const checked = value === toggle_is;


  const style_display = {
    display: "flex",
    flexDirection: "column",
    padding: offset + " 0",
  }

  const style_input = {
    height:"0px",
    width: "0px",
    zindex:"1",
    opacity: "0",
    cursor: "pointer",
  }

  // close the dropdown after use it
  function close(event: { preventDefault: () => void; }) {
    event.preventDefault();
    set_toggle_is("");
  }
  
  return <Box className={className_box} style={style_box}>
			<label>
				<input
							style={style_input}
							// className="dropdown_input"
							id="radio_button"
							value={value}
							checked={checked}
							type="radio"
							onChange={({ target }) => {
								// some code if necessary
								set_toggle_is(target.value)}}
						/>
				<div className={className_cell} style={style_cell}>{name}</div>			
			</label>	
			{toggle_is === value ? <div onClick={close} style={style_display}>{children}</div> : <></>}
	</Box>
}
*/