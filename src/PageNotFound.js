import { Link } from "react-router-dom";

const PageNotFound = () => {
    return(
        <div className="not-found">
            <h2>Sorry</h2>
            <p>Page Not Found</p>
            <Link to="/">Back to homepage....</Link>
        </div>
    );
}

export default PageNotFound;