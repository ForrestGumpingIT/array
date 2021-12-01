
let cocktailList=
["Pina Colada",
"Espresso Martini",
"Cosmopolitan",
"Tequila Sunrise"
];

function listNames (){
	document.getElementById("main").innerHTML=cocktailList.toString();
}

function addtoStart(){
	cocktailList.push(prompt("Ooooh go on then - add another!"));
	listNames();
}
function removeFromStart(){
	cocktailList.push(prompt("Let's tame this down; remove one"));
	listNames();
}
