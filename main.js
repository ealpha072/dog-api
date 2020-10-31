//fetch("https://dog.ceo/api/breeds/list/all")

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


