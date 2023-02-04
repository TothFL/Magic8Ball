    let magic8Ball = {};
    listOfAnswers = ["Nem!", "Igen!", "Nem hiszem...", "Persze!", "Kétségtelenül!", "Csak álmaidban...", "Jobb ha nem válaszolok"];
    
    $("#answer").text( "A válasz...");
    $("#questionButton").click(onClick);

    function onClick(){
        $("#answer").hide();
        newQuestion();
    }

    function newQuestion(){
        let question = prompt("ASK A YES/NO QUESTION!");
            console.log(question);
            if(!question || question==null){
                console.log("Hiba");
                alert("Sajnos nem értem")
            }else{
                $("#questionid").text(question);
                askQuestion(question);
            }

    }
  
    function askQuestion(question) {
      $("#ball8").effect("shake");
      $("#questionid").effect("shake");
      $("#answer").fadeIn(4000);
  
      let randomNumber = Math.random();
      let randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
      let randomIndex = Math.floor(randomNumberForListOfAnswers);
  
      let answer = this.listOfAnswers[randomIndex];
      $("#answer").text(answer);
  
    //   console.log(question);
    //   console.log(answer);
    };
  

