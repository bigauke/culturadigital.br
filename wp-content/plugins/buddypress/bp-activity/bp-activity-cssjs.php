<?php

function bp_activity_add_structure_css() {
	/* Enqueue the structure CSS file to give basic positional formatting for components */
	wp_enqueue_style( 'bp-activity-structure', BP_PLUGIN_URL . '/bp-activity/css/structure.css' );	
}
add_action( 'bp_styles', 'bp_activity_add_structure_css' );


?>