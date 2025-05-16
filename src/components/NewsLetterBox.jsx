import React from 'react'

const NewsLetterBox = () => {

  const onSubmitHandler= (event)=>{
    event.preventDefault();
  }
  return (
    <div className='text-center mt-10'>
      <p className='text-2xl font-medium text-gray-800'>
        Subscribe Now & get 20% off
      </p>
      <p className='text-grau-400 mt-3'>
      Stay updated with the latest news, exclusive offers, and more—subscribe to our newsletter now!
      </p>

      <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' onSubmit={onSubmitHandler}>
        <input type='email' placeholder='Enter your email..' className='w-full sm:flex-1 outline-none' required>
        </input>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Submit</button>
      </form>
     </div>
  )
}

export default NewsLetterBox