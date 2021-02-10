import React, {Component} from 'react';
import axios from 'axios';
import './InfoRequest.css';

export class InfoRequest extends Component {

    constructor(props){
        super(props);
        this.state ={
        first_name: '',
        last_name: '',
        email: '',
        country_of_residence: '',
        selectedDrop:'',
        
    }
    this.onSubmit=this.onSubmit.bind(this);
    this.onChangeFirst= this.onChangeFirst.bind(this);
    this.onChangeLast= this.onChangeLast.bind(this);
    this.onChangeEmail= this.onChangeEmail.bind(this);
    this.onChangeCountry= this.onChangeCountry.bind(this);
    this.handleSelectValue= this.handleSelectValue.bind(this);
   
 }

    onSubmit(e){
        e.preventDefault();
        
        const newClient= {
        first_name:this.state.first_name,
        last_name: this.state.last_name,
        email:this.state.email,
        country_of_residence:this.state.country_of_residence,
        selectedDrop:this.state.selectedDrop
    }
        axios.post('http://localhost:3005/clients/add', newClient)
            .then(res => console.log("res.data"));

    console.log(this.state.gordes);
        console.log(this.state.remy);
        console.log(this.state.rocamadour);
   
        this.setState({

        first_name:'',
        last_name:'',
        email:'',
        country_of_residence:'',
        selectedDrop:'',
        
        })
    }

    onChangeFirst(e){
        console.log("e.target.value: " , e.target.value);
        this.setState({first_name: e.target.value})
    }


    onChangeLast(e){
        console.log("e.target.value: " , e.target.value);
        this.setState({last_name: e.target.value})
    }

    onChangeEmail(e){
        console.log("e.target.value: " , e.target.value);
        this.setState({email: e.target.value})
    }

    onChangeCountry(e){
        console.log("e.target.value: " , e.target.value);
        this.setState({country_of_residence: e.target.value})
    }

    handleSelectValue(e){
        this.setState({selectedDrop: e.target.value})
        console.log("Selected " , e.target.value);
        
    }



    onChangeGordes(e){
        console.log("e.target.value: ",e.target.value);
        this.setState({gordes: e.target.value})
    }

    onChangeRemy(e){
        console.log("e.target.value: " , e.target.value);
        this.setState({remy: e.target.value})
    }

    onChangeRocamadour(e){
        console.log("e.target.value: " , e.target.value);
        this.setState({rocamadour: e.target.value})
    }

    render() {
        return(
            <div>
                <h1 style= {{color:'indigo'}}>Request Tour Information</h1>
                <br></br>
                <form onSubmit = {this.onSubmit}>
                    <div>
                    <label style= {{margin:45, fontWeight:'bold', fontSize:20}}>First Name</label>
                    <input type = "text" id="fname" style={{width:200, height:25}} value= {this.state.first_name} onChange={this.onChangeFirst}/>
                    </div>

                    <div>
                    <label style= {{margin:45, fontWeight: 'bold',fontSize:20}}>Last Name</label>
                    <input type = "text" id="lname" style={{width:200, height:25}} value= {this.state.last_name} onChange={this.onChangeLast}/>
                    </div>

                    <div>
                    <label style= {{margin:30, fontWeight: 'bold', fontSize:20}}>Email Address</label>
                    <input type = "email"  id="email"  style={{width:200, height:25}} value= {this.state.email} onChange={this.onChangeEmail}/>
                    </div>

                    <div>
                    <label style= {{margin:10, fontWeight:'bold', fontSize:20}}>Country of Residence</label>
                    <input type = "text" id="country" style={{width:200, height:25}} value= {this.state.country_of_residence} onChange={this.onChangeCountry} />
                    </div>
<br></br>
                    
                    <h2 style= {{color:'indigo'}}>I am interested in:</h2>
                    

            
                    <div>
                    <label for="village" style={{fontWeight:'bold', color:'indigo', fontSize:20}}>Choose a Tour(s):</label>
 <br></br>  
          
                    <select 
                    value= {this.state.selectedDrop}
                    onChange={this.handleSelectValue}
                    style= {{width:550, height: 50, fontWeight:'bold', color:'indigo', fontSize: 18}}
                    >
                        <option value= "Romantic Gordes and Lavender Fields of Provence Tour ">Romantic Gordes and Lavender Fields of Provence Tour</option>
                        <option value= "Enchanting Saint Remy Tour">Enchanting Saint Remy Tour</option>
                        <option value= "Mystical Rocamadour Tour">Mystical Rocamadour Tour</option>
                    </select>

                    </div>
        <br></br>
        <br></br>

        <div>       
                    <h2 style= {{color:'indigo'}}>Click here to submit your request</h2>
<br></br>
                    <label  ></label>
                    <input type = "submit" id= "submit" style={{color:'indigo', width:150, height:30, backgroundColor:'lightskyblue',fontWeight:'bold' }}/>
                    </div>

                </form>

            
        <div className= 'container'>
            <div className= 'villageA'>Gordes </div>
            <div className= 'villageB'>Saint Remy</div>
            <div className= 'villageC'>Rocamadour</div> 
             
        </div>  
    </div>
        )
    }
}
export default InfoRequest;