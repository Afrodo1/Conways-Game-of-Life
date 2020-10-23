import React, {useEffect} from 'react'
import './grid.css'
import {resetWorld,initGenArrays,createGenArrays,createWorld, evolve, startStop} from './evolution'
export const Grid = props =>{

    

    
    


    window.onload=()=>{        
        createGenArrays();//current and next generations
        initGenArrays();//Set all array locations to 0 =dead
        createWorld();//The visual table
    }

    return(
        <div>
            <div id ='world'/>
            <div>
                <button type='button' id = 'btnstartstop' value='Start Reproducing' onClick={
                    function evolvution(){
                        startStop()
                    }
                }>Evolve</button>
                <button type='button' id='btnreset' value='Reset World' onClick={resetWorld}>Reset World</button>
            </div>
        </div>
        
    )
}