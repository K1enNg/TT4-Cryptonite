import React from 'react'

const Stats = () => {
  return (
    <div>
      <h1 className='flex justify-center items-center text-4xl font-semibold text-center mt-40px bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent'>
        Our Mission
      </h1>
      <div className='text-white text-center mt-20 text-2xl'>
        Empowering Your Crypto Journey – Real-Time Insights, Smarter Investments.
      </div>
      <div className='mt-60px'>
        <div className='flex justify-center items-center font-semibold text-center space-x-20 m-60px'>
          <div>
            <h2 className='text-9xl bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent'>20+</h2>
            <p>Countries</p>
          </div>
          <div>
            <h2 className='text-9xl bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent'>10k+</h2>
            <p>Users</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Stats
