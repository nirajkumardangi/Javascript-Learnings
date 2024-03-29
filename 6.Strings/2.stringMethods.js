//👉 length: return the length of the strings. ==>
let string = "NIRAJ Kumar";
console.log(string.length);   // OUTPUT: 11



//👉 toLowerCase(): Converts all the characters in a string to lowercase ==>
// let string = "NIRAJ Kumar";
// let doc = string.toLowerCase()
// console.log(doc);   // OUTPUT: niraj kumar



//👉 toUpperCase(): Converts all the characters in a string to uppercase ==>
// let string = "NIRAJ Kumar";
// let doc = string.toUpperCase()
// console.log(doc);   // OUTPUT: NIRAJ KUMAR



// 👉 includes(): Find exact match words on strings than return true or false. ==>
// let string = "My name is NIRAJ Kumar";
// let doc = string.includes("NIRAJ");
// console.log(doc);   // OUTPUT: true



//👉 startWIth(): Find exact match words on starting strings than return true or false. ==>
// let string = "Roushan is a good boy";
// let doc = string.startsWith("Ro");  // true
// let doc1 = string.startsWith("is"); // false
// console.log(doc);
// console.log(doc1);



//👉 endWith(): Find exact match words on ending strings. ==>
// let string = "My name is NIRAJ Kumar";
// let doc = string.endsWith("mar")
// console.log(doc);   // true



//👉 search(): return position (indexNumber) of the strings. ==>
// let string = "My name is NIRAJ Kumar";
// let doc = string.search("a");
// console.log(doc);   // 4
// console.log(string.search("is"));  // 8



// 👉 match(): search and collect in a string again and again, then collected data convert into array. ==>
let string = "My name is NIRAJ Kumar & my friend name is nik";
let doc = string.match(/is/g);
console.log(doc);   // OUTPUT: [ 'is', 'is' ]



//👉 indexof(): return index of searched data on strings. ==>
// let string = "My name is NIRAJ Kumar & my friend name is nik";
// let doc = string.indexOf("is");
// console.log(doc);   // OUTPUT: 8



//👉 lastIndexOf(): searching data on last of the string and return index number. ==>
// let string = "My name is NIRAJ Kumar & my friend name is nik";
// let doc = string.lastIndexOf("is");
// console.log(doc);    // OUTPUT: 40



//👉 replace(): search and replaces a specified value with another value in a string. ==>
// let string = "My name is NIRAJ Kumar & my friend name is nk";
// string = string.replace("NIRAJ", "Nishant");
// string = string.replace("nk", "Nitish");
// string = string.replace("Nitish", "Nitish Kumar");

// var string2 = "My Name is niraj is nik is niku";
// var a = string2.replace(/is/g, "are");
// console.log(a);   



//👉 trim(): removes whitespace from both sides of a string. ==>
// var str = "       Niraj       ";
// var doc = str.trim();
// console.log(doc);



//👉 charAT(): returns the character at a specified index (position) in a string. ==>
// var str = "Niraj Kumar";
// var doc = str.charAt(0);
// console.log(doc);   //Output: N



// 👉 charCodeAt(): returns the unicode of the character at a specified index in a string: The method returns a UTF-16 code (an integer between 0 and 65535) ==>

// var str = "Niraj Kumar";
// var code = str.charAt(1);
// console.log(code);  // i



// 👉 fromCharCode(): returns the unicode of the character. ==>
// var doc = String.fromCharCode(65);
// console.log(doc);   //Output: A



// 👉 concat(): joins two or more strings. ==>
// var str = "Niraj ";
// var str1 = "Kumar ";
// var str2 = "Dangi";
// var fname = str.concat(str1, str2);
// console.log(fname);   //Output: Niraj Kumar Dangi



// 👉 split(): A string can be converted to an array with the split() method: ==>

// var str = "My name is niraj Kumar Dangi";
// var doc = str.split(" ");
// console.log(doc); 

//Output: [ 'My', 'name', 'is', 'niraj', 'Kumar', 'Dangi' ]



// 👉 repeat(): repeat function is used to repeat string. ==>
// var str = "Niraj-Kumar,  ";
// var doc = str.repeat(3);
// console.log(doc);    //Output: Niraj-Kumar,  Niraj-Kumar,  Niraj-Kumar,



// 👉 slice(): extracts a part of a string and returns the extracted part in a new string.
//-> The method takes 2 parameters: start position, and end position (end not included) ==>

// var str = "Niraj-Kumar";
// var doc = str.slice(2);
// var doc1 = str.slice(2, 8);
// var doc2 = str.slice(-3);
// console.log(doc);    // raj-Kumar
// console.log(doc1);   // raj-Ku
// console.log(doc2);   // mar



// 👉 substr(): substr() is similar to slice().
//-> The difference is that the second parameter specifies the length of the extracted part. ==>
// var str = "Niraj-Kumar";
// var doc = str.substr(2,6);
// console.log(doc);   //raj-Ku



// 👉 subString(): substring() is similar to slice().
//-> The difference is that start and end values less than 0 are treated as 0 in substring() ==>
// var str = "Niraj-Kumar";
// var doc = str.substring(2,6);
// console.log(doc);   // raj-



// 👉 toString(): Convert any variable like string and numeric to string.
// var str = 50;
// var doc = str.toString();
// console.log(doc + 20);   // 5020

// 👉 fromCodePoint(): returns a string of characters represented by unicode 65, 66 and 67 ==>

// let alphabets = String.fromCodePoint(65, 66, 67);
// console.log(alphabets);  // ABC

