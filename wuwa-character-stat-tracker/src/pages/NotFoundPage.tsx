import { Link } from "react-router"

export const NotFoundPage = () => {
    return (
        <div>
            <h1>Not Found Page</h1>
            <Link to={"/"}>
            <button>Go Back Home</button>
            </Link>
        </div>
    )
}