<?php
/*
Template Name: Feature Page
*/
?>

<!-- HOME PAGE -->

<?php get_header(); ?>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>



    <?php if (has_post_thumbnail( $post->ID ) ): ?>
        <?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'single-post-thumbnail' ); ?>
        <div id="featured-hero" style="background-image: url('<?php echo $image[0]; ?>')">

        </div>
        <div id="featured-hero-text">
            <h1>The Latest Issue</h1>
            <!-- <h2>< ?php wp_title(''); ?></h2> -->
            <h2>October/Fall 2015 - Volume 119 - Issue 4 </h2>
        </div>
    <?php endif; ?>
    <div id="feature-content">
        <?php the_content(__('(more...)')); ?>
    </div>

    <div id="stay-updated">
        <h1>Stay Updated</h1>
        <div id="email-signup">
            <p>Enter your email below to sign up to our newsletter</p>
            <form action="https://tinyletter.com/wisconsinengineer" method="post" target="window" onsubmit="location.href('https://tinyletter.com/wisconsinengineer', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
				<input type="text" id="email-input" placeholder="example@gmail.com" name="email" id="tlemail" /><!--
				--><input type="hidden" value="1" name="embed"/><!--
				--><input type="submit" id="email-submit" value="Subscribe" />
			</form>
        </div>
    </div>


    <div id="get-a-copy">
        <h1>Get yourself a copy</h1>
        <p>Support over 100 years of student journalism. Get the Wisconsin Engineer delivered straight to your door. Only $12 per year (4 issues).</p>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="NR4ADY8KL87U6">
            <button class="subscribe-print" name="submit">Sign up for delivery</button>
        </form>
        <a id="print-cancel" target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=Z9RDVPM578HBC">Or cancel your subscription</a>
    </div>


    <div id="physical-locations">
        <p>Or you can pick up a FREE copy at these locations</p>
        <div id="map-canvas"></div>
    </div>

<?php endwhile; else: ?>
<?php _e('Sorry, no posts matched your criteria.'); ?>
<?php endif; ?>

<?php get_footer(); ?>
