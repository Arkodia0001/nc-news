import { Link } from "react-router-dom";

const ErrorPage = ({ status, msg}) => {
    return (
        <div>
            <p>{`${status || 404}, ${msg}`}</p>
            <p>Oops, something went wrong! Please check the URL and refresh</p>
            <Link to="/articles">Click here to return home</Link>
        </div>
    )
}

export default ErrorPage