'use strict'
import { renderAllPokemon, renderOnePokemon } from "./render/render.js";


function getFromPokeApi(url, cb){
    let xhr = new XMLHttpRequest();
    xhr.open('get', url)
    xhr.addEventListener('load', ()=>{
        switch(xhr.status){
            case 200: cb(xhr.response, false)
                break;
            case 404: cb('error 404 not found',true)
                break;
        }
    })
    xhr.send()
}
function getAllPokemon(){
    getFromPokeApi('https://pokeapi.co/api/v2/pokemon',(data,err)=>{
        if(err){
            console.log(data)
            return
        }else{
            let parse = JSON.parse(data)
            renderAllPokemon(parse)
        }
    })
}
function getOnePokemon(name){
    getFromPokeApi(`https://pokeapi.co/api/v2/pokemon/${name}`,(data,err)=>{
        if(err){
            console.log(data)
        }else{

            let parse = JSON.parse(data)
            renderOnePokemon(name,parse)
        }
    })
}

//eventos 
document.body.addEventListener('click',(e)=>{
    console.log(e.target.className)

    // traer informacion de pokemon seleccionado 
    if(e.target.className == 'btn-pokemon'){
        getOnePokemon(e.target.id)
    }

    // cerrar ventanas con boton cerrar
    if(e.target.className == 'btn-cerrar'){
        let nodo = document.querySelector('.card')
        console.log(nodo)
        document.body.removeChild(nodo)
    }
})
getAllPokemon()