
$(':input[data-autocomplete]').each(function(){
    var $this = $(this);
    
    $this.typeahead(
    	{	
	        items: 10,
	        minLength: 1,
    	},
    	{
        source: function (query, process) {
        	//alert($this.attr('data-typeahead-url'));
            $.get($this.attr('data-url'), { query: query }, function (data) {
                labels = [];
                mapped = {};
                $.each(data, function(i,item) {
                    mapped[item.label] = item.value;
                    labels.push(item.label);
                });
                
                result = $.map(labels, function(v) { return { value: v } });
                return typeof data == 'undefined' ? false : process(result);
            });
        }
    });

    $this.on('typeahead:selected', function(evt, item) {
        $('#'+$this.attr('data-target')).val(item.value);
        return item;
    });
});	



$(':input[data-search]').each(function(){
    var $this = $(this);
    
    $this.typeahead(
    	{
          items: 10,
          minLength: 1  		
    	},
    	{
        source: function (query, process) {
        	//alert($this.attr('data-typeahead-url'));
            $.get($this.attr('data-url'), { query: query }, function (data) {
                result = $.map(data, function(v) { return { value: v } });
                return typeof data == 'undefined' ? false : process(result);
            });
        }
    });
});	
