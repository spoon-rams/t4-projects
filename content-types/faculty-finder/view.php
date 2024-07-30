<?php
    $genericFacet = \T4\PHPSearchLibrary\FacetFactory::getInstance('GenericFacet', $documentCollection, $queryHandler);
    $filters = $queryHandler->getQueryValuesForPrint();
    $categoryFilters = array('type','title','department');
    $dateFilters = array();
    $rangeFilters = array();
  ?>
<section class="columns-3 sm-margin-divider side-divider">
	<div class="row">
<div role="search" data-t4-ajax-group="directorySearch" id="searchGeneric" class="col-md-4">
        <form method="get">
            <div id="keywordKeywords">
                <div class="panel course-search-widget">

                    <fieldset>
                        <legend>Filter by Name or Keyword</legend>
                        <div id="searchField">
                            <label for="keywords">Enter a name or keyword:</label>
                            <input type="text" id="search" name="keywords" placeholder="e.g. Robert" value="<?php echo !empty($query['keywords']) ? $query['keywords']: ''  ?>">

                        </div>
                        <noscript>
                            <!-- <button type="submit" class="button small secondary expand">Search by Name or Keyword</button> -->
                        </noscript>
                        <div id="hiddenGeneric" data-t4-ajax-group="directorySearch">
                            <?php
                                // Output the current 'keyword' query as hidden input so it's preserved when updating results
                                $formatQueryAsHiddenInput = \T4\PHPSearchLibrary\QueryFormatterFactory::getInstance('FormatQueryAsHiddenInput', $queryHandler);
                                $formatQueryAsHiddenInput->setMember('excludedQueries', array('keywords', 'page'));
                                echo $formatQueryAsHiddenInput->format();
                            ?>
                        </div>
                    </fieldset>
                </div>
            </div>
        </form>
    </div>
    <div class="staff-search-filters columns-2 col-md-8" id="searchoptions"  role="search" data-t4-ajax-group="directorySearch">
        <form method="get">
            <div id="hidden-form"  data-t4-ajax-group="directorySearch">
                <?php $hiddenFields = array('keywords', 'paginate','showall', 'lastname'); ?>
                <?php foreach ($hiddenFields as $hiddenField) : ?>
                    <?php if (isset($query[$hiddenField])) : ?>
                        <input type="hidden" name="<?php echo $hiddenField ?>" value=" <?php echo is_array($query[$hiddenField]) ? implode(' ', $query[$hiddenField]) : $query[$hiddenField]; ?>" />
                    <?php endif; ?>
                <?php endforeach; ?>
            </div>
            <?php
            $element = 'type';
            $genericFacet->setMember('element', $element);
            $genericFacet->setMember('type', 'List');
            $genericFacet->setMember('facetSource', 'documents');
            $genericFacet->setMember('sortingState', true);
            $genericFacet->setMember('multipleValueState', true);
            $genericFacet->setMember('multipleValueSeparator', ', ');
            $genericFacet->setMember('customSortByName', [
                'Academic',
                'Researcher',
                'Other'
            ]);
            $search = $genericFacet->displayFacet();
            ?>
            <?php if (!empty($search)) : ?>
            <div class="row">
                <div id="checkboxes-<?php echo strtolower($element)?>" class="col-md-6">
                    <div class="panel staff-search-widget">
                        <fieldset>
                            <legend>Filter by Expertise</legend>
                            
                                <span class="clear" data-t4-clear="<?php echo $element; ?>">Clear filters &times;</span>
                            
                                <label for="<?php echo $element; ?>" class="label-text">
                                    Select an area of expertise:
                                </label>
                                <select id="<?php echo $element; ?>" name="<?php echo $element ?>" data-cookie="T4_persona">
                                    <option value="" >All</option>
                                    <?php foreach ($search as $item) : ?>
                                        <option data-category="<?php echo strtolower($item['value']) ?>" <?php echo $item['selected'] ? 'selected' : '' ?>><?php echo $item['value'] ?></option>
                                    <?php endforeach; ?>
                                </select>
                        </fieldset>
                    </div>
                </div>
            <?php endif; ?>
            <?php
                $element = 'title';
                $genericFacet->setMember('element', $element);
                $genericFacet->setMember('type', 'List');
                $genericFacet->setMember('facetSource', 'documents');
                $genericFacet->setMember('sortingState', true);
                $genericFacet->setMember('multipleValueState', true);
                $genericFacet->setMember('multipleValueSeparator', ', ');
				$genericFacet->setMember('customSortByName', [
                    'Full-Time',
                    'Center and Program Director',
                    'Emeriti',
                    'Visiting'
                ]);
                $search = $genericFacet->displayFacet();
				
            ?>
            <?php if (!empty($search)) : ?>
                <div id="checkboxes-<?php echo strtolower($element)?>" class="col-md-6">
                      <div class="panel staff-search-widget">
                        <fieldset>
                            <legend>Filter by Type</legend>
                            
                                <span class="clear" data-t4-clear="<?php echo $element; ?>">Clear filters &times;</span>
                            
                                <label for="<?php echo $element; ?>" class="label-text">
                                    Select a type:
                                </label>
                                <select id="<?php echo $element; ?>" name="<?php echo $element ?>" data-cookie="T4_persona">
                                    <option value="">All</option>
                                    <?php foreach ($search as $item) : ?>
                                        <option data-category="<?php echo strtolower($item['value']) ?>" <?php echo $item['selected'] ? 'selected' : '' ?>><?php echo $item['value'] ?></option>
                                    <?php endforeach; ?>
                                </select>
                        </fieldset>
                    </div>
                    </div>
                </div>
            <?php endif; ?>
            <?php
                $element = 'department';
                $genericFacet->setMember('element', $element);
                $genericFacet->setMember('type', 'List');
                $genericFacet->setMember('facetSource', 'documents');
                $genericFacet->setMember('sortingState', true);
                $genericFacet->setMember('multipleValueState', true);
                $genericFacet->setMember('multipleValueSeparator', ', ');
                $search = $genericFacet->displayFacet();
            ?>
            <noscript>
                <div class="submit-btn">
                    <div class="panel">
                        <button type="submit" class="button small secondary expand">Filter</button>
                    </div>
                </div>
            </noscript>
        </form>
    </div>
		</div>
</section>

<section class="sm-margin-divider side-divider">
<?php
    $genericFacet = \T4\PHPSearchLibrary\FacetFactory::getInstance('GenericFacet', $documentCollection, $queryHandler);
    $filters = $queryHandler->getQueryValuesForPrint();
    $categoryFilters = array('type','title','department');
    $dateFilters = array();
    $rangeFilters = array();
    ?>
   <div id="searchoptions-filters" role="search" data-t4-ajax-group="directorySearch">
            <div id="event-filters">
                <?php if ($filters !== null) : ?>
                    <ul class="no-bullet">
                        <?php
                        $i = 0;
                        foreach ($categoryFilters as $key) {
                            if (isset($filters[$key]) && is_array($filters[$key])) :
                                foreach ($filters[$key] as $value) :?>
                                    <li class="filter-<?php echo $i++ ?>  small primary"  data-t4-value="<?php echo strtolower($value) ?>" data-t4-filter="<?php echo $key ?>"><?php echo $value ?><span  class="remove"><i class="fa fa-times"></i></span></li>
                                    <?php
                                endforeach;
                            elseif (isset($filters[$key])) :
                                $value = $filters[$key]; ?>
                                <li class="filter-<?php echo $i++ ?>  small primary"  data-t4-value="<?php echo strtolower($value) ?>"  data-t4-filter="<?php echo $key ?>"><?php echo $value ?><span  class="remove"><i class="fa fa-times"></i></span></li>
                                <?php
                            endif;
                        }
                        foreach ($dateFilters as $key) {
                            if (isset($filters[$key])) :
                                $value = $filters[$key]; ?>
                                <li class="filter-<?php echo $i++ ?>  small primary" data-t4-filter="<?php echo $key ?>"><?php echo date('m/d/Y', strtotime($value)); ?><span class="remove"><i class="fa fa-times"></i></span></li>
                                <?php
                            endif;
                        }
                        foreach ($rangeFilters as $key => $max) {
                            if (isset($filters[$key]) && $filters[$key]!== $max) :
                                $value = $filters[$key]; ?>
                                <li class="filter-<?php echo $i++ ?>  small primary" data-t4-filter="<?php echo $key ?>"><?php echo '$'.$value; ?><span class="remove"><i class="fa fa-times"></i></span></li>
                                <?php
                            endif;
                        }
                        if (isset($filters['keywords'])) :
                            ?>
                                <li class="filter-<?php echo $i++ ?> small primary"  data-t4-filter="keywords">  <?php echo $filters['keywords'] ?><span class="remove"><i class="fa fa-times"></i></span></li>
                            <?php
                        endif; ?>
                    </ul>
                    <?php if ($i > 0) : ?>
                        <a href="index.php" class="button primary small clear-filters" data-t4-ajax-link="true">Clear Filters <i class="fa fa-chevron-right"></i></a>
                    <?php endif; ?>
                <?php endif; ?>
            </div>
    </div>
</section>
<section class="general-content sm-margin-divider side-divider">
    <div id="searchResults" class="staff-directory" role="main" data-t4-ajax-group="directorySearch" >
        <div class="small-12 atoz" id="staffAtoZ">
            <h3 class="hidden">Filter by A to Z</h3>
                <div class="button-list">
                    <?php
                    $element = 'lastname';
                    $genericFacet->setMember('element', $element);
                    $genericFacet->setMember('type', 'AtoZ');
                    $genericFacet->setMember('facetSource', 'documents');
                    $search = $genericFacet->displayFacet(); ?>
                    <?php if (!empty($search)) : ?>
                    <form action="<?php echo str_replace('/index.php', '/', $_SERVER['SCRIPT_NAME']) ?>" method="get">
                        <?php $class = !isset($query['lastname']) && isset($query['showall']) ? 'selected' : ''; ?>
                        <button value="1" name="showall" <?php echo !empty($class) ? 'class="' .$class.'"' : '' ?>>All</button>
                        <?php foreach ($search as $item) : ?>
                            <?php $class = $item['selected'] ? 'selected' : ''; ?>
                            <button name="<?php echo $element ?>" value="<?php echo $item['value'] ?>" <?php echo !empty($class) ? 'class="' .$class.'"' : '' ?> ><?php echo $item['label'] ?></button>
                        <?php endforeach; ?>
                        <div id="hidden-form-atoz" data-t4-ajax-group="directorySearch">
                            <?php
                                // Output the current 'keyword' query as hidden input so it's preserved when updating results
                                $formatQueryAsHiddenInput = \T4\PHPSearchLibrary\QueryFormatterFactory::getInstance('FormatQueryAsHiddenInput', $queryHandler);
                                $formatQueryAsHiddenInput->setMember('excludedQueries', array( 'page', 'lastname'));
                                echo $formatQueryAsHiddenInput->format();
                            ?>
                        </div>
                    </form>
                    <?php endif; ?>
                    
                </div>
        </div>
        
            <?php $group = ''; ?>
            <?php if (!empty($results)) : ?>
                
                <div class="content-row row staff-directory">
                    <?php foreach ($results as $item) : ?>
                        <?php
                        if ($queryHandler->isQuerySet('department') && !$queryHandler->isQuerySet('keywords')) {
                            $currentGroup = $item['type'];
                            if ($currentGroup !== $group) {
                                ?>  
                                    </div>
                                    <div class="content-row row staff-directory">
                                    <h3><?php echo $currentGroup ?></h3>
                                <?php  $group = $currentGroup;
                            }
                        } ?>
                     <div class="staff-card row">
                      <?php if (!empty($item['profileimage'])) : ?>
                      <div class="col-md-2">
                        <div class="card-image"><a href="<?php echo $item['url']; ?>"><img srcset="<?php echo $item['profileimage']; ?>" alt="<?php echo $item['firstname']; ?> <?php echo $item['lastname']; ?>"></a></div>
                      </div>
                      <?php endif; ?> 
                      <div class="col-md-6">
                        <a href="<?php echo $item['url']; ?>">
                            <span class="body-lead-font"><?php echo $item['firstname']; ?> <?php echo $item['lastname']; ?></span>
                        </a>
                        <div class="card-role">
                          	<p class="body-regular-font"><?php echo $item['facultytitle']; ?></p>
                            <?php $filters = explode(', ', $item['title']); ?>
                            <?php foreach ($filters as $filter) : ?>
                                <!--<a class="card-type" href="#" class="add-filter" data-category="<?php echo strtolower($filter) ?>"><?php echo $filter ?></a>-->
                            <?php endforeach; ?>
                        </div>
                        <a class="btn-secondary" href="<?php echo $item['url']; ?>">
                            <span>Visit Profile</span>
                        </a>
                      </div>
                      <div class="col-md-4">
                        <?php if (!empty($item['type'])) : ?>
                        <div class="card-department" data-t4-ajax-link="normal">Areas of Expertise:
                            <?php $filters = explode(', ', $item['type']); ?>
                            <?php foreach ($filters as $filter) : ?>
                                <a href="?type=<?php echo strtolower($filter) ?>" class="add-filter" data-category="<?php echo strtolower($filter) ?>"><?php echo $filter ?></a>
                            <?php endforeach; ?>
                        </div>
                        <!-- Addition - Keywords - START -->
                        <div class="card-department">Keywords:
                            <?php $filters = explode(', ', $item['facultyKeywords']); ?>
                            <?php foreach ($filters as $filter) : ?>
                                <a href="?keywords=<?php echo strtolower($filter) ?>" class="add-filter" data-category="<?php echo strtolower($filter) ?>"><?php echo $filter ?></a>
                            <?php endforeach; ?>
                        </div>
                        <!-- Addition - Keywords - END -->
                        <?php endif; ?>
                      </div> 
                    </div>
                    <?php endforeach; ?>
                </div>
                <div class=" pagination-box">
                    <div class="pagination-pages">
                    <?php if (!empty($paginationArray)) : ?>
                        <nav class="pagination" data-t4-ajax-link="normal" data-t4-scroll="true" >
                        <?php foreach ($paginationArray as $page) : ?>
                            <?php if ($page['text'] == "&lt;&lt;") : ?>
                                <a href="<?php echo $page['href']; ?>"><?php echo $page['text']; ?></a>
                            <?php elseif ($page['text'] == "&gt;&gt;") : ?>
                                <a href="<?php echo $page['href']; ?>"><?php echo $page['text'] ; ?></a>
                            <?php elseif ($page['text'] == "&lt;") : ?>
                                <a href="<?php echo $page['href']; ?>"><?php echo $page['text']; ?></a>
                            <?php elseif ($page['text'] == "&gt;") : ?>
                                <a href="<?php echo $page['href']; ?>"><?php echo $page['text'] ; ?></a>
                            <?php elseif ($page['current'] == true) : ?>
                                <span class="currentpage"><?php echo $page['text'] ; ?></span>
                            <?php else : ?>
                                <a href="<?php echo $page['href']; ?>"><?php echo $page['text'] ; ?></a>
                            <?php endif; ?>
                        <?php endforeach; ?>
                        </nav>
                    <?php endif; ?>
                    </div>
                    <div id="searchPaginate"  role="search" data-t4-ajax-group="directorySearch" >
                        <form action="<?php echo str_replace('/index.php', '/', $_SERVER['SCRIPT_NAME']) ?>" method="get" class="pagination-results">
                            <?php if ($paginate > 0) : ?>
                                <span class="results">Results <?php echo $resultTo != 0 ? $resultFrom . ' - ' . $resultTo : $resultTo ?> of <?php echo $totalResults ?></span>
                                <?php if ((class_exists('T4\PHPSearchLibrary\QueryHandlerFactory\CompareQueryHandler') || class_exists('CompareQueryHandler'))) : ?>
                                    <?php if (isset($paginateDropdown) && !empty($paginateDropdown)) : ?>
                                        <select name="paginate">
                                            <?php foreach ($paginateDropdown as $page) : ?>
                                            <option value="<?php echo $page; ?>" <?php echo $page==$paginate ? 'selected' : '' ; ?>>
                                                <?php echo $page === 0 ?  'All' :  $page; ?>
                                            </option>
                                            <?php endforeach; ?>
                                        </select>
                                    <?php endif; ?>
                                <?php endif; ?>
                            <?php else : ?>
                                <span class="results"><?php echo $totalResults ?> Results</span>
                            <?php endif; ?>
                            <noscript>
                                <button type="submit" class="button small secondary expand">Change Page</button>
                            </noscript>
                            <div id="hiddenPaginate" data-t4-ajax-group="directorySearch">
                                <?php
                                    // Output the current 'keyword' query as hidden input so it's preserved when updating results
                                    $formatQueryAsHiddenInput = \T4\PHPSearchLibrary\QueryFormatterFactory::getInstance('FormatQueryAsHiddenInput', $queryHandler);
                                    $formatQueryAsHiddenInput->setMember('excludedQueries', array('paginate', 'page'));
                                    echo $formatQueryAsHiddenInput->format();
                                ?>
                            </div>
                        </form>
                    </div>
                </div>
            <?php else : ?>
                <p class="message">There was not a faculty member found by that name.</p>
            <?php endif; ?>
       
    </div>

</section>





















