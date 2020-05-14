
  
function ValidateUsername()  
{  
	var inputtxt = document.forms["signupForm"]["username"].value;
	var letters = /^[A-Za-z]+$/;  
	if(inputtxt.match(letters))  
	{  
		return true;  
	}  
	else  
	{  
		alert("Enter only Letters!"); 
		document.signupForm.fname.focus();  
		return false;  
	}  
} 



function ValidateEmail()  
{  
	var checkmail = document.forms["signupForm"]["email"].value;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(checkmail.match(mailformat))  
	{  
		document.myForm.emailAddr.focus();  
		return true;  
	}  
	else  
	{  
		alert("Invalid Email Address!");  
		document.signupForm.email.focus();  
		return false;  
	}  
}  

function ValidateMobilenumber()  
{
	var checkmobile = document.forms["signupForm"]["mobilenumber"].value;
	var numbers = /^[0-9]+$/;  
	if(checkmobile.match(numbers))  
	{  
		return true;  
	}  
	else  
	{  
		alert("Invalid Mobile Number!");  
		document.signupForm.phone.focus();  
		return false;  
	}  
}
function ValidatePassword()  
{  
	var checkmail = document.forms["signupForm"]["password"].value;
	var letters = /^[A-Za-z]+$/;  
	if(inputtxt.match(letters))  
	{  
		return true;  
	}  
	else  
	{  
		alert("Enter only Letters!"); 
		document.signupForm.fname.focus();  
		return false;  
	}  
} 
function ValidateAddress()  
{  
	var checkmail = document.forms["signupForm"]["address"].value;
	var letters = /^[A-Za-z]+$/;  
	if(inputtxt.match(letters))  
	{  
		return true;  
	}  
	else  
	{  
		alert("Enter only Letters!"); 
		document.signupForm.fname.focus();  
		return false;  
	}  
} 