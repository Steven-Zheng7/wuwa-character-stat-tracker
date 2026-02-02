import { Link } from "react-router"

export const NavBar = () => {
    return (
        <div className="bg-red-400">
            <Link to={"/Next-Page"}>
                <button>One</button>
            </Link>

            <button>Two</button>
            <button>Three</button>
        </div>
    )
}