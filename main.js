img = "";
status = "";

function preload(){
img = loadImage('street.jpg')
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Lamps", 120, 75);
    noFill();
    stroke("#FF0000");
    rect(120, 60, 100, 350);

    fill("#FF0000");
    text("building",320,120);
    noFill();
    stroke("#FF0000");
    rect(400, 98, 270, 320 );
}

function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }

    console.log(results);
}