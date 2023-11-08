

// Para criar uma API podemos utilizar o EXPRESS;

// npm install express --save -> É a biblioteca que vai gerenciar as aquisições da API;

// npm install body-parser --save -> É a biblioteca que vai manipular dados do corpo da aquisição (POST, PUT);

// npm install cors --save -> É responsavel pelas permissões (HEADER) de acesso das aquisições;


// Import das biblioteca para criar a API
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Criando um objeto para manipular as requisições da API
const app = express()

// Request -> Entrada de algum dado na API
// Response -> Saida (return) de algum dado na API
// Next -> 


// Função para manipular as restrições da API
app.use((request, response, next) =>{

    // Permite especificar quem podera acessar a API ('*' = Liberar acesso público, 'IP' = Liberar acesso apenas para aquela maquina);
    response.header('Access-Control-Allow-Origin', '*')

    // Permite especificar como a API, sera requisitada ('GET', 'POST', 'PUT' e 'DELETE')
    response.header('Access-Control-Allow-Methods', 'GET')

    // Ativa as confgurações de cors
    app.use(cors())


    next()
})

// EndPoints: 

app.get('/estados/sigla', cors(), async function(request, response, next){
    let controleEstadosCidades = require('./modulo/Brasil.js')
    let listaEstados = controleEstadosCidades.getListaDeEstados()

    if(listaEstados){
    response.json(listaEstados)
    response.status(200)
    }else{
        response.status(404);
        response.json({erro:'Item não encontrado!'})
    }
})

//EndPoint: Retorna os dados do Estado filtrando pela sigla
app.get('/estado/sigla/:uf', cors(), async function(request, response, next){

    //Recebe uma variável encaminhada como parametro na requisição
    let siglaEstado = request.params.uf;

    let controleDadosEstados = require('./modulo/Brasil.js')
    let dadosEstados = controleDadosEstados.getDadosEstados(siglaEstado)

    if(dadosEstados){
        response.json(dadosEstados)
        response.status(200)

    }else{
        response.status(404)
        response.json({erro:'Item não encontrado!'})
    }
})


//EndPoint: Retorna os dados da Capital filtrando pela sigla do estado
app.get('/capital/estado', cors(), async function(request, response, next){

    //Recebe uma variável encaminhada como parametro na requisição

    //EX: /capital/estado?uf=SP
    let siglaEstado = request.query.uf;

    let controleDadosCapital = require('./modulo/Brasil.js')
    let dadosEstados = controleDadosCapital.getCapitalEstados(siglaEstado)

    if(dadosEstados){
        response.json(dadosEstados)
        response.status(200)

    }else{
        response.status(404)
        response.json({erro:'Item não encontrado!'})
    }
})

app.get('/estado/regiao', cors(), async function(request, response, next){

    //Recebe uma variável encaminhada como parametro na requisição

    
    let regiao = request.query.regiao ;

    let controleDadosCapital = require('./modulo/Brasil.js')
    let dadosEstados = controleDadosCapital.getCapitalEstados(siglaEstado)

    if(dadosEstados){
        response.json(dadosEstados)
        response.status(200)

    }else{
        response.status(404)
        response.json({erro:'Item não encontrado!'})
    }
})


app.listen('8080', function(){
    console.log('API funcionando!!')
})


