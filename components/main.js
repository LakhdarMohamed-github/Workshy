const Main = ({children}) => {
    return ( 
        <div className="main-container">
            <div className="main-header">
            {/* <a className="menu-link-main" href="#">All Apps</a> */}
            <div className="menu-link-main">
                Brand list
            </div>
            {/* margin-left: auto; */}
            {/* margin-right: 3em; */}
            <div style={{
                marginLeft:"auto",
                marginRight: '3em'
            }} className="header-menu">
                <button className="content-button" style={{
                    margin:0
                }} onClick={()=>{
                    alert("message")
                }}>Generate</button>
                {/* <a className="main-header-link is-active" href="#">Desktop</a>
                <a className="main-header-link" href="#">Mobile</a>
                <a className="main-header-link" href="#">Web</a> */}
        
            </div>
          </div>
          <div className="content-wrapper">
                {children}
          </div>
        </div>
     );
}
 
export default Main;