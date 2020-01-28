

document.getElementById("btn").addEventListener("click", function(event){
    event.preventDefault()
  
  
  
  var first = document.neuroQuiz.first.value;
  var second = document.neuroQuiz.second.value;
  var third = document.neuroQuiz.third.value;
  var fourth = document.neuroQuiz.fourth.value;
  var fifth = document.neuroQuiz.fifth.value;
  var sixth = document.neuroQuiz.sixth.value;
  var correct = 0;
  
  if (first == "100 billion")
  {
      correct++;
  }
      
  if (second == "Plasticity")
  {
      correct++;
  }
  
  if (third == "250,000 per minute")
  {
      correct++;
  }
  
  if (fourth == "Up to 120 metres per second")
  {
      correct++;
  }
  
  if (fifth == "20%")
  {
      correct++;
  }
  
   if (sixth == "8 to 10 seconds")
   {
       correct++;
   }
  
  
  
  //I will message the user according to their score. creating array...
  
  var messages =["Wow! You're a Brainiac! (pun intended)", "That's not too bad!", "Meh, you could do better", "Hmm...There's a lot of room for improvement here is all I'm going to say."];
  
  var range = 0;
  
  if (correct < 1)
  {
      range = 5;
  }
  if (correct > 0 && correct < 6)
  {
      range = 1;
  }
  if (correct > 5)
  {
      range = 0;
  } 
  
  document.getElementById("afterSubmit").style.visibility = "visible";
  
  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("numberCorrect").innerHTML = "You got " + " " + correct + " " + "correct.";
  
  
  });
  