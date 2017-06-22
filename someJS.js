function reloadPage(){
    location.reload();
}
const divs = document.getElementById('idTable').getElementsByTagName('div');
console.log(divs);
for (let i=0; i<divs.length; i++)
{divs[i].setAttribute("id", ""+i);}

idTable.onclick = function clickOnTable(element){

    let elementClicked = element.srcElement;
    if(elementClicked.style.backgroundColor == "rgb(145, 222, 221)"){
        return elementClicked.style.backgroundColor = "";
    }

    elementClicked.style.backgroundColor = "rgb(145, 222, 221)";
};