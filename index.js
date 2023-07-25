function getQuotes(){
    fetch("http://localhost:8080/quotes")
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
}
getQuotes()

function getOneQuote(id){
    fetch(`http://localhost:8080/quotes/${id}` )
    .then(response=>response.json())
    .then(data=> console.log(data))
    .catch(error=>console.log(error))
}
getOneQuote(1)

let newObject={
    author:"Vinny",
    quote:"be happy"
}

function postQuote(){
//my object will have 3 key-value pairs
//first one is the method
//second one is headers
//the last one is your actual data. Key is called body
    fetch("http://localhost:8080/quotes", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newObject)
    })
    .then(response=>response.json())
    .then(data=> console.log(data))
    .catch(error=>console.log(error))
}
let button = document.getElementById("postButton")
button.addEventListener("click",postQuote)