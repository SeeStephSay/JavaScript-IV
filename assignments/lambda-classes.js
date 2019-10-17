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
		this.favSubjects.forEach((element) => console.log(element));
	}
	PRAssignment(subject) {
		return `${student.name} has submitted a PR for ${subject}.`;
	}
	sprintChallenge(subject) {
		return `${student.name} has begun their Sprint Challenge on ${subject}.`;
	}
}
