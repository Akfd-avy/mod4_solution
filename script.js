// ÉTAPE 1 : Enveloppe tout le contenu dans un IIFE
(function () {
  // Crée un tableau de noms
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Boucle à travers le tableau de noms
  for (var i = 0; i < names.length; i++) {
    // ÉTAPE 11 : Récupère la première lettre du nom actuel
    var firstLetter = names[i].charAt(0).toLowerCase();
    
    // ÉTAPE 12 : Compare la 'firstLetter' récupérée
    if (firstLetter === 'j') {
      // Si la première lettre est 'j', utilise 'byeSpeaker'
      byeSpeaker.speak(names[i]);
    } else {
      // Sinon, utilise 'helloSpeaker'
      helloSpeaker.speak(names[i]);
    }
  }
})();