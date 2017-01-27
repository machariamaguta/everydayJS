	
	/*
	author : machariamaguta
	create form with id form

	create button widh id button

	create input field with id username

	create input field with id password

	*/

	function formDimensions()
	{
		var height=window.innerHeight;
		var formHeight=document.getElementById("form").clientHeight;
		var margintop=(height-formHeight)/2;
		document.getElementById("form").style.marginTop=margintop+"px";
		document.getElementById("button").style.visibility="hidden";
	}

	function showButton()
		{
			if(document.getElementById('username').value.length>0 && document.getElementById('password').value.length>0)
			{
				document.getElementById("button").style.visibility="visible";
			}
			else
			{
				document.getElementById("button").style.visibility="hidden";
			}
		}

	window.onload=function(){formDimensions();}
	window.oninput=function(){showButton();}