function start_identification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Gf02MCrbz/model.json',modelready);
}
function modelready(){
    classifier.classify(gotresult);
}

function gotresult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);

        document.getElementById("result_label").innerHTML="I Can Hear U- "+result[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy - "+(result[0].confidence*100).toFixed(2)+" %";

        Dog=document.getElementById("dog");
        lion=document.getElementById("lion");
        cat=document.getElementById("cat");
        Cow=document.getElementById("cow");

        if(result[0].label=="Roaring"){
            lion.src="lion.jpg";
        }
        else if(result[0].label=="Barking"){
            Dog.src="dog.png";
        }
        else if(result[0].label=="Meowing"){
            cat.src="cat.png";
        }
        else if(result[0].label=="Mooing"){
             Cow.src="cow.jpg";
        }
    }
}