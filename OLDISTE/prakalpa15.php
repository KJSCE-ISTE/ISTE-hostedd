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


	<meta charset="utf-8">
    <meta name="description" content="Prakalpa 2015 to be held on 5th & 7th of March organized by ISTE - KJSCE at K J Somaiya college of Engineering, Mumbai">
    <meta name="keywords" content="Prakalpa, Prakalpa 2015, project, competition, ISTE, KJSCE, Somaiya, exhibition, conference, engineering">
    <meta name="author" content="Gaurav L. Agarwal">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    

	<title>Prakalpa 2015 by ISTE - KJSCE</title>
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
		<b><font color="#459588" face="Old English Text MT" size="6">Iste - Kjsce presents PRAKALPA 2015</font></b>
		</center>
		
		<div class="format">
			<div class = "pad">

				<br>
				<br><font color="#459588"><b>Dates to be Conducted on: </b></font> 5<sup>th</sup> & 7<sup>th</sup> March 2015.
				<br><font color="#459588"><b>Time : </b></font>10am to 5pm.
				<br><font color="#459588"><b>Venue : </b></font>K.J.Somaiya College of Engineering.
				<br><b><font color="#459588">Description :</b></font>
				<br>Prakalpa is a technical paper conference and working model/project competition organized by ISTE Council. This is a state-level competition which is conducted annually in K.J. Somaiya College of Engineering, Vidyavihar. The theme of Prakalpa’15 was <b>‘Security Systems</b>.
				<br />
				<font color="#459588"><b>Details : </b></font>
				<p style="margin:10px;">
					<a href="docs/PRAKALPA-15 HANDOUT.pdf" target='_blank'>click here for Prakalpa '15 details</a><br/>
				</p>
				<br> 
				
				<br>
		            <br><font color="#459588"><h3>Photo Gallery</h3></font><br>
                        <center>
						 <a href="prakpics/prakalpa15_poster.png" rel="lightbox-gallery" title="Prakalpa 2015" >
							<img src="prakpics/prakalpa15_poster.png" height="90px" width="90px" alt="gallery" border="0" />					
						 </a>
                        <?php 
						for($i=1;$i<6;++$i){

                        echo '<a href="prakpics/Prakalpa-15 Pics/'.$i.'.JPG" rel="lightbox-gallery" title="Prakalpa 2015" >'.'
                            <img src="prakpics/Prakalpa-15 Pics/'.$i.'.jpg" height="90px" width="90px" alt="gallery" border="0" />					
                        </a>';
						}
						?>

                </center>

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
