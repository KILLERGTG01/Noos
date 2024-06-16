'use client'
import React,{useEffect,useState} from 'react'
//import { useRouter } from 'next/router';
const Footer = () => {
    
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
}  
  return (
    <div>
      
    </div>
  )
}

export default Footer
