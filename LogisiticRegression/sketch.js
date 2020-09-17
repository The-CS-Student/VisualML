let data = [];
let w = 0;
let b = 0;
let Width = 800;
let Height = 600;
function setup() {
	createCanvas(Width,Height);
	
}

function draw() {
	background(0);
	for(var i = 0;i<data.length;i++){
		
		fill(255);
		stroke(255);
		ellipse(data[i][0],data[i][1]*windowHeight,5,5);
	}
	train();
		stroke(255);
		noFill();
		beginShape();
		
		for(var j = 0;j<width;j++){
			vertex(j,Math.round(sigmoid(w*j+b)*Height))
		}
		endShape();
}
function crossentropy(y,p){
	return y*Math.log(p)+(1-y)*Math.log(1-p)
}
function sigmoid(x){
	return 1/(1+Math.exp(-x))
}
function mouseClicked() {
	data.push([mouseX,mouseY/Height])
	
}
function train(){
		for(var j = 0;j<data.length;j++){
			predicted = sigmoid(w*data[j][0]+b)
			error = crossentropy(data[j][1],predicted)
			w-=data[j][0]*(predicted-data[j][1])*0.0001
			b-=(predicted-data[j][1])*0.0001
		}
	}
	

