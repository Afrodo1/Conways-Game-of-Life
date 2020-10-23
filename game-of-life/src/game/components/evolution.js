import { useEffect } from "react";

const rows = 40;
const cols = 40;

//Need 2D arrays. These are 1D
let currGen = [rows];
let nextGen = [rows];



//Creates two-dimensional arrrays
function createGenArrays (){
    
    for (let i = 0; i < rows; i++){
        currGen[i] = [cols];
        nextGen[i] = [cols];
    }
}
//Sets the array values to 0 (dead)
function initGenArrays() {
    for (let i = 0; i <rows; i++) {
        for (let j = 0; j < cols; j++){
            currGen[i][j] = 0;
            nextGen[i][j] = 0;
        }

    }
}
function createWorld() {
    let world = document.querySelector('#world');
    let tbl = document.createElement('table');
    tbl.setAttribute('id','worldgrid');
for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement('td');
            /*An id attribute needs to be added to each cell so we can keep track of them. We will use i and j in the form i_j. So the upper left corner would be 0_0, etc.*/
            cell.setAttribute('id', i + '__' + j);
            /*A class of dead needs to be added to each cell. This class can be changed to alive during initial configuration or during evolution. */
            cell.setAttribute('class', 'dead');
            cell.addEventListener('click', cellClick)   
            tr.appendChild(cell);
        }
        tbl.appendChild(tr);
    }
    world.appendChild(tbl);
}

function cellClick() {
    let loc = this.id.split("_");
    let row = Number(loc[0]);//Get i
    let col = Number(loc[2]);//Get j
    console.log(this);
// Toggle cell alive or dead
    if (this.className=== 'alive'){
        this.setAttribute('class', 'dead');
        currGen[row][col]= 0;           
    }else{
        this.setAttribute('class', 'alive');
        currGen[row][col]= 1;
    }
}

console.log(currGen);
function getNeighborCount(row, col){
    let count = 0
    let nrow = Number(row);
    let ncol = Number(col);

    //Make sure we are not at the First Row
    if (nrow - 1 >= 0){
        //Check top neighbor
        if (currGen[nrow - 1][ncol] == 1)
            count++;
    }
    //Make sure we are not in the First Cell
    if (nrow - 1 >= 0 && ncol - 1 >= 0){
        //Check upper left neighbor
        if (currGen[nrow - 1][ncol - 1] == 1)
            count++;
    }
    //Make sure we aren't in the top right cell
    if (nrow - 1 >= 0 && ncol + 1 < cols){
        //Check upper right neighbor
        if (currGen[nrow - 1][ncol + 1] == 1)
            count++;
    }
    //Make sure we are not on the first column
    if (ncol - 1 >= 0) {
        //Check left neighbor
        if (currGen[nrow][ncol - 1] == 1) 
            count++;
    }
    // Make sure we are not on the last column
    if (ncol + 1 < cols) {
        //Check right neighbor
        if (currGen[nrow][ncol + 1] == 1) 
            count++;
    }
    // Make sure we are not on the bottom left corner
    if (nrow + 1 < rows && ncol - 1 >= 0) {
        //Check bottom left neighbor
        if (currGen[nrow + 1][ncol - 1] == 1) 
            count++;
    }
    // Make sure we are not on the bottom right
    if (nrow + 1 < rows && ncol + 1 < cols) {
        //Check bottom right neighbor
        if (currGen[nrow + 1][ncol + 1] == 1) 
            count++;
    }
    
    
    // Make sure we are not on the last row
    if (nrow + 1 < rows) {
        //Check bottom neighbor
        if (currGen[nrow + 1][ncol] == 1) 
            count++;
    }
    
    
    return count;
    
}

function createNextGen() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
                                    
            let neighbors = getNeighborCount(i, j);
         
            // Check the rules
            // If Alive
            if (currGen[i][j] == 1) {
              
                if (neighbors < 2) {
                    nextGen[i][j] = 0;
                } else if (neighbors == 2 || neighbors == 3) {
                    nextGen[i][j] = 1;
                } else if (neighbors > 3) {
                    nextGen[i][j] = 0;
                }
            } else if (currGen[i][j] == 0) {
                // If Dead or Empty
            
                if (neighbors == 3) {
                    // Propogate the species
                    nextGen[i][j] = 1;//Birth?
                }
            }
        }
    }
    
}




function updateCurrGen() {
    
    for (let i = 0; i < rows; i++) {
        let row = i;
        for (let j = 0; j < cols; j++) {
            let col = j;
            // Update the current generation with
            // the results of createNextGen function
            currGen[row][col] = nextGen[row][col];
            // Set nextGen back to empty
            nextGen[row][col] = 0;
        }
    }
    
}
function updateWorld() {
        let cell='';
        for (let i = 0; i < rows; i++) {
            let row = i;
            for (let j = 0; j < cols; j++) {
                let col = j;
                cell = document.getElementById(`${row}__${col}`);
                if (currGen[row][col] === 0) {
                    cell.setAttribute('class', 'dead');
                } else {
                    cell.setAttribute('class', 'alive');
                }
            }
        }
    }
function evolve(){
    createNextGen();//Apply the rules
    updateCurrGen();//Set Current values from new generation
    updateWorld();//Update the world view

    if (started) {
        timer = setTimeout(evolve,evolutionSpeed);
    }
}

    let started=false;// Set to true when use clicks start
    let timer;//To control evolutions
    let evolutionSpeed=1000;// One second between generations

function startStop(){
    let startstop = document.querySelector('#btnstartstop');

    if(!started){
        started = true;
        startStop.value = 'Stop Reproducing';
        evolve();
    }
    else{
        started=false;
        startStop.value = 'Start Reproducing';
        clearTimeout(timer);
    }
}

function resetWorld(){
    window.location.reload();
}


export {createGenArrays,initGenArrays,createWorld,evolve,startStop,resetWorld}