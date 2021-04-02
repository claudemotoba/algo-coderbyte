// Questions Points
// Demandez à la fonction QuestionsMarks ( str ) de prendre le paramètre de chaîne str , qui contiendra des nombres à un chiffre, des lettres et des points d'interrogation, et vérifiez s'il y a exactement 3 points d'interrogation entre chaque paire de deux nombres qui totalisent 10. Si c'est le cas, alors votre programme doit renvoyer la chaîne true , sinon il doit renvoyer la chaîne false . S'il n'y a pas deux nombres qui totalisent 10 dans la chaîne, votre programme doit également renvoyer false .

// Par exemple: si str est "arrb6 ??? 4xxbl5 ??? eee5" alors votre programme doit retourner true car il y a exactement 3 points d'interrogation entre 6 et 4, et 3 points d'interrogation entre 5 et 5 à la fin de la chaîne.
// Exemples
// Entrée: "aa6? 9"
// Sortie: faux
// Entrée: "acc? 7 ?? sss? 3rr1 ?????? 5"
// Sortie: vrai

function QuestionsMarks(str) { 

    // code goes here 
    const regex = /[aA-zZ ]/g
    const char = str.replace(regex, '')
    const char2 = char.replace(/[???]/g, '')
    for (let i = 0; i < char2.length; i++) {
       
        const condition = parseInt(char2[i]) + parseInt(char2[i-1])
        if (condition === 10) {
            return true
        }
        
    }
    return false; 
  
  }
     
  // keep this function call here 
  console.log(QuestionsMarks('aa6? 9'));

// SOLUTION CODERBYTE

//   function QuestionsMarks(str) { 
//     res = false;
//     for(let i=0; i<str.length; i++){
//         for(let j=i+1; j<str.length; j++){
//             if(Number(str[i]) + Number(str[j])=== 10){
//                 res = true;
//                 if(str.slice(i,j).split("?").length -1 < 3){
//                     return false;
//                 }
//             }
//         }
//     }
//     return res;
// }
   
// // keep this function call here 
// QuestionsMarks(readline());