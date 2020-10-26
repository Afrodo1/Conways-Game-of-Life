import React from 'react'
import { Grid } from './components/grid'
import './game.css'


const Game = props => {


        return(
            <div className = 'container'>
                <div className = 'grid-container'>
                    <Grid/>                   
                </div>
                <div className='rules-container'>
                    <h3>
                        Rules:
                        <ol>
                            <li>Each living cell with one or no neighbors dies, as if by solitude.</li>
                            <li>Each living cell with four or more neighbors dies, as if by overpopulation.</li>
                            <li>Each living cell with two or three neighbors survives.</li>
                            <li>Each dead cell with three neighbors becomes populated.</li>
                        </ol>
                    </h3> 
                </div>
                <div className = 'info-container'>
                    <h3>About this Algorithm: </h3>
                    <p>The game of life was created by Cambridge mathematician John Conway in 1970. The Game of Life is a Cellular Automaton designed to recieve input and then allows for the observation of said input's evolution, following the prescribed set of rules.</p>
                </div>
            </div>

        )

}

export default Game;