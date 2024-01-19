import React from "react";
import './mcq.css';

function Mcq(){

    
    return(
        
        <div class="sort-def ">
            <h2> Which of the following is not a stable sorting algorithm</h2>
            <ul>
              <li><label><input type="radio" name="answer" value="a"></input> Insertion sort</label></li>
              <li><label><input type="radio" name="answer" value="b"></input>  Selection sort</label></li>
              <li><label><input type="radio" name="answer" value="c"></input> Bubble sort</label></li>
              <li><label><input type="radio" name="answer" value="d"></input> Merge sort</label></li>
            </ul>
            <button type="submit">Submit</button>
          </div>
         
    );

}

export default Mcq;