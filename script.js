var result = 0;
var prompter = document.getElementById("prompter");
var controlOp = false;
var isResult = false;

function press(x){
  if (prompter.innerText.length > 13) {
    glow();
  }
  else {
    if ((prompter.innerText == "0") || ((isResult == true) && (x != "*") && (x != "/") && (x != "+") && (x != "-") && (x != "%") && (x != "."))) { prompter.innerText = x; isResult = false; controlOp = false;}
    else {prompter.innerText += x; isResult = false;}
  }
}


function operation(y){
  if (controlOp == false && prompter.innerText != "0") {
    press(y);
    controlOp = true;
  }
  else {
    glow();
  }
}


function del(){
  var txt = prompter.innerText;
  if (txt.length == 1) {
    prompter.innerText = "0";
  }
  else {
    if ((txt.substr(txt.length-1) == '+') || (txt.substr(txt.length-1) == '/') || (txt.substr(txt.length-1) == '*') || (txt.substr(txt.length-1) == '-')) {controlOp = false;}
    txt = txt.substr(0,txt.length-1);
    prompter.innerText = txt;
  }
}

function deleteAll(){prompter.innerText = "0"; controlOp = false;}


function equals(){

  if (Number.isNaN(eval(prompter.innerText)) == false) {
    result = eval(prompter.innerText).toString();
    if (result.length > 13) {
      if (result.search(".") == -1) {
        alert("So Big Result");
      }
      else {
        prompter.innerText = result.substr(0,13);
        controlOp = false;
        isResult = true;
      }
    }
    else {
      prompter.innerText = result;
      controlOp = false;
      isResult = true;
    }
  }
}




function glow(){
  var scrn = document.querySelector('.screen');
  scrn.style.border = "1px solid #e65e5b";
  scrn.style.boxShadow = "0px 0px 10px 2px #e35d65";
  setTimeout(function(){
    scrn.style.boxShadow = "0px 0px 0px rgba(0,0,0,0)";
    scrn.style.border = "1px solid transparent";
  },400);
}
