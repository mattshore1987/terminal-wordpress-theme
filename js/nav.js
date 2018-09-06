/*
 * DISPLAY MOBILE NAV
 */

jQuery(document).ready(function($) { 
	// Hide mobile menu by default	
	$('.mobile-nav').hide();

	// Display mobile menu when clicked	
	$( ".mobile-nav-toggle" ).click(function() { 
		$( ".mobile-nav" ).toggle(); 
	}); 

	// Hide mobile submenu by default	
	$('.mobile-nav .sub-menu').hide();

	// Add toggle that displays mobile submenu
	var subnavToggle = $( '<button />', { 'class': 'subnav-toggle' })
		.append( "+" );
	$( ".mobile-nav .menu" ).find( '.menu-item-has-children > a, .page_item_has_children > a' ).after( subnavToggle );

	// Display mobile submenu when clicked	
	$( ".subnav-toggle" ).click(function() { 
		$(this).next('.mobile-nav .children, .mobile-nav .sub-menu').toggle(); 
	}); 
});