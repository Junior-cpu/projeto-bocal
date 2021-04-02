const express = require('express')
const mongoose = require('mongoose')

require('./models/bocal')
const Bocal= mongoose.model('Bocal')

const app = express()

mongoose.connect('mongodb://localhost:27017/nozzle',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log('banco conectado com sucesso')
}).catch((err)=>{
    console.log('erro de conexao com banco')
})

app.get('/', async(req, res)=> {
    await Bocal.findOne({}).then((bocal)=>{
        return res.json({
            error:false,
            bocal
        })
    }).catch((err)=>{
        return res.status(400).json({
            error:true,
            message:'nada encontrado'
        })
    })
})

app.post('/bocal', async (req, res)=> {
    const dados ={
        'linha':'2A',
        'setup':'Sierra',
        'maquina':'x2',
        'loc':'2',
        'magazine':'002',
        'nozzle':'935'
    }
    
    const bocalExiste = await Bocal.findOne({})

    if(bocalExiste) {
       return res.status(400).json({
           error: true,
           message:'erro registro ja existe'
       })
    }   
     await Bocal.create(dados,(err) => {
        if(err)return res.status(400).json({
            error:true,
            message:'Erro:erro de pagina'
        })

    })

    return res.json({
        error:false,
        message:"servidor on"
    })
    
})
app.listen(8080,function() {
    console.log('servidor on')
})