// Placeholder Function
function placeHolder(){
	var browserName=navigator.appName;
	if (browserName=="Microsoft Internet Explorer") {
		$('[placeholder]').focus(function() {
		  var input = $(this);
		  if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		  }
		}).blur(function() {
		  var input = $(this);
		  if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		  }
		}).blur().parents('form').submit(function() {
		  $(this).find('[placeholder]').each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
			  input.val('');
			}
		  });
		});
	} else {
		// Focus	
		$('[type="text"], [type="password"],[type="email"], textarea, select.form-select').focus(function() {
		  var input = $(this);
			input.parents('[data-type="focus"]').addClass('focus');
		}).blur(function() {
		  var input = $(this);
			input.parents('[data-type="focus"]').removeClass('focus');
		});
		}
}

// Option Drop down
function userActiondropdown(){
	$('.user-action').on('click',function(event){
		$('.inActive').hide();
		event.stopImmediatePropagation();
 		$(this).addClass('selected');
		var dropdwonWidth = $('.userActiondropdown').width();
		if(!$('.userActiondropdown').is(':visible')){
			$('.userActiondropdown').css({left:$(this).offset().left-dropdwonWidth+26, top:$(this).offset().top+25 }).show();
		} else {
			$('.user-action').removeClass('selected');
			$('.userActiondropdown').hide();
			
		}
	});
	

	
	
	
	
 $('body').mouseup(function(){
	   $('.user-action, .inactive').removeClass('selected');
		$('.userActiondropdown').hide();
		$('.inActive').hide();
	 });
}

function inActivemenu(){
	$('.inactive').on('click',function(event){
		$('.userActiondropdown').hide();
		event.stopImmediatePropagation();
 		$(this).addClass('selected');
		var dropdwonWidth = $('.inActive').width();
		if(!$('.inActive').is(':visible')){
			$('.inActive').css({left:$(this).offset().left-dropdwonWidth+26, top:$(this).offset().top+25 }).show();
		} else {
			$('.user-action').removeClass('selected');
			$('.inActive').hide();
			
		}
	});
}


//User Setting dropdown

function userSettingdropdown(){
	$('.user-setting').on('click',function(){
   		$('.monthView').slideUp('fast');
		$('.right-control li').removeClass('selected');
		if($(this).next('.userSettingdropdown').is(':visible')){
 			$(this).next('.userSettingdropdown').slideUp('fast');	
			$(this).parent().removeClass('selected');
		}
		else{
			$(this).parent().addClass('selected');
			$(this).next('.action-dropdown').slideDown('fast');	
			}
		});
		
		$('.userSettingdropdown li a').on('click',function(){
			$('.monthView').slideUp('fast');
			$('.userSettingdropdown').slideUp('fast');
			$('.right-control li').removeClass('selected');
		});
		
	}
//User Setting dropdown

function userMonthview(){
	$('.month-view').on('click',function(){
		$('.userSettingdropdown').slideUp('fast');	
		$('.right-control li').removeClass('selected');
		if($(this).next('.monthView').is(':visible')){
 			$(this).next('.monthView').slideUp('fast');
			$(this).parent().removeClass('selected');
		}
		else{
			$(this).parent().addClass('selected');
			$(this).next('.monthView').slideDown('fast');	
			}
 		if($('.customView').is(':visible')){
			$('.customView').slideUp()
			$('.viewList, ul.custom-select').slideDown();
			}
		 });
 	 $('.customSelect').on('click',function(){
		$('.viewList, ul.custom-select').slideUp();
		$('.customView').slideDown();
 	  });		
	  
	  $('.viewList a').on('click',function(e){
			$('.right-control li').removeClass('selected');
			$('.monthView').slideUp('fast'); 
			$('#selectedTime').html($(this).text()); 
	  });
	
	/*$('.monthView li a').on('click',function(){
			$('.monthView').slideUp('fast');
			$('.userSettingdropdown').slideUp('fast');
			$('.right-control li').removeClass('selected');
		});*/
		
		$('#submitBtn').on('click',function(){
			 $('.monthView ').hide(); 
			 $('.right-control > li ').removeClass('selected');
			});
 	}
	 
  
$(document).mouseup(function (e) {
     $('.userSettingdropdown').slideUp('fast');
	 $('.right-control > li ').removeClass('selected');
	 $('#ui-datepicker-div').hide();
	 $('.monthView ').hide(); 
   });
   
 $('.monthView, .month-view, #ui-datepicker-div').mouseup(function (e) {
		  return false;
   });
  




 
//Select Multiple Row
	
function selectRow(event){
	var OneClick = 0;
	$('.selectMultiplerow tr').on('click',function(){
 		
		$(this).toggleClass('selected');
		$('.selectMultiplerow tr:first-child').removeClass('selected');
		if ($('.selectMultiplerow tr').hasClass('selected')){
			$('#ItemCounter').fadeIn();
		} else {
			$('#ItemCounter').fadeOut();
		}
		var ItemCount = $('.selectMultiplerow tr.selected').size();
		$('#ItemCounter .counter').html(ItemCount);
 		
	});
	
	$('#deleteSelectedrow').on('click',function(){
		$('.selectMultiplerow tr.selected').remove();
		var ItemCount = $('.selectMultiplerow tr.selected').size();
		$('#ItemCounter .counter').html(ItemCount);
	 });
 }	
	
function AlternateRow(){
	$('.OddRow-BG tr:odd').addClass('odd-row');
	$('.EvenRow-BG tr:even').addClass('even-row');
}

//Function For Accrodion
function AccordionTable(){
	$('.accordion-wrap .icon-plus').on('click', function(){
		$(this).hide();
		$(this).next().show();
		var dataRole = $(this).attr('data-role');
		$(this).closest('li').find('.expandable-wrap').slideDown().promise().done(function(){
			//RowCounter(dataRole);
		});
	});
	$('.accordion-wrap .icon-minus').on('click', function(){
		$(this).hide();
		$(this).prev().show();
		var dataRole = $(this).attr('data-role');
		$(this).closest('li').find('.expandable-wrap').slideUp().promise().done(function(){
			//RowCounter(dataRole);
		});
	});
}


function RowCounter(id){
 	var RowCount = 	$('#'+id+' tr').filter(function() {return $(this).is(':visible')});
	if(RowCount.length > 10){
		$('#'+id).animate({height: '366px'});
  	} else {
		$('#'+id).css({height: '38px'});
	}
}

 /*Custom Scroll Bar*/
//for dynamic scroll 

 
	var listScrollApi;
	function addListScroll(ScrollSectionID) {
		var pane = $('#' + ScrollSectionID);
		pane.jScrollPane(
			{
				showArrows: false,
				maintainPosition: true
			});
		listScrollApi = pane.data('jsp');
	}

//Category Name Active
function activeCategory(){
	 $('.globalCheckbox').on('change',function(){
		$(this).parent().parent().toggleClass('focus');
		$(this).parent().toggleClass('icon-checked');
	 });
	 
	 if($(this).attr('checked',true)){
		 $(this).parent().parent().addClass('focus');
		 $(this).parent().addClass('icon-checked');
		}
  }
 
//Select Category
function selectCategory(event){
	 $('.category-desc').on('click',function(){
		 if($(this).hasClass('selected')){
			 $('#buttonGroup').hide();
			 $(this).removeClass('selected');
			 $(this).parent().removeClass('selected');
 			 if($(this).parents('.view-listing').children('li').hasClass('selected')){
				 $('#buttonGroup').show();
				 }
 			 }
		 else{
			 $(this).addClass('selected');
			 $(this).parent().addClass('selected');
			 $('#buttonGroup').show();
			 }
		 });
	 }
	 
//Add Category
function addCategory(){
	$('#selectAll').on('change',function(){
	//	alert('a');
		if($(this).parent().hasClass('icon-checked')){
			$('ul.view-listing li').addClass('selected');
			$('.category-desc').addClass('selected');
			$('#buttonGroup').show();
			if($('.view-listing li').hasClass('active')){
				$('ul.view-listing li.active').removeClass('selected');
				}
			}
		else{
			$('ul.view-listing li').removeClass('selected');
			$('.category-desc').removeClass('selected');
			$('#buttonGroup').hide();
			}
		});
}
  
function filerToggle(){
$('#showHidefilter').on('click',function(){
	if($('.filter-view').is(':visible')){
		 $('.filter-view').slideUp();
		 $(this).text('Show Advanced Filter');		
		}
	else{
		$('.filter-view').slideDown();
		 $(this).text('Hide Advanced Filter');		
		}	
	});	
	
} 
  //Function For Messages Tab
function  messagesTab(){
 	$('[data-type="tab"] li a').click(function(){
 	 if($(this).hasClass('selected')){return false;}
		$('[data-type="tab"] li a').removeClass('selected');
		$(this).addClass('selected');
		$('#plainText, #messagesHtml').hide();
		$('#'+$(this).attr('data-rel')).fadeIn('slow');
   });
}
 
 
//Function Accordion

function tablesAccordion(){
	$('.accordion-tab').on('click',function(){
		$('.accordion-content').removeClass('selected');
			if($(this).next('.accordion-content').is(':visible')){
				$(this).next('.accordion-content').slideUp();
				$(this).removeClass('selected');
				}
			else{
				$(this).next('.accordion-content').slideDown();
				$(this).addClass('selected');
				}	
		});
	
}
 
//communicateMorelist Tooltip	
function communicateMorelist(){
	var addTimer;
	$('[data-tip=tooltip]').on("mouseenter",function(){
  		 if(addTimer)
			clearTimeout(addTimer);
  			var tipwd = $('.communicate-morelist').width();
 			$('.communicate-morelist').css({left:$(this).offset().left-tipwd + 50,top:$(this).offset().top+35}).show();
  			});	
  			$('[data-tip=tooltip]').on("mouseleave",function(){
 					addTimer=setTimeout(function(){$('.communicate-morelist').hide()},100);
				});
			$('.communicate-morelist').on("mouseenter",function(){
				if(addTimer)
				clearTimeout(addTimer);
			});
			$('.communicate-morelist').on("mouseleave",function(){
 		 		 $(this).fadeOut('slow');
		});
}



 
function hideShowgraph(){
$('#hideShowgraph').on('click',function(){
	if($('.media-graph').is(':visible')){
		 $('.media-graph').slideUp();
 		 $(this).removeClass('selected');		
		}
	else{
		$('.media-graph').slideDown();
		$(this).addClass('selected');
 		}	
	});	
	
} 


function commonSearch(){
	$('#searchButton').on('click',function(){
		$('.search-block').fadeIn();
  	  });
	  
	  $('#clearText').on('click',function(){
		  	$('.search-block').hide();
			$('#searchField').val('');
		  });
	  
	}

// Browse Button
function browseButton(){ 
	$('.browse input[type=file]').change(function(){
		var $thisTxt = $(this).parents('.browse').find('.textfield');
		$thisTxt.val($(this).val().substr(12));
		var flnmarr = $(this).val().split('\\'); 
		var arrLen = flnmarr.length;
		$thisTxt.val(flnmarr[arrLen-1]);
	});
}

//show hide table
function showhideTable(){
$('.register-sent').on('click',function(){
	if($('.regiser-show').is(':visible')){
		 $('.regiser-show').slideUp();
		}
	else{
		$('.regiser-show').slideDown();
		}	
	});	
	
} 

	
//All Functions
$(function(){
	inActivemenu();
	commonSearch();
	hideShowgraph();
  	tablesAccordion();
	$('.icon-email, .name, .thumbnail40, table tr th, .desc-footer, .category-desc a, .actincomunicate, .view-listing li.active .category-desc').on('click',function(event){event.stopImmediatePropagation();});
 	$('[rel=tipsynw]').tipsy({fade: true, gravity: 'nw'});
	$('[rel=tipsyse]').tipsy({fade: true, gravity: 'se'});
 	placeHolder();				//Placeholder Function
	userActiondropdown();       // Option Drop down
	userSettingdropdown();		//User Setting dropdown
	userMonthview();			//User Setting dropdown
	selectRow();				//Select Multiple Row
	AlternateRow();             //Change lternate row BG
	AccordionTable();			//Function For Accrodion
 	activeCategory();			//Category Name Active
 	selectCategory();			//Select Category
	addCategory();				//Add Category
	//ScrollBar();				//Custom Scroll Bar
	filerToggle();
 	messagesTab();				//Function For Messages Tab
	communicateMorelist();
	browseButton();
	showhideTable();
	 
	$('.sub-nav a').on('click',function(){
		$('.sub-nav a').removeClass('selected');
		$(this).addClass('selected');
 	}); 
 		 
	$('.ui-datepicker').mousedown(function(){
		return false;
	});
	
	/*Tooltip*/
	$.widget("ui.tooltip", $.ui.tooltip, {
		options: {
			content: function () {
				return $(this).prop('title');
			}
		}
	});
	$('[data-html="tooltip"]').attr('title', function(){
        return $(this).next('.tooltipHtml').remove().html();
    });
	$('[data-tooltip="title"]').tooltip({
      position: {
        my: "right top",
        at: "right bottom+20",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
	 
});

 
