let data = [];
let w = 0;
let b = 0;
function setup() {
	createCanvas(windowWidth,windowHeight);
	
}

function draw() {
	background(0);
	for(var i = 0;i<data.length;i++){
		
		fill(255);
		stroke(255);
		ellipse(data[i][0],data[i][1],5,5);
	}
	ybegin = b;
	yend = w*windowWidth+b;
	strokeWeight(2)
	line(0,ybegin,windowWidth,yend)
}
function mouseClicked() {
	console.log("Mouse Clicked");
	data.push([mouseX,mouseY]);
	xsquared = 0;
	xsum = 0;
	xyproduct = 0;
	ysum = 0;
	for(var i = 0;i<data.length;i++){
		xsquared+=Math.pow(data[i][0],2)
		xsum+=data[i][0]
		xyproduct+=data[i][0]*data[i][1]
		ysum+=data[i][1]
	}
	w = ((xyproduct - b*xsum)/xsquared)
	b = (ysum - w*xsum)/data.length
	print(w,b)
}
