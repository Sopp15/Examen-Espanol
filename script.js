document.getElementById('examForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const correctAnswers = {
        q1: 'C',
        q2: 'B',
        q3: 'B',
        q4: 'B',
        q5: 'C'
    };

    const userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q2"]:checked')?.value,
        q3: document.querySelector('input[name="q3"]:checked')?.value,
        q4: document.querySelector('input[name="q4"]:checked')?.value,
        q5: document.querySelector('input[name="q5"]:checked')?.value
    };

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
        const userAnswer = userAnswers[question];
        const questionLabel = document.querySelector(`label[for="${question}"]`);
        const resultP = document.createElement('p');

        if (userAnswer === correctAnswer) {
            resultP.textContent = `${questionLabel.textContent} Correcto`;
            resultP.style.color = 'green';
        } else {
            resultP.textContent = `${questionLabel.textContent} Incorrecto. La respuesta correcta es: ${correctAnswer}`;
            resultP.style.color = 'red';
        }

        resultadosDiv.appendChild(resultP);
    }
});