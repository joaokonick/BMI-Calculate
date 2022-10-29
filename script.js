const calculate = document.getElementById('calculate');

function bmi (){
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if(name !== '' && height !== '' && weight !== ''){

        const calBMI = (weight / (height * height)).toFixed(1);

        let classification = '';

          if (calBMI < 18.5) {
            classification = 'Under Weight';
          } else if (calBMI < 25){
              classification = 'Ideal weight Congratulations!!!';
          }  else if (calBMI < 30){
              classification ='You are a little Overweight';
          }else if(calBMI < 35){
            classification = 'With Obesity grade I';
          }else if(calBMI < 40){
            classification = 'with obesity grade II'
          }else {
            classification = 'with obesity grade III. Caution!'
          }
        result.textContent = `${name} your BMI is ${calBMI} and you are ${classification}`;
    }else{
     result.textContent = 'Fill in the Value!'   
    }


}

calculate.addEventListener('click', bmi);