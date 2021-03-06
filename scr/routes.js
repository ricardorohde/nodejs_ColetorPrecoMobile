var express = require('express');
var router = express.Router();
var controler = require('./controllerSysPDV');

router.use((req,res,next)=>{
    console.log('Time: ',new Date().getHours()+":"+new Date().getMinutes());
    next();
});

    router.get('/status',(req,res)=>{
        res.json({
            status: 100
        });
    })

router.post('/cadastro',controler.alteraQTD);
router.post('/consulta',controler.consultaProduto);
router.post('/consultaNome',controler.listagemProdutos);


module.exports = router ;