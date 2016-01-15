// Here's my data model
var ViewModel = function(first, last) {
    this.firstName = ko.observable(first);
    this.lastName = ko.observable(last);
    this.fullName = ko.computed(function() {
        // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
        return CmpFirst(this.firstName()) + " " + this.lastName() + " ";
    }, this);
};

function CmpFirst(first) {
//Break First Name
	
	function isVowel(c) {
    if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u")
    {
    	return 1;
    }
}
	
	first = first.substr(0,3);
	
	if(isVowel(first.charAt(2)) == 1) {
		var conson = ["r", "n", "b"];
		s = Math.round(Math.random() * (2));
		first = first +  conson[s];
	}

	var suffix = ["inho", "iano", "uel", "ardo", "andro", "enzo", "urilo", "andro", "enato"];
	l = suffix.length;
	s = Math.round(Math.random() * (l-1));
		first = first + suffix[s];
	return first;
}

 
ko.applyBindings(new ViewModel("First", "Escobar")); // This makes Knockout get to work