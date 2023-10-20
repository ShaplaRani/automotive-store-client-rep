 
import { useLoaderData } from "react-router-dom";

import Swal from "sweetalert2";

import { useContext } from "react";
 import { AuthContext } from "../../Provider/AuthProvider";


const ProductDetails = () => {

  const { user} = useContext(AuthContext);
  console.log(user.email);
 
   const product = useLoaderData();
    console.log(product);
    
    // const book ={
    //   ban:"A",
    //   en:"B"
    // }
    // const hj = "C"
    // document.write(book[hj])
    // console.log(book);

    // const product = {products, user}
    const {photo,description,rating,  price, type,brand, name} = product

    //check start
    const email = user.email
    const newObject = {email,photo,description,rating,  price, type,brand, name}
    console.log(newObject);
    
     //check end
    const handleAddCart = () => {
        console.log('click');

         //send data to the server
      fetch('https://automotive-store-server-2np4zgyhp-shapla-sarkers-projects.vercel.app/cart', {
        method:"POST",
        headers: {
            'content-type' : " application/json"
        },
        // body:JSON.stringify( product)
        body:JSON.stringify( newObject)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Cart added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
      })
    }
    return (
        <div className="w-11/12 lg:w-10/12 m-auto my-20">
            <div className="card h-[90vh] bg-base-100 shadow-xl">
  <figure><img className="w-full" src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="card-actions justify-center md:justify-end">
      <button onClick={handleAddCart} className="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ProductDetails;