var spaguetty = createMeal('spaguetty', {'pates' : 250, 'tomato': 200, 'oil': 20, 'salt' : 5, 'garlic': 1, 'meat': 200, 'cheese':15}, 12, 'https://www.starfrit.com/media/contentmanager/content/cache/1070x1070//recipes/e1_r1_spaghetti.jpg')
var couscousWithFish = createMeal('couscous with fish', {'couscous':200, 'tomato':100, 'onion': 3, 'garlic': 1, 'peper':4, 'potato':2, 'pumpkin': 100, 'Pagre': 4 , 'calamus': 1, 'salt': 2, 'cloves': 2}, 25, 'https://www.tounsia.net/uploads/2017/09/couscous-mannani.jpg')
var mosli = createMeal('mosli with rass', {'potato':2, 'tomato':100, 'onion': 3, 'garlic': 1, 'peper':4, 'potato':2, 'pumpkin': 100, 'meat':500, 'curcuma': 25}, 30, 'http://www.baya.tn/wp-content/uploads/2014/07/mosli-allouch-baya.jpg')
var rouzJerbi = createMeal('rouz jerbi', {'rice': 500, 'spinach': 25, 'peas': 30, 'dandelion': 40, 'chicken': 100,'hrous': 50,'curcuma': 10,'salt': 2}, 20, 'https://www.cuisinetunisienne.tn/wp-content/uploads/2019/02/Recette-Riz-Djerbien-1080x841.jpg')
var pizza = createMeal('pizza', {'pates' : 250, 'tomato': 200, 'oil': 20, 'salt' : 5, 'garlic': 1, 'tuna': 200, 'cheese':15}, 12, 'https://www.genovaseafood.com/uploads/recipes/pizza-with-tuna-capers-and-olives-sm.jpg')
var hamburger = createMeal('hamburger', {'pates' : 250, 'tomato': 200, 'oil': 20, 'salt' : 5, 'garlic': 1, 'tuna': 200, 'cheese':15}, 12, 'https://static.cuisineaz.com/400x320/i99425-hamburger.jpg')
var mlawi = createMeal('mlawi', {'pates' : 250, 'tomato': 200, 'oil': 20, 'salt' : 5, 'garlic': 1, 'tuna': 200, 'cheese':15}, 12, 'https://i.pinimg.com/originals/b6/7c/7f/b67c7fdfb6a2c8858c9c3cd1f4b3beef.jpg')
var nwasser = createMeal('nwaser', {'pates nwasser' : 250, 'tomato': 200, 'oil': 20, 'salt' : 5, 'garlic': 1, 'chicken': 200, 'cheese':15}, 12, 'https://www.cuisinetunisienne.tn/wp-content/uploads/2019/03/Recette-Nwasser-au-poulet-1080x720.jpg')
var tunisianplate = createMeal('tunisian', {'eggs' : 2, 'tomato': 200, 'oil': 20, 'salt' : 5,'harissa':15, 'garlic': 1, 'tuna': 200, }, 10, 'https://i.pinimg.com/originals/f6/e5/6f/f6e56feb4dece9a0e8f672a240d306cf.jpg')
var duida = createMeal('duida', {'duida' : 2, 'tomato': 200, 'oil': 20, 'salt' : 5,'harissa':15, 'garlic': 1, 'cow meat': 200, }, 10, 'https://lepetitjournal.com/sites/default/files/styles/main_article/public/2018-06/DWIDA.png?itok=s_d2Om8M')
var hargma = createMeal('hargma', {'animal legs' : 2, 'tomato': 200,'onion':2, 'oil': 20, 'salt' : 5,'harissa':15, 'garlic': 1, 'cow meat': 200, }, 10, 'https://www.recettemarocaine365.com/wp-content/uploads/2017/02/hargma.jpg')
var brik = createMeal('brik with eggs', {'malssouka' : 2, 'onion':2, 'potato': 20, 'salt' : 5,'harissa':15, 'tuna': 200, 'eggs':1 }, 10, 'https://i.ytimg.com/vi/qDs77bFs-Rk/maxresdefault.jpg')
var mtabga = createMeal('mtabga', {'bread' : 2, 'onion':2, 'salt' : 5,'harissa':15,  'eggs':1 }, 10, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI84MOKxdjewGwm-noX4xs2iuS7Hy-OGg7sNrUz8ZUOrvhckpf&s')
var kafteji = createMeal('kafteji', {'bread' : 2, 'onion':2, 'salt' : 5,'harissa':15,  'eggs':1 }, 10, 'https://www.carthageplus.net/wp-content/uploads/2018/05/30856051_1720283794704409_5357705005765754880_n-1-780x405.jpg')
var lablebi = createMeal('lablebi', {'bread' : 2, 'onion':2, 'salt' : 5,'harissa':15,  'eggs':1 }, 10, 'https://i1.wp.com/www.1001recettes.tn/wp-content/uploads/2018/12/Lablabi-bel-hargma.jpg?fit=600%2C300&ssl=1&w=640')

var meals =[rouzJerbi,spaguetty,couscousWithFish,mosli,pizza,hamburger,mlawi,nwasser,duida,hargma,brik,mtabga,kafteji,lablebi,tunisianplate] ;


function createMeal(name, ingredients, price, img){				//this function is to create a meal, it takes some parameters that represent 
	var meal = {} ;												//the ingredients,price, name and image of the meal
	meal.name = name ;
	meal.ingredients = ingredients ;
	meal.price = price ;
	meal.img = img ;

	return meal ;
}


function createMeal2(name){	
	var meal = {} ;											
	meal.name = name ;
	meal.ingredients = {} ;
	meal.addingredients = addingredients ;
	meal.price = addprice ;
	meal.img = addimg ;

	return meal ;
}
var addingredients = function(ingred, portion){
	this.ingredients[ingred] = portion ;
}

var addprice = function(price){
	return price
}
 var addimg = function(src){
 	this.img = src ;
}


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


$('#b1').on('click', function(){
	var strAdded = $('#added').val()
	var optstr = $('<option></option>')
	optstr.text(strAdded)
	optstr.appendTo('#slt')	
})


var resultOfSearch ;


$('#search').on('click', function(){																	
																												
var selectedStr = $( "#slt option:selected" ).text();		
	resultOfSearch = undefined;
   resultOfSearch = search(meals, selectedStr)	
   console.log(resultOfSearch)

   affichage(resultOfSearch)				
 
																																		
 })

var result = [];


function search(arr, key){																
	result = arr.filter(function(element){		
	return !element.ingredients.hasOwnProperty(key)
	})
	console.log(result)
	return result;
}

$('#clear').on('click', function(){
	$('#main').html('')
	affichage(meals)
	console.log('hi')
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
																								 

	$('#showelement').show()
	$(this).find('.uldiv').show()
	$('#main').html('')
	$('#showelement').html('')
	$($(this).html()).appendTo('#showelement')
	


})

var x

$('.uldiv').hide()
$('#showelement').hide()
$('body').on('click','#showelement',function(){
	console.log('hit me again')
	affichage(meals)
	$('#showelement').hide()
})
