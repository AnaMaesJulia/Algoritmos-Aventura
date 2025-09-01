const storyText = document.getElementById('storyText');
const choice1Btn = document.getElementById('choice1Btn');
const storyContainer = document.getElementById('storyContainer');

let currentStep = 1;

function updateStory() {
    if (currentStep === 1) {
        storyText.textContent = 'Era uma vez, em um reino distante, um rei e uma rainha que, após muitos anos de espera, tiveram uma linda filha chamada Aurora. Para celebrar seu nascimento, eles convidaram todas as fadas do reino. Mas esqueceram de chamar uma fada malvada, chamada Malévola, que, furiosa, lançou uma terrível maldição. Aurora se picaria com um fuso ao completar 16 anos e cairia em um sono profundo...';
        choice1Btn.textContent = 'Continuar a história';
        choice1Btn.onclick = () => { 
            currentStep = 2; 
            updateStory(); 
        };
    } 
    else if (currentStep === 2) {
        storyText.textContent = 'O rei e a rainha, desesperados, pediram ajuda de uma fada boa chamada Flora. Ela tentou suavizar a maldição e declarou: "Aurora não morrerá, mas cairá em um sono profundo, que só poderá ser quebrado por um beijo de amor verdadeiro." Para proteger a princesa, os pais a enviaram para viver com as fadas na floresta, longe de todos.';
        choice1Btn.textContent = 'A história continua...';
        choice1Btn.onclick = () => { 
            currentStep = 3; 
            updateStory(); 
        };
    } 
    else if (currentStep === 3) {
        storyText.textContent = 'Aurora cresceu em segredo com as três fadas. Ela era amada por todas e se tornava cada vez mais bela. No entanto, no dia do seu 16º aniversário, ela explorou um canto do castelo e, sem saber, encontrou um fuso mágico. Ao tocá-lo, o feitiço de Malévola se cumpriu e Aurora caiu em um sono profundo, assim como a maldição havia previsto.';
        choice1Btn.textContent = 'Escolha uma porta para o príncipe';
        choice1Btn.onclick = () => { 
            currentStep = 4; 
            updateStory(); 
        };
    }
    else if (currentStep === 4) {
        storyText.textContent = 'O príncipe soubera da história da princesa adormecida e decidira salvar Aurora. Ele poderia escolher entre duas portas mágicas para alcançar o castelo:';
        choice1Btn.textContent = 'Entrar pela porta da floresta';
        choice1Btn.onclick = () => { 
            currentStep = 5; 
            updateStory(); 
        };

        // Criação da segunda opção (porta do castelo)
        let choice2Btn = document.createElement("button");
        choice2Btn.textContent = 'Entrar pela porta do castelo';
        choice2Btn.classList.add("button");
        choice2Btn.onclick = () => { 
            currentStep = 6; 
            updateStory(); 
        };
        storyContainer.appendChild(choice2Btn);
    } 
    else if (currentStep === 5) {
        storyText.textContent = 'O príncipe entrou pela porta da floresta e, ao passar por arbustos mágicos, teve que lutar contra criaturas encantadas. Mas sua coragem e o amor por Aurora o ajudaram a atravessar. Chegando ao castelo, ele beijou Aurora e quebrou a maldição. Aurora acordou e o reino floresceu novamente!';
        choice1Btn.textContent = 'A história continua...';
        choice1Btn.onclick = () => { 
            currentStep = 7; 
            updateStory(); 
        };
        removeExtraButtons();
    } 
    else if (currentStep === 6) {
        storyText.textContent = 'O príncipe escolheu a porta do castelo e foi cercado por uma bruma densa, que o impedia de ver. No entanto, ele encontrou um caminho secreto, guiado por uma fada amiga. Chegando à torre onde Aurora dormia, o príncipe a beijou e quebrou a maldição. O castelo floresceu e a princesa acordou!';
        choice1Btn.textContent = 'A história continua...';
        choice1Btn.onclick = () => { 
            currentStep = 7; 
            updateStory(); 
        };
        removeExtraButtons();
    }
    else if (currentStep === 7) {
        storyText.textContent = 'Aurora e o príncipe se casaram em uma grande celebração. O reino, antes mergulhado em tristeza, agora floresceu com alegria e felicidade. Eles viveram juntos, governando o reino com sabedoria e bondade, e todos viveram felizes para sempre.';
        choice1Btn.textContent = 'Retornar ao início';
        choice1Btn.onclick = () => { 
            currentStep = 1; 
            updateStory(); 
        };
    }
}

function removeExtraButtons() {
    let buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        if (button !== choice1Btn) {
            button.remove();
        }
    });
}

// Iniciar a história
updateStory();
