import React from 'react'
import { Grid } from './components/grid'



const Game = props => {


        return(
            <div className = 'container'>
                <div className = 'grid-container'>
                    <h3>Generation: </h3>
                    <Grid/>                   
                </div>
                <div className = 'presets-container'>
                    <h3>Presets: </h3>
                </div>
                <div className='rules-container'>
                    <h3>Rules: </h3> 
                </div>
                <div className = 'info-container'>
                    <h3>About this Algorithm: </h3>
                </div>
            </div>

        )

}

export default Game;