import PropTypes from 'prop-types';

const BrandCard = ({brand}) => {
    const {brand_name, image_url} = brand;
    return (
        <div className=''>
        <div className="card  bg-base-100 shadow-xl">
     <figure><img src={image_url}alt="Shoes" /></figure>
     <div className="card-body">
      <h2 className="card-title">{brand_name}</h2>
      {/* <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
      </div> */}
    </div>
        </div>
        </div>
       
    );
};
BrandCard.propTypes ={
    brand:PropTypes.object
}
export default BrandCard;