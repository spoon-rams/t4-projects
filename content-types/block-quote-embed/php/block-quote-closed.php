<!-- CLOSED BLOCK QUOTE -->
<?php 
  include './varialbles.php';
?>

<section class="block-quote-closed <?php echo $top_bottom_spacing ?> <?php echo $limit_width ?>">
  <div class="block-quote-closed__container">
    
    <!-- OPENING QUOTE SVG -->
    <div class="opening-quote">
      <svg
        class="quote_top-quote__aYsw1"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 19 20"
        enable-background="new 0 0 19 20"
        width="75"
        height="77"
        role="presentation"
       >
        <path fill="#900028" fill-rule="evenodd" clip-rule="evenodd" d="M11.4,10.3L15.3,0h3.3l-2.5,9.5H19V20h-7.6V10.3z M0,10.3L3.9,0h3.3L4.7,9.5h2.9V20H0V10.3z"></path>
      </svg>
    </div>
    <?php 
       if($limit_width) {
         echo "<div class='row profile remove-padding'>";
  	   } else {
         echo "<div class='row profile'>";
       }
    ?>
      <!-- IMAGE WITH QUOTE -->
      <?php 
		 if($author_image && $quote) {
  		   echo "<div class='picture' style='background-image: url($author_image)'></div>
                 <div class='col-lg-9'>
                   <p class='quote'>$quote</p>";
         echo !$link_inputs ? null : "<a href='$link_output' target='_blank' rel='noopener'>
                                         <p class='link'>
                                           <span class='cta-link-font link-icon'>$link_text</span>
                                         </p>
                                       </a>"; 
         echo "</div>";
           
  		 }
      ?>
      <!-- QUOTE ONLY -->
      <?php 
         if($quote && !$author_image) {
           echo "<p class='quote'>$quote</p>";
           echo !$link_inputs ? null : "<a href='$link_output' target='_blank' rel='noopener'>
                                         <p class='link'>
                                           <span class='cta-link-font link-icon'>$link_text</span>
                                         </p>
                                       </a>"; 
         }
      ?>
    </div>
	
    <!-- CLOSING QUOTE SVG -->
    <div class="closing-quote">
      <svg
        class="quote_bottom-quote__IMDYh"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 19 20"
        enable-background="new 0 0 19 20"
        width="75"
        height="77"
        role="presentation"
       >
        <path fill="#900028" fill-rule="evenodd" clip-rule="evenodd" d="M7.6,9.7L3.7,20H0.4l2.5-9.5H0V0h7.6V9.7z M19,9.7 L15.1,20h-3.3l2.5-9.5h-2.9V0H19V9.7z"></path>
      </svg>
      <?php 
         if($author) {
           echo "<div class='author'>
                   <p>$author</p>
                 </div>";
         } else {
           echo "<div class='author'>
                   <p>Anonymous</p>
                 </div>";
         }
      ?>
    </div>
  </div>
</section>