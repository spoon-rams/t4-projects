<!-- FOR CONTENT LAYOUTS - text/social-share -->
<?php 
    $og_image = "<t4 type='content' name='Image' output='normal' formatter='path/*' />";
	$og_image_default = "<t4 type='media' id='137028' formatter='path/*' />";
	$alt_image_desc = "<t4 type='content' name='Image Description' output='normal' modifiers='striptags,htmlentities' />";

	$og_title = "<t4 type='content' name='Title' output='normal' modifiers='striptags,htmlentities' />";

	$og_desc = "<t4 type='content' name='Description' output='normal' modifiers='striptags,htmlentities' />";
	$fordham_domain = "https://www.fordham.edu";

	$alt_desc = "<t4 type='media' attribute='description' editable='false' /> ";
?>

<!-- og:title -->
<meta property="og:title" content="<?php echo $og_title ?>">

<?php if($og_image): ?>
 <!-- og:image -->
 <meta property="og:image" content="<?php echo $fordham_domain . $og_image ?>" >
<?php endif; ?>
 
<?php if($og_image && $alt_image_desc): ?>
 <!-- og:alt if no image -->
 <meta property="og:image:alt" content="<?php echo $alt_image_desc; ?>">
<?php endif; ?>

<!-- og:dimensions -->
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">

<?php if($og_desc): ?>
 <!-- og:description -->
 <meta property="og:description" content="<?php echo $og_desc; ?>" >
<?php endif; ?>

<!-- twitter meta tags here -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@FordhamNYC">
<meta name="twitter:title" content="<?php echo $og_title ?>">

<?php if($og_image): ?>
 <!-- twitter:image -->
 <meta name="twitter:image" property="og:image" content="<?php echo $fordham_domain . $og_image ?>" >
<?php endif; ?>

<?php if($og_desc): ?>
 <!-- twitter:desc -->
 <meta name="twitter:description" content="<?php echo $og_desc; ?>" >
<?php endif; ?>