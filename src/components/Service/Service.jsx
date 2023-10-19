import { SlDiamond } from 'react-icons/sl';
import { AiOutlineCar } from 'react-icons/ai';
import { MdCarRepair } from 'react-icons/md';
const Service = () => {
    return (
        <div className='w-10/12 m-auto grid grid-cols-3 gap-6 my-20 '>
            {/* 1 */}
            <div className="card  bg-base-100 shadow-xl text-center">
            <p className='mt-10 flex  justify-center ' ><SlDiamond className='text-5xl text-blue-600'></SlDiamond></p>
      <div className="card-body text-center space-y-3">
     <h2 className=" text-center text-xl font-semibold">Warranty Service</h2>
      <p className='text-base font-normal'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.</p>
      <div className="card-actions flex justify-center">
       <button className="btn btn-primary text-base">ask a question</button>
      </div>
       </div>

            </div>
            {/* 2 */}
            <div className="card  bg-base-100 shadow-xl text-center">
            <p className='mt-10 flex  justify-center ' >
                <AiOutlineCar className='text-5xl text-blue-700'></AiOutlineCar>
             </p>
      <div className="card-body text-center space-y-3">
     <h2 className=" text-center text-xl font-semibold">Best Practices</h2>
      <p className='text-base font-normal'>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances.</p>
      <div className="card-actions flex justify-center">
       <button className="btn btn-primary text-base">ask a question</button>
      </div>
  </div>

            </div>
            {/* 3 */}
            <div className="card  bg-base-100 shadow-xl text-center">
            <p className='mt-10 flex  justify-center ' >
                <MdCarRepair className='text-5xl text-blue-600'></MdCarRepair></p>
      <div className="card-body text-center space-y-3">
     <h2 className=" text-center text-xl font-semibold">Customer Service</h2>
      <p className='text-base font-normal'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.</p>
      <div className="card-actions flex justify-center">
       <button className="btn btn-primary text-base">ask a question</button>
      </div>
  </div>

            </div>
     </div>
    );
};

export default Service;