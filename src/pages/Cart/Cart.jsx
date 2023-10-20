import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

import { useContext } from "react";
 import { AuthContext } from "../../Provider/AuthProvider";


const Cart = () => {

       const { user} = useContext(AuthContext);
       console.log(user.email);

    const loadedCarts = useLoaderData();
    const [carts, setCarts] = useState( loadedCarts);
    console.log(carts);

    //filter

    useEffect(() => {
       const similar = carts.filter( cart => cart.email == user.email )
       setCarts(similar)

    },[carts, user])
   
      
    


    const handleDelete = id => {
        console.log(id);
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {

            fetch(`https://automotive-store-server-2np4zgyhp-shapla-sarkers-projects.vercel.app/cart/${id}`,{
              method:"DELETE"
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if(data.deletedCount > 0){
                Swal.fire(
                  'Deleted!',
                  'Your cart has been deleted.',
                  'success'
                )
                  const remainingCart = carts.filter(cart => cart._id !== id);
                  setCarts(remainingCart);
              }
          })
           
          }
        })

    }
    
  
    return (
        <div className="w-11/12 lg:w-10/12 my-20 m-auto">
           <h2 className="text-center mb-10 text-3xl font-semibold ">
            All Selected <span className="text-orange-700">Products</span></h2>
          <div className="  w-full lg:w-7/12 m-auto   ">
          
             {
              carts.length > 0 ?
               carts?.map( cart =>  <div key={cart._id} className="relative flex w-full mb-8
               flex-col md:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">

               <div className="relative w-full md:w-2/5 m-0 overflow-hidden text-gray-700 bg-white 
              rounded-t-xl md:rounded-r-none shrink-0 md:rounded-xl bg-clip-border">
                 <img
                   src= {cart.photo}
                   alt="image"
                   className="object-cover w-full h-full"

                 />
               </div>
               <div className="p-6">
                 <h6 className="block mb-4 font-semibold text-2xl antialiased  leading-relaxed tracking-normal
                  text-blue-800 ">
                    Name: {cart.name}
                 </h6>
                 <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal
                  text-blue-gray-900">
                    Brand Name: {cart.brand}
                 </h4>
                 <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                   { cart.description}
                 </p>
                 <a className="inline-block" href="#">
                   <div
                     className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center
                      uppercase align-middle transition-all rounded-lg select-none
                        disabled:pointer-events-none 
                      disabled:opacity-50 disabled:shadow-none "
                   
                   >
                     <button onClick={() => handleDelete(cart._id)}
                      className="border  text-blue-600 border-blue-600 
                       text-base py-3 px-6 rounded-lg">Delete</button>
                     
                   </div>
                 </a>
               </div>
             </div> ) :
              <p className=" text-blue-800 my-40 items-center grid col-span-2 text-4xl font-extrabold text-center">No Data Found
              <img src="" alt="" />
             </p>
           }
          </div>
        </div>
    );
};

export default Cart;