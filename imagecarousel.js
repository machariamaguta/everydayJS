	
	/*
	author : machariamaguta

	create :

	@image tag id Images with a blank src

	*/

	var x=0;

	function count()
	{
		x++;
	}

	//count x to the number of image to change between less 1

	function checkX()
	{
		if(x<=2)
		{
			count();
		}
		else
		{
			x=0;
		}
	}
	function changeBackgroundImage()
	{
		switch(x)
		{
			case 0:
			document.getElementById("image").src="{{ insert image url here }}";
			break;
			case 1:
			document.getElementById("image").src="{{ insert image url here }}";
			break;
			case 2:
			document.getElementById("image").src="{{ insert image url here }}";
			break;
			default:
			document.getElementById("image").src="{{ insert image url here }}";
			break;
		}
	}
	function startImage()
	{
		document.getElementById("image").src="{{ insert image url here }}";
	}

	window.onload=function()
			{
				startImage();
				setInterval(function(){changeBackgroundImage();checkX()},15000);//Change 15000 to how frequently you'd like the images to change
			}