// Trouver l'intersection
// Demandez à la fonction FindIntersection ( strArr ) de lire le tableau de chaînes stockées dans strArr qui contiendra 2 éléments: le premier élément représentera une liste de nombres séparés par des virgules triés par ordre croissant, le deuxième élément représentera une deuxième liste de nombres séparés par des virgules numéros (également triés). Votre objectif est de renvoyer une chaîne séparée par des virgules contenant les nombres qui apparaissent dans les éléments de strArr dans l'ordre trié. S'il n'y a pas d'intersection, renvoie la chaîne false .
// Exemples
// Entrée: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Sortie: 1,4,13
// Entrée: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
// Sortie: 1,9,10

function FindIntersection(strArr) { 
    // code goes here  
    const tab1 = strArr[0].split(',')
    const tab2 = strArr[1].split(',')
    let res = ''
    for(let i = 0; i < tab1.length; i++){
        for (let j = 0; j < tab2.length; j++) {
            if (tab1[i].replace(' ', '') === tab2[j].replace(' ', '')) {
                res = res + tab1[i]
            }
            
        }
    }
    if (res.startsWith(' ')) {
        return res.substring(1).replace(/ /g, ','); 
    }else if (!res.length) {
        return false
    }

    return res.replace(/ /g, ','); 
  
}
     
// keep this function call here 
console.log(FindIntersection(["1, 2, 4, 5, 6, 9", "2, 3, 4, 8, 10"]));