'use client'; 

import React from 'react';
import { NavbarMain } from './navbar'; 
import ThreeColumnGrid from './cardGrid';




export default function Home() {

  return (
    <div className='use-client flex flex-col min-h-screen' style={{ 
      backgroundImage: 'linear-gradient(to top left, #3A8EBA, #FFFFFF)', 
      minHeight: '100vh'
    }}>
      <NavbarMain />

      <ThreeColumnGrid />

     
      

      <footer className='p-10 text-center bg-gray-500 mt-auto font-thin text-white'>
        <h5>Copyright &copy; social-site 2024</h5>
      </footer>
      </div>
  );
}


