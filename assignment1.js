// Assignment 1: Student Marks Analyzer

// Step 1 and 2 :--Store student details ,marks ,roll number , department
let name = "Rahul Kumar";         
let rollNo = 101;                  
let department = "Computer Science";
let marks = [78, 85, 62, 91, 34];  

// step 3:-- total marks
function calculateTotal(marks) {
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  return total;
}
// console.log("Total Marks: " + calculateTotal(marks));

// Step 4: Percentage (each subject is out of 100)
function calculatePercentage(marks) {
  let obtainedMarks = calculateTotal(marks);  
  let totalMarks = 500;                       // total 5 subject ka ful marks 500 
  let percentage = (obtainedMarks / totalMarks) * 100;//peercentage formula
  return percentage;
}
// console.log("Percentage: " + calculatePercentage(marks) + "%");

// step 5 :--highest marks
function findHighest(marks) {
  let highest = marks[0];            
  for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) {        // check highest se bara hai ki nhi
      highest = marks[i];            // highest to upgrade krdo
    }
  }

  return highest;
}
// console.log("Highest Marks: " + findHighest(marks));

// step 6:-- lowest marks
function findLowest(marks) {
  let lowest = marks[0];             

  for (let i = 1; i < marks.length; i++) {
    if (marks[i] < lowest) {         // check lowest se chotha hai ki nhi
      lowest = marks[i];             // lowest ko update kr di
    }
  }

  return lowest;
}

// console.log("Lowest Marks: " + findLowest(marks));

// Step 7: Count subjects with marks >= 40
function countPassed(marks) {
  let count = 0;
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 40) {// check 40 se zada score kiye hai ki nhi 
      count++;
    }
  }
  return count;
}
// console.log("Subjects Passed: " + countPassed(marks));

// Step 8:-- Uppercase name and character count
let upperName = name.toUpperCase();   // name ko capital letter me
let nameLength = name.length;         // name character ki length
// console.log("Student: " + upperName);
// console.log("Namelength: " + nameLength);

// final output
console.log("Student: " + upperName);
console.log("Name.Length: " + nameLength + " characters");
console.log("Roll Number: " + rollNo);
console.log("Department: " + department);
console.log("Total Marks: " + calculateTotal(marks));
console.log("Percentage: " + calculatePercentage(marks) + "%");
console.log("Highest Marks: " + findHighest(marks));
console.log("Lowest Marks: " + findLowest(marks));
console.log("Subjects Passed: " + countPassed(marks));


// Bonus question:--

function getPerformance(marks) {
  let percentage = calculatePercentage(marks);
  if (percentage >= 80) {
    return "Excellent";
  } else if (percentage >= 60) {
    return "Good";
  } else if (percentage >= 40) {
    return "Average";
  } else {
    return "Needs Improvement";
  }
}
console.log("Performance: " + getPerformance(marks));
