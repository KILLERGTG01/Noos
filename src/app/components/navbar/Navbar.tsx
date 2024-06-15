'use client'
import React,{useEffect,useState} from 'react'
import {useRouter} from 'next/navigation'

const Navbar = () => {
  //containing hydration error
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter(); //using router
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="h-[12vh] w-full bg-[#ffb349]">
      <div className='mx-5 align-middle '>
      <button type='button' className="hover:bg-[#ed8a58] my-5 px-2" onClick={()=>router.push('/')}> HOME </button>
      <button type='button' className="hover:bg-[#ed8a58] my-5 px-2" onClick={()=>router.push('/shop')}> SHOP </button>
      <button type='button' className="hover:bg-[#ed8a58] my-5 px-2" onClick={()=>router.push('/about')}> ABOUT </button>
      <button type='button' className="hover:bg-[#ed8a58] my-5 px-2" onClick={()=>router.push('/contact')}> CONTACT </button>
      </div>      
      <div className='w-full'></div>
      <div></div>
    </div>
  )
}

export default Navbar
