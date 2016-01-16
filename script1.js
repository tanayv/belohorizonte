
var ViewModel = function(first, last) {
    this.firstName = ko.observable(first);										//Obtain first name from data-bind
    this.lastName = ko.observable(last);										//Obtain last name from data-bind
    this.fullName = ko.computed(function() {
		return freshfirst() + " "  + CmpFirst(this.firstName()) + " " + CmpLast(this.lastName()) + " " + xtralast();		//Return Full Name after passing both parts through their respective functions 
    }, this);
};


function CmpFirst(first) {
//Break down first name and add a Brazillian suffix

	//Function to determine if 	
	function isVowel(c) {
    if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u")
    	{
    		return 1;
    	}
	}
	
	first = first.substr(0,3);
	
	if(isVowel(first.charAt(2)) == 1) {
		var conson = ["r", "n", "b", "s"];
		s = Math.round(Math.random() * (2));
		first = first +  conson[s];
	}

	var suffix = ["inho", "iano", "uel", "ardo", "andro", "enzo", "urilo", "andro", "enato", "andinho","árcio", "ício", "ério"];
	l = suffix.length;
	s = Math.round(Math.random() * (l-1));
		first = first + suffix[s];
	return first;
}

function CmpLast(last) {
//Add a Brazillian surname from the same letter
	var l_names_a = ["Augusto", "Álvarez", "Azvedo", "Aguiar", "Álves", "Anderson", "Adriano"];
	var l_names_b = ["Borba", "Bezerra", "Barbosa", "Braga", "Bastos", "Baiano", "Barreto"];
	var l_names_c = ["Costa", "Correira", "Conceição", "Coutinho", "Coelho", "Câmara", "Carvalho"];
	var l_names_d = ["Dias", "Duarte", "Delmires", "D'Allesandro", "Damião"];
	var l_names_e = ["Espinosa", "Escobar", "Espíndola"];
	var l_names_f = ["Furtado", "Fagundes", "Ferreira", "Figueiredo", "Fonseca", "Firmino", "Falcão", "Fernandes"];
	var l_names_g = ["Guimarães", "Gomes", "Garcia", "Gustavo", "Guilherme", "Guerra"];
	var l_names_h = ["Henriques"];
	var l_names_i = ["Ibãnes", "Espíndola"];
	var l_names_j = ["Jimenes", "Jorginho", "Jardim"];
	var l_names_k = ["Kardec", "Kardec", "Cearense", "Coutinho", "Coelho", "Câmara", "Kléberson"];
	var l_names_l = ["Lazaro", "Leitão", "Lima", "Linhares", "Luiz", "Leão", "Lópes", "Leite"];
	var l_names_m =	["Meireles", "Medeiros", "Magalhães", "Menezes", "Melo", "Miranda", "Moura"];
	var l_names_n =	["Nascimento", "Nogueira", "Nazário", "Neves", "Nunes"];
	var l_names_o =	["Oliveira", "Otamendi", "Orban"];
	var l_names_p =	["Pereira", "Pato", "Pires", "Pimentel", "Prado", "Pinheiro"];
	var l_names_q =	["Quadrado", "Cerqueira", "Quintero", "Queiroz", "Quadros"];
	var l_names_r =	["Rodrigues", "Rosário", "Ramos", "Rezende", "Rios","Ronaldo", "Ribeiro"];
	var l_names_s =	["Soares", "Silveira", "Silva", "Saraiva", "Santos", "Saldanha"];
	var l_names_t =	["Tavares", "Texeira", "Tardelli", "Taffarel", "Tambróchio"];
	var l_names_u =	["Ulloa", "Unnerstal"];
	var l_names_v =	["Vidal", "Valenciaga", "Vieira", "Vila", "Ventura", "Valdivia", "Valdes"];
	var l_names_w =	["Washington", "Wanderson", "Cunha"];
	var l_names_x =	["Sicario", "Texeira", "Castro", "Coelho", "Espíndola"];
	var l_names_y =	["Quintana", "Pedroso", "Castro", "Dávids"];
	var l_names_z =	["Zagallo", "Pernambucano", "Lópes"];	
	
	r = Math.random() 
	if (r > 0.314) { 
		//Find first letter of last name
		a = last.charAt(0);
		a = a.toLowerCase();
	}

	else {

		//Pick a random alphabet
		alpha = Math.round(Math.random() * 26);
		alpset = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		a = alpset[alpha]
	}

	//Get array name based on letter obtained
		target_array_name = "l_names_" + a;
		var t_array = eval(target_array_name);

	//Pick a random name from the array
		l = t_array.length;
		b = Math.round(Math.random() * (l-1));
		last = t_array[b];

	return last;

}

function freshfirst() {
//Add a Fresh First Name
	db = ["Diego", "Francisco", "Alexandre", "Fábio", "Gabriel", "Paulo", "Mário", "Vítor", "Cristiano", "Estevão", "Sérgio", "David", "José", "Adriano", "Alberto", "Jorge", "Rodolfo", "Bernardo", "Fernando", "Frederico", "Felipe", "Fabrício", "Miguel", "Edgar", "Christian", "Nicolas", "Gilberto", "Luciano", "Pedro" ]
	l = db.length;
	g = Math.round(Math.random() * (l-1));

//Randomly select whether or not the first name appears
	i = Math.random()

	if (i>0.5) {
	return  db[g];
	}
	else {
	return "";
	}
}

function xtralast() {
	db = ["dos Santos", "da Silva", "Júnior"]
	l = db.length;
	g = Math.round(Math.random() * (l-1));

//Randomly select whether or not the first name appears
	i = Math.random()

	if (i>0.5) {
	return  db[g];
	}
	else {
	return "";
	}
}
 
ko.applyBindings(new ViewModel("First", "Last")); 