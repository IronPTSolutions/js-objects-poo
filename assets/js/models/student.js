class Student extends User {

  static avg(students) {
    if (students.length === 0) return undefined;

    let sum = 0;
    for (let i = 0; i < students.length; i++) {
      const student = students[i];
      sum += student.avg();
    }
    return sum / students.length;
  }

  constructor(name, lastName, age, email) {
    super(name, lastName, age, email);
    this.grades = [];
  }

  addGrade(subject, grade) {
    this.grades.push({
      subject: subject,
      grade: grade
    })
  }

  avg() {
    if (this.grades.length === 0) return undefined;

    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum += this.grades[i].grade;
    }
    return sum / this.grades.length;
  }

  greet() {
    return `${super.greet()} and I'm a student!`;
  }

}

const student1 = new Student('Carlos', 'del Prado', 33);
student1.addGrade('maths', 7);
student1.addGrade('history', 5);
console.log(student1);
console.log(student1.greet());

const student2 = new Student('Julio', 'Garcia', 30);
student2.addGrade('maths', 10);
student2.addGrade('history', 9);

const students = [
  student1,
  student2
]

console.log(Student.avg(students));