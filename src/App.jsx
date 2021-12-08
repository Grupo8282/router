//import React, {useState} from 'react'
import React from 'react'
import Inicio from './components/Inicio'
import Otro from './components/Otro'
import { BrowserRouter, Link, Routes, Route, } from 'react-router-dom'

const sty = {
    padding: 5
}


// const App = ()=>{
//     //estado para pasar las vistas
//     const [pagina, setPagina] = useState('inicio')

//     //funcion que verica en que vista estoy
//     const estado = ()=>{
//         if(pagina === 'inicio'){
//             return <Inicio />
//         }else if(pagina === 'otro'){
//             return <Otro />
//         }
//     }

//     const topage = (page)=>{
//         // console.log(page);
//         window.history.pushState(null,'',`${page}`)
//         setPagina(page)
//     }

//     return(
//         <div>
//             <button onClick={()=> topage('otro')}>Otro</button>
//             <button onClick={()=> topage('inicio')}>Inicio</button>
//             {/* <a href="#" onClick={()=> topage('otro')} style={sty}>Otro</a>
//             <a href="#" onClick={()=> topage('inicio')} style={sty}>Inicio</a> */}
//             {estado()}
//         </div>
        
//     )
// }

// export default App

//////////////////////////////// react router dom /////////////////////

const App = ()=>{
    

    return(
        <BrowserRouter>
            <header>
                <Link to="/otro"  style={sty}>Otro</Link>
                <Link to="/inicio"  style={sty}>Inicio</Link>
                {/* inicio navbar */}
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/inicio">Inicio</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/otro">Otro</Link>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
                {/* fin navbar  */}

            </header>

            <Routes> 
                <Route path='/otro' element={<Otro />} />
                <Route path='/inicio' element={<Inicio />} />
            </Routes>
            
            
        </BrowserRouter>
        
    )
}

export default App