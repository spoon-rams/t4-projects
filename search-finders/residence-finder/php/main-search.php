<?php
    $genericFacet = \T4\PHPSearchLibrary\FacetFactory::getInstance('GenericFacet', $documentCollection, $queryHandler);
    $filters = $queryHandler->getQueryValuesForPrint();
    $categoryFilters = array('courseArea','courseDegree','courseCollegeSchool','courseCampuses');
?>
<section class="program-search" aria-label="Fordham University Program Search">
    <!--h2 class="program-search__title">
      <span>Explore Undergraduate Programs</span>
    </h2-->
    
      <div class="program-search__form" id="program-search">
        <div id="searchoptionsGeneric" role="search" data-t4-ajax-group="courseSearch" aria-label="Generic Search">
          <form class="row js-t4form-container" method="get">
            <div class="program-search__form__input col-12">
              <label class="sr-only" for="search-text">Filter for programs</label>
              <input type="text" id="search-text" name="keywords" placeholder="Find your ideal program..." value="<?php echo !empty($query['keywords']) ? $query['keywords']: ''  ?>" />
              <button class="btn btn-primary" type="submit">Search</button>
            </div>
            <div id="hidden-form-generic" data-t4-ajax-group="courseSearch">
                <?php
                    $formatQueryAsHiddenInput = \T4\PHPSearchLibrary\QueryFormatterFactory::getInstance('FormatQueryAsHiddenInput', $queryHandler);
					$formatQueryAsHiddenInput->setMember('excludedQueries', array('keywords', 'page'));
                    echo $formatQueryAsHiddenInput->format();
                ?>
            </div>
          </form>
        </div>
        <div class="program-search__form__controls col-12">
          <span class="program-search__form__controls__label">Filter by:</span>
          <button type="button" class="btn btn-primary program-search__form__toggle" id="area-study-button" >Area of Interest</button>
          <button type="button" class="btn btn-primary program-search__form__toggle" id="degree-button">Options</button>
          <button type="button" class="btn btn-primary program-search__form__toggle" id="college-school-button">College or School</button>
          <button type="button" class="btn btn-primary program-search__form__toggle" id="campus-button">Campus</button>
          <a class="btn btn-primary program-search__form__clear ajax-load-link" href="?keywords=" id="clear-filters">Clear Filters</a>
        </div>
        <div id="searchoptions" role="search" data-t4-ajax-group="courseSearch" aria-label="Main Filters">
          <form class="row js-t4form-container" method="get">
          <div class="program-search__form__filters col-sm-12" id="area-study-filter" data-group="area-study">
            <span class="program-search__form__filters__heading">Filter by Area of Interest</span>
            <?php
                  $element = 'courseArea';
                  $genericFacet->setMember('element', $element);
                  $genericFacet->setMember('type', 'List');
                  $genericFacet->setMember('facetSource', 'documents');
                  $genericFacet->setMember('sortingState', true);
                  $genericFacet->setMember('multipleValueState', true);
                  $genericFacet->setMember('multipleValueSeparator', ', ');
                  $search = $genericFacet->displayFacet(); ?>
              <?php if (!empty($search)) : ?>
                  <div id="checkboxes-<?php echo strtolower($element)?>">
                    <fieldset class="form-group">
                      <legend class="sr-only">Filter by area of interest: </legend>
                        <?php $i = 0; ?>
                        <?php foreach ($search as $item) : ?>
                          <div class="checkbox-styled">
                            <label for="<?php echo $element.'['.$i.']'; ?>" class="label-checkbox">
                                <input type="checkbox" id="<?php echo $element.'['.$i++.']'; ?>" value="<?php echo $item['value'] ?>" data-cookie="T4_persona" name="<?php echo $element ?>" data-t4-value="<?php echo strtolower($item['value']) ?>" <?php echo $item['selected'] ? 'checked' : '' ?> />
                                <?php echo $item['label'] ?>
                              	<span class="checkmark"></span>
                            </label>
                          </div>
                        <?php endforeach; ?>
                          </fieldset>
                    </div>
              <?php endif; ?>
          </div>
          <div class="program-search__form__filters col-sm-12" id="degree-filter" data-group="degree">
            <span class="program-search__form__filters__heading">Filter by option:</span>
            <?php
                $element = 'courseDegree';
                $genericFacet->setMember('element', $element);
                $genericFacet->setMember('type', 'List');
                $genericFacet->setMember('facetSource', 'documents');
                $genericFacet->setMember('sortingState', true);
                $genericFacet->setMember('multipleValueState', true);
                $genericFacet->setMember('multipleValueSeparator', ', ');
                $search = $genericFacet->displayFacet(); ?>
            <?php if (!empty($search)) : ?>
                <div id="checkboxes-<?php echo strtolower($element)?>">
                  <fieldset class="form-group">
                    <legend class="sr-only">Filter by option: </legend>
                      <?php $i = 0; ?>
                      <?php foreach ($search as $item) : ?>
                        <div class="checkbox-styled">
                          <label for="<?php echo $element.'['.$i.']'; ?>" class="label-checkbox">
                              <input type="checkbox" id="<?php echo $element.'['.$i++.']'; ?>" value="<?php echo $item['value'] ?>" data-cookie="T4_persona" name="<?php echo $element ?>" data-t4-value="<?php echo strtolower($item['value']) ?>" <?php echo $item['selected'] ? 'checked' : '' ?> />
                              <?php echo $item['label'] ?>
                              <span class="checkmark"></span>
                          </label>
                        </div>
                      <?php endforeach; ?>
                        </fieldset>
                  </div>
            <?php endif; ?>
          </div>
          <div class="program-search__form__filters col-sm-12" id="college-school-filter" data-group="college-school">
            <span class="program-search__form__filters__heading">Filter by College or School</span>
              <?php
                $element = 'courseCollegeSchool';
                $genericFacet->setMember('element', $element);
                $genericFacet->setMember('type', 'List');
                $genericFacet->setMember('facetSource', 'documents');
                $genericFacet->setMember('sortingState', true);
                $genericFacet->setMember('multipleValueState', true);
                $genericFacet->setMember('multipleValueSeparator', ', ');
                $search = $genericFacet->displayFacet(); ?>
            <?php if (!empty($search)) : ?>
                <div id="checkboxes-<?php echo strtolower($element)?>">
                  <fieldset class="form-group">
                    <legend class="sr-only">Filter by college or school: </legend>
                      <?php $i = 0; ?>
                      <?php foreach ($search as $item) : ?>
                        <div class="checkbox-styled">
                          <label for="<?php echo $element.'['.$i.']'; ?>" class="label-checkbox">
                              <input type="checkbox" id="<?php echo $element.'['.$i++.']'; ?>" value="<?php echo $item['value'] ?>" data-cookie="T4_persona" name="<?php echo $element ?>" data-t4-value="<?php echo strtolower($item['value']) ?>" <?php echo $item['selected'] ? 'checked' : '' ?> />
                              <?php echo $item['label'] ?>
                              <span class="checkmark"></span>
                          </label>
                        </div>
                      <?php endforeach; ?>
                        </fieldset>
                  </div>
            <?php endif; ?>
          </div>
            <div class="program-search__form__filters col-sm-12" id="campus-filter" data-group="campus">
            <span class="program-search__form__filters__heading">Filter by Campus</span>
              <?php
                $element = 'courseCampuses';
                $genericFacet->setMember('element', $element);
                $genericFacet->setMember('type', 'List');
                $genericFacet->setMember('facetSource', 'documents');
                $genericFacet->setMember('sortingState', true);
                $genericFacet->setMember('multipleValueState', true);
                $genericFacet->setMember('multipleValueSeparator', ', ');
                $search = $genericFacet->displayFacet(); ?>
            <?php if (!empty($search)) : ?>
                <div id="checkboxes-<?php echo strtolower($element)?>">
                  <fieldset class="form-group">
                    <legend class="sr-only">Filter by campus: </legend>
                      <?php $i = 0; ?>
                      <?php foreach ($search as $item) : ?>
                        <div class="checkbox-styled">
                          <label for="<?php echo $element.'['.$i.']'; ?>" class="label-checkbox">
                              <input type="checkbox" id="<?php echo $element.'['.$i++.']'; ?>" value="<?php echo $item['value'] ?>" data-cookie="T4_persona" name="<?php echo $element ?>" data-t4-value="<?php echo strtolower($item['value']) ?>" <?php echo $item['selected'] ? 'checked' : '' ?> />
                              <?php echo $item['label'] ?>
                              <span class="checkmark"></span>
                          </label>
                        </div>
                      <?php endforeach; ?>
                        </fieldset>
                  </div>
            <?php endif; ?>
          </div>
            <div id="hidden-form-filters" data-t4-ajax-group="courseSearch">
          		<input type="hidden" name="keywords" value="<?php echo !empty($query['keywords']) ? $query['keywords']: ''  ?>" />
            </div>
        </form>
        </div>
      </div>
  <a id="starthere" href="#starthere" aria-label="Start Here"></a>
  
    <!-- FILTERS APPLIED CARD RENDER - START -->
     <div id="searchoptions-filters" role="search" data-t4-ajax-group="directorySearch">
            <div id="event-filters">         
                  <?php if ($filters !== null) : ?>
                    <?php
                        $i = 0;
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
                                $tagsHTML .= '<li class="filter-' . $i++ . ' small primary"  data-t4-value="' . strtolower($value) . '" data-t4-filter="' . $key . '">';
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
   <!-- FILTERS APPLIED CARD RENDER - END -->
  
    <div class="program-search__results row" id="search-results" role="main" data-t4-ajax-group="courseSearch">
      <?php if (!empty($results)) : ?>
        <?php foreach ($results as $item) : ?>
        <div class="program-search__results__item col-xl-3 col-lg-4 col-md-6 col-sm-12 popup-trigger" data-popup-trigger="id-<?php echo $item['contentID']; ?>" tabindex="0">
          <div class="program-search__results__info">
            <img srcset="<?php echo $item['courseImage']; ?> 0.33x,
                  <?php echo $item['courseImage']; ?> 0.5x,
                  <?php echo $item['courseImage']; ?> 1.5x,
                  <?php echo $item['courseImage']; ?> 2x"
           src="<?php echo $item['courseImage']; ?>"
           alt="Image for <?php echo $item['courseName']; ?>">
            <span class="program-search__results__item__title"><?php echo $item['courseName']; ?></span>
          </div>
        </div>
        <div class="popup-modal" data-popup-modal="id-<?php echo $item['contentID']; ?>" role="dialog" aria-labelledby="title-id-<?php echo $item['contentID']; ?>">
          <div class="modal-overflow">
          <p id="title-id-<?php echo $item['contentID']; ?>" class="popup-modal__title"><?php echo $item['courseName']; ?></p>
          <p><?php echo $item['courseOverview']; ?></p>
            <hr class="modal-popup-separator">
          <p class="popup-options"><strong>Option(s):</strong><span class="degree-options"><?php echo $item['courseOptions']; ?></span></p>
            <hr class="modal-popup-separator">
           <p><strong>College or School: </strong><?php echo $item['courseCollegeSchool']; ?></p>
            <?php if (!empty($item['courseKeywords'])) : ?>
            <span class="program-keywords"><?php echo $item['courseKeywords']; ?></span>
            <?php endif; ?>
          <?php if (!empty($item['atFordham'])) : ?>
          <div class="at-fordham">
          <p class="popup-employer"><span class="popup-outcomes"><strong>Choose Fordham because »</strong></span> <?php echo $item['atFordham']; ?></p>
          </div>
          <?php endif; ?>
          <a class="popup-modal__more btn btn-primary" href="<?php echo $item['courseURL']; ?>" aria-label="Find out more about <?php echo $item['courseName']; ?>">Read More</a>
          <button class="popup-modal__close" aria-label="Close site search">
            <svg class="svg-md-24px" focusable="false" aria-hidden="true">
              <use xlink:href="<t4 type="media" id="10757" formatter="path/*" />#ic_close_24px"></use>
            </svg>
          </button>
        </div>
      </div>
		<?php endforeach; ?>
        <div class="program-search__pagination-wrapper">
          <?php if (!empty($paginationArray)) : ?>
            <ul class="program-search__pagination ajax-load-link" data-t4-ajax-link="normal" data-t4-scroll="true">
                <?php foreach ($paginationArray as $page) : ?>
                <?php if ($page['text'] == "&lt;&lt;") : ?>
                <li><a class="page" href="<?php echo $page['href']; ?>"><?php echo $page['text']; ?></a></li>
                <?php elseif ($page['text'] == "&gt;&gt;") : ?>
                <li><a class="page" href="<?php echo $page['href']; ?>"><?php echo $page['text'] ; ?></a></li>
                <?php elseif ($page['text'] == "&lt;") : ?>
                <li><a class="page" href="<?php echo $page['href']; ?>"><?php echo $page['text']; ?></a></li>
                <?php elseif ($page['text'] == "&gt;") : ?>
                <li><a class="page" href="<?php echo $page['href']; ?>"><?php echo $page['text'] ; ?></a></li>
                <?php elseif ($page['current'] == true) : ?>
                <li><a class="page active" href="<?php echo $page['href']; ?>"><?php echo $page['text'] ; ?></a></li>
                <?php else : ?>
                <li><a class="page" href="<?php echo $page['href']; ?>"><?php echo $page['text'] ; ?></a></li>
                <?php endif; ?>
                <?php endforeach; ?>
            </ul>
            <?php endif; ?>
         </div>
      <?php else : ?>
    <p>No results found. You may have filters applied, <a href="?keywords=" id="clear-filters" style="text-decoration:underline;">click here</a> to clear them.</p>
    <?php endif;?>
    </div>
  </section>



