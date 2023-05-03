// Asignar un eveto load a una imagen.gif

// Obtener nodo de etiqueta con id 'gif' y asignarle un evento 'load'

let gif = document.querySelector('#gif');

// Crear funcion getDocument
function getDocument(url,onload){
    let xhr = new XMLHttpRequest()
    xhr.responseType = 'document'
    xhr.open('get', url)
    xhr.addEventListener('load', ()=>{
        if (xhr.status == 200){
            onload(xhr.response, false)
        }
        if(xhr.status == 404){
            onload('404 not found', true)
        }
    })
    xhr.send()
}

/* Cuando el .gif haya terminado de cargar hacer un pedido 
AJAX para ir a buscar los contenidos del archivo home.html:*/

gif.addEventListener('load', (e)=>{
    setTimeout(()=>{
        getDocument('./src/plantillas/home.html', (data,err)=>{
            if(err){
                console.log('Ha ocurrido un error: ', data)
                return
            }else{
                console.log('Success: ', data)
            }
        })
    },4000)
    
})