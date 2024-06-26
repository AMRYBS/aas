function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.style.display === 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
}

document.getElementById('date').textContent = new Date().toLocaleDateString();

document.addEventListener('DOMContentLoaded', function() {
  var myAudio = document.getElementById('myAudio');
  setTimeout(function(){
    myAudio.play();
  }, 5000);
});

document.addEventListener('DOMContentLoaded', function() {
    var scores = {english: 36.5, logicDesign: 14, programming: 15, physics: 16, statistics: 34, management: 39};
    Object.keys(scores).forEach(function(course) {
        var totalPoints = scores[course];
        var percent = (totalPoints / 40) * 100;
        var result = calculateGrade(percent);
        document.getElementById(course + '-grade').textContent = result.grade;
        document.getElementById(course + '-points').textContent = result.points;
    });
});

function changeYear() {
    var year = document.getElementById("academicYear").value;
    document.querySelectorAll('.course-details').forEach(function(element) {
        element.classList.add('hidden');
    });
    document.getElementById('term').style.display = 'block';
}

function changeTerm() {
    var year = document.getElementById("academicYear").value;
    var term = document.getElementById("term").value;
    var courseId = year + term;
    document.querySelectorAll('.course-details').forEach(function(element) {
        element.classList.add('hidden');
    });
    document.getElementById(courseId).classList.remove('hidden');
}

function changeYear() {
    console.log("Year changed to: " + document.getElementById('academicYear').value);
}

function changeTerm() {
    console.log("Term changed to: " + document.getElementById('term').value);
}

window.onload = function() {
    document.getElementById('date').textContent = new Date().toLocaleDateString();
    updateCoursesVisibility(); 
};

function changeYear() {
    updateCoursesVisibility(); 
}

function changeTerm() {
    updateCoursesVisibility(); 
}

function updateCoursesVisibility() {
    var courseDetails = document.querySelectorAll('.course-details');
    courseDetails.forEach(function(detail) {
        detail.classList.add('hidden');
    });

    var selectedYear = document.getElementById('academicYear').value;
    var selectedTerm = document.getElementById('term').value;
    var activeSectionId = selectedYear + selectedTerm;
    var activeSection = document.getElementById(activeSectionId);
    if (activeSection) {
        activeSection.classList.remove('hidden');
    } else {
        console.error("No course details section found for ID:", activeSectionId);
    }
}

