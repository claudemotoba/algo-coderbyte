// Demandez à la fonction FirstReverse ( str ) de prendre le paramètre str passé et de renvoyer la chaîne dans l'ordre inverse. Par exemple: si la chaîne d'entrée est "Hello World and Coders", votre programme doit renvoyer la chaîne sredoC dna dlroW olleH .

// Input: "coderbyte"
// Output: etybredoc
// Input: "I Love Code"
// Output: edoC evoL I

function FirstReverse(str) { 

    // code goes here  
    return str.split('').reverse().join(''); 
  
}
     
// keep this function call here 
console.log(FirstReverse('Hello World and Coders'));