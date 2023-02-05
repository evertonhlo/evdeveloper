import React from "react"
import * as Menubar from '@radix-ui/react-menubar'
import { Link } from "react-router-dom";


import '../style/index.css'

export function MenuPrincipal(){
 
  return(     
     <Menubar.Root className=" flex items-end justify-end p-3 text-blue bg-black">
       <Menubar.Menu>
      <Menubar.Trigger className="m-0 text-xl bg-black hover:text-blue-fundo">
       
       <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24"   
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-10 h-10 ">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
        
      </Menubar.Trigger>
      <Menubar.Portal>
        <Menubar.Content className="text-blue flex flex-row justify-between p-3 text-2xl font-thin transition duration-150 ease-in-out ">   
      
          <Menubar.Item className="pl-3" > 
              <Link to={'/'}>HOME</Link>
           </Menubar.Item>          
          <Menubar.Item  className="pl-3">
            <Link to={'/about'}> ABOUT</Link>
            </Menubar.Item>
          <Menubar.Item className="pl-3" >
              <Link to={'/works'}> WORKS</Link>
         </Menubar.Item>
          <Menubar.Item className="pl-3" >
              <Link to={'/contact'}> CONTACT</Link>
         </Menubar.Item>

     
                 </Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>
  </Menubar.Root>
)
}



