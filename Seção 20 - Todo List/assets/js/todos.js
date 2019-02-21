$("ul").on("click", "li", function(){
	//$(this).css("text-decoration", "line-through");
	$(this).toggleClass("finished");
});

$("ul").on("click", "li span", function(event){
	event.stopPropagation();
	$(this).parent("li").fadeOut(function(){
		$(this).remove();
	})
})

$("input[type='text']").on("keypress", function(event){
	if(event.which === 13) {
		if($(this).val() !== ""){
			$("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + $(this).val() + "</li>");
			$(this).val("");
		}
	}
})

$("i[class='fas fa-plus']").on("click", function(){
	$("input[type='text']").fadeToggle();
})
