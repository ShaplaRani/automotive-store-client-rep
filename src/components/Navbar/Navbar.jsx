
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';
import logo from "../../assets/IMG-20231019-WA0000.jpg"
import swal from 'sweetalert';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const navLinks = <>

        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-700 underline" : ""
            }
        >
            <li className="text-lg md:text-xl font-semibold">Home</li>
        </NavLink>

        <NavLink
            to="/register"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-700 underline" : ""
            }
        >
            <li className="text-lg md:text-xl font-semibold">Register</li>

        </NavLink>
        <NavLink
            to="/addProduct"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-700 underline" : ""
            }
        >
            <li className="text-lg md:text-xl font-semibold"> Add Product</li>

        </NavLink>
        <NavLink
            to="/cart"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-700 underline" : ""
            }
        >   <li className="text-lg md:text-xl font-semibold"> My Cart</li>

        </NavLink>

    </>
    const handleSignOut = () => {
        logout()
            .then(result => {

                swal('Sign Out Successful')
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
                // swal(error.message)
            })
    }
    return (
        <div className=" w-10/12 m-auto  lg:flex  text-center   bg-base-100 mt-12 items-center justify-between">

             <img className='h-10'  src={logo} alt="" />

            {/* <a className=" normal-case font-bold text-4xl
                 bg-gradient-to-r from-orange-600 to-green-500 text-transparent bg-clip-text">
                 Automotive</a> */}
            <ul className=" flex gap-3 md:gap-5 justify-center mt-1 mb-2 ">

                {navLinks}

            </ul>

            <div className="">
                {
                    user ? <div className="flex justify-center items-center">
                        <img className="w-7 h-7 rounded-full mr-3" src={user.photoURL} alt="" />
                        <p className="text-lg font-medium mr-3">{user.displayName}</p>
                        <button onClick={handleSignOut} className="btn bg-blue-700 text-base text-white">Sign Out</button>
                    </div> :
                        <Link to="/login"> <button 
                        className="btn bg-blue-700 text-base text-white">Login</button></Link>
                }


            </div>
        </div>

    );
};

export default Navbar;