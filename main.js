noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(560, 510);
    canvas = createCanvas(500, 400);
    canvas.position(560, 100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);


}

function draw() {
    background("orange");
    document.getElementById("square_side").innerHTML = "Width and Height of a square will be = " + difference + "px";
    fill('#F90093');
    textSize(difference);
        text("Daksha", 50, 400);


}

function modelLoaded() {
    console.log("PoseNEt is intialized");
}

function gotPoses(results) {
    if (results.length > 0) {

      leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);


    }
}