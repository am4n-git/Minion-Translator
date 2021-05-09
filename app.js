var btn= document.querySelector("#btn-translate");
var txtInput= document.querySelector("#text-input");
var output = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/minion.json"

function getTranslation(text){
    return url + "?" + "text="+text;
}

function errorHandler(){
    alert("Something wrong with error, try later");
}

function clickHandler(){
    var inputText = txtInput.value;

    fetch(getTranslation(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText= json.contents.translated;
            output.innerText= translatedText;
        })
        .catch(errorHandler)
};

btn.addEventListener("click", clickHandler);