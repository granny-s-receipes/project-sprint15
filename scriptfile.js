function search(arr, key){
	var result = [];
	//console.log(arr)
	result = arr.filter(function(element){
		//console.log(element.ingredients)

		return !element.ingredients.hasOwnProperty(key)
	})
	return result;
}

var aa = [{name :'pasta', ingredients: {'tomato':50, 'cheese':50, 'salt':10} }]

var spaguetty = createMeal('spaguetty', {'pates' : 250, 'tomato': 200, 'oil': 20, 'salt' : 5, 'garlic': 1, 'meat': 200, 'cheese':15}, 12, 'https://www.starfrit.com/media/contentmanager/content/cache/1070x1070//recipes/e1_r1_spaghetti.jpg')
var couscousWithFish = createMeal('couscous with fish', {'couscous':200, 'tomato':100, 'onion': 3, 'garlic': 1, 'peper':4, 'potato':2, 'pumpkin': 100, 'Pagre': 4 , 'calamus': 1, 'salt': 2, 'cloves': 2}, 25, 'https://www.tounsia.net/uploads/2017/09/couscous-mannani.jpg')
var mosli = createMeal('mosli with rass', {'potato':2, 'tomato':100, 'onion': 3, 'garlic': 1, 'peper':4, 'potato':2, 'pumpkin': 100, 'meat':500, 'curcuma': 25}, 30, 'http://www.baya.tn/wp-content/uploads/2014/07/mosli-allouch-baya.jpg')
var rouzJerbi = createMeal('rouz jerbi', {'rice': 500, 'spinach': 25, 'peas': 30, 'dandelion': 40, 'chicken': 100,'hrous': 50,'curcuma': 10,'salt': 2}, 20, 'https://www.cuisinetunisienne.tn/wp-content/uploads/2019/02/Recette-Riz-Djerbien-1080x841.jpg')

var meals =[spaguetty,couscousWithFish,mosli,rouzJerbi] ;
function createMeal(name, ingredients, price, img){
	var meal = {} ;
	meal.name = name ;
	meal.ingredients = ingredients ;
	meal.price = price ;
	meal.img = img ;

	return meal ;
}

// nzidou lil option

$('#b1').on('click', function(){
	var strAdded = $('#added').val()
	var optstr = $('<option></option>')
	optstr.text(strAdded)
	optstr.appendTo('#slt')	

})
//affichage ki tekhtar key

var result ;
// console.log('your ' +  result)

$('#search').on('click', function(){
	$('#main').html('') ;
	console.log(this)
var x = $( "#slt option:selected" ).text();
    console.log(x) ;
   result = search(meals, x)
   console.log(result)
   
   for(var i =0; i < result.length;i++){
	var imgdiv = $('<div class ="imagediv"></div>')
	var img = $('<img>')
	img.attr('class = wasfa')
    img.attr('src', result[i].img)
    imgdiv.html(img)
   $('#main').append(imgdiv)
	}
return result;
 })

function affichageinitial(){

   for(var i =0; i < meals.length;i++){
    var imgdiv = $('<div class ="imagediv"></div>')
	var img = $('<img>')
	img.attr('class = wasfa')
    img.attr('src', meals[i].img)
    imgdiv.html(img)
   $('#main').append(imgdiv)
}
}
 affichageinitial() ;


 
 	// $('.wasfa').on('click', function(){
 		// for(var key in meals[i].ingredients){
 		// 	$('.wasfa').append('hsqvd')
 		// }
 	// 	console.log('aze')
 	// }) 
// $ ('img.wasfa').on('click', (function() {
//     console.log($(this))
// }))
//
// function affichage(){
// 	for(var i =0; i < result.length;i++){
// 		var img = $('<img>')
//    img.attr('src', result[i].img)
//    $('#main').append(img)
// 	}
// }

var xx = ''
$('div.imagediv').click(function() {
	console.log(this)
  xx = this.innerHTML ;
  console.log(xx)
  var arrayof= xx.split('')
  //console.log(arrayof)
  var newArr = arrayof.slice(arrayof.indexOf('h'),arrayof.length -2).join('') ;
  //console.log(arrayof)
  console.log(newArr)
var objResult ;
for(var i =0; i<meals.length; i++){
	if(meals[i].img === newArr){
		objResult = meals[i]
		console.log(objResult)
	}
}

$(this).append(objResult.name)

})

