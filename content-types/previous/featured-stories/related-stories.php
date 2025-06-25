<?php 
  $top_bottom_spacing = "<t4 type='content' name='Top/Bottom Spacing' output='normal' display_field='value' />";
  $limit_width = "<t4 type='content' name='Limited Width' output='normal' display_field='value' />";
  $custom_header = "<t4 type='content' name='Custom Header' output='normal' modifiers='striptags,htmlentities' />";
  
  // function for adding the maroon highlight to the first word
  function highlightWord($string) {
    // Split the string into words
    $words = explode(' ', $string);

    // Check if there are any words
    if (count($words) > 0 && count($words) !== 1) {
        // Wrap the first word with a <span> tag
        $words[0] = '<span>' . $words[0] . '</span>';
        // Reconstructs the string by joining the words after the first
        $result = implode(' ', $words);
    
        return $result;
    }
    return null;
  }
  

  $highlight_header = highlightWord($custom_header);
?>

<section class="brand-stories__related-content <?php echo $top_bottom_spacing; ?> <?php echo $limit_width; ?>">
  <div class="related-content__title">
    <h2><?php echo $custom_header ? $highlight_header : "<span>Fordham</span> Stories"; ?></h2>
  </div>
  <div class="related-content__stories row">
    <t4 type="navigation" name="Related Content - Brand Stories" id="416" />
  </div>
</section>
  
