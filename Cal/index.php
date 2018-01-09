<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Calculator</title>
<style type="text/css">

	#mainFrame
	{
		border:3px groove black;
		position:absolute;
		left:40%;
		top:30%;
		width:225px;
		height:313px;
		background-color:rgba(0,0,0,.4);
	}
	.screen
	{
		border:2px  ridge grey;
		position:relative;
		left:5px;
		top:20px;
		width:205px;
		height:65px;
		margin-left:1px;
		background-color:white;
		color:red;
		   text-align: right;
	}
	#Buttons
	{
		border:2px  groove grey;
		position:absolute;
		left:5px;
		top:100px;
		width:205px;
		height:195px;
		margin-left:1px;
			background-color:rgba(255,255,255,0);
	}
	.Numbers
	{
		position:relative;
		left:5px;
		margin:5px;
		width:30px;
		height:30px;
	}
	.NumbersExp
	{
		position:relative;
		left:10px;
		margin:1px;
		margin-left:2px;
		width:30px;
		height:60px;
		
	}
 </style>

</head>
<body>
<span style="font-size:100px; color:red; position:absolute; left:33%;"> Calculator </span> 
	<div id="mainFrame">
	  <div class="screen">	
	  <p id="screen"> 0</p>
	  </div>
	  <div id="Buttons">
			<button class="Numbers" id="Backspace"><-</button>
			<button class="Numbers" id="CE">CE</button><button class="Numbers" id="C">C</button><button class="Numbers" id="pm">+/-</button><button class="Numbers" id="percentage">%</button>
			<button class="Numbers" id="7" >7</button><button class="Numbers" id="8">8</button><button class="Numbers" id="9">9</button><button class="Numbers" id="+">+</button><button class="Numbers" id="-">-</button>
			<button class="Numbers" id="4">4</button><button class="Numbers" id="5">5</button><button class="Numbers" id="6">6</button><button class="Numbers" id="*">*</button><button class="Numbers" id="/">/</button>
			<button class="Numbers" id="1">1</button><button class="Numbers" id="2">2</button><button class="Numbers" id="3">3</button><button class="NumbersExp" id="0">0</button> <button class="NumbersExp" id="Equal">=</button>
		</div>
	</div>
<script src="cal.js"> </script>
	</body>
</html>