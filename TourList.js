

import React, {Component} from 'react';
import './TourList.css';
import {Link} from 'react-router-dom';

export class TourList extends Component {
    render() {
        return(
     <div className="box">
         <h1>Discover our Quaint Village Tours</h1>
         <br></br>
            <div className= "container2">
                <h2>Romantic Gordes and nearby Lavender Fields</h2>
                <div className="image-container">
                </div>      
                <div className="tour-information">
     
                    <div className="tour-summary">
                        <h2>Charming hilltop village with cobblestone streets and stunning views of the Luberon Valley</h2>
                    </div>

                    <div className="tour-highlights">
                        <h2>Tour Highlights </h2>
                        <h3>Explore the Medieval Chateau de Gordes</h3>
                        <h3>Experience Senanque Abbey and its lavender fields</h3>
                     </div>
                     <div className="tour-price">
                        <h3>$500.00</h3> 
                        <h3>2 Days</h3>
                    </div>
                    <div >
                        <h3 >To Request More Infomation:</h3>
                        <br></br>
                        <Link to= "/request">CLICK HERE</Link> 
                       
                    </div>


                </div>
            
      </div>    
         <div className= "remy">
                <h2>Enchanting Saint Remy</h2>
                <div className="image-container"> </div>
                
                
             <div className="container3">
     
                <div className="tour-summary">
                    <h2>The village of Saint-Rémy-de-Provence is located within the lush valleys of the Alpilles mountain range. In the heart of the city remains the ruins of the Roman city, Glanum</h2>
                </div>
<br></br>            
                <div className="tour-highlights">
                    <h2>Highlights </h2>

                    <h3>Medieval Chateau de Gordes</h3>
                    <h3> Near Senanque Abbey lavender fields</h3>
                </div>
                <div className="tour-price">
                 <h3>$800.00</h3> 
                    <h3>5 Days</h3>
                 </div>
                <div >
                    <h3 >To Request More Infomation</h3>
                     <Link to= "/request">Click Here</Link>
                </div>
                </div>
        </div>

         <div className= "rocamadour">
                <h2>Mystical Rocamadour</h2>
                <div className="image-container">
                 
                </div>
           
                <div className="tour-information">
     
                <div className="tour-summary">
                    <h2>Rocamadour is a world famous pilgrimage site in the Lot departments, south west France.</h2>
                </div>
<br></br>            
                <div className="tour-highlights">
                    <h2>Highlights </h2>

                    <h3> Climb 216 steps to view the Chapel of the Black Madonna</h3>
                    <h3> Major stop on the pilgrimage path to Santiago de Campostela</h3>
                </div>
                <div className="tour-price">
                    <h3>$500.00</h3> 
                    <h3>3 Days</h3>
                </div>
                <div >
                    <h3 >To Request More Infomation</h3>
                    <Link to= "/request">Click Here</Link>
             </div>
            </div>
        </div> 

    </div>
 
        
        )
    }
}
export default TourList;



 //   <div>

  //      <h1>TourList!</h1>


 //   </div>
