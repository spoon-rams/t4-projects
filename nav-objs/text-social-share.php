<!-- FOR CONTENT LAYOUTS - text/social-share -->
<?php 
	$parallax_image = "<t4 type='content' name='Parallax Image' output='normal' formatter='path/*' />";
    $og_image = "<t4 type='content' name='Social Share Image' output='normal' formatter='path/*' />";
	$og_image_default = "<t4 type='media' id='137028' formatter='path/*' />";

	$default_title = "<t4 type='content' name='Title' output='normal' modifiers='striptags,htmlentities' />";
	$og_title = "<t4 type='content' name='Social Share Title' output='normal' modifiers='striptags,htmlentities' />";

	$og_desc = "<t4 type='content' name='Social Share Description' output='normal' modifiers='striptags,htmlentities' />";
	$fordham_domain = "https://www.fordham.edu";

	$alt_desc = "<t4 type='media' attribute='description' editable='false' /> ";
?>

<!-- og:title -->
<meta property="og:title" content="<?php echo $og_title ? $og_title : $default_title; ?>">

<!-- og:image -->
<?php if($og_image): ?>
  <meta property="og:image" content="<?php echo $fordham_domain . $og_image ?>" >
<?php endif; ?>

<!-- og:alt if no image -->
<meta property="og:image:alt" content="<?php $alt_desc ? $alt_desc : "Social media output image when linking to social media sites"; ?>">
<!-- og:dimensions -->
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">

<!-- og:description -->
<?php if($og_desc): ?>
  <meta property="og:description" content="<?php echo $og_desc?>" >
<?php endif; ?>

<!-- twitter meta tags here -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@FordhamNYC">
<meta name="twitter:title" content="<?php echo $og_title ? $og_title : $default_title; ?>">
<!-- og:image -->
<?php if($og_image): ?>
  <meta name="twitter:image" property="og:image" content="<?php echo $fordham_domain . $og_image ?>" >
<?php endif; ?>
<?php if($og_desc): ?>
  <meta name="twitter:description" content="<?php echo $og_desc?>" >
<?php endif; ?>




 