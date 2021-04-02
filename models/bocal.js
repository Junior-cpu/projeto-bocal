const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bocal = new Schema({

    linha:{
        type: 'string',
    },
    setup:{
        type: 'string',
       
    },
    maquina:{
        type: 'string',
      
    },
    loc:{
        type: 'string',
     
    },
    magazine:{
      type: 'string',

    },
    nozzle:{
        type: 'string',
    },
    
},{
    timestamps:true,  
})

mongoose.model('Bocal',bocal)