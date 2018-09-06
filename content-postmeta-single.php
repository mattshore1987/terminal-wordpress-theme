<?php
/*
 * Postmeta used by file single.
 */
?>

<div class="postmetadata">
	<?php printf( __( 'Category: %s', 'darkelements' ), get_the_category_list( __( ', ', 'darkelements' ) ) ); ?>
	<?php if(has_tag() ) : ?>
		<?php echo '|'; ?> <?php printf(__( 'Tag: %s', 'darkelements' ), get_the_tag_list('', __( ', ', 'darkelements' ) ) ); ?>
	<?php endif; ?>
	<?php $format = get_post_format(); ?>
	<?php if (has_post_format() ) : ?>
		<?php echo '|'; ?> <?php printf( __( 'Format: %s', 'darkelements' ), sprintf( '<a href="%1$s">%2$s</a>', esc_url( get_post_format_link( $format ) ), get_post_format_string( $format ) ) ); ?>
	<?php endif; ?>
</div>