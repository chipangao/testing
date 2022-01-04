import { useEffect, useState } from 'react';
import './Loading.css'
import loading from '../icon/loading-process.png';
function Loading(props) {

    return (
        <div className='_overlay'>
            <div><img src={loading} className="loading_logo" alt="loading..." /></div>
            <div className="loading_text">loading
                <span className="dot1">.</span>
                <span className="dot2">.</span>
                <span className="dot3">.</span>
            </div>
        </div >
    );
}

export default Loading;
