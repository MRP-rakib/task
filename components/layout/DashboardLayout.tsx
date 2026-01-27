'use client'
import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'

function DashboardLayout({children}:{children:React.ReactNode}) {
  const [isOpen,setisOpen] =useState<boolean>(false)
  
  return (
     <div className="flex items-start">
          <Sidebar isOpen={isOpen} setisOpen={setisOpen}/>
          <div className="flex-1">
            <Navbar setisOpen={setisOpen}/>
            {children}
          </div>

        </div>
  )
}

export default DashboardLayout