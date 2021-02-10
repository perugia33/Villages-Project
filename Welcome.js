import React, {Component} from 'react';
import './Welcome.css';
import {Link} from 'react-router-dom';
export class Welcome extends Component {
    render() {
        return(
           
        <div className= "welcome">
          <br></br>      
            <h1> Quaint Village Tours of France</h1>       
            <div className="image-container">
            <h1> Take Time Out to Discover the Quaint Villages of France</h1>
            <h1> Enjoy the Timeless Ambience </h1>
            <img src='https://www.lelongweekend.com/wp-content/uploads/2020/06/DSC03193-768x512.jpg' alt=''/>
            </div>
       
            <br></br>
 <br></br>
            <div className="intro">
            <h2> Explore Enchanting Villages </h2> 
             </div>



 <br></br>
 <br></br>


         <div className= "description">
         
         <h2> Hilltop villages, romantic squares, relaxing spa towns and unparallel scenery await
             </h2>
        </div>
        




        <div className="tours">
            <div >
             <h1>Romantic Gordes</h1>   
             <a target= "blank" href= './gordes.jpg'>
                 <img src ='./gordes.jpg' alt='' style={{width:300 , margin:15}}></img>
            </a>   
            </div>  

            <br></br>

            <div className="tours">
             <h1>Enchanting Saint Remy</h1> 
             <a target= "blank" href= "./saint_remy3.jpg">
                <img src= "./saint_remy3.jpg" alt=''style= {{width:300 , margin:15}}></img>
            </a>
            </div> 


            <div className="tours">
             <h1>Mystical Rocamadour</h1> 
             <a target= "blank" href= "./rocamadour2.jpg">
                 <img src= "./rocamadour2.jpg"  alt='' style= {{width:300 , margin:15}}></img>
             </a>
            </div> 
            <div>
            <Link to= "/tours"></Link>
            <h2> <Link to= "/tours">Click Here to Begin Your Discovery
                </Link>
            </h2>
            </div>
        </div>
        

    </div>
        )
    }
}
export default Welcome;