        function myFunction() {
   	 document.getElementById("calculator").classList.toggle("show");
	
	}
function rotat() {
   	 document.getElementById("calculator").classList.toggle("rotate");
	
	}

  
var firstnumber;  
var secondnumber;  
var result;  
var operations;  
  
function numone(){  
 if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result){  
    
  document.lcdform.lcds.value = "1";  
      
 }  
 else //if(document.lcdform.lcds.value != "0")  
 {  
  document.lcdform.lcds.value = document.lcdform.lcds.value + "1";  
 }  
   
}  
function numtwo(){  
   
 if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result){  
    
  document.lcdform.lcds.value = "2";  
      
 }  
 else //if(document.lcdform.lcds.value != "0")  
 {  
  document.lcdform.lcds.value = document.lcdform.lcds.value + "2";  
 }  
   
}  
function numthree(){  
    
  if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result){  
    
  document.lcdform.lcds.value = "3";  
      
 }  
 else //if(document.lcdform.lcds.value != "0")  
 {  
  document.lcdform.lcds.value = document.lcdform.lcds.value + "3";  
 }  
    
}  
function numfour(){  
   
 if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result){  
    
  document.lcdform.lcds.value = "4";  
      
 }  
 else //if(document.lcdform.lcds.value != "0")  
 {  
  document.lcdform.lcds.value = document.lcdform.lcds.value + "4";  
 }  
   
}  
function numfive(){  
   
 if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result){  
    
  document.lcdform.lcds.value = "5";  
      
 }  
 else //if(document.lcdform.lcds.value != "0")  
 {  
  document.lcdform.lcds.value = document.lcdform.lcds.value + "5";  
 }  
   
}  
function numsix(){  
   
 if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result){  
    
  document.lcdform.lcds.value = "6";  
      
 }  
 else //if(document.lcdform.lcds.value != "0")  
 {  
  document.lcdform.lcds.value = document.lcdform.lcds.value + "6";  
 }  
   
}  
function numseven(){  
   
 if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result){  
    
  document.lcdform.lcds.value = "7";  
      
 }  
 else //if(document.lcdform.lcds.value != "0")  
 {  
  document.lcdform.lcds.value = document.lcdform.lcds.value + "7";  
 }  
}  
function numeight(){  
   
 if (document.lcdform.lcds.value == "0"){  
    
  document.lcdform.lcds.value = "8";  
      
 }  
 else if (document.lcdform.lcds.value == result)  
 {  
  document.lcdform.lcds.value = "8";  
 }  
 else //if(document.lcdform.lcds.value != "0")  
 {  
  document.lcdform.lcds.value = document.lcdform.lcds.value + "8";  
 }  
   
}  
function numnine(){  
   
 if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result){  
    
  document.lcdform.lcds.value = "9";  
      
 }  
 else //if(document.lcdform.lcds.value != "0")  
 {  
  document.lcdform.lcds.value = document.lcdform.lcds.value + "9";  
 }  
   
}  
function numzero(){  
   
 if (document.lcdform.lcds.value == "0"){  
    
  document.lcdform.lcds.value = "0";  
      
 }  
 else if (document.lcdform.lcds.value == result)  
 {  
  document.lcdform.lcds.value = "0";  
 }  
 else //if(document.lcdform.lcds.value != "0")  
 {  
  document.lcdform.lcds.value = document.lcdform.lcds.value + "0";  
 }  
   
}  
function numdobuzero(){  
   
 if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result){  
    
  return;  
      
 }  
 else //if(document.lcdform.lcds.value != "0")  
 {  
  document.lcdform.lcds.value = document.lcdform.lcds.value + "00";  
 }  
   
}  
function clr(){  
 document.lcdform.lcds.value = "0";  
 document.lcdform.lcdsu.value = "";  
 return;  
}  
function ce(){
 var string;
if (document.lcdform.lcds.value == "0" ){
string = document.lcdform.lcdsu.value;
var length = string.length;
var res = string.slice(0,length-1);
document.lcdform.lcds.value = res;  
document.lcdform.lcdsu.value = res;  
 
}
else{
string = document.lcdform.lcds.value;

var length = string.length;
var res = string.slice(0,length-1);
 document.lcdform.lcds.value = res;  
 //document.lcdform.lcdsu.value = res;  
 }

return;  
}  
  
  
function operationplus(){  
   
 operation = "+";  
 firstnumber = parseFloat(document.lcdform.lcds.value);  
 document.lcdform.lcds.value = "0";  
 document.lcdform.lcdsu.value = firstnumber + operation;  
 //alert(firstnumber);  
    
}  
function operationmult(){  
   
 operation = "*";  
 firstnumber = parseFloat(document.lcdform.lcds.value);  
 document.lcdform.lcds.value = "0";  
 document.lcdform.lcdsu.value = firstnumber + operation;  
   
}  
function operationminus(){  
   
 operation = "-";  
 firstnumber = parseFloat(document.lcdform.lcds.value);  
 document.lcdform.lcds.value = "0";  
 document.lcdform.lcdsu.value = firstnumber + operation;  
   
}  
function operationdivid(){  
   
 operation = "/";  
 firstnumber = parseFloat(document.lcdform.lcds.value);  
 document.lcdform.lcds.value = "0";  
 document.lcdform.lcdsu.value = firstnumber + operation;  
   
}  
function numdot(){

   
 if (document.lcdform.lcds.value == "0" || document.lcdform.lcds.value == result){  
    
  document.lcdform.lcds.value = ".";  
      
 }
 else //if(document.lcdform.lcds.value != "0")  
 {
var str = document.lcdform.lcds.value;
var len = str.length;
var qw;
for(qw=0; qw<len;qw++){
if(str[qw] == "."){
return;
}
} 
 
  document.lcdform.lcds.value = document.lcdform.lcds.value + ".";  
 }
   
}  
function equalsto(){  
   
 secondnumber = parseFloat(document.lcdform.lcds.value);  
   
 if (operation == "+")  
 {  
  result = firstnumber + secondnumber;  
result = result.toFixed(7) 
}  
 else if (operation == "*"){  
    
  result = firstnumber * secondnumber;  
   result = result.toFixed(7) 
 }  
 else if (operation == "-"){  
    
  result = firstnumber - secondnumber;  
    result = result.toFixed(7)
 }    
    else if (operation == "/"){  
    
  result = firstnumber / secondnumber;
 result = result.toFixed(7)  
     
 }  
  
 else if (operation == "^"){  
    
  for (var i = 0; i < secondnumber; i++){  
     
   result = firstnumber * i;  
  }  
  result = result.toFixed(7)  
    
 }  
 document.lcdform.lcds.value ="";  
 document.lcdform.lcds.value = result.toString();  
 document.lcdform.lcdsu.value = firstnumber + operation + secondnumber + " = " + result.toString();  
 return;  
   
}  
  
function sqrots(){  
 firstnumber = document.lcdform.lcds.value;  
 result = Math.sqrt(parseFloat(document.lcdform.lcds.value));  
 document.lcdform.lcds.value = result;  
 document.lcdform.lcdsu.value = "sqrt(" + firstnumber + ") = " + result;  
   
}  
  
function operationraistop(){  
   
 operation = "^";  
 firstnumber = parseFloat(document.lcdform.lcds.value);  
 document.lcdform.lcds.value = "0";  
   
}  
