import { useEffect, useState, Suspense, lazy } from 'react';
import './HomePage.css'

const Web = lazy(() => import('./web/Web_Home'));
const Mobile = lazy(() => import('./mobile/Mobile_Home'));

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}
function HomePage(props) {

    //const [env, setenv] = useState(null);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        //setenv(process.env.REACT_APP_ENVIRONMENT);
        //setComponentName('Modal');
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (<div>{windowDimensions.width > 1024 ? <Web /> : <Mobile />}</div>)
}

export default HomePage;
