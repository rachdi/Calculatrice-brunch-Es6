document.addEventListener('DOMContentLoaded', () => {
  // do your setup here



  var  un=document.getElementById("un");
  var deux=document.getElementById("deux");
  var trois=document.getElementById("trois");
 var quatre=document.getElementById("quatre");
  var cinq=document.getElementById("cinq");
  var six=document.getElementById("six");
  var sept=document.getElementById("sept");
  var huit=document.getElementById("huit");
  var neuf=document.getElementById("neuf");
  var zero=document.getElementById("zero");
  var virgule=document.getElementById("virgule");
 var c=document.getElementById("c");
  var egal=document.getElementById("egal");
  var plus=document.getElementById("plus");
 var moins=document.getElementById("moins");
  var fois=document.getElementById("fois");
  var divise=document.getElementById("divise");
  var suppr=document.getElementById("suppr");

  

  
  un.onclick=function un(){
    var x = document.getElementById("un").value;
   var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
  }

  deux.onclick=function deux(){
    var x = document.getElementById("deux").value;
    var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
  }

  trois.onclick=function trois(){
   var x = document.getElementById("trois").value;
    var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
  }

  quatre.onclick=function quatre(){
   var x = document.getElementById("quatre").value;
   var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
  }

  cinq.onclick=function cinq(){
    var x = document.getElementById("cinq").value;
    var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
  }

  six.onclick=function six(){
   var x = document.getElementById("six").value;
  var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
  }

  sept.onclick=function sept(){
    var x = document.getElementById("sept").value;
    var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
  }

  huit.onclick=function huit(){
    var x = document.getElementById("huit").value;
    var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
  }

  neuf.onclick=function neuf(){
    var x = document.getElementById("neuf").value;
   var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
  }

  zero.onclick=function zero(){
   var x = document.getElementById("zero").value;
   var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
  }

  virgule.onclick=function virgule(){
   var x = document.getElementById("virgule").value;
    var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + x;
  }

  c.onclick=function c(){
    document.getElementById("resultat").value = "";
  }

  egal.onclick=function egal(){
    var valeur = document.getElementById("resultat").value;
   var resultatFinal = eval(valeur);
    document.getElementById("resultat").value = valeur + " = " + resultatFinal;
  }

  plus.onclick= function plus(){
    var x = document.getElementById("plus").value;
   var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + " " + x + " ";
  }

  moins.onclick=function moins(){
   var x = document.getElementById("moins").value;
   var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + " " + x + " ";
  }

  fois.onclick=function fois(){
    var x = document.getElementById("fois").value;
  var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + " " + x + " ";
  }

  divise.onclick=function divise(){
    var = document.getElementById("divise").value;
    var valeur = document.getElementById("resultat").value;
    document.getElementById("resultat").value = valeur + " " + x + " ";
  }

  suppr.onclick=function suppr(){
    var valeur = document.getElementById("resultat").value;
    var longueur = valeur.length;
   var fin = longueur - 1;
    if(valeur.charAt(longueur-1 == "")){
      fin = longueur - 1;
    }
    valeur = valeur.substring(0, fin);
    document.getElementById("resultat").value = valeur;
  }

  console.log('Initialized app');
});


