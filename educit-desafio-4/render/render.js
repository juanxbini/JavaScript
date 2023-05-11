'use strict'


export function renderAllPokemon(parse){
    
    //crear tabla
    let tabla = document.createElement('table')
    tabla.className = 'table-pokemon'
    tabla.innerHTML = `<table class="table">
                        <thead>
                        <tr>
                            <th scope="col">Pokemon</th>
                            <th scope="col"></th>
        
                        </tr>
                        </thead>
                        <tbody class="body-table">
                        </tbody>
                        </table>`
    document.body.appendChild(tabla)
    
    //crear tbody
    let tbody = document.querySelector('.body-table')
    
    //crear tr para cada pokemon
    parse.results.forEach(element => {
    
        let tr = document.createElement('tr')
        let trContent = `
                    <th scope="row">Name:</th>
                    <td>${element.name}</td>
                    `
        tr.innerHTML = trContent
        tbody.appendChild(tr)
        //crear button ver pokemon
        
       let tdButtonContainer = document.createElement('td')
       tdButtonContainer.innerHTML = `<button id="${element.name}" class="btn-pokemon" info="${element.url}">
                                       Ver Pokemon </button>`
        tr.appendChild(tdButtonContainer)
        
    });
}
export function renderOnePokemon(name,parse){
    //saber si existe una ventana con clase card para eliminarla y no se repitan
    let check_card = document.querySelector('.card')
    if(document.body.contains(check_card)){
      document.body.removeChild(check_card)
    }

    //creacion de elemento contenedor con clase .card
    let card = document.createElement('div')
    card.style.width = '18rem'
    card.innerHTML = `
    <img class="card-img-top" src="#" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">${name}</h5>
    </div>
    <ul class="list-group list-group-flush">
    <h5>Abilities</h5>
    
    </ul>
    <div class="card-body">
    <a href="#" class="card-link"></a>
    <a href="#" class="btn-cerrar" id="cerrar-card">Cerrar</a>
    </div>
    `
    card.className = 'card'

    //insertando el contenedor de clase .card antes de la tabla
    let table = document.querySelector('.table-pokemon')
    document.body.insertBefore(card, table)

    /** creando el contenido del contenedor de tipo lista desordenada **/
    let ul = document.querySelector('.list-group-flush')

    //insertando cada habilidad en un elemento de tipo enlace
    parse.abilities.forEach(element =>{
    let aAbility = document.createElement('li')
    aAbility.className = "list-group-item"

    //insertando cada elemento a dentro de la lista desordenada
    ul.appendChild(aAbility)
    aAbility.innerText = `${JSON.stringify(element.ability.name).slice('')}`
  })
  
}

