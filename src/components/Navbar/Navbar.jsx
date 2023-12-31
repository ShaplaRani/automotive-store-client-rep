
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext, useEffect, useState } from 'react';
// import logo from "../../assets/IMG-20231019-WA0000.jpg"
import logo from "../../assets/car-battery_7642466.png"
import swal from 'sweetalert';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);


    const [theme, setTheme] =useState(localStorage.getItem("theme")? localStorage.getItem("theme"):"light")
    useEffect(()=>{
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", localTheme)
    },[theme])

    const handleToggle = e => {
        if(e.target.checked){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }


    

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
        <div className=" w-10/12 m-auto  lg:flex  text-center    pt-10 
        items-center justify-between">

             <div className='flex gap-3 items-center justify-center'>
               <div>
               <img className='h-10 m-auto lg:m-0 mb-5 lg:mb-0'  src={logo} alt="" />
               </div>
                <h2 className='text-2xl font-semibold'>Automotive</h2>
             </div>
             

            <ul className=" flex gap-3 md:gap-5 justify-center mt-1 mb-2">

                {navLinks}

            </ul>

            <div className=" flex gap-4 justify-center mt-5 lg:mt-0">
                {
                    user ? <div className="flex justify-center items-center">
                        <img className="w-7 h-7 rounded-full mr-3" src={user.photoURL} alt="" />
                        <p className="text-lg font-medium mr-3">{user.displayName}</p>
                        <button onClick={handleSignOut} className="btn bg-blue-700 text-base text-white">Sign Out</button>
                    </div> :
                        <Link to="/login"> <button 
                        className="btn bg-blue-700 text-base text-white">Login</button></Link>
                }

                   <div className="flex-none">
  <label className="swap swap-rotate">
  

  <input type="checkbox" onChange={handleToggle} checked={theme === "light"? false : true} />
  

  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
 
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
  </label>
                   </div>
            </div>
        </div>

    );
};

export default Navbar;