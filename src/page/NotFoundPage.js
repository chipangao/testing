import { useEffect, useState } from 'react';

function NotFoundPage() {

    const [env, setenv] = useState(null);

    useEffect(() => {
        setenv(process.env.REACT_APP_ENVIRONMENT);
    }, []);

    return (
        <div>
            Not Found Page
        </div>
    );
}

export default NotFoundPage;
