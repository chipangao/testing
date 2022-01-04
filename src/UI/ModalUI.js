import './Modal.css'

function ModalUI(props) {

    const overLayClick = (e) => {
        props.close(false);
    }

    const open = (e) => {
        return (
            <div>
                {props.visible ? <div className='_overlay' onClick={(e) => overLayClick(e)}></div> : null}
                <div className={props.visible ? 'open_modal' : 'close_modal'} onClick={(e) => e.stopPropagation()}>
                    <div className="_modal_header">
                        <div className="_modal_title">
                            {props.title}
                        </div>
                        <div className="_modal_Title_cancel" onClick={() => props.close()}>
                            {props.titleCancel}
                        </div>
                    </div>
                    <div className="_modal_cotent">{props.cotent}</div>
                    <div className="_modal_footer">{props.footer}</div>
                </div>
            </div>
        )
    }

    return (
        <div >
            {props.visible === null ? null : open()}
        </div>
    );

}

export default ModalUI;
