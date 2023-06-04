import Header from "./header";
import Sidebar from "./sidebar";
import Main from "./main";
import React, { useState } from 'react';

const Layout = ({children}) => {
    const [isLightMode, setIsLightMode] = useState(true);

    return ( 
        <div className={isLightMode && 'light-mode'}>
            <div className="dark-light" onClick={()=>{
                setIsLightMode(!isLightMode);
            }}>
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
            </div>
            <div className="app">
                <Header/>
                <div className="wrapper">
                    <Sidebar/>
                    <Main>
                        {children}
                    </Main>
                    <div className="overlay-app"></div>
                </div>
            </div>
        </div>
     );
}
 
export default Layout;