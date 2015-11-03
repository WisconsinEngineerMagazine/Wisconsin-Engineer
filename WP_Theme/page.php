<?php get_header(); ?>


<!-- BASIC PAGE -->

<!-- Body content wrapper -->
<main>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
<?php the_content(__('(more...)')); ?>
<?php endwhile; else: ?>
<?php _e('Sorry, no posts matched your criteria.'); ?>
<?php endif; ?>

</main><!-- End Main -->


<?php get_footer(); ?>
