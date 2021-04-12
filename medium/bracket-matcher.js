// Demandez à la fonction BracketMatcher ( str ) de prendre le paramètre str passé et de renvoyer 1 si les crochets correspondent correctement et que chacun est pris en compte. Sinon, retournez 0 . Par exemple: si str est "(hello (world))", alors la sortie doit être 1 , mais si str est "((hello (world))" la sortie doit être 0 car les crochets ne correspondent pas correctement. Seuls "(" et ")" seront utilisés comme crochets. Si str ne contient pas de crochets, renvoyez 1 .
// Exemples
// Input: "(coder)(byte))"
// Output: 0 
// Input: "(c(oder)) b(yte)"
// Output: 1 

function BracketMatcher(str) { 

    // code goes here  
    let count = 0
    let count2 = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i].includes('(')) {
            count = count + 1
        }else if (str[i].includes(')')) {
            count2 = count2 + 1
        }
    }
    return  count != count2 ? 0 : 1; 
  
}
     
// keep this function call here 
console.log(BracketMatcher("(c(oder)) b(yte)"));