function greeter(person) {
    return "Hello," + person.firstName + " " + person.lastName;
}
var user = { firstName: "Charly", lastName: "Mannion" };
document.body.textContent = greeter(user);
