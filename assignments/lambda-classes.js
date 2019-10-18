// CODE here for your Lambda Classes
class Person {
	constructor(attributes) {
		this.name = attributes.name;
		this.location = attributes.location;
		this.age = attributes.age;
	}
	speak() {
		return `Hello, my name is ${this.name}, and I am from ${this.location}.`;
	}
}
class Instructor extends Person {
	constructor(instructorAttributes) {
		super(instructorAttributes);
		this.specialty = instructorAttributes.specialty;
		this.favLanguage = instructorAttributes.favLanguage;
		this.catchPhrase = instructorAttributes.catchPhrase;
	}
	demo(subject) {
		return `Today, we are learning about ${subject}.`; //Passing a parameter into a method means that we don't use the 'this' keyword in the return statement
	}
	grade(student, subject) {
		return `${student.name} receives a perfect score on ${subject}.`;
	}
}

class Student extends Person {
	constructor(studentAttributes) {
		super(studentAttributes);
		this.previousBackground = studentAttributes.previousBackground;
		this.className = studentAttributes.className;
		this.favSubjects = studentAttributes.favSubjects;
	}
	listsSubjects() {
		this.favSubjects.forEach((subject) => console.log(subject));
	}
	PRAssignment(subject) {
		return `${this.name} has submitted a PR for ${subject}.`;
	}
	sprintChallenge(subject) {
		return `${this.name} has begun their Sprint Challenge on ${subject}.`;
	}
}

class TeamLeads extends Instructor {
	constructor(tlAttributes) {
		super(tlAttributes);
		this.gradClassName = tlAttributes.gradClassName;
		this.favInstructor = tlAttributes.favInstructor;
	}
	standUp(channel) {
		return `${this.name} announces to ${channel} "@channel - standy times!"`;
	}
	debugsCode(student, subject) {
		return `${this.name} debugs ${student.name}'s code on ${subject}`;
	}
}

// ************************** PERSON OBJECTS *******************************
const devanee = new Person({
	name     : 'Devanee Reid',
	location : 'The USA',
	age      : 25,
});

const abdel = new Person({
	name     : 'Idir Abderahim',
	location : 'France',
	age      : 23,
});

const hui = new Person({
	name     : 'XuHui Zhu',
	location : 'The USA',
	age      : 20,
});

console.log(devanee.speak());
console.log('My name is ', hui.name);
console.log('Name:', abdel.name, 'Location:', abdel.location);

// ************************** INSTRUCTOR OBJECTS *******************************

const brit = new Instructor({
	name        : 'Brit Hemming',
	location    : 'Canada',
	age         : 30,
	favLanguage : 'JavaScript',
	specialty   : 'JavaScript',
	catchPhrase : 'Please be professional.',
});

const christina = new Instructor({
	name        : 'Christina Gorton',
	location    : 'Costa Rica',
	age         : 35,
	favLanguage : 'CSS',
	specialty   : 'CSS, React',
	catchPhrase : 'Any clarifying questions?',
});

console.log("Brit's favorite language is ", brit.favLanguage);
console.log(brit.grade(devanee, 'React'));
console.log('Christina always asks ', christina.catchPhrase);
console.log(christina.speak(), 'My specialty is making creative art in ', christina.favLanguage);
console.log(christina.demo('React'));

// ************************** STUDENT OBJECTS *******************************

const stephanie = new Student({
	name               : 'Stephanie Butenhof',
	location           : 'Oklahoma',
	age                : 33,
	previousBackground : 'stay-at-home-mom',
	className          : 'WEB25',
	favSubjects        : [ 'HTML', 'CSS' ],
});

const nate = new Student({
	name               : 'Nathaniel Mosco',
	location           : 'Georgia',
	age                : 28,
	previousBackground : 'nurse',
	className          : 'WEB23',
	favSubjects        : [ 'React', 'JavaScript', 'C++' ],
});

console.log(nate.speak());
console.log(stephanie.listsSubjects()); // *****************NEED TO FIX THIS SINCE IT'S SHOWING AS UNDEFINED!
console.log(stephanie.PRAssignment('JavaScript-III'));
console.log(nate.sprintChallenge('Preprocessing-II'));

// ************************** TEAM LEAD OBJECTS *******************************

const mikaela = new TeamLeads({
	name          : 'Mikaela Currier',
	location      : 'Georgia',
	age           : 23,
	favLanguage   : 'Ruby',
	specialty     : 'JavaScript',
	catchPhrase   : "It's standy time!",
	gradClassName : 'WEB20',
	favInstructor : 'Josh Knell',
});

const justin = new TeamLeads({
	name          : 'Justin Trombley',
	location      : 'New York',
	age           : 26,
	favLanguage   : 'JavaScript',
	specialty     : 'JavaScript, React',
	catchPhrase   : "I'm always here if you need me.",
	gradClassName : 'WEB21',
	favInstructor : 'Dustin Myers',
});

console.log(mikaela.speak());
console.log(justin.demo('Constructor Functions'));
console.log(mikaela.standUp('WEB23-mikaela'));
console.log(justin.debugsCode(nate, 'React'));
