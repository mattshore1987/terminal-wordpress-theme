<?php
/*
 * The default template for displaying pages.
 */
?>

<?php get_header(); ?>
<div id="content">

<?PHP if( is_front_page() ) { ?>   
<!-- TERMINAL -->    
<div id="term-header">C:\WINDOWS\System32\cmd.exe<a href'#'><i class="fas fa-window-close"></i></a><a href'#'><i class="fas fa-window-restore"></i></a><a href'#'><i class="fas fa-window-minimize"></i></a></div>
<div id="terminal" class="terminal">
    
 <noscript>
    <div class="line">It looks like javascript has been disabled on your browser. This website runs on javascript for user experience. Please enable it and refresh the website.</div><br>
  </noscript>
  <div id="introdiv">
      <span id="commandcontainer">There have been issues with the scripts required. Please refresh the browser to try again.</span>
  </div>
  <div id="commands">
    <div id="defaultline">
      <span class="defaulttext">C:\></span><span id="commandcontainer"></span><span class="cursor">_</span><input type="text" id="actualinput">
    </div>
  </div>
    <div id="bottom"></div>
</div>
<!-- TERMINAL -->	
<?PHP } ?>

	<?php while ( have_posts() ) : the_post(); ?><p>
	<div id="term-header">C:\<?php the_title(); ?>.pdf<a href'#'><i class="fas fa-window-close"></i></a><a href'#'><i class="fas fa-window-restore"></i></a><a href'#'><i class="fas fa-window-minimize"></i></a></div>
		<div id="term-border">
			<h1 class="page-title"><?php the_title(); ?></h1>

		<?php if ( has_post_thumbnail() ) { 
			the_post_thumbnail('single', array('class' => 'single-image')); 
		} ?>

		<?php the_content(); ?>
	</div>
		<?php wp_link_pages( array(
			'before' => '<div class="pagelink">' . __( 'Pages:', 'darkelements' ),
			'after'  => '</div>',
		) ); ?>

		<?php comments_template(); ?>

	<?php endwhile; ?>

	<?php edit_post_link( __( 'Edit', 'darkelements' ), '<div class="edit-link">', '</div>' ); ?>
</div>		
<?php get_footer(); ?>
		