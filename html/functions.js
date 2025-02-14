

function hover() {
	const img = document.getElementById("dumbass")
	img.setAttribute("src", "imgs/darkepic.png")
}

function nohover() {
	const img = document.getElementById("dumbass")
	img.setAttribute("src", "imgs/epic.png")
}

function explorer() {
	var v = document.getElementById("blankwindow");

		v.style.display = "block";
}

function clicked() {
	console.log("clicked")
	var x = document.getElementById("shutdownscreen");
	var z = document.getElementById("stop");
	if (x.style.display === "none") {
	  x.style.display = "block";
	  console.log("clicked")
	}
}

function X() {
	if (v.style.display == "block") {
		v.style.display = "none";
		console.log("clicked")
	  }
}

function playit() {
	var audio = document.getElementById('audioPlayer');
	var Zane = document.getElementById("Zane");
	audio.play();
	Zane.src = "../imgs/Zanetalking.png";  // Set the first image (talking)
	
	// Set a timeout to change to the second image after 1 second (1000 milliseconds)
	setTimeout(function() {
		Zane.src = "../imgs/Zaneidle.png"; // Change to idle image
	}, 2000);
}

function door() {
	var door = document.getElementById("door");
	var doordiv = document.getElementById("doordiv");
	var delay = 1000
	door.src = "../imgs/door1.png";  // Set the first image (talking)
	setTimeout(function() {
		door.src = "../imgs/door1.5.png"; // Change to idle image
	}, delay);
	// Set a timeout to change to the second image after 1 second (1000 milliseconds)
	setTimeout(function() {
		door.src = "../imgs/door2.png"; // Change to idle image
	}, delay);
	setTimeout(function() {
		door.src = "../imgs/door2.5.png"; // Change to idle image
	}, delay);
	setTimeout(function() {
		door.src = "../imgs/door3.png"; // Change to idle image
	}, delay);
	setTimeout(function() {
		door.src = "../imgs/door3.5.png"; // Change to idle image
	}, delay);
	setTimeout(function() {
		door.src = "../imgs/door4.png"; // Change to idle image
		doordiv.href = "home.html";
	}, delay);
	door.onclick = "no";

}

