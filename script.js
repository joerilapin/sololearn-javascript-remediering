/*
//////////////////////////////////////////////////////
every new excercise goes on top, the others are commented out,
the easy ones I push to the bottom, the others that I don't understand
stay on top with comment or questions
/////////////////////////////////////////////////////
*/


/////
//????
////
/*var a=[10,7,14,'foo'];
var b=[10,7,14,'foo'];
console.log(a===b);*/


////
//drukt 1234 af
////
/*var x=[1,2,3,4];
for(var y in x){
    document.write(x[y]);*/
}

////
//???????de alert box geeft 12 , maar geen oplossing in de console??????toch!! je moet 'log' aanklikken(logisch)
////dit zouden we wel eens kunnen gebruiken bij API????
/*let alph=new Map([['a','1'],['b','2']]);
var text ="";
for (let kv of alph.entries())
    text+=alph.get(kv[0]);
console.log(text);
alert(text);*/



/////
//
/////
/*var fruits=["banana","orange", "apple","mango"];
var x= fruits.push("kiwi");//push steekt de kiwi erin en geeft de nieuwe lengte weer  weer!!!!
console.log(x);
alert(x);*/

////onderscheid goed leren tussen == equal value en === equal value and equal type
//????is null boolean???
/////
/*
var j;
if (j===null)//////null met 2 ll schrijven
alert(0);
else if (j==null)
    alert(1);
else
    alert(1+2);
*/


////geeft NaN... hoe druk je dan wel hihihi ??
//?????  2 slashen vooraan anders krijg je 'SyntaxError: unterminated regular expression literal'
////
/*var x="hi";
//x*=3;//
x=x+x+x;
alert(x);*/


/*////
//??????geeft in console 1 en daaronder 2
////*/
/*let map=new Map();
map.set('k1','1').set('k2','2');
map.get('k1');
for(let kv of map.entries())
    console.log(kv[1]);*/


/*///
//?????
///
/which method is used to reload the current document?--> location.reload*/


////ik begrijp deze niet
///????????????
/*function changeNumb(b){
    b=2;
}
var a=3;
changeNumb(a);
alert(a);*!/*/




/////
// ???????
/////
/*var f=function g() {return 23;};
alert(typeof g());*/



///////
//??????????????ik snap deze niet, geeft verschillend resultaat in de console en in de alert
///////



/////
/////
/*
var a ='7';
var b ='5';
alert((a--b)+(--b));// er moet een spatie !!a- -b, anders werkt het niet!!
*/

/////array is zero-based!!!
/////
/*var pizza=["m","d","f","f"];
var a=pizza.indexOf("f");
a+=pizza.indexOf('m')+4;
document.write(a);*/

//////////--x bepaalt dat x éérst verminderd, dus hier wordt x dan 5, en die waarde wordt dan ook aan y toegekend
//////////hier wordt dus achtereenvolgens 2 en 1 getypt wat verschijnt als 21
/*var a=8;
var b=3;
document.write(a%b);
var x=6;
var y=--x;
var z=x+y;
document.write(z%b);
alert(a%b);
alert(z%b);*/

////
////
/*var str="Hello World";
var num=4;
var p=str.indexOf("e");
alert(num*p+5);*/


////
////
/*var str="think like a coder";//de spaties tellen mee in de array of string!!!!
alert((str.length-10)*5+10);*/





/*/////!*!//The indexOf() method returns the position of the first occurrence of a specified value in a string.
This method returns -1 if the value to search for never occurs.
    Note: The indexOf() method is case sensitive.
    Tip: Also look at the lastIndexOf() method.*!/
//////*/
/*let a=5;
let b=a*5;
let c;
if (a>2)
    c=a+b;
else
    c=b-a;
console.log(c);
alert(c);*/
