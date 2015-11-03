<?php get_header(); ?>



<!-- POSTS PAGE -->



<!-- Body content wrapper -->
    <div id="post-desc">
        <h1>All Issues</h1>
        <p>Here you can read some of our past issues.</p>
        <h2><a href="#">Click here</a> to view issues way back to 1800.</h2>
    </div><!--
    --><div id="post-grid">

    <?php if (have_posts()) : while (have_posts()) : the_post(); ?><!--
    --><div class="grid-item">
            <div class="grid-item-image">
                <?php the_post_thumbnail(); ?>
            </div><!--
            --><div class="grid-item-desc">
                <?php the_title( '<h6>', '</h6>' ); ?>
                <p><?php the_content(); ?></p>
            </div>
        </div><!--
    --><?php endwhile; else: ?>
    <?php _e('Sorry, no posts matched your criteria.'); ?>
    <?php endif; ?>


    </div>



<?php get_footer(); ?>
