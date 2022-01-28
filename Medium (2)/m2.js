var anagram1 = 'god';
var anagram2 = 'dog';

function anagramChecker(a1, a2){
    let ac1 = a1.split('').sort().join('');
    let ac2 = a2.split('').sort().join('');
    if (ac1 == ac2){
        console.log('true');
    } else{
        console.log('false');
    }
}

anagramChecker(anagram1, anagram2);