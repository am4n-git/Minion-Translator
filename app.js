var btn= document.querySelector("#btn-translate");
var txtInput= document.querySelector("#text-input");
var output = document.querySelector("#output");
var samplebtn = document.querySelector("#sampletext");
var clearbtn= document.querySelector("#clear");


var url = "https://api.funtranslations.com/translate/minion.json"

function getTranslation(text){
    return url + "?" + "text="+text;
}

function errorHandler(error){
    alert("Too Many Requests: Rate limit of 5 requests per hour exceeded.\n Try again later!!");
}

function clickHandler(){

    var inputText = txtInput.value

    if(inputText==""){
        alert("Enter your message in the box");
    }

    else{
        fetch(getTranslation(inputText))
            .then(response => response.json())
            .then(json => {
            var translatedText= json.contents.translated;
            output.innerText= translatedText;
        })
            .catch(errorHandler)
    }

};


function sampleEvent()
{
    txtInput.innerText="Hello this is a sample text";
    btn.addEventListener("click", clickHandler);


}

function clear(){
    txtInput.value= "";
    output.innerText= "";
}



btn.addEventListener("click", clickHandler);
samplebtn.addEventListener("click", sampleEvent);
clearbtn.addEventListener("click", clear);

