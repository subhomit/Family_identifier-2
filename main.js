Webcam.set({
    width : 350,
    height : 300,
    image_format : "png",
    png_quality : 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("cam_output").innerHTML = "<img id = 'img_output' src = '" + data_uri +"'>";
    });
}
console.log("ml5version : ", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mpMPoCGZz/model.json", modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}
