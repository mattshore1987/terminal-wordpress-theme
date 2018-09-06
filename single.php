<?php
/*
 * The template for displaying single post.
 */
?>

<?php get_header(); ?>
<div id="content">
	<?php while (have_posts()) : the_post(); ?>
	<div id="term-header">C:\<?php the_title(); ?>.pdf<a href'#'><i class="fas fa-window-close"></i></a><a href'#'><i class="fas fa-window-restore"></i></a><a href'#'><i class="fas fa-window-minimize"></i></a></div>
		<div id="term-border">
		<div id="post-<?php the_ID(); ?>" <?php post_class('post-single'); ?>> 
			<h1 class="post-title-single entry-title"><?php the_title(); ?></h1>

			<?php get_template_part( 'content-postmeta' ); ?>

			<div class="entry-content">
				<?php the_content(); ?>

				<?php wp_link_pages( array(
					'before' => '<div class="pagelink">' . __( 'Pages:', 'darkelements' ),
					'after'  => '</div>',
				) ); ?>
			</div>

			<?php get_template_part( 'content-postmeta-single' ); ?>
		</div>

		<?php comments_template(); ?>
	</div>
	<?php endwhile; ?>

	<?php edit_post_link( __( 'Edit', 'darkelements' ), '<div class="edit-link">', '</div>' ); ?>
</div>
<?php get_footer(); ?>