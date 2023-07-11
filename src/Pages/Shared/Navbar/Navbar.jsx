import { Link, NavLink } from "react-router-dom";
// import logo from '../../../assets/img/logo.png'
import { FaUser } from 'react-icons/fa';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
// import useSelectedProducts from "../../../CustomHook/useSelectedProducts/useSelectedProducts";

const Navbar = () => {

    // const [customerSelectedProducts] = useSelectedProducts()

    return (

        <div className="fixed z-10 w-full">
            <div className="flex flex-row-reverse lg:flex-row items-center justify-between p-3 lg:p-4 bg-[#222222] shadow-xl font-bold text-black lg:text-white">
                <div className="flex items-center gap-2">
                    <img className="w-6" src={''} alt="" />
                    <Link to='/' className="lg:text-xl cursor-pointer text-white">Fleksa</Link>
                </div>
                <div className="hidden lg:block">
                    <div className="flex items-center gap-5">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            HOME
                        </NavLink>
                        <NavLink
                            to="/shop"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            SHOP
                        </NavLink>


                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            BLOGS
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            CONTACT
                        </NavLink>

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0}>
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item"></span>
                                </div>
                            </label>
                        </div>
                        {/* {customerSelectedProducts?.length} */}

                        <div className="flex items-center justify-between">
                            <FaUser className=' bg-slate-400 w-12 h-12 rounded-full cursor-pointer p-2' />
                        </div>

                        <button className="rounded-md bg-sky-700 text-white font-semibold px-4 py-3">Login</button>
                    </div>
                </div>

                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="lg:hidden">
                        <AiOutlineMenuUnfold className="text-white"></AiOutlineMenuUnfold>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                HOME
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/shop"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                SHOP
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/blog"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                BLOGS
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                CONTACT
                            </NavLink>

                        </li>

                        <li>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} >
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item"></span>
                                    </div>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center justify-between">
                                <FaUser className=' bg-slate-400 w-12 h-12 rounded-full cursor-pointer p-2' />
                            </div>
                        </li>

                        <li>
                            <button className="rounded-md bg-sky-700 text-white font-semibold px-4 py-3">Login</button>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;