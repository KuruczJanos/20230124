const nevlista = document.querySelector("#nevlista");
var nevTomb =[
    "Pista",
    "Karoly",
    "Mari",
    "Peti",
    "Guszti",
    "Béla"];

nevTomb.forEach((nev) => {
    var li = document.createElement('li');
    li.textContent = nev ;
    nevlista.appendChild(li);
    
    });


