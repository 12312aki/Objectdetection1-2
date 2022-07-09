Status = ""

function preload()
{
img = loadImage('livingroom.jpg')
}

function setup()
{
canvas = createCanvas(480, 380);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("number_of_objects").innerHTML = "Status = detecting objects"

}

function modelLoaded()
{
    Status = true
    objectDetector.detect(img, gotResults)
}

function gotResults(error, results)
{
    if (error)
    {
    console.log(error)
    }

console.log(results)
}