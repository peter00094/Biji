$(document).ready(function() {

$('.add-btn:last').click(function(event) {
	$('.biBlock.add.hide').show();
	$('.add-btn:last').hide();
});

$('.add-btn:last').prev().click(function(event) {
	$('.biBlock.hide:last').show();
	$('.biBlock:last').prev().prepend('<div class="infoContent" id="aa"><select class="wid"  name="city" id="traffic_selector";><option value selected="true">開車</option> <option>公車</option>  <option>捷運</option>  </select>	<div class="infoContent wiid" ><input type="text" name="title" placeholder="詳細說明"></div></div>')
});

});

