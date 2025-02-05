import React from 'react'
import { Link } from 'react-router-dom'


const FinishRide = (props) => {
  return (
    <div className='p-1'>
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
        props.setFinishRidePanel(false)
      }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>Finish this Ride</h3>

      <div className='flex items-center justify-between mt-4 p-3 border-2 border-yellow-400 rounded-lg'>
        <div className='flex items-center gap-3'>
          <img className='h-12 w-12 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW-d1IOho0re20i3BGnNc3eS_FTzZptE4vxA&s" alt="" />
          <h2 className='text-lg font-medium'>{props.ride?.user?.fullName?.firstName + " " + props.ride?.user?.fullName?.lastName}</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2 KM</h5>
      </div>

      <div className='flex gap-2 justify-between flex-col items-center'>

        <div className='w-full mt-5'>

          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
              {/* <p className='text-sm -mt-1 text-gray-600'>yha se utha lena</p> */}
            </div>
          </div>

          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
              {/* <p className='text-sm -mt-1 text-gray-600'>Local ssse hai</p> */}
            </div>
          </div>

          <div className='flex items-center gap-5 p-3'>
            <i className="ri-currency-line"></i>
            <div>
              <h3 className='text-lg font-medium'>₹{props.ride?.fare}</h3>
              {/* <h3 className='text-lg font-medium'>₹ 193.20</h3> */}
              <p className='text-sm -mt-1 text-gray-600'>Cash</p>
            </div>
          </div>

        </div>

        <div className='p-1 mt-10 w-full'>

          <Link
            to='/captain-home'
            className='w-full mt-5 bg-green-600 text-lg flex justify-center text-white font-semibold p-3 rounded-lg'
          >
            Finish Ride
          </Link>

          <p className='p-2 mt-5 text-[75%] font-medium'>Click on Finish ride button if payment has been completed.</p>

        </div>

      </div>
    </div>
  )
}

export default FinishRide
