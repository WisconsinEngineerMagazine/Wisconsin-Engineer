<html>
	<head>
		<title>Wisconsin Engineer Magazine | <?php wp_title(); ?></title>

		<!-- Responsive Viewport -->
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- Theme Color -->
		<meta name="theme-color" content="#C90000">

		<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">

		<link href='https://fonts.googleapis.com/css?family=Lato:400,300,100,900,700' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=PT+Serif:400,700' rel='stylesheet' type='text/css'>

		<!-- Ionicons -->
		<link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">

		<!-- Load JQuery in head -->
		<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
		<!-- Load main JS in head -->

		<!-- Google Maps API -->
		<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7eOM4h07HYsioYFnRQc04XPjA5QuF8mc"></script>

	</head>
	<body>



	<nav>
		<h1 onclick="location.href='/'">Wisconsin<b>engineer</b></h1>
		<i class="ion-navicon" id="show-mobile-menu"></i>
		<ul id="nav-links">
			<?php wp_nav_menu(array(
   'menu' => 'Main Menu',
   'items_wrap'=>'%3$s',
   'container' => false
)); ?>
		</ul>
	</nav>
