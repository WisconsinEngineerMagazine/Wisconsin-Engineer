<?php
/**
 * The template for displaying 404 pages (Not Found)
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */

get_header(); ?>

	<div class="centerit">
		<h2>Huh.</h2>
		<img src="<?php bloginfo('template_url'); ?>/src/confused.gif" id="fourohfourimage">
		<h5>We can't find the page you're looking for.</h5>
		<h6><a href="/">return home</a></h6>
	</div>

<?php get_footer(); ?>