document.addEventListener('DOMContentLoaded', () => {
  // do your setup here



  let  un=document.getElementById("un");
  let deux=document.getElementById("deux");
  let trois=document.getElementById("trois");
  let quatre=document.getElementById("quatre");
  let cinq=document.getElementById("cinq");
  let six=document.getElementById("six");
  let sept=document.getElementById("sept");
  let huit=document.getElementById("huit");
  let neuf=document.getElementById("neuf");
  let zero=document.getElementById("zero");
  let virgule=document.getElementById("virgule");
  let c=document.getElementById("c");
  let egal=document.getElementById("egal");
  let plus=document.getElementById("plus");
  let moins=document.getElementById("moins");
  let fois=document.getElementById("fois");
  let divise=document.getElementById("divise");
  let suppr=document.getElementById("suppr");

  

  
  un.onclick=function un(){
    let x = document.getElementById("un").value;
    let valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
  }

  deux.onclick=function deux(){
    let x = document.getElementById("deux").value;
    let valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
  }

  trois.onclick=function trois(){
    let x = document.getElementById("trois").value;
    let valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
  }

  quatre.onclick=function quatre(){
    let x = document.getElementById("quatre").value;
    let valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
  }

  cinq.onclick=function cinq(){
    let x = document.getElementById("cinq").value;
    let valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
  }

  six.onclick=function six(){
    let x = document.getElementById("six").value;
    let valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
  }

  sept.onclick=function sept(){
    let x = document.getElementById("sept").value;
    let valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
  }

  huit.onclick=function huit(){
    let x = document.getElementById("huit").value;
    let valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
  }

  neuf.onclick=function neuf(){
    let x = document.getElementById("neuf").value;
    let valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
  }

  zero.onclick=function zero(){
    let x = document.getElementById("zero").value;
    let valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
  }

  virgule.onclick=function virgule(){
    let x = document.getElementById("virgule").value;
    let valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
  }

  c.onclick=function c(){
    document.getElementById("resultat").value = "";
  }

  egal.onclick=function egal(){
    let valeur = document.getElementById("resultat").value;
    let resultatFinal = eval(valeur);
    document.getElementById("resultat").value = valeur + " = " + resultatFinal;
  }

  plus.onclick= function plus(){
    let x = document.getElementById("plus").value;
    let valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + " " + x + " ";
  }

  moins.onclick=function moins(){
    let x = document.getElementById("moins").value;
    let valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + " " + x + " ";
  }

  fois.onclick=function fois(){
    let x = document.getElementById("fois").value;
    let valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + " " + x + " ";
  }

  divise.onclick=function divise(){
    let x = document.getElementById("divise").value;
    let valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + " " + x + " ";
  }

  suppr.onclick=function suppr(){
    let valeur = document.getElementById("resultat").value;
    let longueur = valeur.length;
    let fin = longueur - 1;
    if(valeur.charAt(longueur-1 == "")){
      fin = longueur - 1;
    }
    valeur = valeur.substring(0, fin);
    document.getElementById("resultat").value = valeur;
  }

  console.log('Initialized app');
});


