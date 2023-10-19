import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({brand}) => {
    const {id, brand_name, image_url} = brand;
    return (
        <Link to={`/product/${id}`} >
        <div className=''>
        <div className="card  bg-base-100 shadow-xl border">
     <figure><img className='h-60 w-full' src={image_url}alt="Shoes" /></figure>
     <div className="card-body bg-blue-200 ">
      <h2 className="text-2xl font-semibold text-center">{brand_name}</h2>
      {/* <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
      </div> */}
     
    </div>
        </div>
        </div>
        </Link>
        
       
    );
};
BrandCard.propTypes ={
    brand:PropTypes.object
}
export default BrandCard;