// Fonction qui évalue le chiffre et renvoie la sortie
function calculer()
{
    let a = document.getElementById("affichage").value 
    let b = eval(a.replace('×', '*').replace('−', '-')) 
    document.getElementById("affichage").value = b 
}

function afficher(val)
{
    document.getElementById("affichage").value+=val.replace('*', '×').replace('-', '−');
}

function effacer()
{
    document.getElementById("affichage").value = "";
}