import React, { useEffect, useState } from "react";
import LOGO from '../asset/images/logo.png'
const NavBar = (props) => {
    const navWIdth = 100;
    const [windowSize, setWindowSize] = useState({ height: window.innerHeight, width: window.innerWidth, headerHeight: 70 })
    const onresize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight, headerHeight: 70 })
    }
    useEffect(() => {
        window.addEventListener('resize', onresize)
        return () => { return window.removeEventListener('resize', onresize) }
    }, [])
    return (
        <React.Fragment>
            <header className="intrality_header fixed bg-transperent df row row-center space-between p-primary" style={{ height: windowSize.headerHeight + 'px' }}>
                <div className="header-logo">
                    <img src={LOGO} alt="" />
                </div>
                <button className="btn btn-secondary radius-primary">
                    Sign In
                </button>
            </header>
            <nav className="fixed df bg-transperent" style={{ width: navWIdth + 'px', height: (windowSize.height - windowSize.headerHeight) + 'px', top: windowSize.headerHeight + 'px' }}>
                <ul className="df fit-content column space-between">
                    <div className="df row flex-1 column">
                        <button className="df flex-1 radius-primary row p-priamry center column nav_btn">
                            <img src="https://www.freeiconspng.com/uploads/home-button-icon-png-23.png" alt="" />
                            <span className="txt-primary description">sdlfkjsdf</span>
                        </button>
                        <button className="df flex-1 radius-primary row p-priamry center column nav_btn">
                            <img src="https://www.freeiconspng.com/uploads/home-button-icon-png-23.png" alt="" />
                            <span className="txt-primary description">me</span>
                        </button>
                        <button className="df flex-1 radius-primary row p-priamry center column nav_btn">
                            <img src="https://www.freeiconspng.com/uploads/home-button-icon-png-23.png" alt="" />
                            <span className="txt-primary description">sdlfkjsdf</span>
                        </button>
                        <button className="df flex-1 radius-primary row p-priamry center column nav_btn">
                            <img src="https://www.freeiconspng.com/uploads/home-button-icon-png-23.png" alt="" />
                            <span className="txt-primary description">sdlfkjsdf</span>
                        </button>
                    </div>
                    <button className="df flex-1 radius-primary row p-priamry center column nav_btn">
                            <img src="https://www.freeiconspng.com/uploads/home-button-icon-png-23.png" alt="" />
                            <span className="txt-primary description">sdlfkjsdf</span>
                        </button>

                </ul>
            </nav>
            <main>{props.children}</main>
        </React.Fragment>
    )
}
export default NavBar;