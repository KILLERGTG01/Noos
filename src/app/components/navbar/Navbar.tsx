'use client'
import React,{useEffect,useState} from 'react'
//import dynamic from 'next/dynamic'

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <header className='bg-white shadow-md'>
        <div className="w-22vh bg-gradient-to-r from-amber-200 to-white">
          
        </div>
    </header>
  )
}

export default Navbar
