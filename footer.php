<?php
/*
 * The footer for displaying footer widgets and site-info.
 */
?>

<div id="footer">
	<?php if ( is_active_sidebar( 'footer-right' ) || is_active_sidebar( 'footer-middle' ) || is_active_sidebar( 'footer-left' ) ) {?> 
	<div id="footer-widgets">
		<div class="footer-left"> 
			<?php dynamic_sidebar( 'footer-left' ); ?>
		</div>

		<div class="footer-middle"> 
			<?php dynamic_sidebar( 'footer-middle' ); ?>
		</div>

		<div class="footer-right"> 
			<?php dynamic_sidebar( 'footer-right' ); ?>
		</div>
	</div>
	<?php } ?>	
	<div id="term-header">C:\footer.txt<a href'#'><i class="fas fa-window-close"></i></a><a href'#'><i class="fas fa-window-restore"></i></a><a href'#'><i class="fas fa-window-minimize"></i></a></div>
	<div id="term-border">
		<div class="site-info">
<a style="padding:5px; color:#ff0066;" href="https://twitter.com/matt_shore" target='_blank'><i class="fab fa-twitter"></i></a>
<a style="padding:5px; color:#ff0066;" href="https://www.instagram.com/mattshore1987/"target='_blank'><i class="fab fa-instagram"></i></a>
<a style="padding:5px; color:#ff0066;" href="https://www.linkedin.com/in/matt-shore/"target='_blank'><i class="fab fa-linkedin"></i></a>
			
<p><small> 
Copyright &copy;<script>document.write(new Date().getFullYear());</script>
 All rights reserved<br>Matt Shore</small>
</p>
	</div>
	</div>
</div>
</div><!-- #container -->

<?php wp_footer(); ?>
</body>
</html>