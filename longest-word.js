// Demandez à la fonction LongestWord ( sen ) de prendre le paramètre sen transmis et de renvoyer le plus grand mot de la chaîne. S'il y a deux mots ou plus qui ont la même longueur, renvoyez le premier mot de la chaîne avec cette longueur. Ignorez la ponctuation et supposez que sen ne sera pas vide.
// Exemples
// Input: "fun&!! time"
// Output: time

// Input: "I love dogs"
// Output: love

function LongestWord(sen) { 

    // code goes here 
    const regex = RegExp(/[@#$%!&=-?*)(_+*^|}{)\/\]\[:]/g)
    const char = sen.replace(regex, '').split(' ')
    let max = ''
    for (let i = 0; i < char.length; i++) {
        if (char[i].length > max.length) {
            max = char[i]
        }   
    }
    return max; 
  
  }
     
  // keep this function call here 
  console.log(LongestWord('a confusing /:sentence:/[ this is not!!!!!!!~'));