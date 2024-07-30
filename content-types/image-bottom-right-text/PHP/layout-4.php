<!-- IMAGE WITH TEXT LEFT BOTTOM -->
<?php 
  include './variables.php';
?>

<section class="banner-img-txt-bottom <?php echo $top_bottom_spacing; ?> <?php echo $limit_width_right_left; ?>">
  <div class="banner-img-txt-bottom__wrapper">
    <div class="banner-img-txt-bottom__img">
      <img srcset="<?php echo $image; ?>,
                   <?php echo $image_xs; ?> 0.5x,
                   <?php echo $image_s; ?> 1x,
                   <?php echo $image_m; ?> 1.5x,
                   <?php echo $image_l; ?> 2x"
              src="<?php echo $image_l; ?>"
              alt="<?php echo $image_desc; ?>"
        />
    </div>

    <div class="banner-img-txt-bottom__block left">

        <?php 
          if($category) {
            echo "<!-- CATEGORY -->";
            echo "<span class='banner-img-txt__block__label'>$category</span>";
          }
          
          if($title) {
            echo "<!-- TITLE -->";
            echo "<h2 class='banner-img-txt-alt__block__title'>
                    <span style='font-size: 1.5rem;'>$title</span>
                  </h2>";
          }
        ?>
      
      <div class="banner-img-txt-alt__block__content">

        <?php 
          if($teaser) {
            echo "<!-- TEASER -->";
            echo "<p>$teaser</p>";
          }

          
        ?>
        <div class="banner-img-txt-bottom_link_logo">
            <?php 
			        if($url_output) {
                echo "<!-- LINK -->";
                echo "<div class='link'>";
                echo "<a href='$url_output' class='banner-img-txt-alt__block__link'>
                        <span>$link_text</span>
                        <svg class='svg-md-24px' focusable='false' aria-hidden='true'>
                        <title>Arrow right icon</title>
                        <use xlink:href='$icon_arrow#ic_keyboard_arrow_right_24px'></use>
                        </svg>
                      </a>";
                echo "</div>";
              }
            ?>
            
            <?php
              if($bottom_logo_select === "fordham-now") {
                echo "<!-- BOTTOM LOGO - FORDHAM NOW -->";
                echo "<div class='fordham-now-logo'>";
                echo "<img src='$fordham_now' alt='white Fordham Magazine brand logo'/>";
                echo "</div>";
              }
              if($bottom_logo_select === "fordham-magazine") {
                echo "<div class='fordham-magazine-logo'>";
                echo "<!-- BOTTOM LOGO - FORDHAM MAGAZINE -->";
                echo "<img id='fordham-magazine-logo' src='$fordham_magazine' alt='white Fordham Magazine brand logo' />";
                echo "</div>";
              }
            ?>
        </div> 
      </div>
    </div>
  </div>
</section>
