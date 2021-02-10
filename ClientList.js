import React, {Component} from 'react';
import axios from 'axios';
import './ClientList.css';

export class ClientList extends Component {

    constructor(props){
        super(props);
        this.state={
            clients: []
        }
       this.getList= this.getList.bind(this);
    }

    itemRemove(id){
        console.log("Removed", id);
        axios.post('http://localhost:3005/clients/delete', {data: {clientId:id}})
        .then (res => {
            console.log(res);
        })
    }

    getList(){
        axios.get('http://localhost:3005/clients/confirm')
            .then(res => {
                this.setState({
                    clients: res.data
                })
        })


    }
           
       
    componentDidMount(){
        this.getList()

    }
            render () {

            let clientRows= this.state.clients.map(clientObj =>{
                return(
                <tr>
                    <td>{clientObj.first_name}</td>
                    <td>{clientObj.last_name}</td>
                    <td>{clientObj.email}</td>
                    <td>{clientObj.country_of_residence}</td>
                    
                    <td onClick= { () =>this.itemRemove(clientObj["_id"])}>Delete</td>
                </tr>
                    
                )
            }

            )
            return (
                
 <div>
         <h1>Please Review and Confirm Your Information</h1>
                 
        <br></br>
        <br></br>
        <div>
            <table>
                <thead>

                    <tr className= "header">
                  
                        <th className= "first">
                        First Name
                        </th>

                        <th className= "last">
                        Last Name
                        </th>

                        <th className= "email">
                        Email
                        </th>

                        <th className= "country">
                        Country 
                        </th>

                        <th className= "tour">
                            
                        </th>
        



                    </tr>
                </thead>
                <tbody>
               
                    <td>            
                    {clientRows}                   
                    </td>
                </tbody>

            </table>
        </div>


                <div className= "container">
                    <h1>Tour Selected</h1>
            
                    <h2>Mystical Rocamadour Tour</h2>
                </div>


 </div>
            )
        
        }
    }

    export default ClientList;