const express = require ('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const clientRoutes= express.Router();
const tourRoutes= express.Router();


let Client = require ('./client.model');     //create client schema
let Tour= require('./tour.model');

app.use(cors());
app.use(bodyParser.json());
app.use('/clients', clientRoutes);
app.use('./tours', tourRoutes);


clientRoutes.route('/confirm').get(function (req,res) {
    Client.find(function (err,clients) {
       if(err){
           console.log(err);
       } else {
       res.json(clients);
        }
    })

tourRoutes.route('/').get(function (req,res) {
        Tour.find(function (err, tours) {
           if(err){
               console.log(err);
           } else {
           res.json(tours);
            }
        })  
        console.log("Hit")     
        res.send({message: 'Hello'});
    });   
   

}
);

clientRoutes.route('/add').post(function (req,res) {
    console.log("ADDED!", req.body);

    let newClient = new Client(req.body);           //new client schema
        console.log('newclient obj:' , newClient);
        newClient.save()
        .then(clientResponse => {
            res.json({"client " : "Success! client added"});
        })
        .catch(err=> {
            res.send(err);  
        } )

})

clientRoutes.route('/delete').post(function (req,res) {
    console.log("Deleted", req.body.data.clientId);
    Client.findByIdAndRemove(req.body.data.clientId, function(err,response){
        if (err){
            res.send({message:'err'})
        } else{
            res.send({message:'sucess'})
        }
        
    })
})

//tourRoutes.route('/add').post(function (req,res) {
//            console.log("ADDED!", req.body);
        
//   let newTour = new Tour(req.body);           //new client schema
//                console.log('newtour obj:' , newTour);
//                newTour.save()
//               .then(clientResponse => {
//                   res.json({"tour " : "Success! tour added"});
//                })
 //               .catch(err=> {
 //                   res.send(err);
 //               } )
            
//            }
       
     
//);



mongoose.connect('mongodb+srv://perugia33:stargazer11@cluster0.c6akx.mongodb.net/Tours?retryWrites=true&w=majority' , {userNewUrlParser:true})

const connection = mongoose.connection;

connection.once('open', function(){
    console.log("MongoDB connection established");
    
 })


//app.get('/' ,function (req,res){
//    res.send({message:"hi"});
//});

app.listen(3005, function(){
    console.log("Server is running on 3005");
})
