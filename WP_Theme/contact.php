<?php
/*
Template Name: Contact Page
*/
?>


<?php get_header(); ?>


<!-- Body content wrapper -->
<main>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
<?php the_content(__('(more...)')); ?>
<?php endwhile; else: ?>
<?php _e('Sorry, no posts matched your criteria.'); ?>
<?php endif; ?>

</main><!-- End Main -->







<div id="contact-intro">
    <h1>Send us a message</h1>
    <p>Have a question or some feedback? Want to join us in producing awesome content? Message us below!</p>
    <small>We'll reply as fast as we can!</small>
</div>



<div id="contact-form">
    <input type="text" placeholder="Your Name" id="contact-name"><!--
    --><input type="text" placeholder="Your Email" id="contact-email"><!--
    --><textarea placeholder="Your Message" id="contact-message"></textarea>
    <button id="contact-form-send">Send Message <i class="ion-ios-paperplane"></i></button>
</div>

<div id="contact-error">
    Hey, Try that again. This time fill in all the fields.
</div>




<?php get_footer(); ?>
