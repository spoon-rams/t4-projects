<!-- HERO PARALLAX WITH TEXT/TITLE ON THE BOTTOM -->

<?php
  $top_bottom_spacing = "<t4 type='content' name='Top/Bottom Spacing' output='normal' display_field='value' />";
  $limit_width = "<t4 type='content' name='Limited Width' output='normal' display_field='value' />";

  $window_height = "<t4 type='content' name='Parallax Window Height' output='normal' display_field='value' /";
  
  $background_image = "<t4 type='content' name='Parallax Image' cdn='true' output='normal' formatter='path/*' />";
  $remove_overlay = "<t4 type='content' name='Remove Overlay' output='normal' display_field='value' />";
  
  $category = "<t4 type='content' name='Categories' output='normal' display_field='value' modifiers='striptags,htmlentities' />";
  $title = "<t4 type='content' name='Title' output='normal' modifiers='striptags,htmlentities' />";
  $content = "<t4 type='content' name='Content' output='normal' modifiers='striptags,htmlentities' />";
  $pub_date = "<t4 type='content' name='Published Date' output='normal' date_format='MMMM d, yyyy' />";
  $author = "<t4 type='content' name='Author' output='normal' modifiers='striptags,htmlentities' />";
  $photo_caption = "<t4 type='content' name='Photo Caption' output='normal' modifiers='striptags,htmlentities' />";
?>
<section class="hero-banner-parallax__text-bottom <?php echo $top_bottom_spacing; ?> <?php echo $limit_width; ?>">
  <!-- HERO IMAGE BANNER -->
  <div class="hero-banner-parallax <?php echo $window_height; ?>" style="background: url(<?php echo $background_image; ?>);">
     
    <?php if($remove_overlay !== "yes"): ?> 
      <!-- BANNER OVERLAY -->
	  <div class="tint-layer"></div>     
    <?php endif; ?>
    
  </div>
  
  <?php if($photo_caption): ?>
    <!-- BANNER AUTHOR CAPTION -->
    <div class="caption-font caption-photo"><?php echo $photo_caption; ?></div>" 
  <?php endif; ?>
  
  <!-- BANNER CATEGORIES/TEXT/CONTENT BLOCK -->
  <div class="hero-banner__block" style="text-align: center">
    
    <?php if($category): ?>
      <!-- BANNER BLOCK CATEGORY HEADER -->
      <div class='hero-banner__block__category featured-item-list__widget-item__block__label'>
        <span class='bg-color'><?php echo $category; ?></span>
      </div>" 
    <?php endif; ?>
    
    <?php if($title): ?>
      <!-- BANNER BLOCK TITLE -->
      <div class='hero-banner__block__title h1-heading text-bottom'>
        <h1 style='color: black;'><?php echo $title; ?></h1>
      </div>"
    <?php endif; ?>
    
    <?php if($content): ?>
      <!-- BANNER BLOCK CONTENT/TEXT -->
      <div class='hero-banner__block__content text-bottom'>
        <p style='color: black;'><?php echo $content; ?></p>
      </div>"
    <?php endif; ?>
    
    <?php if($author): ?> 
      <!-- BANNER BLOCK AUTHOR CAPTION -->
      <div class='caption-font caption-white'>By <?php echo $author; ?></div>
    <?php endif; ?>
      
	<?php if($pub_date): ?>
      <!-- BANNER BLOCK PUBLISH DATE CAPTION -->
      <div class='date' style='visibility: hidden'><?php echo $pub_date; ?></div>
    <?php endif; ?>
    
  </div>
</section>