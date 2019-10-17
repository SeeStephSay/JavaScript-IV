// CODE here for your Lambda Classes
class Person {
	constructor(attributes) {
		this.name = attributes.name;
		this.age = attributes.age;
		this.location = attributes.location;
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
		return `Today, we are learning about ${subject}.`; //Does passing a parameter into a method mean that we don't use the 'this' keyword in the return statement?
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
		return `${student.name} has submitted a PR for ${subject}.`;
	}
	sprintChallenge(subject) {
		return `${student.name} has begun their Sprint Challenge on ${subject}.`;
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
	location : 'USA',
	age      : 25,
});

const abdel = new Person({
	name     : 'Idir Abderahim',
	location : 'France',
	age      : 23,
});

const hui = new Person({
	name     : 'XuHui Zhu',
	location : 'USA',
	age      : 20,
});

// ************************** INSTRUCTOR OBJECTS *******************************

const brit = new Instructor({
	name        : 'Brit Hemming',
	location    : 'USA',
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

// ************************** STUDENT OBJECTS *******************************

const stephanie = new Student({
	name        : 'Stephanie Butenhof',
	location    : 'Oklahoma',
	age         : 33,
	favLanguage : 'Ruby',
	specialty   : 'CSS',
	catchPhrase : 'GIFs are my JAM!',
});

const nate = new Student({
	name        : 'Nathaniel Mosco',
	location    : 'Georgia',
	age         : 28,
	favLanguage : 'JavaScript',
	specialty   : 'React',
	catchPhrase : "Yeah, that's normal.",
});

// ************************** TEAM LEAD OBJECTS *******************************

const mikaela = new TeamLeads({
	name        : 'Mikaela Currier',
	location    : 'Georgia',
	age         : 23,
	favLanguage : 'Ruby',
	specialty   : 'JavaScript',
	catchPhrase : "It's standy time!",
});

const justin = new TeamLeads({
	name        : 'Justin Trombley',
	location    : 'New York',
	age         : 26,
	favLanguage : 'JavaScript',
	specialty   : 'JavaScript, React',
	catchPhrase : "I'm always here if you need me.",
});
