import { useLoaderData } from "react-router-dom";

import Swal from "sweetalert2";


const ProductDetails = () => {
 
   const product = useLoaderData();
    console.log(product);
    const {_id,photo,description,rating,  price, type,brand, name} = product

    const handleAddCart = () => {
        console.log('click');

         //send data to the server
      fetch('http://localhost:5000/cart', {
        method:"POST",
        headers: {
            'content-type' : " application/json"
        },
        body:JSON.stringify(product)
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
        <div className="w-10/12 m-auto">
            <div className="card h-[90vh] bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button onClick={handleAddCart} className="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ProductDetails;