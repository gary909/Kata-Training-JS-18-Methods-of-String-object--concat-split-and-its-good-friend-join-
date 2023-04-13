// function splitAndMerge(string, separator) {
//     // let myStr = string.split(' ').join('');
//     let myStr = string.split('').join(separator);
//     myStr = myStr.concat();
//     // myStr = myStr.split("").join(separator);
//     // let myStr = string.split(" ").join('');
//     // myStr = string.concat();
//     //.join(separator)
//     // myStr = myStr.concat().join(separator);
//     // myStr = string.split(" ").join('');
//     // myStr.join('')
//     return myStr;
// }

function splitAndMerge(string, separator) {
    let str = string
    return str.split(' ').map((item)=>item.split("").join(separator)).join(" ")
  }

console.log(splitAndMerge("My name is John"," ")); // "M y n a m e i s J o h n"
console.log(splitAndMerge("My name is John","-")); // "M-y n-a-m-e i-s J-o-h-n"
console.log(splitAndMerge("Hello World!",".")); // "H.e.l.l.o W.o.r.l.d.!"
console.log(splitAndMerge("Hello World!",",")); // "H,e,l,l,o W,o,r,l,d,!"  