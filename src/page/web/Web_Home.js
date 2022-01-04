
import { useState } from 'react';
import { Navitems } from '../../navitems/Navitems';
import logo from '../../logo.svg';
import arrow from '../../icon/icons8-left-arrow-30.png';
import hamburgericon from '../../icon/icons8-menu-50.png';
import usericon from '../../icon/user.png';
import logouticon from '../../icon/icons8-logout-58 (1).png';
import Cmodal from '../../component/Cmodal';
import Cdrawer from '../../component/Cdrawer';
import Ctable from '../../component/Ctable';
import Cfrom from '../../component/Cfrom';
import Canvas from '../../UI/Canvas';
import './Web_Home.css';
export default function Home(props) {

    const [ishamburger, setHamburger] = useState(true);
    const [componentName, setComponentName] = useState('Modal');

    function changedItem(e) {
        switch (e) {
            case 'Modal':
                return <Cmodal />;
            case 'Drawer':
                return <Cdrawer />;
            case 'Table':
                return <Ctable />;
            case 'From':
                return <Cfrom />
            default:
                return <Cmodal />;
        }
    }

    function open_H() {
        setHamburger(true)
    }
    function close_H() {
        setHamburger(false)
    }

    function clickItem(e) {
        setComponentName(e);
    }

    function hamburger() {
        return (
            <div >
                {ishamburger === true ?
                    <img src={arrow} className="arrow" alt="arrow" onClick={() => close_H()} /> :
                    <img src={hamburgericon} className="arrow" alt="arrow" onClick={() => open_H()} />}
            </div>
        )
    }
    function logout_btn() {
        return (
            <div >
                {ishamburger === true ?
                    <div><img src={logouticon} alt="logouticon" className="logout_icon"></img> Log Out</div> :
                    <div><img src={logouticon} alt="logouticon" className="logout_icon"></img></div>}
            </div>
        )
    }
    function userData() {
        return (<div className="header_right">
            <div className="user_name">
                <span data-text="mary" /></div>
            <div><img src={usericon} alt="usericon" className="header_icon"></img></div>
        </div>
        )
    }
    function createNavItems(items) {
        return items.map((item, index) => {
            const title = item.title;
            const cname = item.cName;
            return <div>
                <li key={item.key}
                    className='navList'
                    onClick={() => clickItem(title)}>
                    <div className={componentName === title ? 'title_hover' : 'title'}>
                        {ishamburger ? title : cname}
                    </div>
                </li>
            </div>
        })
    }

    return (
        <div className='layout_background'>
            <header>
                <img src={logo} className="logo" alt="logo" />
                <input className='input_position'></input>
                {userData()}
            </header>
            <div className='body_layout'>
                <div className='nav_bar'>
                    <div className={ishamburger ? 'open_nav' : 'close_nav'}>
                        {hamburger()}
                    </div>
                    <div className={ishamburger ? 'open_list' : 'close_list'}>
                        {createNavItems(Navitems)}
                    </div>
                    <div className={ishamburger ? 'open_logout' : 'close_logout'}>
                        {logout_btn()}
                    </div>
                </div>
                <div className='content'>
                    {changedItem(componentName)}
                </div>
            </div>
        </div>
    )
}