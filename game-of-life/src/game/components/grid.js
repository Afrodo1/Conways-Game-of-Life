import React, {useEffect,useState} from 'react'
import './grid.css'
import {resetWorld,initGenArrays,createGenArrays,createWorld, evolve, startStop} from './evolution'
export const Grid = props =>{
    let row = 40;
    let col = 40;




    
    function onClick(){
        var reset = document.getElementById('worldgrid');
        reset.remove();
         row = document.getElementById('input_row').value;
         col = document.getElementById('input_col').value;                
        createGenArrays(row,col);//current and next generations
        initGenArrays(row,col);//Set all array locations to 0 =dead
        createWorld(row,col);//The visual table
        
    }



    window.onload=()=>{        
        createGenArrays();//current and next generations
        initGenArrays();//Set all array locations to 0 =dead
        createWorld();//The visual table
    }

   

    return(
        <div className='grid'>
            
            <div className='world-container'>
            <div id ='world'/>
            <div className = 'button-container'>
                <button type='button' id = 'btnstartstop' value='Start Reproducing' onClick={()=>startStop(row,col,props.count, props.setCount)}>Evolve</button>
                <button type='button' id='btnreset' value='Reset World' onClick={()=>resetWorld(props.count,props.setCount)}>Reset World</button>
                <button type='button' id='snglevo' value ='Single Evolution' onClick={()=>evolve(row,col,props.count,props.setCount)}>Single Evolution</button>
                <button onClick={onClick}>Create New World</button>
            </div>                
            </div>
            <div className='inputs'>
                <input type ='text' id = 'input_row' placeholder='Enter number of rows'/>
                <input type ='text' id = 'input_col'placeholder='Enter number of columns'/>
                <input type='number' id='evo_speed' placeholder='Enter Evolution Speed(ms)'/>
            </div>
        </div>
        
    )
}