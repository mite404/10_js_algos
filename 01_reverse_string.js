//function reverse(str) {
//    let reversed = ''
//    
//    for(let char of str){
//        reversed = char + reversed
//    }
//    
//    return reversed
//}
//
//console.log(reverse('CodingMoney'));


function reverse(str) {
    const strToArray = str.split('')
    
    strToArray.reverse()
    
    return strToArray.join('')
}

console.log(reverse('CodingMoney'))