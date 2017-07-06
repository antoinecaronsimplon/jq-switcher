var species = {
	cat    : "cat.jpg",
	bear   : "bear.jpg",
	fish   : "fish.jpg"
};

function main(){
	/*
	tout votre code doit se trouver dans cette fonction,
	vous pouvez biensur créer d'autres fonctions si nécessaire
	*/
	// 1. placez un listener sur le click des éléments <button>
	$('button').click(function(){
		// Je recupere le data attribute correspondant au bouton sur lequel je clique
		var attr = $(this).data('animal');

		// Je recupere dans mon objet species le nom de l'image correspondant à la clef récupérer précedement
		var path = species[attr];

		//J'affiche l'image correspondante
		$('#holder').html("<img src='img/"+ path +"' alt='' />");
	});
	
	// 2. dans le callback récupérez le data attribute animal
	// 3. récupérerez dans l'objet species la valeur correspond à l'attribut récupéré
	// 4. ajoutez élément img en assignant à son attibut src la valeur précédemment récupérée
	// 5. inserez cet élément dans l'élément ayant l'id holder
	//
	// Conseils : avancez étape par étape, console.log et debugger autant que nécessaires !



}

$(document).ready(function(){
	main();
});
