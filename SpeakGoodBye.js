(function (window) {
  // ÉTAPE 6 : Enveloppe tout le contenu dans un IIFE
  var byeSpeaker = {};
  // ÉTAPE 7 : Crée un objet 'byeSpeaker'
  var speakWord = "Good Bye";
  // ÉTAPE 8 : Réécris la fonction 'speak' et attache-la à l'objet 'byeSpeaker'
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };
  // ÉTAPE 9 : Expose l'objet 'byeSpeaker' à la portée globale
  window.byeSpeaker = byeSpeaker;
})(window);