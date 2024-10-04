<?php
$top_bottom_spacing = "<t4 type='content' name='Top/Bottom Spacing' output='normal' display_field='value' />";
$limit_width        = "<t4 type='content' name='Limited Width' output='normal' display_field='value' />";
$custom_header      = "<t4 type='content' name='Custom Header' output='normal' modifiers='striptags,htmlentities' />";

//Slides
$slide_category      = "<t4 type='content' name='Feature Story Category' output='normal' modifiers='striptags,htmlentities' />";
$slide_title         = "<t4 type='content' name='Feature Story Title' output='normal' modifiers='striptags,htmlentities' />";
$slide_desc          = "<t4 type='content' name='Feature Story Description' output='normal' modifiers='striptags,htmlentities' />";
$slide_link_internal = "<t4 type='content' name='Feature Story Internal Link' output='linkurl' modifiers='nav_sections' />";
$slide_link_external = "<t4 type='content' name='Feature Story External Link' output='normal' modifiers='striptags,htmlentities' />";
$slide_link          = $slide_link_internal ? $slide_link_internal : $slide_link_external;

$slide_category_2      = "<t4 type='content' name='Feature Story Category 2' output='normal' modifiers='striptags,htmlentities' />";
$slide_title_2         = "<t4 type='content' name='Feature Story Title 2' output='normal' modifiers='striptags,htmlentities' />";
$slide_desc_2          = "<t4 type='content' name='Feature Story Description 2' output='normal' modifiers='striptags,htmlentities' />";
$slide_link_internal_2 = "<t4 type='content' name='Feature Story Internal Link 2' output='linkurl' modifiers='nav_sections' />";
$slide_link_external_2 = "<t4 type='content' name='Feature Story External Link 2' output='normal' modifiers='striptags,htmlentities' />";
$slide_link_2          = $slide_link_internal_2 ? $slide_link_internal_2 : $slide_link_external_2;

$slide_category_3      = "<t4 type='content' name='Feature Story Category 3' output='normal' modifiers='striptags,htmlentities' />";
$slide_title_3         = "<t4 type='content' name='Feature Story Title 3' output='normal' modifiers='striptags,htmlentities' />";
$slide_desc_3          = "<t4 type='content' name='Feature Story Description 3' output='normal' modifiers='striptags,htmlentities' />";
$slide_link_internal_3 = "<t4 type='content' name='Feature Story Internal Link 3' output='linkurl' modifiers='nav_sections' />";
$slide_link_external_3 = "<t4 type='content' name='Feature Story External Link 3' output='normal' modifiers='striptags,htmlentities' />";
$slide_link_3          = $slide_link_internal_3 ? $slide_link_internal_3 : $slide_link_external_3;

$slide_category_4      = "<t4 type='content' name='Feature Story Category 4' output='normal' modifiers='striptags,htmlentities' />";
$slide_title_4         = "<t4 type='content' name='Feature Story Title 4' output='normal' modifiers='striptags,htmlentities' />";
$slide_desc_4          = "<t4 type='content' name='Feature Story Description 4' output='normal' modifiers='striptags,htmlentities' />";
$slide_link_internal_4 = "<t4 type='content' name='Feature Story Internal Link 4' output='linkurl' modifiers='nav_sections' />";
$slide_link_external_4 = "<t4 type='content' name='Feature Story External Link 4' output='normal' modifiers='striptags,htmlentities' />";
$slide_link_4          = $slide_link_internal_4 ? $slide_link_internal_4 : $slide_link_external_4;

$slide_category_5      = "<t4 type='content' name='Feature Story Category 5' output='normal' modifiers='striptags,htmlentities' />";
$slide_title_5         = "<t4 type='content' name='Feature Story Title 5' output='normal' modifiers='striptags,htmlentities' />";
$slide_desc_5          = "<t4 type='content' name='Feature Story Description 5' output='normal' modifiers='striptags,htmlentities' />";
$slide_link_internal_5 = "<t4 type='content' name='Feature Story Internal Link 5' output='linkurl' modifiers='nav_sections' />";
$slide_link_external_5 = "<t4 type='content' name='Feature Story External Link 5' output='normal' modifiers='striptags,htmlentities' />";
$slide_link_5          = $slide_link_internal_5 ? $slide_link_internal_5 : $slide_link_external_5;

$fordham_logo   = "<t4 type='content' name='Fordham Logo' output='normal' display_field='value' />";
$fordham_logo_2 = "<t4 type='content' name='Fordham Logo 2' output='normal' display_field='value' />";
$fordham_logo_3 = "<t4 type='content' name='Fordham Logo 3' output='normal' display_field='value' />";
$fordham_logo_4 = "<t4 type='content' name='Fordham Logo 4' output='normal' display_field='value' />";
$fordham_logo_5 = "<t4 type='content' name='Fordham Logo 5' output='normal' display_field='value' />";

// function for adding the maroon highlight to the first word
function highlightWordDev($string)
{
 // Split the string into words
 $words = explode(' ', $string);

 // Check if there are any words
 if (count($words) > 0) {
  // Wrap the first word with a <span> tag
  $words[0] = '<span>' . $words[0] . '</span>';
  // Reconstructs the string by joining the words after the first
  $result = implode(' ', $words);
  return $result;
 }
 return null;
}

$highlight_header = highlightWordDev($custom_header);
?>

<section class="featured-stories <?php echo $top_bottom_spacing; ?> <?php echo $limit_width; ?>">

  <?php if ($custom_header): ?>
  	<div class="title">
      <h2><?php echo $custom_header ? $highlight_header : "<span>University</span> News"; ?></h2>
  	</div>
  <?php endif; ?>

  <div class="featured-stories-container row">
    <div class="carousel-arrows">
      <div class="carousel-arrow prev">&lsaquo;</div>
      <div class="carousel-arrow next">&rsaquo;</div>
    </div>

    <div class="slide-container">
      <div class="col-lg-4 slide">
        <a href="<?php echo $slide_link; ?>"></a>
          <t4 type="content" name="Feature Story Image" output="normal" formatter="image/normal" />
          <p class="featured-item-banner__block__inner__label category"><span><?php echo $slide_category; ?></span></p>
          <?php if ($slide_link): ?>
            <a href="<?php echo $slide_link; ?>">
              <h3><?php echo $slide_title; ?></h3>
            </a>
          <?php else: ?>
            <h3><?php echo $slide_title; ?></h3>
          <?php endif; ?>

          <?php if ($slide_desc): ?>
            <p><?php echo $slide_desc; ?></p>
          <?php endif; ?>

          <?php if ($fordham_logo === "fordham-magazine"): ?>
            <div class="fordham-logo">
              <t4 type="media" id="161132" formatter="image/normal" cdn="true" pxl-filter-id="6" />
            </div>
          <?php endif; ?>
          <?php if ($fordham_logo === "fordham-now"): ?>
            <div class="fordham-logo">
              <t4 type="media" id="161131" formatter="image/normal" cdn="true" pxl-filter-id="6" />
            </div>
          <?php endif; ?>
          <?php if ($fordham_logo === "fordham-stories"): ?>
            <div class="fordham-logo">
              <t4 type="media" id="166707" formatter="image/normal" cdn="true" pxl-filter-id="6" />
            </div>
          <?php endif; ?>
        </a>
      </div>


      <div class="col-lg-4 slide">
        <a href="<?php echo $slide_link_2; ?>">
          <t4 type="content" name="Feature Story Image 2" output="normal" formatter="image/normal" />
          <p class="featured-item-banner__block__inner__label category"><span><?php echo $slide_category_2; ?></span></p>

          <?php if ($slide_link_2): ?>
            <a href="<?php echo $slide_link_2; ?>">
              <h3><?php echo $slide_title_2; ?></h3>
            </a>
          <?php else: ?>
            <h3><?php echo $slide_title_2; ?></h3>
          <?php endif; ?>

          <?php if ($slide_desc_2): ?>
            <p><?php echo $slide_desc_2; ?></p>
          <?php endif; ?>

          <?php if ($fordham_logo_2 === "fordham-magazine"): ?>
            <div class="fordham-logo">
              <t4 type="media" id="161132" formatter="image/normal" cdn="true" pxl-filter-id="6" />
            </div>
          <?php endif; ?>
          <?php if ($fordham_logo_2 === "fordham-now"): ?>
            <div class="fordham-logo">
              <t4 type="media" id="161131" formatter="image/normal" cdn="true" pxl-filter-id="6" />
            </div>
          <?php endif; ?>
          <?php if ($fordham_logo_2 === "fordham-stories"): ?>
            <div class="fordham-logo">
              <t4 type="media" id="166707" formatter="image/normal" cdn="true" pxl-filter-id="6" />
            </div>
          <?php endif; ?>
        </a>
      </div>

      <div class="col-lg-4 slide">
        <a href="<?php echo $slide_link_3 ?>">
          <t4 type="content" name="Feature Story Image 3" output="normal" formatter="image/normal" />
          <p class="featured-item-banner__block__inner__label category"><span><?php echo $slide_category_3; ?></span></p>

          <?php if ($slide_link_3): ?>
            <a href="<?php echo $slide_link_3; ?>">
              <h3><?php echo $slide_title_3; ?></h3>
            </a>
          <?php else: ?>
            <h3><?php echo $slide_title_3; ?></h3>
          <?php endif; ?>

          <?php if ($slide_desc_3): ?>
            <p><?php echo $slide_desc_3; ?></p>
          <?php endif; ?>

          <?php if ($fordham_logo_3 === "fordham-magazine"): ?>
            <div class="fordham-logo">
              <t4 type="media" id="161132" formatter="image/normal" cdn="true" pxl-filter-id="6" />
            </div>
          <?php endif; ?>
          <?php if ($fordham_logo_3 === "fordham-now"): ?>
            <div class="fordham-logo">
              <t4 type="media" id="161131" formatter="image/normal" cdn="true" pxl-filter-id="6" />
            </div>
          <?php endif; ?>
          <?php if ($fordham_logo_3 === "fordham-stories"): ?>
            <div class="fordham-logo">
              <t4 type="media" id="166707" formatter="image/normal" cdn="true" pxl-filter-id="6" />
            </div>
          <?php endif; ?>
        </a>
      </div>

      <?php if ($slide_title_4 && $slide_category_4): ?>
        <div class="col-lg-4 slide">
          <a href="<?php echo $slide_link_4; ?>">
            <t4 type="content" name="Feature Story Image 4" output="normal" formatter="image/normal" />
            <p class="featured-item-banner__block__inner__label category"><span><?php echo $slide_category_4; ?></span></p>

            <?php if ($slide_link_4): ?>
            <a href="<?php echo $slide_link_4; ?>">
              <h3><?php echo $slide_title_4; ?></h3>
            </a>
            <?php else: ?>
              <h3><?php echo $slide_title_4; ?></h3>
            <?php endif; ?>

            <?php if ($slide_desc_4): ?>
              <p><?php echo $slide_desc_4; ?></p>
            <?php endif; ?>

            <?php if ($fordham_logo_4 === "fordham-magazine"): ?>
              <div class="fordham-logo">
                <t4 type="media" id="161132" formatter="image/normal" cdn="true" pxl-filter-id="6" />
              </div>
            <?php endif; ?>
            <?php if ($fordham_logo_4 === "fordham-now"): ?>
              <div class="fordham-logo">
                <t4 type="media" id="161131" formatter="image/normal" cdn="true" pxl-filter-id="6" />
              </div>
            <?php endif; ?>
            <?php if ($fordham_logo_4 === "fordham-stories"): ?>
              <div class="fordham-logo">
                <t4 type="media" id="166707" formatter="image/normal" cdn="true" pxl-filter-id="6" />
              </div>
            <?php endif; ?>
          </a>
        </div>
      <?php endif; ?>

      <?php if ($slide_title_5 && $slide_category_5): ?>
        <div class="col-lg-4 slide">
          <a href="<?php echo $slide_link_5 ?>">
            <t4 type="content" name="Feature Story Image 5" output="normal" formatter="image/normal" />
            <p class="featured-item-banner__block__inner__label category"><span><?php echo $slide_category_5; ?></span></p>

            <?php if ($slide_link_5): ?>
              <a href="<?php echo $slide_link_5; ?>">
                <h3><?php echo $slide_title_5; ?></h3>
              </a>
            <?php else: ?>
              <h3><?php echo $slide_title_5; ?></h3>
            <?php endif; ?>


            <?php if ($slide_desc_5): ?>
              <p><?php echo $slide_desc_5; ?></p>
            <?php endif; ?>

            <?php if ($fordham_logo_5 === "fordham-magazine"): ?>
              <div class="fordham-logo">
                <t4 type="media" id="161132" formatter="image/normal" cdn="true" pxl-filter-id="6" />
              </div>
            <?php endif; ?>
            <?php if ($fordham_logo_5 === "fordham-now"): ?>
              <div class="fordham-logo">
                <t4 type="media" id="161131" formatter="image/normal" cdn="true" pxl-filter-id="6" />
              </div>
            <?php endif; ?>
            <?php if ($fordham_logo_5 === "fordham-stories"): ?>
              <div class="fordham-logo">
                <t4 type="media" id="166707" formatter="image/normal" cdn="true" pxl-filter-id="6" />
              </div>
            <?php endif; ?>
          </a>
        </div>
      <?php endif; ?>

    </div>
  </div>
</section>