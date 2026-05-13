<?php
  $genericFacet    = \T4\PHPSearchLibrary\FacetFactory::getInstance('GenericFacet', $documentCollection, $queryHandler);
  $filters         = $queryHandler->getQueryValuesForPrint();
  $categoryFilters = ['residenceOccupancy', 'residenceClass', 'residenceType', 'residenceCampus', 'residenceLiving', 'residenceCost'];
?>
<section class="program-search" aria-label="Fordham University Program Search">

  <div class="program-search__form" id="program-search">
    <div id="searchoptionsGeneric" role="search" data-t4-ajax-group="courseSearch" aria-label="Generic Search">
      <form class="row js-t4form-container" method="get">
        <div class="program-search__form__input col-12">
          <label class="sr-only" for="search-text">Filter for programs</label>
          <input type="text" id="search-text" name="keywords" placeholder="Find your ideal residence..." value="<?php echo ! empty($query['keywords']) ? $query['keywords'] : '' ?>" />
          <button class="btn btn-primary" type="submit">Search</button>
        </div>
        <div id="hidden-form-generic" data-t4-ajax-group="courseSearch">
          <?php
            $formatQueryAsHiddenInput = \T4\PHPSearchLibrary\QueryFormatterFactory::getInstance('FormatQueryAsHiddenInput', $queryHandler);
            $formatQueryAsHiddenInput->setMember('excludedQueries', ['keywords', 'page', 'residenceCost']);
            echo $formatQueryAsHiddenInput->format();
          ?>
        </div>
      </form>
    </div>

    <div class="program-search__form__controls col-12">
      <span class="program-search__form__controls__label">Filter by:</span>

      <!-- FILTER BUTTONS -->
      <button type="button" class="btn btn-primary program-search__form__toggle" id="occupancy-button" >Occupancy</button>
      <button type="button" class="btn btn-primary program-search__form__toggle" id="class-year-button">Class Year</button>
      <button type="button" class="btn btn-primary program-search__form__toggle" id="housing-type-button">Housing Type</button>
      <button type="button" class="btn btn-primary program-search__form__toggle" id="campus-residence-button">Campus</button>
      <button type="button" class="btn btn-primary program-search__form__toggle" id="pricing-button">Price</button>
      <a class="btn btn-primary program-search__form__clear ajax-load-link" href="?keywords=" id="clear-filters">Clear Filters</a>

    </div>

    <div id="searchoptions" role="search" data-t4-ajax-group="courseSearch" aria-label="Main Filters">
      <form class="row js-t4form-container" method="get">

        <!-- FILTER BY OCCUPANCY -->
        <div class="program-search__form__filters col-sm-12" id="occupancy-filter" data-group="occupancy">
          <span class="program-search__form__filters__heading">Filter by Occupancy</span>
          <?php
            $element = 'residenceOccupancy';
            $genericFacet->setMember('element', $element);
            $genericFacet->setMember('type', 'List');
            $genericFacet->setMember('facetSource', 'documents');
            $genericFacet->setMember('sortingState', true);
            $genericFacet->setMember('multipleValueState', true);
            $genericFacet->setMember('multipleValueSeparator', ', ');
            $search = $genericFacet->displayFacet();

            if (! empty($search)):
              // Custom sort logic
              $orderMap = [
                'single'    => 1,
                'double'    => 2,
                'triple'    => 3,
                'quadruple' => 4,
                'quintuple' => 5,
              ];

              usort($search, function ($a, $b) use ($orderMap) {
                $aVal = strtolower($a['value']);
                $bVal = strtolower($b['value']);
                return ($orderMap[$aVal] ?? 999) <=> ($orderMap[$bVal] ?? 999);
              });
          ?>

            <div id="checkboxes-<?php echo strtolower($element) ?>">
					    <fieldset class="form-group">
					      <legend class="sr-only">Filter by Occupancy:</legend>
						    <?php $i = 0; ?>
						    <?php foreach ($search as $item): ?>
						      <div class="checkbox-styled">
							      <label for="<?php echo $element . '[' . $i . ']'; ?>" class="label-checkbox">
							        <input
							          type="checkbox"
								        id="<?php echo $element . '[' . $i++ . ']'; ?>"
								        value="<?php echo $item['value'] ?>"
								        data-cookie="T4_persona"
								        name="<?php echo $element ?>"
								        data-t4-value="<?php echo strtolower($item['value']) ?>"
								        <?php echo $item['selected'] ? 'checked' : '' ?>
							        />
							        <?php echo $item['label'] ?>
							        <span class="checkmark"></span>
							      </label>
							    </div>
						    <?php endforeach; ?>
              </fieldset>
            </div>
          <?php endif; ?>
        </div>

        <!-- FILTER BY CLASS YEAR -->
        <div class="program-search__form__filters col-sm-12" id="class-year-filter" data-group="class-year">
          <span class="program-search__form__filters__heading">Filter by Class Year</span>
          <?php
            $element = 'residenceClass';
            $genericFacet->setMember('element', $element);
            $genericFacet->setMember('type', 'List');
            $genericFacet->setMember('facetSource', 'documents');
            $genericFacet->setMember('sortingState', true);
            $genericFacet->setMember('multipleValueState', true);
            $genericFacet->setMember('multipleValueSeparator', ', ');
            $search = $genericFacet->displayFacet();

            if (! empty($search)):
              // Custom sort logic
              $orderMap = [
                'first-year'  => 1,
                'second-year' => 2,
                'junior'      => 3,
                'senior'      => 4,
              ];

              usort($search, function ($a, $b) use ($orderMap) {
                $aVal = strtolower($a['value']);
                $bVal = strtolower($b['value']);
                return ($orderMap[$aVal] ?? 999) <=> ($orderMap[$bVal] ?? 999);
              });
          ?>

						<div id="checkboxes-<?php echo strtolower($element) ?>">
							<fieldset class="form-group">
								<legend class="sr-only">Filter by Occupancy:</legend>
								<?php $i = 0; ?>
								<?php foreach ($search as $item): ?>
									<div class="checkbox-styled">
										<label for="<?php echo $element . '[' . $i . ']'; ?>" class="label-checkbox">
											<input
							          type="checkbox"
												id="<?php echo $element . '[' . $i++ . ']'; ?>"
												value="<?php echo $item['value'] ?>"
												data-cookie="T4_persona"
												name="<?php echo $element ?>"
												data-t4-value="<?php echo strtolower($item['value']) ?>"
												<?php echo $item['selected'] ? 'checked' : '' ?>
									    />
											<?php echo $item['label'] ?>
											<span class="checkmark"></span>
										</label>
									</div>
								<?php endforeach; ?>
              </fieldset>
            </div>
          <?php endif; ?>
        </div>

        <!-- FILTER BY HOUSING TYPE -->
        <div class="program-search__form__filters col-sm-12" id="housing-type-filter" data-group="house-type">
          <span class="program-search__form__filters__heading">Filter by Housing Type</span>
          <?php
            $element = 'residenceType';
            $genericFacet->setMember('element', $element);
            $genericFacet->setMember('type', 'List');
            $genericFacet->setMember('facetSource', 'documents');
            $genericFacet->setMember('sortingState', true);
            $genericFacet->setMember('multipleValueState', true);
            $genericFacet->setMember('multipleValueSeparator', ', ');
            $search = $genericFacet->displayFacet();
          ?>
          <?php if (! empty($search)): ?>
            <div id="checkboxes-<?php echo strtolower($element) ?>">
              <fieldset class="form-group">
                <legend class="sr-only">Filter by Housing Type: </legend>
                <?php $i = 0; ?>
                <?php foreach ($search as $item): ?>
                  <div class="checkbox-styled">
                    <label for="<?php echo $element . '[' . $i . ']'; ?>" class="label-checkbox">
                      <input
                        type="checkbox"
                        id="<?php echo $element . '[' . $i++ . ']'; ?>"
                        value="<?php echo $item['value'] ?>"
                        data-cookie="T4_persona"
                        name="<?php echo $element ?>"
                        data-t4-value="<?php echo strtolower($item['value']) ?>"
                        <?php echo $item['selected'] ? 'checked' : '' ?>
                      />
                      <?php echo $item['label'] ?>
                      <span class="checkmark"></span>
                    </label>
                  </div>
                <?php endforeach; ?>
              </fieldset>
            </div>
          <?php endif; ?>
        </div>

        <!-- FILTER BY CAMPUS -->
        <div class="program-search__form__filters col-sm-12" id="campus-residence-filter" data-group="campus">
          <span class="program-search__form__filters__heading">Filter by Campus</span>
          <?php
            $element = 'residenceCampus';
            $genericFacet->setMember('element', $element);
            $genericFacet->setMember('type', 'List');
            $genericFacet->setMember('facetSource', 'documents');
            $genericFacet->setMember('sortingState', true);
            $genericFacet->setMember('multipleValueState', true);
            $genericFacet->setMember('multipleValueSeparator', ', ');
            $search = $genericFacet->displayFacet();
          ?>
          <?php if (! empty($search)): ?>
            <div id="checkboxes-<?php echo strtolower($element) ?>">
              <fieldset class="form-group">
                <legend class="sr-only">Filter by campus: </legend>
                <?php $i = 0; ?>
                <?php foreach ($search as $item): ?>
                  <div class="checkbox-styled">
                    <label for="<?php echo $element . '[' . $i . ']'; ?>" class="label-checkbox">
                      <input
                        type="checkbox"
                        id="<?php echo $element . '[' . $i++ . ']'; ?>"
                        value="<?php echo $item['value'] ?>"
                        data-cookie="T4_persona"
                        name="<?php echo $element ?>"
                        data-t4-value="<?php echo strtolower($item['value']) ?>"
                        <?php echo $item['selected'] ? 'checked' : '' ?>
                      />
                      <?php echo $item['label'] ?>
                      <span class="checkmark"></span>
                    </label>
                  </div>
                <?php endforeach; ?>
              </fieldset>
            </div>
          <?php endif; ?>
        </div>

        <!-- FILTER BY PRICE-->
        <div class="program-search__form__filters col-sm-12" id="pricing-filter" data-group="pricing">
          <span class="program-search__form__filters__heading">Filter by Price</span>

          <div id="checkboxes-residenceCost">
            <fieldset class="form-group">
              <legend class="sr-only">Filter by Price: </legend>

              <label>Academic Year Rate: </label>
              <input
                type="range"
                id="priceSlider"
                min="0"
                max="30000"
                step="100"
                value = "<?php echo isset($_GET['residenceCost']) ? explode('-', $_GET['residenceCost'])[1] : 0; ?>"
              />

              <div>
                Selected Academic Year Rate: $<span id="priceValue"></span>
              </div>

              <!-- HIDDEN PRICE SLIDER SEARCH -->
              <input
                type="hidden"
                name="residenceCost"
                id="priceCombined"
              />
            </fieldset>
          </div>
        </div>


        <!-- HIDDEN KEYWORD SEARCH -->
        <div id="hidden-form-filters" data-t4-ajax-group="courseSearch">
          <input type="hidden" name="keywords" value="<?php echo ! empty($query['keywords']) ? $query['keywords'] : '' ?>" />
        </div>

      </form>
    </div>
  </div>

  <a id="starthere" href="#starthere" aria-label="Start Here"></a>

  <!-- FILTERS APPLIED TAG RENDER - START -->
  <div id="searchoptions-filters" role="search" data-t4-ajax-group="directorySearch">
    <div id="event-filters">
      <?php if ($filters !== null): ?>
        <?php
          $i        = 0;
          $tagsHTML = '';
          foreach ($categoryFilters as $key) {
            if (isset($filters[$key]) && is_array($filters[$key])) {
              foreach ($filters[$key] as $value) {
                $tagsHTML .= '<li class="filter-' . $i++ . ' small primary"  data-t4-value="' . strtolower($value) . '" data-t4-filter="' . $key . '">';
                $tagsHTML .= '<div class="filter-wrapper">';
                $tagsHTML .= '<div class="filter-text">' . $value . '</div>';
                $tagsHTML .= '<div class="remove">X</div>';
                $tagsHTML .= '</div>';
                $tagsHTML .= '</li>';
              }
            } elseif (isset($filters[$key])) {
              $value = $filters[$key];

              // Check if this is the cost filter
              $isPrice = ($key === 'residenceCost');
              // Add a specific class if it's the price so JS can find it
              $priceClass = $isPrice ? ' js-price-tag' : '';

              $tagsHTML .= '<li class="filter-' . $i++ . ' small primary ' . $priceClass . '"  data-t4-value="' . strtolower($value) . '" data-t4-filter="' . $key . '">';
              $tagsHTML .= '<div class="filter-wrapper">';
              $tagsHTML .= '<div class="filter-text">' . $value . '</div>';
              $tagsHTML .= '<div class="remove">X</div>';
              $tagsHTML .= '</div>';
              $tagsHTML .= '</li>';
            }
          }

          if (isset($filters['keywords'])) {
            $tagsHTML .= '<li class="filter-' . $i++ . ' small primary"  data-t4-filter="' . strtolower($value) . '">';
            $tagsHTML .= '<div class="filter-wrapper">';
            $tagsHTML .= '<div class="filter-text">' . $filters['keywords'] . '</div>';
            $tagsHTML .= '</div>';
            $tagsHTML .= '</li>';
          }

          echo $tagsHTML != '' ? '<div class="program-search__form__controls__label">Filters Applied:</div><ul class="no-bullet">' . $tagsHTML . '</ul>' : '';
        ?>
      <?php endif; ?>
    </div>
  </div>

  <!-- FILTERS APPLIED TAG RENDER - END -->


  <div class="program-search__results row" id="search-results" role="main" data-t4-ajax-group="courseSearch">
    <?php if (! empty($results)): ?>
      <!-- SEARCH RESULT CARDS -->
      <?php foreach ($results as $item): ?>

        <div class="program-search__results__item col-xl-3 col-lg-4 col-md-6 col-sm-12 popup-trigger" data-popup-trigger="id-<?php echo $item['contentID']; ?>" tabindex="0">
          <div class="program-search__results__info">
            <div class="overlay"></div>

            <!-- CAMPUS ICONS -->
            <?php if (isset($item['residenceCampus']) && strtolower($item['residenceCampus']) === 'rose hill'): ?>
              <img class="icon" src='<t4 type="media" id="166286" formatter="path/*" />' alt=""/>
            <?php elseif (isset($item['residenceCampus']) && strtolower($item['residenceCampus']) === 'lincoln center'): ?>
              <img class="icon" src='<t4 type="media" id="166287" formatter="path/*" />' alt=""/>
            <?php endif; ?>

            <!-- RESIDENCE IMAGE -->
            <img srcset="<?php echo $item['residenceImage']; ?> 0.33x,<?php echo $item['residenceImage']; ?> 0.5x,<?php echo $item['residenceImage']; ?> 1.5x,<?php echo $item['residenceImage']; ?> 2x" src="<?php echo $item['residenceImage']; ?>" alt="Image for<?php echo $item['residenceName']; ?>">

            <!-- RESIDENCE NAME -->
            <span class="program-search__results__item__title"><?php echo $item['residenceName']; ?></span>
          </div>
        </div>

        <!-- POPUP MODAL -->
        <div class="popup-modal" data-popup-modal="id-<?php echo $item['contentID']; ?>" role="dialog" aria-labelledby="title-id-<?php echo $item['contentID']; ?>">
          <div class="modal-overflow">
            <!-- POPUP TITLE -->
            <p id="title-id-<?php echo $item['contentID']; ?>" class="popup-modal__title"><?php echo $item['residenceName']; ?></p>

            <!-- POPUP DESCRIPTION -->
            <p><?php echo $item['residenceDesc']; ?></p>
            <hr class="modal-popup-separator">

            <!-- POPUP CAMPUS -->
            <p class="popup-options"><strong>Campus: </strong><span class="degree-options"><?php echo $item['residenceCampus']; ?></span></p>
            <hr class="modal-popup-separator">
            
            <div class="modal-content-info">
               <div class="content-info">
                    <!-- POPUP CLASS YEARS -->
                    <p><strong>Class Year(s): </strong><?php echo $item['residenceClass']; ?></p>

                    <!-- POPUP HOUSING TYPE -->
                    <p><strong> Housing Type: </strong><?php echo $item['residenceType'] ?></p>

                    <!-- POPUP LINK -->
                    <a class="popup-modal__more btn btn-primary" href="<?php echo $item['residenceURL']; ?>" aria-label="Find out more about<?php echo $item['residenceName']; ?>">Read More</a>

                    <!-- POPUP CLOSE BUTTON -->
                    <button class="popup-modal__close" aria-label="Close site search">
                        <svg class="svg-md-24px" focusable="false" aria-hidden="true">
                            <use xlink:href="<t4 type="media" id="10757" formatter="path/*" />#ic_close_24px"></use>
                        </svg>
                    </button>
               </div>
            </div>
            <div class="content-location">
                <!-- THIS IS JUST A TEST -->
                <img srcset="<?php echo $item['residenceImage']; ?> 0.33x,<?php echo $item['residenceImage']; ?> 0.5x,<?php echo $item['residenceImage']; ?> 1.5x,<?php echo $item['residenceImage']; ?> 2x" src="<?php echo $item['residenceImage']; ?>" alt="Image for<?php echo $item['residenceName']; ?>">
            </div>
          </div>
        </div>
		  <?php endforeach; ?>

      <!-- PAGE PAGINATION -->
      <div class="program-search__pagination-wrapper">
        <?php if (! empty($paginationArray)): ?>
          <ul class="program-search__pagination ajax-load-link" data-t4-ajax-link="normal" data-t4-scroll="true">
            <?php foreach ($paginationArray as $page): ?>
              <?php if ($page['text'] == "&lt;&lt;"): ?>
                <li><a class="page" href="<?php echo $page['href']; ?>"><?php echo $page['text']; ?></a></li>
                <?php elseif ($page['text'] == "&gt;&gt;"): ?>
                <li><a class="page" href="<?php echo $page['href']; ?>"><?php echo $page['text']; ?></a></li>
                <?php elseif ($page['text'] == "&lt;"): ?>
                <li><a class="page" href="<?php echo $page['href']; ?>"><?php echo $page['text']; ?></a></li>
                <?php elseif ($page['text'] == "&gt;"): ?>
                <li><a class="page" href="<?php echo $page['href']; ?>"><?php echo $page['text']; ?></a></li>
                <?php elseif ($page['current'] == true): ?>
                <li><a class="page active" href="<?php echo $page['href']; ?>"><?php echo $page['text']; ?></a></li>
                <?php else: ?>
                <li><a class="page" href="<?php echo $page['href']; ?>"><?php echo $page['text']; ?></a></li>
              <?php endif; ?>
            <?php endforeach; ?>
          </ul>
        <?php endif; ?>
      </div>
    <?php else: ?>
      <p>No results found. You may have filters applied, <a href="?keywords=" id="clear-filters" style="text-decoration:underline;">click here</a> to clear them.</p>
    <?php endif; ?>
  </div>
</section>































