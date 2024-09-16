// Etape 1
// Conçu pour diminuer la barrière d’entrée
// Créer une fonction decoupeChaine qui prend en paramètre une string et renvoie la même string dans laquelle les caractères successifs non identiques sont séparés par un espace.

function decoupeChaine(chaine) {
  // Vérification si la chaîne est vide
  if (chaine.length === 0) {
    return "";
  }

  let resultat = "";
  let i = 0;

  while (i < chaine.length) {
    // On ajoute le caractère courant à la chaîne de résultat
    resultat += chaine[i];
    i++;

    // Tant que les caractères sont identiques, on les saute
    while (i < chaine.length && chaine[i] === chaine[i - 1]) {
      resultat += chaine[i];
      i++;
    }

    // Si nous ne sommes pas à la fin de la chaîne, ajoute un espace
    if (i < chaine.length) {
      resultat += " ";
    }
  }

  return resultat;
}

console.log(decoupeChaine("aabc"));

// Etape 2
// Créer une fonction decritChaine, inspirée de decoupeChaine, qui prend en paramètre une string
// et renvoie une string qui décrit, tel qu'expliqué ci-dessus, les caractères qui constituent la chaîne en paramètre.

function decritChaine(chaine) {
  // Vérification si la chaîne est vide
  if (chaine.length === 0) {
    return "";
  }

  let resultat = "";
  let i = 0;

  while (i < chaine.length) {
    let count = 1; // Compteur pour les occurrences du caractère courant

    // Compte le nombre de caractères identiques successifs
    while (i + 1 < chaine.length && chaine[i] === chaine[i + 1]) {
      count++;
      i++;
    }

    // Ajoute la description du groupe de caractères à la chaîne de résultat
    resultat += count + chaine[i];
    i++;
  }

  return resultat;
}

console.log(decritChaine("aabbcd"));

// Etape 3
// Créer une fonction suiteConway qui donne les n premiers termes de la suite
// qui commence par le caractère carac. n et carac sont passés en paramètres de la fonction.

function suiteConway(carac, n) {
  // Fonction pour générer le prochain terme de la suite
  function genererTerme(terme) {
    let resultat = "";
    let i = 0;

    while (i < terme.length) {
      let count = 1; // Compteur pour les occurrences du caractère courant

      // Compte le nombre de caractères identiques successifs
      while (i + 1 < terme.length && terme[i] === terme[i + 1]) {
        count++;
        i++;
      }

      // Ajoute la description du groupe de caractères à la chaîne de résultat
      resultat += count + terme[i];
      i++;
    }

    return resultat;
  }

  let terme = carac;

  for (let i = 0; i < n; i++) {
    console.log(terme);
    terme = genererTerme(terme);
  }
}

console.log(suiteConway("1", 3));
