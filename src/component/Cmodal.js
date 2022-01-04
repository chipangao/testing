import { useState } from 'react';
import './Cmodal.css';
import cancal from '../icon/icons8-cancel-64.png'
import ModalUI from '../UI/ModalUI'

function Cmodal(props) {

    const [visible, setVisible] = useState(null);

    const open = (e) => {
        setVisible(true)
    }
    const close = (e) => {
        setVisible(false)
    }
    const modalTitle = () => {
        return (
            <div>
                My Modal header
            </div>)
    }
    const modalTitleCancel = () => {
        return (
            <div>
                <img className='img-sizing' src={cancal} alt='cancel' />
            </div>)
    }
    const modalCotent = () => {
        return (
            <div>
                <div>This is a Modal Content...</div>
                <div>This is a Modal Content...</div>
                <div>This is a Modal Content...</div>
            </div>)
    }
    const modalFooter = () => {
        return (
            <div>
                <a>ok</a> &nbsp;
                <a onClick={() => setVisible(false)}>
                    cannel
                </a>
            </div>)
    }
    return (
        <div>
            <button onClick={(e) => open(e)}>Modal click</button>
            123
            <ModalUI
                visible={visible}
                open={() => open()}
                close={() => close()}
                cotent={modalCotent()}
                title={modalTitle()}
                footer={modalFooter()}
                titleCancel={modalTitleCancel()} />
        </div>
    )

}

export default Cmodal;
