
import { useEffect, useState, Suspense, lazy } from 'react';
import { Navitems } from '../../navitems/Navitems';
import logo from '../../logo.svg';
import arrow from '../../icon/icons8-left-arrow-30.png';
import hamburgericon from '../../icon/icons8-menu-50.png';
import usericon from '../../icon/user.png';
import logouticon from '../../icon/icons8-logout-58 (1).png';
import Cmodal from '../../component/Cmodal';
import Cdrawer from '../../component/Cdrawer';
import Ctable from '../../component/Ctable';
import cancel from '../../icon/icons8-cancel-64.png'
import hamburger from '../../icon/icons8-menu-50.png'
import DrawerUI from '../../UI/DrawerUI'
import './Mobile_Home.css'

export default function Home() {

    const [componentName, setComponentName] = useState(null);
    const [ishamburger, setHamburger] = useState(null);

    function open() {
        setHamburger(true)
    }
    function close() {
        setHamburger(false)
    }

    function clickItem(e) {
        setComponentName(e);
    }

    function createNavItems(items) {
        return items.map((item, index) => {
            const title = item.title;
            return <li key={item.key}
                className={'navList_V'}
                onClick={() => clickItem(title)}>
                <div className={componentName === title ? 'title_hover' : 'title'}>{title}</div>
            </li>

        })
    }
    function drawerData() {
        return (
            <div className='Mobile_drawer'>
                <div className='input_drawer'><input /></div>
                <div className='list_drawer'>{createNavItems(Navitems)}</div>
                <div className='logout_drawer'>logout</div>
            </div>
        )
    }

    function userdata() {
        return (
            <span >
                <div><img src={usericon} alt="usericon" className="user_icon_V"></img>
                    <span className="user_name_V"><span data-text="marywrog" />
                    </span>
                </div>
            </span>
        )
    }

    function createHamburger() {
        return (
            <div>
                <div>{ishamburger ?
                    <span><img src={cancel} onClick={() => close()} className="hamburger" alt="hamburger" /></span> :
                    <span><img src={hamburger} onClick={() => open()} className="hamburger" alt="hamburger" /></span>}
                </div>
                <div>
                    <DrawerUI
                        visible={ishamburger}
                        open={() => open()}
                        close={() => close()}
                        content={drawerData()} />
                </div>
            </div>
        )
    }

    return (
        <div className='layout_background'>
            <div className='header'>
                {userdata()}
                {createHamburger()}
            </div>
        </div>
    )
}