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
		<b><font color="#459588" face="Old English Text MT" size="6">ISTE - KJSCE Presents Prakalpa 2014</font></b>
		</center>
		<div class="format">
			<div class = "pad">

				<br>
				<br><font color="#459588"><b>Date Conducted : </b></font> 14<sup>th</sup> & 15<sup>th</sup> March 2014.
				<br><font color="#459588"><b>Time : </b></font>10am to 5pm.
				<br><font color="#459588"><b>Venue : </b></font>K.J.Somaiya College of Engineering.
				<br><b><font color="#459588">Description :</b></font>
				<br>Prakalpa is a State level Competition organized by K. J. Somaiya College of Engineering and the ISTE Student Chapter &#8212; KJSCE since 2006.In 2011, Prakalpa included <b>project exhibition of working models.</b>
				<br />
				<font color="#459588"><b>Details : </b></font>
				<p style="margin:10px;">
					<a href="docs/Prakalpa_2014_winners_list.pdf">Prakalpa '14 winners list.</a><br />
				</p>

				<br>
		            <br><font color="#459588"><h3>Photo Gallery</h3></font><br>
                        <center>
                        <?php for($i=1;$i<17;++$i){

                        echo '<a href="prakpics/Prakalpa-14 Pics/'.$i.'.JPG" rel="lightbox-gallery" title="Prakalpa 2014" >'.'
                            <img src="prakpics/Prakalpa-14 Pics/'.$i.'.JPG" height="90px" width="90px" alt="gallery" border="0" />					
                        </a>';
				}
				?>

                        <?php for($i=23;$i<89;++$i){

                        echo '<a href="prakpics/Prakalpa-14 Pics/'.$i.'.JPG" rel="lightbox-gallery" title="Prakalpa 2014" >'.'
                            <img src="prakpics/Prakalpa-14 Pics/'.$i.'.JPG" height="90px" width="90px" alt="gallery" border="0" />					
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
