/**
 * Layout
 * 2023-2023
 * v 0.0.2
 * 
 * */
// REACT
import React, { FC } from "react";
// OTHER
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'
// APP
import { Header } from "./header";
import { Footer } from "./footer";
import { get_css_value } from "../../utils/tools";
import './layout.css';

interface Props {
  children? : React.ReactNode;
}
export const Layout: FC<Props> = ({children}) => {
  const style_content_box = {
    background : get_css_value("--layout_bg") ?? undefined,
    borderTop: `2px solid ${get_css_value("--color_line") ?? "transparent"}`,
  }
  const style_content_cell = {
    color: get_css_value("--color_text") ?? undefined,
    margin: "0 auto",
    paddingBottom: 24,
    paddingLeft: 42,
    paddingRight: 42,
    maxWidth: get_css_value("--width_content_max") ?? undefined,
  }
  return (<>
    <Header/>
    <div style={style_content_box}>
      <div style={style_content_cell}>
        {children}
      </div>
    </div>
    <Footer/>  
  </>
  );
};
// export const Layout: FC<Props> = ({children}) => {
//   return (<>
//     { <Header/> || <Skeleton/> }
//     <div style={style_content_box}>
//       <div style={style_content_cell}>
//         {children || <Skeleton/>}
//       </div>
//     </div>
//     { <Footer/> || <Skeleton/> }
//     </>
//   );
// };
