function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);	
	canvas.parent("canvas");
	instializeInSetup(mario);

	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_screen");
	posenet=ml5.poseNet(video,modelloaded);
	posenet.on("pose",gotposes);
}


function modelloaded() {
	console.log("Posenet is loaded.");
}


function gotposes(results) {
    if(results.length>0) {
       noseX=results[0].pose.nose.x;
	   noseY=results[0].pose.nose.y;  
	} 
}


function draw() {
	game()
}






