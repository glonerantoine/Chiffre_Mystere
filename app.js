var coups = 0;    // nb de coups
var saisie;
var msg = 'Le nombre à deviner est compris entre 0 et 9.';
var btn = document.getElementById('btn_game');
var min = 0;
var max = 9;
var cpt = 0;

  document.getElementById('btn_game'),addEventListener('click', start);

function start(min, max)
  {

    var x = Math.floor(Math.random() * 10)

    do {
      saisie = prompt(msg);
      if(saisie == null)
      return 0;
     coups++;

     if(saisie > x)
      msg = "C'est moins";
    else
      msg = "C'est plus";


  }
  while(saisie != x);
  alert("Bravo, tu as gagne en " + coups + " coups !");
  // coups = 0;
}

