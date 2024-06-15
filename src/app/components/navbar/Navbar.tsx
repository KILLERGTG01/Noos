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
      <button type='button' className="hover:bg-[#ed8a58] px-2" onClick={()=>router.push('/')}> Home </button>
      <button type='button' className="hover:bg-[#ed8a58] px-2" onClick={()=>router.push('/shop')}> Shop </button>
      <button type='button' className="hover:bg-[#ed8a58] px-2" onClick={()=>router.push('/about')}> About </button>
      <button type='button' className="hover:bg-[#ed8a58] px-2" onClick={()=>router.push('/contact')}> Contact </button>
      </div>      
      <div></div>
      <div></div>
    </div>
  )
}

export default Navbar
