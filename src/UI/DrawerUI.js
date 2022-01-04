import './Drawer.css'

function DrawerUI(props) {

    const overLayClick = (e) => {
        props.close(false);
    }

    const open = (e) => {
        return (
            <div>
                {props.visible ? <div className='_overlay' onClick={(e) => overLayClick(e)}></div> : null}
                <div className={props.visible ? 'open_Cdrawer' : 'close_Cdrawer'} onClick={(e) => e.stopPropagation()}>
                    <div>{props.content}</div>
                </div>
            </div>
        )
    }

    return open()
}

export default DrawerUI;
