//1
var a=2,b=4, c=6;
console.log((a==b) && (b==c)||(a+b));

//2
var a=10, b=5;
console.log((a++) + (++a)- (a+b));

//3
var a=5,b=5, c=10;
console.log((a==b) || (c < b));

//4
var a=1,b=2, c=3;
console.log((a*b) && (b*c) || (c*b));

//5
var a=2,b=4, c=6;
console.log((a <= b) && (a % b < c));

//6
var x=3,y=6;
console.log((x+y)&&(x-y)&&(x%y));

//7
var a=2, b=3, c=4;
console.log((a<b)||(b<c)||(a<c));

//8
var a=1, b=2, c="3";
console.log(!((a=b)&&(b===c)));

//9
var a=4, b=5;
console.log((a!=b)&&(a<b));

//10
var a=10, b=5, c=20;
console.log((a<b)&&(a++)<=c);

//11
var a=null, b="10";
console.log((a===b)||(a>b) + (a<b));

//12
var a="J", b="10", c=10;
console.log((a===b) && (b==c) || (a===c));

//13
var a=0, b=10, c=20;
console.log((++a) + (b%c) && (a+c) || (b/c)*(!(c>=b)));

//14
var a=null, b=undefined;
console.log((a!=b) && (a===b));

//15
var a=true, b=false;
console.log((a*b)+(a/b)&&(a==b)+(a!==b));

//16
var a=" ", b=true, c=false, d="true";
console.log((a==d)||(a===d)&&(b>c)*(b<d));


//17
var a=true, b=0, c=1;
console.log((a&&c)||(a&&b)&&(a==c));

//18
var a=null, b=5, c=10;
console.log((a||c) || (a <= b) && (a||c));

//19
var a="Jai", b=true, c=" ";
console.log((a==(b!==c))!==(a==(c!==b)));

//20
var a=5, b=5;
console.log((a/b)||(a%b)&&(a===b)||(!(a!==b)));

//21
var a=5, b=true, c=false;
console.log((a+b)&&(a+c)||(b+c)==(!(c/b)));

//22
var a="0", b=20, c=5;
console.log((a-c)&&(a**=b)||(a*b));

//23
var a="5", b="5", c=5;
console.log((a-b) && (a**=c) || (a*b) * (b*c));

//24
var a=10, b="20", c=5.5;
console.log((a<b)&&(c>=b)||(b+c)> (b-a));

//25
var a="J", b="shri", c=3;
console.log((a+b+c) && (a-b) || (b-c));

//26
var a=5, b=3, c=2;
console.log((a+b)* (a-b)* (a-c)* (c+b) || (a%c));

//27
var a=5, b=6;
console.log((a!=b) && !(a<b)+ (a+b));

//28
var a="2", b=2, c="true";
console.log((a===b)||(b==a)&&(a+b+c));

//29
var a=0, b=10, c=20;
console.log((++a)*(b%c)&&(b/c)||(a==b));


//30
var a="Nila", b=2, c=2;
console.log(!((a+b)*(b-c) || (!(b===c))));

//Test-1
//1
var a=1, b=25, c="fab", d=2;
console.log(((a>=b)||c) && ((d===c) || (d==c)));

//2
var a="fab", b="2", c="20", d=10;
console.log((a===b) || (c<=d));

//3
var a="2", b="10";
console.log((a<=0) && (b<10) || (a==b) && (a>b));

//4
var a=20, b="10";
console.log((a!=b) && (a<=b));

//5
var a=2=, b="10", c=10;
console.log((a>b)&&(b+a)>=(b===a)&&(c==a));

//6
var a="fab", b="10", c=22;
console.log(((a==c) && (b||a)) || (a!==b));

//7
var a=20,b="10";
console.log((a+b) && (b==a)|| a);

//8
var a="0", b=20, c=true;
console.log((a||c) && (a&&b) ||(a+b+c));

//9
var a=2, b="2", c="6";
console.log((a==b) && (b===a) || (a<b==c));

//10
var a="4",b="4";
console.log((a!==b));
