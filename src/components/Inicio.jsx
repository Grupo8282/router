import React from 'react'
import Play from '../img/play.png'
import '../styles/inicio.css'


const Inicio = ()=>{
    return(
        <div className='card mx-auto F-Card'>
            <div className= 'card-body'>
                <div className= 'row center'>
                    <div className = 'col-6'>
                        <img src={Play} alt="" className='col-6' />
                    </div>
                    <div className='col-6 F-Card-Info'>
                        <h1>PlayStation 5</h1>
                        <p>CPU x86-64-AMD Ryzen “Zen 2” con 8 núcelos y 16 subprocesos</p>
                    </div>
                </div>
            </div>
        </div>
       
        
    )
}

export default Inicio