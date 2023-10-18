import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {
    console.log(product);

    const {_id,photo,rating,  price, type,brand, name } = product;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">{brand}</h2>
                    <p>{type}</p>
                    <p>{price}</p>
                    <p>{rating}</p>
                  
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