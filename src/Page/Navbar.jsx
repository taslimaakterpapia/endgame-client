import { Link } from "react-router-dom";


const NavBar = () => {
    const navItem = (
        <>
            <li >
                <Link to="/">Home</Link>
            </li>
            <li >
                <Link to="/college">College</Link>
            </li>
            <li >
                <Link to="/admission">Admission</Link>
            </li>
            <li >
                <Link to="/myCollege">My College</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>


        </>
    );
    return (
        <div className="navbar  bg-gray-700 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 text-white"
                    >
                        {navItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl">CampusSystem</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navItem}</ul>
            </div>
            <div className="navbar-end">
               
            </div>
        </div>
    );
};

export default NavBar;