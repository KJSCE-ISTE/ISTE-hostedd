<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en-US" xmlns="http://www.w3.org/1999/xhtml" dir="ltr">
<head>
<link rel="stylesheet" href="slimbox/slimbox2.css" type="text/css" media="screen" />
<script type="text/javascript" src="slimbox/jquery.min.js"></script>
<script type="text/javascript" src="slimbox/slimbox2.js"></script>
<script language="javascript" type="text/javascript">
function clearText(field)
{
    if (field.defaultValue == field.value) field.value = '';
    else if (field.value == '') field.value = field.defaultValue;
}
</script>





	<title>ISTE- Indian Society for TechnicalEducation</title>
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<!--<link rel="shortcut icon" href="css/images/favicon.ico" />-->
	<link rel="stylesheet" href="css/style.css" type="text/css" media="all" />
	<!--[if IE 6]>
		<link rel="stylesheet" href="css/ie6.css" type="text/css" media="all" />
		<script src="js/png-fix.js" type="text/javascript"></script>
	<![endif]-->
	<script src="js/jquery-1.4.2.js" type="text/javascript"></script>
	<script src="js/jquery.jcarousel.js" type="text/javascript"></script>
	<script src="js/js-func.js" type="text/javascript"></script>


<script type="text/javascript">
<!--
function validate()
{
  if(document.form1.categ.value=="Select")
  {
   alert("Select your year and project category");
   return false;
  }
else if(document.form1.swname.value=="")
  {
   alert("Please add your project name");
   return false;
  }
else if((document.form1.name1.value=="")||(document.form1.yr1.value=="")||(document.form1.cn1.value=="")||(document.form1.ph1.value=="")||(document.form1.eid1.value==""))
  {
   alert("Insert data in all fields in first row");
   return false;
  }
 else
  {
   return true; 
  }
}

//-->




</script>




</head>
<body>
<!-- Header -->
<?php include 'header.php'; ?>
<div class = "sep"></div>
<!-- End Header -->
<!-- Main -->
<div id="main">
	<div class="shell">
		<center>
		<b><font color="#459588" face="Old English Text MT" size="6">Praklapa 2012 Project Registration</font></b>
		</center>
		<div class="format">
			<div class = "pad">

				<br>
<form name="form1" method="post" action="Database.php">
Select your year and category :
<select name="categ">
<option value="Select">Select</option>
<option value="B.E Software">B.E Software</option>
<option value="B.E Hardware">B.E Hardware</option>
<option value="Others Software">Others Software</option>
<option value="Others Hardware">Others Hardware</option>
</select>
<br>
Project Name : <input type=text name="swname">
<br>
<center><table border="1px">
<br>
<tr>
<th>Name of the student</th>
<th>Year And Branch</th>
<th>College Name</th>
<th>Phone No.</th>
<th>Email-id</th>
</tr>
<tr>
<td><input type=text name="name1"></td>
<td><input type=text name="yr1"></td>
<td><input type=text name="cn1"></td>
<td><input type=text name="ph1"></td>
<td><input type=text name="eid1"></td>
</tr>

<tr>
<td><input type=text name="name2"></td>
<td><input type=text name="yr2"></td>
<td><input type=text name="cn2"></td>
<td><input type=text name="ph2"></td>
<td><input type=text name="eid2"></td>
</tr>

<tr>
<td><input type=text name="name3"></td>
<td><input type=text name="yr3"></td>
<td><input type=text name="cn3"></td>
<td><input type=text name="ph3"></td>
<td><input type=text name="eid3"></td>
</tr>

<tr>
<td><input type=text name="name4"></td>
<td><input type=text name="yr4"></td>
<td><input type=text name="cn4"></td>
<td><input type=text name="ph4"></td>
<td><input type=text name="eid4"></td>
</tr>
</table></center>
<br>
NOTE :<br>Minimum one name is required.<br>Enter data in all fields for acceptance of forms.
<br>
<br>

<input type="submit" value="Submit" onClick="return validate();"> 
</form>

                        </center>
                        <br><a href="prakalpa12.html">Back</a>
		<div class="cl">&nbsp;</div>
	</div>
</div>
</div></div>
<!-- End Main -->
<!-- Footer -->
<?php include 'footer.php'; ?>
<!-- Footer -->
</body>
</html>