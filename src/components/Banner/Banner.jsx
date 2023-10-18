
import {BsFillTelephoneFill } from 'react-icons/bs';
import {CgWebsite } from 'react-icons/cg';
const Banner = () => {
    return (
        <div>

   <div className="hero min-h-screen mt-10 my-20 " 
   style={{backgroundImage:
    'url(https://i.ibb.co/qdhS03Z/Ford-Mustang.jpg)'}}>
    <div className="hero-overlay bg-opacity-60 "></div>
    <div className="hero-content text-center text-neutral-content">
    <div className="w-10/12 lg:w-7/12">
      <h1 className="mb-7 text-2xl md:text-4xl lg:text-5xl font-bold pt-20 md:pt-7">Best Automotive service</h1>
   
      <p className="mb-5 text-center text-base font-normal">
      Welcome to Automotive your ultimate destination for automotive enthusiasts. Dive into the world of leading brands like Toyota, Ford, BMW, Mercedes-Benz, Tesla, Honda, and more. We offer in-depth reviews, the latest news, and comprehensive comparisons to keep you informed about the best in the industry. Whether you are  a dedicated car lover or simply looking for practical advice, Automotive is your gateway to the world of automotive excellence. Join our passionate community and accelerate your automotive knowledge today.</p>
      <button className="btn btn-primary text-left">Contact Us</button>
      <div className="mt-4  pb-20">
           <p className='flex gap-3 text-base justify-center font-medium'> 
           <BsFillTelephoneFill className='text-blue-600'></BsFillTelephoneFill>  +001334567890</p>
           <p className='flex gap-3 text-base mt-4  justify-center font-medium'>
             <CgWebsite className='text-blue-600 '></CgWebsite>  www.automotive.com</p>
      </div>
       
    </div>
    </div>
     </div>
            
        </div>
    );
};

export default Banner;