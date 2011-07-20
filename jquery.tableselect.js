
//jQuery Plugin - Tableselect
//take the first table in any given jquery object, modify it to behave like a select 
//when you select a row, the value from the first column will be posted 

(function( $ ){
	$.fn.tableselect = function( options ) {  

		//get user options, use defaults if none given by user
		var defaults = {name : 'tableselect', hidefirstcolumn : false};
		var options = $.extend(defaults,options);
		var postname = options.name;
		
		////////////////define methods///////////////////////
		var tableselect_selectrow = function(jqtsdiv, jqrow){
	  		jqtsdiv.find('tr:has("td")').removeClass('selected');
	  		jqtsdiv.children().last().filter('input:hidden').remove();
			jqrow.addClass('selected');
			if(jqrow.length > 0){
				var selectedval = jqrow.find('td:first').html();
				jqtsdiv.append('<input type="hidden"/>');
				jqtsdiv.children().last().filter('input:hidden').val(selectedval).attr('name',postname);			
			}
		};
		var tableselect_unselectall = function(jqtsdiv){
	  		jqtsdiv.find('tr:has("td")').removeClass('selected');
	  		jqtsdiv.children().last().filter('input:hidden').remove();			
		};
		///////////////////////////////////////////////////////
		
		
		//select the first table only
		var jq_firsttable = this.find('*').andSelf().filter('table:first');
		if(!(jq_firsttable.length > 0)){
		//	throw 'No tables founddd.';
		}
		jq_firsttable.wrap('<div class="tableselect"></div>');
		jq_selecttable_div = jq_firsttable.parent();
		
		
		//select all rows and add an onClick event that selects the row that was clicked on
		jq_firsttable.find('tr:has("td")').click(function(){
			tableselect_selectrow(jq_firsttable, $(this));
		});
		
		//if user wants to preselect some rows, select first row with class selected
		var jq_firstselrow = jq_firsttable.find('tr:has("td")').filter('.selected:first');
		tableselect_selectrow(jq_firsttable, jq_firstselrow);

		
		//if user wants to hide the first column, do it
		if(options.hidefirstcolumn == true){
			jq_firsttable.find('tr').find('td:first').hide();
			jq_firsttable.find('tr').find('th:first').hide();
		}

		return this;
	};
})( jQuery );
