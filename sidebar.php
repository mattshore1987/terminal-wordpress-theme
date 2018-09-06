<?php
/*
 * The sidebar for displaying widgets.
 */
?>

<?php if ( is_active_sidebar( 'primary' ) ) {?>
	<div id="sidebar-widgets">
		<?php dynamic_sidebar( 'primary' ); ?>
	</div>
<?php } ?>