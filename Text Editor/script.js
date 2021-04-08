/**
 * Update the output text as a user types in the textarea
 */
 function updateText(){
     const text = document.getElementById("text-input").value;
   document.getElementById("text-output").innerText = text;
 }
  
  /**
   * Toggle the bold class for the output text
   */
function makeBold(elem) {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("bold");

  }
  
  /**
   * Toggle the italic class for the output text
   */
function makeItalic(elem) {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("italic");
  }
  
  /**
   * Toggle the underline class for the output text
   */
  function makeUnderline(elem){
      elem.classList.toggle("active");
      // document.getElementById("text-output").classList.toggle("underline");
    let formatter = document.getElementById("text-output");
    if (formatter.classList.contains("underline")) {
      formatter.classList.remove("underline");
    }
    else {
      formatter.classList.add("underline");
    }
    
  }
  
  /**
   * Toggle the style textAlign attribute
   * Toggle the active state for the align butttons
  */
  function alignText(elem, alignType){
    let formatText = document.getElementById("text-output");    
    formatText.style.textAlign = alignType;
    let buttons = document.getElementsByClassName("align");
    for (let i =0 ; i < buttons.length; i++){
      buttons[i].classList.remove("active");
    }
    elem.classList.add("active");
  }