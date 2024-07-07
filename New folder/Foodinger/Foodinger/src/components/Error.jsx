    // import { useRouteError } from 'react-router-dom';
import './Error.css'
    const Error = () => {
        // const err = useRouteError();
        // console.log(err);

        return (
            <div className="error">
                <h1 className="error-h">Oops!</h1>
                <h2>Something Went Wrong</h2>
                {/* <h3>Status: {error.status}</h3> */}
                {/* <p>{error.message}</p> */}
            </div>
        );
    };

    export default Error;
