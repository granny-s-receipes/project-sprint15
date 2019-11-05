//these are objects that represent the meals, we create the objects using the above function
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



var meals =[spaguetty,couscousWithFish,mosli,rouzJerbi,pizza,hamburger,mlawi,nwasser,duida,hargma,brik,mtabga,kafteji,lablebi,tunisianplate] ;

var url = 'https://victoriapublicmarket.com/wp-content/uploads/2018/02/10492h-cooking-ingredients-picture-in-hd.jpg'
function affichageinitial(){							// this function is for the initial load of the page
	$('#main').html('')	
   for(var i =0; i < meals.length;i++){					// we loop the meals array and we append all the element's image to the main
    var imgdiv = $('<div class ="imagediv"></div>')
	var img = $('<img>')
	img.attr('id','imageid')

    img.attr('src', meals[i].img)
    imgdiv.html(img)
   $('#main').append(imgdiv)
}
}
 affichageinitial() ;
$('body').on('click', '#clear',function(){
	affichageinitial() 
})



var result = [];
function search(arr, key){					//search function: this function takes an array of objects and a key (the key is an ingredient)
	// var result = [];						//and returns a new array (result) with all the object that dont include that key 
	//console.log(arr)
	result = arr.filter(function(element){
		//console.log(element.ingredients)

		return !element.ingredients.hasOwnProperty(key)
	})
	return result;
}

function createMeal(name, ingredients, price, img){				//this function is to create a meal, it takes some parameters that represent 
	var meal = {} ;												//the ingredients,price, name and image of the meal
	meal.name = name ;
	meal.ingredients = ingredients ;
	meal.price = price ;
	meal.img = img ;

	return meal ;
}



// this phase is to add a new ingrediens to the list of the unwanted ingeridients

$('#b1').on('click', function(){
	var strAdded = $('#added').val()
	var optstr = $('<option></option>')
	optstr.text(strAdded)
	optstr.appendTo('#slt')	

})
//affichage ki tekhtar key

var resultOfSearch ;

//this function is for the click on the search button
$('#search').on('click', function(){
	$('#main').html('')						//when the button is clicked the first ting we clear the main section
	// console.log(this)
var selectedStr = $( "#slt option:selected" ).text();		// this variables takes the selected incredient as a string

   resultOfSearch = search(meals, selectedStr)					//this array takes the result of the meals that doesnt contain the selected ingredients 
   console.log(resultOfSearch)
   
   for(var i =0; i < resultOfSearch.length;i++){				//now we loop in this array and we append the image to the screen
	var imgdiv = $('<span class ="imagediv"></span>')		//for that, we start by initilasing a div and give it an class
	var img = $('<img>')								//a variable containing an image tag
	// img.attr('class = wasfa')
	img.attr('id','imageid')							//we add a class for each image
    img.attr('src', resultOfSearch[i].img)						//now for each image we add a source of the image inherited from the meal object
    imgdiv.html(img)									//now we inject the image inside the div element
   $('#main').append(imgdiv)							//at the end we add the constructed div wich contains an image to the main div
	}
// return result;											
 })


var objResult ;	
var photoHtml = ''
$('body').on('click','.imagediv', function() {
																		//this function is to create a variable containing the object	//of the image that we click on
  photoHtml = this.innerHTML ;	
  																																								//this variable takes the html text  
  var arrayof= photoHtml.split('')																								//now we extract the image source from that selection  
  var newArr = arrayof.slice(arrayof.indexOf('h'),arrayof.length -2).join('') ;		 
																																	//this object will represents the source obj of the image we clicked on
for(var i =0; i<meals.length; i++){																								//we loop the meals array and we look for the object that contains the image we clicked on
	if(meals[i].img === newArr){
		objResult = meals[i]																													//whenever we find that object we put it in the variable
		console.log(objResult)
	}
}


var description = objResult.name	
var nameh = $('<h2></h2>')
nameh.text(objResult.name)
$(this).append(nameh)
var ingredientList= $('<ul></ul>')
for(var i in objResult.ingredients){
	var list = $('<li></li>') ;
	list.text(i + ': ' + objResult.ingredients[i])
	ingredientList.append(list)
	
}
$(this).append(ingredientList)

console.log('this')
console.log(this)
 xxxx= this

})


var xxxx


//now we construct the element we want to affiche when a photo is clicked

// $('#imagediv').onclick().toggle(function() {
// 																		//this function is to create a variable containing the object	//of the image that we click on
//   photoHtml = this.innerHTML ;	
//   																																								//this variable takes the html text  
//   var arrayof= photoHtml.split('')																								//now we extract the image source from that selection  
//   var newArr = arrayof.slice(arrayof.indexOf('h'),arrayof.length -2).join('') ;		 
// 	var objResult ;																																	//this object will represents the source obj of the image we clicked on
// for(var i =0; i<meals.length; i++){																								//we loop the meals array and we look for the object that contains the image we clicked on
// 	if(meals[i].img === newArr){
// 		objResult = meals[i]																													//whenever we find that object we put it in the variable
// 		console.log(objResult)
// 	}
// }


// var description = objResult.name	
// var nameh = $('<h2></h2>')
// nameh.text(objResult.name)
// $(this).append(nameh)
// var ingredientList= $('<ul></ul>')
// for(var i in objResult.ingredients){
// 	var list = $('<li></li>') ;
// 	list.text(i + ': ' + objResult.ingredients[i])
// 	ingredientList.append(list)
	
// }
// $(this).append(ingredientList)

// console.log('this')
// console.log(this)
//  xxxx= this

// }, function(){
// 	this.hide()
// })


// $('body').on('click','.imagediv', function() {
// 	$(this).hide()
// })


$('body').on('dblclick','.imagediv', function() {
alert('helloooo')
	$(this.html).slideUp('fast') })