<?php

function js_load() {
	wp_enqueue_script('app', get_template_directory_uri() . '/js/app.min.js', array(), '0.0.1', true);
}
add_action( 'wp_enqueue_scripts', 'js_load' );
