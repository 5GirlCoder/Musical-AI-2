rightWristY = 0;
leftWristY = 0;

JelousyJelousy = ""; 
LofiMusic = "";

function preload()
{
    JelousyJelousy = loadSound("JelousyJelousy.mp3");
    LofiMusic = loadSound("LofiMusic.mp3");
}

function setup()
{
    canvas = createCanvas(400, 350);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 400, 350);

    if(rightWristY != 0)
    {
        JelousyJelousyplay();
    } 
    
    if(leftWristY != 0)
    {
        LofiMusicplay();
    }
}

function modelLoaded()
{
    console.log("PoseNet is initialized!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        rightWristY = results[0].pose.rightWrist.y;
        leftWristY = results[0].pose.leftWrist.y;

        console.log("leftWristY = " + leftWristY);
        console.log("rightWristY = " + rightWristY);
    }
}

function JelousyJelousyplay()
{
    JelousyJelousy.play();
}

function LofiMusicplay()
{
    LofiMusic.play();
}