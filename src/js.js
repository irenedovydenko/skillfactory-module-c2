const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})


const url = new URL('https://sf-pyw.mosyag.in/sse/stream-randoms')

let progress = document.querySelector(".progresscats");
let es = new EventSource("http://127.0.0.1:8080/sse/vote/cats");

let progress = document.querySelector(".progressdogs");
let es = new EventSource("http://127.0.0.1:8080/sse/vote/dogs");

let progress = document.querySelector(".progressparrots");
let es = new EventSource("http://127.0.0.1:8080/sse/vote/parrots");

es.onmessage = function(event) {
    progress.style.cssText = `width: ${Number(event.data)}%`
}

ES.onerror = error => {
    ES.readyState ? progress.textContent = "Some error" : null;
}

ES.onmessage = message => {
    progress.style.cssText = `width: ${message.data}%;`
    progress.textContent = `${message.data}%`
}

ES.onmessage = ({ data }) => {
    progress.style.cssText = `width: ${data}%`
    progress.textContent = `${data}%`
}

let btn = document.querySelector(".cats");
btn.onclick = function() {
    console.log("start")
    let response = fetch("http://127.0.0.1:8080/sse/vote/cats", {method: "POST"})
}

let btn = document.querySelector(".dogs");
btn.onclick = function() {
    console.log("start")
    let response = fetch("http://127.0.0.1:8080/sse/vote/dogs", {method: "POST"})
}

let btn = document.querySelector(".parrots");
btn.onclick = function() {
    console.log("start")
    let response = fetch("http://127.0.0.1:8080/sse/vote/parrots", {method: "POST"})
}