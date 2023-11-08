var estadosCidades = require('./estados_cidades')

const getListaEstados = function(){
    let arrayEstados = []
    let jsonEstados = {}
    let status = false;

    for(let cont=0; cont < estadosCidades.estadosCidades.estados.length; cont++){
        arrayEstados.push(estadosCidades.estadosCidades.estados[cont].sigla)
        let status = true;
   
}
    jsonEstados.uf = arrayEstados
    jsonEstados.quantidade = arrayEstados.length


    if(status)
    return jsonEstados
    else 
    return false;


}

const getDadosEstados = function(uf){
    let jsonEstados = {}
    let filtro = uf
    let status = false

    estadosCidades.estadosCidades.estados.forEach(function(estado){
     if(filtro.toUpperCase() == estado.sigla.toUpperCase()){
    
        jsonEstados.uf = estado.sigla
        jsonEstados.descricao = estado.nome
        jsonEstados.capital = estado.capital
        jsonEstados.regiao = estado.regiao
        status=true
     }
        })
        
        if (status){
        return jsonEstados
        }else{
            return false
        }
}

const getCapitalEstados = function(uf){
    let jsonEstados = {}
    let filtro = uf
    let status = false

    estadosCidades.estadosCidades.estados.forEach(function(estado){
     if(filtro.toUpperCase() == estado.sigla.toUpperCase()){
    
        jsonEstados.uf = estado.sigla
        jsonEstados.descricao = estado.nome
        jsonEstados.capital = estado.capital
        status = true
     }
        })
       
       
        if (status){
            return jsonEstados
            }else{
                return false
            }
}

const getEstadosRegiao = function(regiao) {
    let jsonRegiao = {}
    let arrayEstados = []
    let filtro = regiao
    let status = false

    estadosCidades.estadosCidades.estados.forEach(function(estado) {
        if (filtro.toUpperCase() === estado.regiao.toUpperCase()) {
            let jsonEstados = {}
            jsonEstados.uf = estado.sigla
            jsonEstados.nome = estado.nome
            arrayEstados.push(jsonEstados)
        }
    })
    if (arrayEstados.length > 0) {
        jsonRegiao.regiao = filtro.toUpperCase()
        jsonRegiao.estados = arrayEstados
        status = true
    }
    if(status)
    return jsonRegiao
    else 
    return false
};

const getCapitalPais = function() {
    let jsonCapital = {}
    let arrayCapital = []
    let status = false

    for (let cont = 0; cont < estadosCidades.estadosCidades.estados.length; cont++) {
        const estado = estadosCidades.estadosCidades.estados[cont]

        if (estado.capital_pais) {
            let jsonEstados = {
                capital_atual: estado.capital_pais.capital,
                uf: estado.sigla,
                descricao: estado.nome,
                capital: estado.capital,
                regiao: estado.regiao,
                capital_pais_ano_inicio: estado.capital_pais.ano_inicio,
                capital_pais_ano_termino: estado.capital_pais.ano_fim
            }
            arrayCapital.push(jsonEstados)
            status=true
        }
    }

    jsonCapital.capitais = arrayCapital
    if (status)
    return jsonCapital
    else
    return false
}
 
const getCidades = function(uf) {
    let jsonCidades = {}
    let arrayCidades = []
    let filtro = uf
    let status = false

    estadosCidades.estadosCidades.estados.forEach(function(estado) {
        if (estado.sigla.toUpperCase() === filtro.toUpperCase()) {
            estado.cidades.forEach(function(cidade) {
                arrayCidades.push(cidade.nome)
            })

            jsonCidades.uf = estado.sigla
            jsonCidades.descricao = estado.nome
            jsonCidades.quantidade_cidades = estado.cidades.length
            jsonCidades.cidades = arrayCidades
            status=true
        }
    })

    if(status)
  return jsonCidades
  else
  return false
}

module.exports = {
    getListaEstados,
    getDadosEstados, 
    getCapitalEstados,
    getCapitalPais,
    getEstadosRegiao,
    getCidades
}
