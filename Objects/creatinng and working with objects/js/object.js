var person = {
	name: "Sarah",
	Age: 35,
	treehouseStudent: true,
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}
person.country = "China";
person.sex = "female";
person.skills = ["Html", "css", "javascript"];
print("<p>Hello my name is "+person.name+" my name has "+person.name.length+" characters, i am "+person.sex+" and i come from "+person.country+" i am a treehouse students with "+person.skills.length+" skills which are "+person.skills.join(", ")+" but i am mostly into "+person.skills[2] +" i hope ill be good at your job.");
