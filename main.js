function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);	
	canvas.parent("canvas");
	instializeInSetup(mario);
	video=CreateCapture(VIDEO);
	video.size(800,400);
	video.parent("game_screen");
}


function draw() {
	game()
}






