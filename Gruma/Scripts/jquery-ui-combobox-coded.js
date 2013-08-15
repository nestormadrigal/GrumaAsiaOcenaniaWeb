(function( $ ) {
	    $.widget( "ui.comboboxcoded", {
	        _create: function() {
	            var input,
					self = this,
					select = this.element.hide(),
					selected = select.children( ":selected" ),
					value = selected.val() ? selected.text() : "",
					wrapper = this.wrapper = $( "<span>" )
						.addClass( "ui-combobox" )
						.insertAfter(select);
	                    //if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) )
    	                //    wrapper.attr("usemobile", true);
	                //if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) )
	                //    select.attr("usemobileselect", true)

	            input = $( "<input>" )
					.appendTo( wrapper )
					.val( value )
	                // Add atribute to match style rule - CUSTOM
                    .attr("metroui", "on")
					.addClass( "ui-state-default ui-combobox-input" )
					.autocomplete({
					    delay: 0,
					    minLength: 0,
					    source: function( request, response ) {
					        var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
					        response( select.children( "option" ).map(function() {
					            var text = $(this).text();
					            var code = $(this).data("code");
					            if ( this.value && ( !request.term || matcher.test(text) || matcher.test(code) ) )
					                return {
					                    label: text.replace(
											new RegExp(
												"(?![^&;]+;)(?!<[^<>]*)(" +
												$.ui.autocomplete.escapeRegex(request.term) +
												")(?![^<>]*>)(?![^&;]+;)", "gi"
											), "<strong>$1</strong>" ),
					                    value: text,
					                    option: this
					                };
					        }) );
					    },
					    select: function( event, ui ) {
					        ui.item.option.selected = true;
					        self._trigger( "selected", event, {
					            item: ui.item.option
					        });
					        $(select).change(); // onchange doesn't fire on hidden selects
					        
					    },
					    change: function( event, ui ) {
					        if (!ui.item) {
					            var tbox = $(this);
					            var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( tbox.val() ) + "$", "i" ),
									valid = false;
					            select.children("option").each(function () {
					                var code = ($(this).data("code") || "") + "";
					                if ($(this).text().match(matcher)
                                        || (code.match(matcher))) {
					                    this.selected = valid = true;
					                    tbox.val($(this).text());
					                    return false;
					                }
					            });
					            if ( !valid ) {
					                // remove invalid value, as it didn't match anything
					                $( this ).val( "" );
					                select.val( "" );
					                input.data( "autocomplete" ).term = "";
					                return false;
					            }
					        }
					    }

					})
					.addClass( "ui-widget ui-widget-content ui-corner-left" );

	            input.data( "autocomplete" )._renderItem = function( ul, item ) {
	                return $( "<li></li>" )
						.data( "item.autocomplete", item )
						.append( "<a>" + item.label + "</a>" )
						.appendTo( ul );
	            };

	            $( "<a>" )
					.attr( "tabIndex", -1 )
					.attr( "title", "Show All Items" )
					.appendTo( wrapper )
					.button({
					    icons: {
					        //primary: "ui-icon-triangle-1-s"
					        primary: "caret"
					    },
					    text: false
					})
					.removeClass( "ui-corner-all" )
					.addClass( "ui-corner-right ui-combobox-toggle" )
					.click(function() {
					    // close if already visible
					    if ( input.autocomplete( "widget" ).is( ":visible" ) ) {
					        input.autocomplete( "close" );
					        return;
					    }

					    // work around a bug (likely same cause as #5265)
					    $( this ).blur();

					    // pass empty string as value to search for, displaying all results
					    input.autocomplete( "search", "" );
					    input.focus();					    
					});
	        },

	        destroy: function() {
	            this.wrapper.remove();
	            this.element.show();
	            $.Widget.prototype.destroy.call( this );
	        }
	    });
})(jQuery);
