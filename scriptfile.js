var spaguetty = createMeal('spaguetty', {'pates' : '250 gr', 'tomato': '200gr ', 'oil': '20 ml', 'salt' : '5 g', 'garlic': '10 gr', 'meat': '200 gr ', 'cheese':'15 gr'}, 12, 'https://www.starfrit.com/media/contentmanager/content/cache/1070x1070//recipes/e1_r1_spaghetti.jpg')
var couscousWithFish = createMeal('couscous with fish', {'couscous':'200 gr', 'tomato':'100 gr', 'onion': '30 gr', 'garlic': '10 gr', 'peper':'40 gr', 'potato':'50 gr', 'pumpkin': '100 gr', 'Pagre': '10 gr' , 'cinnamon': '10gr', 'salt': '2 gr', 'cloves': '20gr'}, 25, 'https://www.tounsia.net/uploads/2017/09/couscous-mannani.jpg')
var mosli = createMeal('mosli with rass', {'potato':'200 gr', 'tomato':'100 gr', 'onion': '30 gr', 'garlic': '10 gr', 'peper':'40 gr', 'potato':'50 gr', 'pumpkin': '100 gr', 'meat':'500 gr', 'curcuma': '25 gr'}, 30, 'http://www.baya.tn/wp-content/uploads/2014/07/mosli-allouch-baya.jpg')
var rouzJerbi = createMeal('rouz jerbi', {'rice': '200 gr', 'spinach': '25 gr', 'peas': '30 gr', 'dandelion': '40 gr', 'chicken': '100 gr','hrous': '50 gr','curcuma': '10 gr','salt': '2gr'}, 20, 'https://www.cuisinetunisienne.tn/wp-content/uploads/2019/02/Recette-Riz-Djerbien-1080x841.jpg')
var pizza = createMeal('pizza', {'pates' : '250 gr', 'tomato': '200 gr', 'oil': '20 ml', 'salt' : '5 gr', 'garlic': '10 gr', 'tuna': '100 gr', 'cheese':'50 gr'}, 12, 'https://www.genovaseafood.com/uploads/recipes/pizza-with-tuna-capers-and-olives-sm.jpg')
var hamburger = createMeal('hamburger', {'pates' : '250 gr ', 'tomato': '200 gr', 'oil': '20 ml', 'salt' : '5 gr', 'garlic': '10 gr', 'meal': '200 gr', 'cheese':'40 gr'}, 12, 'https://static.cuisineaz.com/400x320/i99425-hamburger.jpg')
var mlawi = createMeal('mlawi', {'pates' : '250 gr', 'tomato': '200 gr', 'oil': '20 ml', 'garlic': '10 gr', 'tuna': '50 gr', 'cheese':'15 gr'}, 12, 'https://i.pinimg.com/originals/b6/7c/7f/b67c7fdfb6a2c8858c9c3cd1f4b3beef.jpg')
var nwasser = createMeal('nwaser', {'pates nwasser' : '250 gr', 'tomato': '200 gr', 'oil': '20 ml', 'salt' : '5 gr', 'garlic': '1 gr', 'chicken': '200 gr'}, 12, 'https://www.cuisinetunisienne.tn/wp-content/uploads/2019/03/Recette-Nwasser-au-poulet-1080x720.jpg')
var tunisianplate = createMeal('tunisian', {'eggs' : '2 eggs', 'tomato': '200 gr', 'oil': '20 ml', 'salt' : '5 gr','harissa':'15 gr', 'garlic': '10 gr', 'chicken': '200 gr' }, 10, 'https://i.pinimg.com/originals/f6/e5/6f/f6e56feb4dece9a0e8f672a240d306cf.jpg')
var duida = createMeal('duida', {'duida' : '200 gr', 'tomato': '200 gr', 'oil': '20 ml', 'salt' : '5 gr','harissa':'15 gr', 'garlic': '10 gr', 'cow meat': '200 gr' }, 10, 'https://lepetitjournal.com/sites/default/files/styles/main_article/public/2018-06/DWIDA.png?itok=s_d2Om8M')
var hargma = createMeal('hargma', {'animal legs' : ' 300 gr', 'tomato': '200 gr','onion':'20 gr', 'oil': '20 ml', 'salt' : '5 gr','harissa':'15 gr', 'garlic': '1 gr', 'cow meat': 200, }, 10, 'https://www.recettemarocaine365.com/wp-content/uploads/2017/02/hargma.jpg')
var brik = createMeal('brik with eggs', {'malssouka' : '20 gr', 'onion':'20 gr', 'potato': '20 gr', 'salt' : '5 gr','harissa':'15 gr', 'tuna': '200 gr', 'eggs':'1 egg' }, 10, 'https://i.ytimg.com/vi/qDs77bFs-Rk/maxresdefault.jpg')
var mtabga = createMeal('mtabga', {'bread' : '100 gr ', 'onion':'50 gr', 'salt' : '5 gr','harissa':'15 gr',  'eggs':'1 egg' }, 10, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI84MOKxdjewGwm-noX4xs2iuS7Hy-OGg7sNrUz8ZUOrvhckpf&s')
var kafteji = createMeal('kafteji', {'pumpkin' : '80 gr', 'onion':'20 gr', 'salt' : '5gr ','harissa':'15 gr',  'eggs':'1 egg' }, 10, 'https://www.carthageplus.net/wp-content/uploads/2018/05/30856051_1720283794704409_5357705005765754880_n-1-780x405.jpg')
var lablebi = createMeal('lablebi', {'bread' : '200 gr', 'onion':'20 gr', 'salt' : '5 gr','harissa':'15 gr',  'eggs':'1 egg' }, 10, 'https://i1.wp.com/www.1001recettes.tn/wp-content/uploads/2018/12/Lablabi-bel-hargma.jpg?fit=600%2C300&ssl=1&w=640')

var meals =[rouzJerbi,spaguetty,couscousWithFish,mosli,pizza,hamburger,mlawi,nwasser,duida,hargma,brik,mtabga,kafteji,lablebi,tunisianplate] ;


function createMeal(name, ingredients, price, img){				//this function is to create a meal, it takes some parameters that represent 
	var meal = {} ;												//the ingredients,price, name and image of the meal
	meal.name = name ;
	meal.ingredients = ingredients ;
	meal.price = price ;
	meal.img = img ;

	return meal ;
}


// function createMeal2(name){	
// 	var meal = {} ;											
// 	meal.name = name ;
// 	meal.ingredients = {} ;
// 	meal.addingredients = addingredients ;
// 	meal.price = addprice ;
// 	meal.img = addimg ;

// 	return meal ;
// }
// var addingredients = function(ingred, portion){
// 	this.ingredients[ingred] = portion ;
// }

// var addprice = function(price){
// 	return price
// }
//  var addimg = function(src){
//  	this.img = src ;
// }


//add new ingredient

$('#b1').on('click', function(){
	var strAdded = $('#added').val()
	var optstr = $('<option></option>')
	optstr.text(strAdded)
	optstr.appendTo('#slt')	

})


//display all meals
function affichage(arr){

	$('#main').html('')	   
   for(var i =0; i < arr.length;i++){					
  var imgdiv = $('<div class ="imagediv"></div>')
	var img = $('<img id=imageid>')
	var ingDiv = $('<div class=uldiv><div>')
	$('#showelement').append(arr[i].name)
	for(var j in arr[i].ingredients){
		var str = '<li>' + j + ': ' + arr[i].ingredients[j] + '</li>'
		ingDiv.append(str)
	}

    img.attr('src', arr[i].img)
    
    imgdiv.append(ingDiv)
    imgdiv.append(img)
   $('#main').append(imgdiv)
}
}

affichage(meals)

//add to the option list

// $('#b1').on('click', function(){
// 	var strAdded = $('#added').val()
// 	var optstr = $('<option></option>')
// 	optstr.text(strAdded)
// 	optstr.appendTo('#slt')	
// })

//variable containing the result of the search

var result = [];


function search(arr, key){																
	result = arr.filter(function(element){		
	return !element.ingredients.hasOwnProperty(key)
	})
	return result;
}

var resultOfSearch ;

$('#search').on('click', function(){																	
																												
var selectedStr = $( "#slt option:selected" ).text();		
	resultOfSearch = undefined;
   resultOfSearch = search(meals, selectedStr)	
   
   affichage(resultOfSearch)				
 
																																		
 })


function lookForObject(obj){
	photoHtml = obj.innerHTML ;	
  																																								//this variable takes the html text  
  var arrayof= photoHtml.split('')																								//now we extract the image source from that selection  
  var newArr = arrayof.slice(arrayof.indexOf('h'),arrayof.length -2).join('') ;		 
																																									//this object will represents the source obj of the image we clicked on
for(var i =0; i<meals.length; i++){																								//we loop the meals array and we look for the object that contains the image we clicked on
	if(meals[i].img === newArr){
		objResult = meals[i]																													//whenever we find that object we put it in the variable
	}
}
}




$('body').on('click','.imagediv', function() {
																								 
	console.log($(this.html))
	$('#showelement').show()
	$(this).find('.uldiv').show()
	$('#main').html('')
	$('#showelement').html('')
	$($(this).html()).appendTo('#showelement')
	
})


$('.uldiv').hide()
$('#showelement').hide()

$('body').on('click','#showelement',function(){
	affichage(meals)
	$('#showelement').hide()
})
