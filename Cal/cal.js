
var expression="";
var b8=document.getElementById("8");
var b9=document.getElementById("9");
var b7=document.getElementById("7");
var b6=document.getElementById("6");
var b5=document.getElementById("5");
var b4=document.getElementById("4");
var b3=document.getElementById("3");
var b2=document.getElementById("2");
var b1=document.getElementById("1");
var b0=document.getElementById("0");
var bplus=document.getElementById("+");
var bmul =document.getElementById("*");
var bmin =document.getElementById("-");
var bdiv =document.getElementById("/");
var percentage=document.getElementById("percentage");
var CE=document.getElementById("CE").onclick= function()
{
	expression="";
		document.getElementById("screen").innerHTML=expression;
};
var	C =document.getElementById("C");
C.onclick= function()
{
	expression=expression.substring(0,expression.length-1);
		document.getElementById("screen").innerHTML=expression;
};
var pm=document.getElementById("pm").onclick= function()
{
	if(expression.charAt(0)=="-")
	{
		expression=expression.substring(1,expression.length);
	}
	else
	{
		expression="-"+expression;
	}
	
		document.getElementById("screen").innerHTML=expression;
};
b7.onclick = function()
{

	ExpAdd(b7);
};
b8.onclick = function()
{
	ExpAdd(b8);
};
b9.onclick = function()
{

	ExpAdd(b9);
};
b6.onclick = function()
{
	ExpAdd(b6);
};
b5.onclick = function()
{
	ExpAdd(b5);
};
b4.onclick = function()
{

	ExpAdd(b4);
};
b3.onclick = function()
{
	ExpAdd(b3);
};
b2.onclick = function()
{
	ExpAdd(b2);
};
b1.onclick = function()
{

	ExpAdd(b1);
};
b0.onclick = function()
{
	ExpAdd(b0);
};
bplus.onclick = function()
{
	ExpAdd(bplus);
};
bmul.onclick = function()
{
	ExpAdd(bmul);
};
bdiv.onclick = function()
{
	ExpAdd(bdiv);
};
bmin.onclick = function()
{
	ExpAdd(bmin);
};
percentage.onclick = function()
{

	ExpAdd(percentage);
};
 function ExpAdd(b1)
{
		expression+=b1.textContent;
		document.getElementById("screen").innerHTML=expression;	
		
}
var equal=document.getElementById("Equal").onclick = function()
{	$eva=true;

	if(expression.search("%")!=-1)
	{
		var n=expression.search("%");
		n++;

		if(n!=0 && expression.charAt(n)!= '1' && expression.charAt(n)!= '2'&& expression.charAt(n)!= '3' &&  expression.charAt(n)!= '4'&& expression.charAt(n)!= '5' &&  expression.charAt(n)!= '6'&& expression.charAt(n)!= '7'&&  expression.charAt(n)!= '8'&& expression.charAt(n)!= '9' &&  expression.charAt(n)!= '0')
		{
			expression=expression.replace("%","/100");
		}
		else 
		$eva=false;
	}
	
	if($eva)
	{
			expression=eval(expression);
			document.getElementById("screen").innerHTML=expression;
	}
	else if(!$eva)
		{
			document.getElementById("screen").innerHTML="Synthax Error";
			
		}

};


