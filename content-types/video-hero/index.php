<?php 
  $image_poster = "<t4 type='content' name='Image Poster' output='normal' formatter='path/*' />";
  $video_url = "<t4 type='content' name='Video URL' output='normal' modifiers='striptags,htmlentities' />";

  $title = "<t4 type='content' name='Heading' output='normal' modifiers='striptags,htmlentities' />";
  $description = "<t4 type='content' name='Description' output='normal' modifiers='striptags,htmlentities' />";

  $button_text = "<t4 type='content' name='Button Text' output='normal' modifiers='striptags,htmlentities' />";
  $button_text2 = "<t4 type='content' name='Button Text 2' output='normal' modifiers='striptags,htmlentities' />";

  $cta_button_color = "<t4 type='content' name='CTA 1 Button Color' output='normal' display_field='value' />";

  $external_url = "<t4 type='content' name='External URL' output='normal' modifiers='striptags,htmlentities' />";
  $external_url2 = "<t4 type='content' name='External URL 2' output='normal' modifiers='striptags,htmlentities' />";

  $internal_url = "<t4 type='content' name='Linked Section' output='linkurl' modifiers='nav_sections' />";
  $internal_url2 = "<t4 type='content' name='Linked Section 2' output='linkurl' modifiers='nav_sections' />";
?>

<div class="home-hero" role="banner">
  <video autoplay="autoplay" loop="loop" muted defaultMuted playsinline  oncontextmenu="return false;"  preload="auto" id="heroVideo" poster="<?php echo $image_poster; ?>">
    <source src="<?php echo $video_url; ?>" type="video/mp4" />
  </video>
                
  <div class="hero-banner__block">
    
    <?php if($title): ?>
	    <h2 class="hero-banner__block__title"><span><?php echo $title; ?></span></h2>
	  <?php endif; ?>
    
	  <div class="hero-banner__block__content">
      
	    <?php if($description): ?>
	      <p class="hero-banner__block__desc"><?php echo $description; ?></p>
	    <?php endif; ?>
      
      <?php if($button_text && ($external_url || $internal_url)): ?>
		    <a href="<?php echo $external_url ?? $internal_url ?? null; ?>" class="hero-banner__block__button-link-break btn btn-primary <?php echo $cta_button_color; ?>" >
          <?php echo $button_text; ?>
        </a>
      <?php endif; ?>
      
      <?php if($button_text2 && ($external_url2 || $internal_url2)): ?>
	    <a href="<?php echo $external_url2 ?? $internal_url2 ?? null; ?>" class="hero-banner__block__button-link-break btn btn-primary <?php echo $cta_button_color; ?>">
          <?php echo $button_text2; ?>
        </a>
      <?php endif; ?>
      
	</div>				
  </div>
</div>