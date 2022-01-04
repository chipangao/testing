import { useState } from 'react';
import './Cdrawer.css'
import DrawerUI from '../UI/DrawerUI'

function Cdrawer(props) {

    const [visible, setVisible] = useState(null);

    const open = (e) => {
        setVisible(true)
    }
    const close = (e) => {
        setVisible(false)
    }
    const content = () => {
        return (
            <div>
                <div>header</div>
                <div>content</div>
            </div>)
    }
    return (
        <div >
            <button onClick={(e) => open(e)}>Drawer click</button>
            <DrawerUI
                visible={visible}
                open={() => open()}
                close={() => close()}
                content={content()} />

        </div>
    );
}

export default Cdrawer;
