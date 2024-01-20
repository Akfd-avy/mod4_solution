(function (window) {
  // ÉTAPE 3 : Crée un objet 'helloSpeaker'
  var helloSpeaker = {};
  // ÉTAPE 4 : Ne pas attacher la variable 'speakWord' à l'objet 'helloSpeaker'
  var speakWord = "Hello";
  // ÉTAPE 5 : Réécris la fonction 'speak' et attache-la à l'objet 'helloSpeaker'
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };
  // ÉTAPE 5 : Expose l'objet 'helloSpeaker' à la portée globale
  window.helloSpeaker = helloSpeaker;
})(window); // ÉTAPE 2 : Enveloppe tout le contenu dans un IIFE