import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    const product = useLoaderData();
    console.log(product);
    const {_id,photo,description,rating,  price, type,brand, name} = product
    return (
        <div className="w-10/12 m-auto">
            <div className="card h-[90vh] bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ProductDetails;