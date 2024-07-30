<?php
  $top_bottom_spacing = "<t4 type='content' name='Top/Bottom Spacing' output='normal' display_field='value' />";
  $limit_width = "<t4 type='content' name='Limit Width' output='normal' display_field='value' />";
  $author_image = "<t4 type='content' name='Author Picture' output='normal' formatter='path/*' />";
  $quote = "<t4 type='content' name='Quote' output='normal' modifiers='striptags,htmlentities' />";
  $author = "<t4 type='content' name='Author' output='normal' modifiers='striptags,htmlentities' />";

  // LINKS
  $link_text = "<t4 type='content' name='Link Text' output='normal' modifiers='striptags,htmlentities' />";
  $link_external = "<t4 type='content' name='External Link' output='normal' modifiers='striptags,htmlentities' />";
  $link_internal = "<t4 type='content' name='Internal Link' output='linkurl' modifiers='nav_sections' />";
  $link_output =  $link_external ? $link_external : ($link_internal ? $link_internal : null);
  $link_inputs = $link_text && ($link_external || $link_internal) ? true : false;
?>
