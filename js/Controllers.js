angular.module("ObstacleManiac", [])
/*Chosen Start*/
.controller('ChosenSelectCtrl', function(STATES) {
  var main = this;  

  main.actionUpdate=function(){
    console.log(main.states);
  }
  
  main.allStates = STATES;
  main.states = [];
  
})
.directive('chosen', function() {
  var linker = function(scope, element, attr) {
        scope.$watch(attr.chosen, function(oldVal, newVal) {
            element.trigger('chosen:updated');
        });

        scope.$watch(attr.ngModel, function() {
            element.trigger('chosen:updated');
        });
        
        element.chosen();
    };

    return {
        restrict: 'A',
        link: linker
    };
})

.constant('STATES', 
[
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
])
/*Chosen End*/

/*Raty Start*/
.directive('ngRaty',[ function () {
  return{
	restrict: "A",
	scope: {
	  ngRaty: '=',
	  ngModel: '=',
	  mouseOver: '&',
	  mouseOut: '&'
	},
	link: function ($scope, $element, $attrs) {
	  var element = $($element);
	  function safeApply(fn) {
		var phase = $scope.$root.$$phase;
		if(phase == '$apply' || phase == '$digest') {
		  if(fn && (typeof(fn) === 'function')) {
			fn();
		  }
		} else {
		  $scope.$apply(fn);
		}
	  };

	  var rating  = $scope.ngModel;
	  var raty    = {
		score: parseFloat(rating, 10),
		click: function(stars, evt){
		  evt.stopPropagation();
		  if(!stars) stars = 0;
		  safeApply(function(){
			$scope.ngModel = parseFloat(stars);
		  });
		},
		mouseover: function(stars, evt) {
		  if(!$scope.mouseOver) return;
		  safeApply(function(){
			$scope.mouseOver({stars: stars, e: evt});
		  });
		},
		mouseout: function(stars, evt) {
		  if(!$scope.mouseOut) return;
		  safeApply(function(){
			$scope.mouseOut({stars: stars, e: evt});
		  });
		}
	  };
	  var options = angular.extend(raty, $scope.ngRaty || {});
	  element.raty(options);

	  // Set view to score if model changes
	  $scope.$watch('ngModel', function(newValue, oldValue){
		element.raty('score', $scope.ngModel);
	  });

	  function destroy(){
		element.raty('destroy');
	  }
	  element.bind('$destroy', destroy);
	}
  }
}])
.controller('RatyCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.demo        = this;
    $scope.rating      = {
      current: 3,
      over: 0,
      out: 0
    };
	
    $scope.ratyOptions = {
      half: true,
      cancel: false
    };

    this.mouseOver = function(stars, e){
      $scope.rating.over = stars || 0;
    };

    this.mouseOut = function(stars, e){
      $scope.rating.out = stars || 0;
    };

    this.setRating = function(value) {
      if(typeof value != 'number') return;

      value = (Math.round(Math.abs(parseFloat(value) || 0) * 2) / 2).toFixed(1)
      $scope.rating.current = value > 5 ? 5 : value;
    };
	$scope.showArticlePreview = function(){
        $scope.state = "ARTICLEPREVIEW";
		$scope.showHideMode = true;
    }
	$scope.editArticle = function(){
		$scope.state = "";
		$scope.showHideMode = false;
    }
	jQuery('#createModal').on('hide.bs.modal',function(){
		$scope.state = "";
		$scope.showHideMode = false;
		$scope.$apply();
	});
	
}])
/*Raty End*/

/*Summernote Controller*/
.controller('SummernoteController', ['$scope', '$attrs', '$timeout', function($scope, $attrs, $timeout) {
'use strict';

var currentElement,
	summernoteConfig = $scope.summernoteConfig || {
		toolbar: [
		  ['style', ['bold', 'italic', 'underline']],
		  ['fontsize', ['fontsize']],
		  ['color', ['color']],
		  ['para', ['ul', 'ol', 'paragraph']],
		  ['insert', ['link','picture','hr','video']]
		]
	};

if (angular.isDefined($attrs.height)) { summernoteConfig.height = $attrs.height; }
if (angular.isDefined($attrs.focus)) { summernoteConfig.focus = true; }
if (angular.isDefined($attrs.airmode)) { summernoteConfig.airMode = false; }
if (angular.isDefined($attrs.lang)) {
  if (!angular.isDefined($.summernote.lang[$attrs.lang])) {
	throw new Error('"' + $attrs.lang + '" lang file must be exist.');
  }
  summernoteConfig.lang = $attrs.lang;
}

summernoteConfig.onInit = $scope.init;
summernoteConfig.onEnter = function(evt) { $scope.enter({evt:evt}); };
summernoteConfig.onFocus = function(evt) { $scope.focus({evt:evt}); };
summernoteConfig.onPaste = function(evt) { $scope.paste({evt:evt}); };
summernoteConfig.onKeyup = function(evt) { $scope.keyup({evt:evt}); };
summernoteConfig.onKeydown = function(evt) { $scope.keydown({evt:evt}); };
if (angular.isDefined($attrs.onImageUpload)) {
  summernoteConfig.onImageUpload = function(files) {
	$scope.imageUpload({files:files, editable: $scope.editable});
  };
}

this.activate = function(scope, element, ngModel) {
  var updateNgModel = function() {
	var newValue = element.code();
	if (ngModel && ngModel.$viewValue !== newValue) {
	  $timeout(function() {
		ngModel.$setViewValue(newValue);
	  }, 0);
	}
  };

  summernoteConfig.onChange = function(contents) {
	updateNgModel();
	$scope.change({contents:contents, editable: $scope.editable});
  };
  summernoteConfig.onBlur = function(evt) {
	(!summernoteConfig.airMode) && element.blur();
	$scope.blur({evt:evt});
  };
  if (angular.isDefined($attrs.onToolbarClick)) {
	element.on('summernote.toolbar.click', function (evt) {
	  $scope.toolbarClick({evt: evt});
	});
  }

  element.summernote(summernoteConfig);

  var editor$ = element.next('.note-editor'),
	  unwatchNgModel;
  editor$.find('.note-toolbar').click(function() {
	updateNgModel();

	// sync ngModel in codeview mode
	if (editor$.hasClass('codeview')) {
	  editor$.on('keyup', updateNgModel);
	  if (ngModel) {
		unwatchNgModel = scope.$watch(function () {
		  return ngModel.$modelValue;
		}, function(newValue) {
		  editor$.find('.note-codable').val(newValue);
		});
	  }
	} else {
	  editor$.off('keyup', updateNgModel);
	  if (angular.isFunction(unwatchNgModel)) {
		unwatchNgModel();
	  }
	}
  });

  if (ngModel) {
	ngModel.$render = function() {
	  element.code(ngModel.$viewValue || '');
	};
  }

  // set editable to avoid error:isecdom since Angular v1.3
  if (angular.isDefined($attrs.editable)) {
	$scope.editable = editor$.find('.note-editable');
  }
  if (angular.isDefined($attrs.editor)) {
	$scope.editor = element;
  }

  currentElement = element;
  // use jquery Event binding instead $on('$destroy') to preserve options data of DOM
  element.on('$destroy', function() {
	element.destroy();
	$scope.summernoteDestroyed = true;
  });
};

$scope.$on('$destroy', function () {
  // when destroying scope directly
  if (!$scope.summernoteDestroyed) {
	currentElement.destroy();
  }
});
}])

.directive('summernote', [function() {
'use strict';

return {
  restrict: 'EA',
  transclude: true,
  replace: true,
  require: ['summernote', '^?ngModel'],
  controller: 'SummernoteController',
  scope: {
	summernoteConfig: '=config',
	editable: '=',
	editor: '=',
	init: '&onInit',
	enter: '&onEnter',
	focus: '&onFocus',
	blur: '&onBlur',
	paste: '&onPaste',
	keyup: '&onKeyup',
	keydown: '&onKeydown',
	change: '&onChange',
	toolbarClick: '&onToolbarClick',
	imageUpload: '&onImageUpload'
  },
  template: '<div class="summernote"></div>',
  link: function(scope, element, attrs, ctrls) {
	var summernoteController = ctrls[0],
		ngModel = ctrls[1];

	summernoteController.activate(scope, element, ngModel);
  }
};
}])

/*Toggle Class*/
.directive("ngToggleClass", function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            element.bind('click', function () {
				var classes = attr.ngToggleClass.split(',');
                angular.forEach(classes, function (value) {
					if(!element.closest('[data-addclass]').hasClass(value)){
						$('[data-addclass]').removeClass(value);
						element.closest('[data-addclass]').addClass(value);
					} else {
						element.closest('[data-addclass]').removeClass(value);
					}
                });
            });
        }
    };
});