var answer;
var score = 0;
var backgroundImages = [];



function  nextQuestion() {

    const n1 = Math.floor(Math.random() * 5);
    document.getElementById('n1').innerHTML = n1;
    const n2 = Math.ceil(Math.random() * 5);
    document.getElementById('n2').innerHTML = n2;
    answer = n1+n2

    
}


function checkAnswer() {
    const prediction = predictImage();
    console.log(`answer:${answer}, prediction:${prediction}`);
    if (prediction == answer) {
        score ++;
        console.log(`Correct: ${score}`);
        if (score <= 6) {
            backgroundImages.push(`url('images/background${score}.svg')`)
            document.body.style.backgroundImage = backgroundImages;
        } else {
            alert('Well done')
            score = 0;
            backgroundImages = [];
            document.body.style.backgroundImage = backgroundImages;


        }
        

    } else {
        if (score != 0) {score --};
        console.log(`Wrong: ${score}`);
        alert('Wrong, try next time');
        setTimeout(function () {
            backgroundImages.pop();
            document.body.style.backgroundImage = backgroundImages;

        }, 1000);
    } 
}