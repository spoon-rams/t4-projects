<!-- IMAGE LEFT/TEXT RIGHT -->
<?php 
  include './variables.php';
?>

<section class="banner-img-txt  <?php echo $top_bottom_spacing; ?> <?php echo $limit_width; ?>">
  <div class="row">
    <div class="banner-img-txt__col col-lg-7">
      <div class="banner-img-txt__img">
        <img srcset="<?php echo $image; ?>,
                     <?php echo $image_xs; ?> 0.5x,
                   	 <?php echo $image_s; ?> 1x,
                     <?php echo $image_m; ?> 1.5x,
                   	 <?php echo $image_l; ?> 2x"
                src="<?php echo $image; ?>"
                alt="<?php echo $image_desc;?>"
         />
      </div>
    </div>

    <div class="banner-img-txt__col col-lg-5">
      <div class="banner-img-txt__block">
        
        <?php 
		  if($category) {
            echo "<!-- CATEGORY -->";
		    echo "<span class='banner-img-txt__block__label'>$category</span>";
          }
			
		  if($title) {
		   	echo "<!-- TITLE -->";
            echo "<h2 class='banner-img-txt__block__title'><span>$title</span></h2>";
          }
        ?>

        <div class="banner-img-txt__block__content">
          
          <?php 
			if($teaser) {
              echo "<!-- TEASER -->";
              echo "<p>$teaser</p>";
       		}
			

			if($url_output) {
              echo "<!-- LINK -->";
              echo "<a href='$url_output' class='banner-img-txt__block__link'>
 					 <span>$link_text</span>
 					 <svg class='svg-md-24px' focusable='false' aria-hidden='true'>
   					   <title>Arrow right icon</title>
   					   <use xlink:href='$nav_obj#ic_keyboard_arrow_right_24px'></use>
 					 </svg>
					</a>";
            }
          ?>
          
        </div>
      </div>
    </div>
  </div>
</section>






