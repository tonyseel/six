// JavaScript Document


jQuery(document).ready(function(){
	jQuery('.resmenu').hide();
	jQuery('.respon-cross').hide();
	
	jQuery(".respon-menu").click(function(){
	jQuery('.resmenu').slideToggle();
	jQuery('.respon-cross').show();
	jQuery(".respon-menu").hide();
});		

	
	jQuery(".respon-cross").click(function(){
		jQuery('.resmenu').slideToggle();
		jQuery('.respon-cross').hide();
		jQuery(".respon-menu").show();
	});
});