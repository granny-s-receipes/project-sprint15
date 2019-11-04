//these are objects that represent the meals, we create the objects using the above function
var spaguetty = createMeal('spaguetty', {'pates' : 250, 'tomato': 200, 'oil': 20, 'salt' : 5, 'garlic': 1, 'meat': 200, 'cheese':15}, 12, 'https://www.starfrit.com/media/contentmanager/content/cache/1070x1070//recipes/e1_r1_spaghetti.jpg')
var couscousWithFish = createMeal('couscous with fish', {'couscous':200, 'tomato':100, 'onion': 3, 'garlic': 1, 'peper':4, 'potato':2, 'pumpkin': 100, 'Pagre': 4 , 'calamus': 1, 'salt': 2, 'cloves': 2}, 25, 'https://www.tounsia.net/uploads/2017/09/couscous-mannani.jpg')
var mosli = createMeal('mosli with rass', {'potato':2, 'tomato':100, 'onion': 3, 'garlic': 1, 'peper':4, 'potato':2, 'pumpkin': 100, 'meat':500, 'curcuma': 25}, 30, 'http://www.baya.tn/wp-content/uploads/2014/07/mosli-allouch-baya.jpg')
var rouzJerbi = createMeal('rouz jerbi', {'rice': 500, 'spinach': 25, 'peas': 30, 'dandelion': 40, 'chicken': 100,'hrous': 50,'curcuma': 10,'salt': 2}, 20, 'https://www.cuisinetunisienne.tn/wp-content/uploads/2019/02/Recette-Riz-Djerbien-1080x841.jpg')

var meals =[spaguetty,couscousWithFish,mosli,rouzJerbi] ;


function affichageinitial(){							// this function is for the initial load of the page
	$('#main').html('')	
   for(var i =0; i < meals.length;i++){					// we loop the meals array and we append all the element's image to the main
    var imgdiv = $('<div class ="imagediv"></div>')
	var img = $('<img>')
	img.attr('class = wasfa')
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
	var imgdiv = $('<div class ="imagediv"></div>')		//for that, we start by initilasing a div and give it an class
	var img = $('<img>')								//a variable containing an image tag
	// img.attr('class = wasfa')							//we add a class for each image
    img.attr('src', resultOfSearch[i].img)						//now for each image we add a source of the image inherited from the meal object
    imgdiv.html(img)									//now we inject the image inside the div element
   $('#main').append(imgdiv)							//at the end we add the constructed div wich contains an image to the main div
	}
// return result;											
 })



var photoHtml = ''
$('body').on('click','.imagediv', function() {																		//this function is to create a variable containing the object	//of the image that we click on
  photoHtml = this.innerHTML ;	
  																																								//this variable takes the html text  
  var arrayof= photoHtml.split('')																								//now we extract the image source from that selection  
  var newArr = arrayof.slice(arrayof.indexOf('h'),arrayof.length -2).join('') ;		 
	var objResult ;																																	//this object will represents the source obj of the image we clicked on
for(var i =0; i<meals.length; i++){																								//we loop the meals array and we look for the object that contains the image we clicked on
	if(meals[i].img === newArr){
		objResult = meals[i]																													//whenever we find that object we put it in the variable
		console.log(objResult)
	}
}
var description = objResult.name	
var nameh = $('<h2></h2>')
nameh.text(objResult.name)
console.log('this is the name')
console.log(nameh)
$(this).append(nameh)
var ingredientList= $('<ul></ul>')
for(var i in objResult.ingredients){
	var list = $('<li></li>') ;
	list.text(i + ': ' + objResult.ingredients[i])
	ingredientList.append(list)
}
$(this).append(ingredientList)
console.log(ingredientList)


})

//now we construct the element we want to affiche when a photo is clicked
