 <?php
    // Back to PHP mode for conditional rendering
    if ($is_logged_in) {
?>
    <div class="hero-banner__block" style="text-align: center">
        <div class="hero-banner__block__title h1-heading">
            <t4 type="content" name="Title" output="selective-output" process-format="true" format="<h1>$value</h1>" />
        </div>
        <div class="hero-banner__block__content">
            <t4 type="content" name="Content" output="selective-output" process-format="true" format="<p>$value</p>" />
         </div>
    </div>
<?php
    } else {
?>
    ""
<?php
    }
?>