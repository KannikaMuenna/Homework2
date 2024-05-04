function checkAnswer(answer,topic) {
    var topicHave = 2;
    var ans1 = 0 , ans2 = 0;
    const result1 = document.getElementById('result1');
    const result2 = document.getElementById('result2');
    const a1 = document.getElementById('a1');
    const a2 = document.getElementById('a2');
    const Showresult = document.getElementById('Showresult')

  

    if (answer === 'a' && topic == 1) {
        result1.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result1.style.color = 'green';
        ans1 = 1;
        a1.textContent = 1;
    } else if(answer === 'c' && topic == 2){
        result2.textContent = "ถูกต้องบริษัท CPRAM มีทั้งหมด 7 สาขา";
        result2.style.color = 'green';
        ans2 = 1;
        a2.textContent = 1;
    }
    else if(answer !== 'a' && topic == 1){
        result1.textContent = "Incorrect! Try again.";
        result1.style.color = 'red';
        ans1 = 0;
        a1.textContent = 0;
    }
    else if(answer !== 'c' && topic == 2){
        result2.textContent = "Incorrect! Try again.";
        result2.style.color = 'red';
        ans2 = 0;
        a2.textContent = 0;
    }
  
    var total =+ (Number(a1.textContent) + Number(a2.textContent));
   
    Showresult.textContent = "Quiz มีทั้งหมด " + topicHave + " ข้อ คุณตอบถูกทั้งหมด " + total + " ข้อ";
 }
 