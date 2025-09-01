const storyText = document.getElementById('storyText');
const choice1Btn = document.getElementById('choice1Btn');
const storyContainer = document.getElementById('storyContainer');

let currentStep = 1;

function updateStory() {
    if (currentStep === 1) {
        storyText.textContent = 'A princesa, Aurora, cresceu em segredo com as três fadas boas. Mas, no seu 16º aniversário, ela se picou com um fuso e caiu em um sono profundo. O reino ficou em luto e uma bruma cobriu o castelo. Agora, o príncipe pode tentar salvar Aurora. Qual caminho ele seguirá?';
        choice1Btn.textContent = 'Entrar pela porta da floresta';
        choice1Btn.onclick = () => { 
            currentStep = 2; 
            updateStory(); 
        };
    } 
    else if (currentStep === 2) {
        storyText.textContent = 'O príncipe decidiu seguir pela porta da floresta e enfrentou inúmeros perigos. Ele atravessou um mar de espinhos e chegou ao castelo onde Aurora estava adormecida. Ao vê-la, o príncipe sentiu um grande amor e beijou-a.';
        choice1Btn.textContent = 'A história continua...';
        choice1Btn.onclick = () => { 
            currentStep = 3; 
            updateStory(); 
        };
    } 
    else if (currentStep === 3) {
        storyText.textContent = 'O beijo do príncipe quebrou o feitiço, e Aurora despertou. A bruma ao redor do castelo desapareceu e o reino voltou a florescer. Aurora e o príncipe se casaram e viveram felizes para sempre.';
        choice1Btn.textContent = 'Retornar ao início';
        choice1Btn.onclick = () => { 
            currentStep = 1; 
            updateStory(); 
        };
    }
}

// Iniciar a história
updateStory();
