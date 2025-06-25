<?php 
	// MARGIN SPACING	
	$top_bottom_spacing = "<t4 type='content' name='Top / Bottom Spacing' output='normal' display_field='value' />";
	$limit_width_right_left = "<t4 type='content' name='Limited Width for Bottom Right or Left Layout' output='normal' display_field='value' />";
	$limit_width = "<t4 type='content' name='Limit Width' output='normal' display_field='value' />";
	
	// TEXT
	$category = "<t4 type='content' name='Category' output='normal' modifiers='striptags,htmlentities' />";
	$title = "<t4 type='content' name='Title' output='normal' modifiers='striptags,htmlentities' />";
	$teaser = "<t4 type='content' name='Teaser' output='normal' modifiers='striptags,htmlentities' />";
	$link_text = "<t4 type='content' name='Link Text' output='normal' modifiers='striptags,htmlentities' />";


	// LINKS
	$link_internal = "<t4 type='content' name='link (internal)' output='linkurl' modifiers='nav_sections' />";
	$link_external = "<t4 type='content' name='link (external)' output='normal' modifiers='striptags,htmlentities' />";

	//NOTE: if both external and internal links exist, by default the link internal will be assigned.
	$url_output = $link_internal ?: $link_external; 
	

	// DIFFERENT IMAGE SIZES
    $image = "<t4 type='content' name='Image' output='normal' formatter='path/*' cdn='true' />";
	$image_xs = "<t4 type='content' name='Image' output='normal' formatter='path/*' cdn='true' pxl-filter-id='13' />";
	$image_s = "<t4 type='content' name='Image' output='normal' formatter='path/*' cdn='true' pxl-filter-id='6' />";
	$image_m = "<t4 type='content' name='Image' output='normal' formatter='path/*' cdn='true' pxl-filter-id='5' />";
    $image_l = "<t4 type='content' name='Image' output='normal' formatter='path/*' cdn='true' pxl-filter-id='4' />";
    // IMAGE DESCRIPTION
	$image_desc = "<t4 type='content' name='Image' output='normal' formatter='image/description' cdn='true' />";

    // BOTTOM LOGO
	$bottom_logo_select = "<t4 type='content' name='Select Logo' output='normal' display_field='value' />";
	$fordham_now = "<t4 type='media' id='149848' formatter='path/*' />";
	$fordham_magazine = "<t4 type='media' id='149849' formatter='path/*' />";
	// ICON
	$icon_arrow = "<t4 type='media' formatter='path/*' id='10757' />";
?>