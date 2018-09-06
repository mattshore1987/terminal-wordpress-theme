<?php
/*
 * The content used by files archive, index and search.
 */
?>
<div id="term-header">C:\<?php the_title(); ?>.pdf<a href'#'><i class="fas fa-window-close"></i></a><a href'#'><i class="fas fa-window-restore"></i></a><a href'#'><i class="fas fa-window-minimize"></i></a></div>
		<div id="term-border">
<article id="post-<?php the_ID(); ?>" <?php post_class('post-list'); ?>>
	<?php if ( is_sticky() && is_home() && ! is_paged() ) : ?>
		<h4 class="sticky-title"><?php _e( 'Featured post', 'darkelements' ); ?></h4>
	<?php endif; ?>

	<h2 class="post-title entry-title">
		<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php printf(__('Permalink to %s', 'darkelements'), the_title_attribute('echo=0')); ?>"> <?php the_title(); ?></a> 
	</h2>

	<?php get_template_part( 'content-postmeta' ); ?>

	<div class="entry-content">
		<?php if ( has_post_thumbnail() ) { 
			the_post_thumbnail(); 
		} ?>
		<?php if ( get_theme_mod( 'darkelements_content_type' ) == "no" ) { ?>
			<?php the_content(); ?> 
		<?php } else { ?>
			<?php the_excerpt(); ?>
		<?php } ?>	
	</div>

	<?php if ( get_theme_mod( 'darkelements_read_more' ) != "no" ) { ?>
		<div class="more">
			<a class="readmore" href="<?php the_permalink() ?>" rel="bookmark"><?php _e( 'Read More &raquo;', 'darkelements' ); ?></a>
		</div>
	<?php } ?>	
</article>
</div>
</br>
