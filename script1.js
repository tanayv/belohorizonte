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
	first = first.substr(0, 3);
	return first;
}

 
ko.applyBindings(new ViewModel("Planet", "Earth")); // This makes Knockout get to work