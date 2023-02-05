import React from "react"
import logoGit from '../assets/github.png'
import logoLinkedin from '../assets/linkedin.png'


export function Contact(){
    return(
       

        <div className=" flex flex-col content-center max-w-screen p-10 h-screen bg-black justify-center items-center justify-items-center relative text-blue">
            <h1>Contact</h1>
          
            <img src={logoGit} alt="logo do github" className="w-40"/>
            <img src={logoLinkedin} alt="logo do github" className="w-40"/>

           <span></span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>


            <p className="pt-5 pb-10" >evertonhenrique.deoliveira@gmail.com</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>
            <p className="pt-5">+55 11 980356254</p>
            
        </div>
        
    )
}