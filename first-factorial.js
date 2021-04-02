// Demandez à la fonction FirstFactorial ( num ) de prendre le paramètre num passé et d'en renvoyer la factorielle. Par exemple: si num = 4, alors votre programme doit retourner (4 * 3 * 2 * 1) = 24. Pour les cas de test, la plage sera comprise entre 1 et 18 et l'entrée sera toujours un entier.
// Exemples
// Entrée: 4
// Sortie: 24
// Entrée: 8
// Sortie: 40320

function FirstFactorial(num) { 

    // code goes here  
    if (typeof num !== 'number') {
        return false
    }
    let fact = 1
    for (let i = num; i > 0; i--) {
        fact = fact * i
        
    }

    return fact; 
  
}
     
  // keep this function call here 
console.log(FirstFactorial(4));