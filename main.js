var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:320,
    height:250,
    image_format : 'jpg',
    jpg_quality:90
});
recognition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").value = content;
    if (content == "take my selfie")
    {
        speak();
    }
    console.log(content);
}

var img_id;
function start(){

    
    var synth = window.speechSynthesis;
    Webcam.attach("camera");

 
    setTimeout(function(){
        img_id = "selfie1";
        speak_data = "Taking your next Selfie in 5 seconds";   
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_snapshot();
    }, 5000);

    setTimeout(function(){
        img_id = "selfie2";
        speak_data = "Taking your next Selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_snapshot();
    }, 10000);

    setTimeout(function(){
        img_id = "selfie3";
        speak_data = "Taking your next Selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_snapshot();
    }, 15000);

    setTimeout(function(){
        img_id = "selfie4";
        take_snapshot();
    }, 20000);

}
function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri) {
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
        }
        if(img_id=="selfie4"){
            document.getElementById("result4").innerHTML = '<img id="selfie4" src="'+data_uri+'"/>';
        }
    });
}
function save()
{
    var link = document.getElementById("link");
    var img = document.getElementById("picture").src;
    link.href = img;
    link.click();
}
