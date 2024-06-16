'use client'
import React,{useEffect,useState} from 'react'
import {useRouter} from 'next/navigation'
import Image from 'next/image'
import logo from '@/app/assets/Logo.jpeg'
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
    <div className="h-[16vh] w-full bg-[#ffb349] flex items-center justify-between px-5 ">
      <div className='mx-5 flex-1 flex-row md:flex'>
        <button type='button' className="hover:bg-[#ed8a58] my-5 px-4" onClick={()=>router.push('/')}> HOME </button>
        <button type='button' className="hover:bg-[#ed8a58] my-5 px-4" onClick={()=>router.push('/shop')}> SHOP </button>
        <button type='button' className="hover:bg-[#ed8a58] my-5 px-4" onClick={()=>router.push('/about')}> ABOUT </button>
        <button type='button' className="hover:bg-[#ed8a58] my-5 px-4" onClick={()=>router.push('/contact')}> CONTACT </button>
    </div>  
    <div className='flex-1 '>
      <button type='button' className="mx-20 px-10" onClick={()=>router.push('/')}><Image src={logo} alt="" width={100} height={100} /></button>
    </div>
    <div className="w-1/3 mx-[5vh]">
      <button className=''></button>
    </div>
  </div>
  
  )
}

export default Navbar
