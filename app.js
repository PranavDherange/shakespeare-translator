var input = document.querySelector('.input');
var button = document.querySelector('.btn');
var out = document.querySelector('.output');

var apiUrl = 'https://api.funtranslations.com/translate/shakespeare.json';

function fetchURL(inp) {
    return apiUrl + "?" + "text=  " + inp;
}

function errorHandler(error) {
    alert("Server down! Try again later", error);
}

function clickHandler() {
    var text = input.value;

    fetch(fetchURL(text))
        .then(res => res.json())
        .then(json => {
            var final = json.contents.translated;
            out.innerText = final;
        })
        .catch(errorHandler)
}



button.addEventListener('click', clickHandler);