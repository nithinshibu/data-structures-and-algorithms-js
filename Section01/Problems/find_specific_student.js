//The below array is the datastructure.
const studentDatabase = ["john", "jordan", "james", "micheal"];

//Algorithm for finding a specific user
// O(n)
const findStudent = (allStudents, studentName) => {
  for (let i = 0; i <= allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      console.log(`Found ${studentName}`);
    }
  }
};

findStudent(studentDatabase, "john");
