<?php 
  $top_bottom_spacing = "<t4 type='content' name='Top / Bottom Spacing' output='normal' display_field='value' />";
  $limit_width = "<t4 type='content' name='Limit Width' output='normal' display_field='value' />";
  $background_layer = "<t4 type='content' name='Background layer' output='normal' formatter='path/*' />";
  $heading = "<t4 type='content' name='Heading' output='normal' modifiers='striptags,htmlentities' />";
?>
<!-- > -->
<section class="general-content background-image <?php echo $top_bottom_spacing; ?> <?php echo $limit_width; ?>" style="background-image: url(<?php echo $background_layer; ?>);">
  <t4 type="meta" meta="html_anchor" />
  <div class="general-content__block <?php echo $heading; ?>">
  	<t4 type="content" name="Sub heading" output="selective-output" process-format="true" format="<h2>$value</h2>" />
  	<t4 type="content" name="Main body" output="normal" modifiers="medialibrary,nav_sections" />
  </div>
</section>