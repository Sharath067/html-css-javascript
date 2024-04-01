
let buttons = document.getElementsByTagName("button");
let result = document.getElementById("result");
for(let i=0;i<buttons.length;i++)
{
    console.log("buttons");
    buttons[i].onclick = function()
    {
        let input = this.innerText;
        updateDisplay(input);
    }
}
function updateDisplay(input)
{
    let currentDisplay = result.innerText;
    if(currentDisplay=="0")
    {
        if(input!="C" && input!="DEL" && input!="=" && input!="%" && input!="+" && input!="-" && input!="*" && input!="/")
        {
            currentDisplay = "";
            currentDisplay += input;
        }
    }
    else{
        if(input!="C" && input!="DEL" && input!="=")
        {
            currentDisplay += input;
        }
        if(input=="C")
        {
            currentDisplay = "0";
        }
        if(input=="DEL")
        {
            currentDisplay = currentDisplay.substring(0,currentDisplay.length-1);
        }
        if(input=="=")
        {
            currentDisplay = eval(currentDisplay);
        }
    }
    result.innerHTML = currentDisplay;
}
