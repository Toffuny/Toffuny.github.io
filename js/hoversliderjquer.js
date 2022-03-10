<!doctype html>
<html lang="en">
<head>
<title>Bootstrap and jQuery Hover Tab Menus</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" crossorigin="anonymous">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" crossorigin="anonymous"></script>
<script>
$(document).ready(function(){
	$('.nav-tabs > li > a').hover(function() {
  		$(this).tab('show');
	});
})
</script>
</head>
<body>
<div class="container">
	<h2>Bootstrap and jQuery Hover Tab Menus</h2>
	<ul class="nav nav-tabs">
		<li class="active"><a data-toggle="tab" href="#menu1">Menu1</a></li>
		<li><a data-toggle="tab" href="#menu2">Menu2</a></li>
		<li><a data-toggle="tab" href="#menu3">Menu3</a></li>
	</ul>
	<div class="tab-content">
		 <div id="menu1" class="tab-pane fade in active">
			<strong>Menu1</strong>
			Create your own dynamic tab menu using the bootstrap nav tabs and open dynamic content on click of menus.
		 </div>
		 <div id="menu2" class="tab-pane fade">
			<strong>Menu2</strong>
			Second tab menu.
		 </div>
		 <div id="menu3" class="tab-pane fade">
			<strong>Menu3</strong>
			Third tab menu.
		 </div>
	</div>
</div>
</body>
</html>     
