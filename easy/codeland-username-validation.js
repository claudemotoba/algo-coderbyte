// Demandez à la fonction CodelandUsernameValidation ( str ) de prendre le paramètre str transmis et de déterminer si la chaîne est un nom d'utilisateur valide selon les règles suivantes:

// 1. Le nom d'utilisateur comprend entre 4 et 25 caractères.
// 2. Il doit commencer par une lettre.
// 3. Il ne peut contenir que des lettres, des chiffres et le caractère de soulignement.
// 4. Il ne peut pas se terminer par un caractère de soulignement.

// Si le nom d'utilisateur est valide, votre programme doit renvoyer la chaîne true , sinon renvoyer la chaîne false .

// Input: "aa_"
// Output: false
// Input: "u__hello_world123"
// Output: true

function CodelandUsernameValidation(str) { 

    // code goes here  
    const regex = /^[a-zA-Z][a-zA-Z0-9_]*[^_]$/g
    if (str.length >= 4 && str.length <= 25 && regex.test(str)) {
        return true
    }
    return false
  
}
     
  // keep this function call here 
  console.log(CodelandUsernameValidation('123abc444'));