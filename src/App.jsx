import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import  {Home}  from "./screens/Home"
import {About} from  "./screens/About"
import {Works} from  "./screens/Works"
import {Contact} from  "./screens/Contact"
import  {MenuPrincipal} from "./components/MenuPrincipal"

export function App(){
    return(
        <>
            <Router basename={process.env.PUBLIC_URL}>
                <MenuPrincipal />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/works" element={<Works />}/>
                  <Route path="/contact" element={<Contact />}/>
                    
                </Routes>
            </Router>

        </>
   )
 
            }