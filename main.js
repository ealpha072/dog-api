/* oldschool working of promises
fetch("https://dog.ceo/api/breeds/list/all").then(function(response){
	return response.json() //retuns promise
}).then(function(data){
	console.log(data)
})*/

//modern js with promises
//fetch data function...
async function generate(){
	const response = await fetch("https://dog.ceo/api/breeds/list/all")
	//no code is run until fetch is done
	//fetch resolves a promise ..
	//we then take the response and parse into readable format..
	const data = await response.json();
	createOptions(data.message)
	
}
generate();

function createOptions(list){
	document.querySelector('.breeds').innerHTML= `
	<select onchange="loadBreed(this.value)">
        <option >Choose a dog breed</option>
        ${Object.keys(list).map(function(breed){
        	return `<option>${breed}</option>`
        })}
    </select>
	`
}

async function loadBreed(breed){
	
	if(breed != "Choose a dog breed"){
		//we fetch again making this function async funct
		const response =await fetch(`https://dog.ceo/api/breed/${breed}/images`);
		const data = await response.json();
		createSlide(data.message)
	}
}

function createSlide(images){
	document.querySelector('#slideshow').innerHTML =`
		<div id="slideshow" style="background-image: url('${images[0]}')">
        </div>
	`
}

