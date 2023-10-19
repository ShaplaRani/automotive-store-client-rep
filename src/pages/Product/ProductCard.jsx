import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {
    console.log(product);

    const { _id, photo, rating, price, type, brand, name } = product;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure ><img className='w-full h-80' src={photo} alt="" /></figure>
                <div className="card-body">
                    <div className='space-y-2 '>
                        {/* <div className='flex gap-2  flex-1 justify-center md:justify-start'>
                           <h2 className="card-title  flex flex-col-reverse md:flex-row justify-between ">,</h2>
                           <h2 className="card-title">{brand}</h2>
                        </div> */}
                        <p className='text-center'>
                       
                       <Rating
                     emptySymbol={
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-7 h-7 text-orange-500"
                   >
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                     />
                   </svg>
                 }
                 fullSymbol={
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     fill="currentColor"
                     className="w-7 h-7 text-orange-500"
                   >
                     <path
                       fillRule="evenodd"
                       d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                       clipRule="evenodd"
                     />
                   </svg>
                 }
                 initialRating={rating}
                 readonly
               />
                       </p>
                       <h2 className="text-xl font-semibold text-center"> Name: {name}</h2>
                       <h2 className="text-xl font-semibold text-center"> Brand: {brand}</h2>
                    </div>
                     <div className='text-center mb-5 space-y-2 text-lg font-semibold'>
                         <p className=''> Type: {type} </p>
                          <p> Price: {price} lakh</p>
                     </div>
                    
                   

                    <div className="">
                        <Link to={`/productDetails/${_id}`}>
                            <button className="btn btn-primary w-full">Details</button>
                        </Link>

                        <Link to={`/updateProduct/${_id}`}>
                            <button className="btn btn-primary w-full mt-4">Update</button>
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    );
};
ProductCard.propTypes = {
    product: PropTypes.object
}
export default ProductCard;