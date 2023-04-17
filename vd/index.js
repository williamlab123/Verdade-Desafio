// let container = document.querySelector(".container");
// let btn = document.getElementById("spin");

// btn.onclick = function () {
//   let deg = Math.floor(Math.random() * 10000);
//   container.style.transition = "all 10s ease-out";
//   container.style.transform = `rotate(${deg}deg)`;
//   setTimeout(() => {
//     container.style.transition = "none";
//     let actualDeg = deg % 360;
//     container.style.transform = `rotate(${actualDeg}deg)`;
//   }, 10000);
// };

// function spin() {
//   const container = document.querySelector('.container');
//   const arrow = document.querySelector('.arrow');
//   const spinButton = document.getElementById('spin');
//   const slices = document.querySelectorAll('.container div');

//   let deg = Math.floor(5000 + Math.random() * 5000);

//   spinButton.style.pointerEvents = 'none';

//   container.style.transition = 'all 5s ease-out';
//   container.style.transform = `rotate(${deg}deg)`;

//   let winningSlice = slices[Math.floor(deg % 360 / (360 / slices.length))];
//   let winningColor = window.getComputedStyle(winningSlice).backgroundColor;

//   setTimeout(function()
//    {
//     spinButton.style.pointerEvents = 'auto';
//     arrow.style.borderColor = winningColor;
//   }, 5000);
// }


///////////////////////////////////// PEGAR OS PARCIIPANTES DO POP-UP
  


////////////////////// VERIFICA SE O JOGO POSSUI O NUMERO MINIMO DE PARTICIPANTES


// function canContinue()
// {


//   if(participantes.length < 2)
//   {
//     alert("Adicione ao menos 2 pessoas para poder jogar")
//     return;
//   }
//   else
//   {
    
//   }
// }






const lista_de_participantes = document.getElementById('participants-list');
const btn_add_participante = document.getElementById('add-participant');
const nomeInput = document.getElementById('nome');

let participantes = [];











function addParticipant() {
  const participant = nomeInput.value;
  if (participant) {
    participantes.push(participant);
    const li = document.createElement('li');
    li.innerText = participant;
    lista_de_participantes.appendChild(li);
    nomeInput.value = '';
  }
}


function removeParticipant(index) {
  participantes.splice(index, 1);
  renderParticipants();
}

function renderParticipants() {
  lista_de_participantes.innerHTML = '';
  participantes.forEach((participant, index) => {
    const li = document.createElement('li');
    li.innerText = participant;
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remover';
    removeButton.addEventListener('click', () => removeParticipant(index));
    li.appendChild(removeButton);
    lista_de_participantes.appendChild(li);
  });
}

btn_add_participante.addEventListener('click', addParticipant);


const buttonClose = document.getElementById("pronto");
buttonClose.addEventListener("click", () => {
  const participantsList = document.getElementById("participants-list");
  const participantNames = participantsList.getElementsByTagName("li");
  const participantsTitle = document.getElementById("participants-title");
  participantsTitle.insertAdjacentHTML("afterend", "<ul id='participants' class='participants-list'></ul>");
  const participants = document.getElementById("participants");
  for (let i = 0; i < participantNames.length; i++) {
    participants.insertAdjacentHTML("beforeend", `<li>${participantNames[i].textContent}</li>`);
  }
  participantsList.innerHTML = "";
});




//FECHA O POP-UP QUANDO O BOTAO PRONTO É PRESSIONADO
// Seleciona o botão "Pronto"
const btn_close = document.getElementById("pronto");

// Seleciona o pop-up
const pop_up = document.getElementById("myModal");

// Adiciona um ouvinte de eventos ao botão "Pronto"
btn_close.addEventListener("click", function () {
  // Fecha o pop-up
  pop_up.style.display = "none";
});


///////// GERA OS DESAFIOS E COLOCA NO POP-UP










const mainContainer = document.querySelector(".container");
const spinButton = document.getElementById("spin");
const challenges =
  [
    "Beije alguém do sexo oposto",
    "Faça massagem nas costas de alguem da roda por 2 minutos",
    "Passe essa e as proximas 3 rodadas no colo de alguem. \
     Se voce for homem, pode trocar e escolher uma mulher para sentar no seu colo(se ela quiser)",
    "Escolha alguem da roda, vá em outro comodo e fique com ela la por 5 minutos",
    "Faça 20 flexoes ou de um selinho em alguem da roda",
    "Escolha alguem da roda e de uma mordida nela(em qualquer lugar)",
    "Beba 2 doses ou fale um fetiche sexual seu",
    "Fique abraçado com alguem da roda pelas proximas 3 rodadas",
    "Tire a camisa ou beba 2 doses(vale para mulheres tambem)",
    "Revele a última mensagem que você mandou no WhatsApp",
    "Faça massagem nos pés de alguem da roda",
    "Engolir um gelo em menos de 1 minuto sem voltá-lo ao copo",
    "Ligue ou mande mensagem para alguém que por algum motivo a pessoa não conversa há muito tempo",
    "Coloque a mao no peito de alguem da roda e fique até o final da proxima rodada",
    "Ligue para a pizzaria e pergunte se você pode devolver uma pizza",
    "Escolha alguem da roda do sexo oposto e troque de roupa com ela ou beba 2 doses",
    "Coloque o dedo na boca de alguem na roda",
    "De um tapa na bunda de alguem da roda",
    "Chupe um limao",
    "Faça uma queda de braço com a pessoa a sua esquerda",
    "Escolha alguem da roda e faça uma flexao com ela em suas costas",
    "De um selinho em todos do sexo oposto (ou do mesmo) da roda. Quem se recusar toma 1 dose",
    "De uma nota para a beleza de todos na roda(seja sincero(a))",
    "Escolha alguem que tenha se recusado a comprir um desafio e de um tapa na cara dela",
    "Voce tem 15 segundos para beijar alguem",
    "Escolha alguem da roda e explique em 10 segundos do porque voce nao ficaria com ela",
    "Escolha alguem e faça uma posiçao sexual com ela",
    "Pegue seu celular, entre no Instagram e mande uma mensagem para alguem que voce nao conhece",
    "Fique de casal com alguem por 3 rodadas(isso quer dizer que nem voce nem seu parceiro(a) podem beijar outra pessoa). \
     Voces devem ficar juntos, como um casal ficaria",
    "Escolha alguem e morda a bunda dessa pessoa",
    "Escolha alguem da roda e mostre um nude seu",
    "Ligue para uma pizzaria e peça para entregar 20 pizzas",
    "Tire 2 peças de roupa ou beba 3 doses",
    "Rebole no colo de alguem da roda ou escolha alguem para rebolar em voce",
    "Escolha alguem da roda e de um selinho nela",
    "Escolha alguem da roda e mostre como voce faria ela se apaixonar por voce",
    ""









  ];

const verdades = [
  "Quem você levaria dessa roda para uma ilha deserta?",
  "Com quantas pessoas dessa roda voce ficaria? Caso a resposta seja 1, diga quem é e os que nao foram escolhidos devem beber uma dose",
  "Você já brigou na rua? Porque?",
  "Já ficou com o ex de uma amigo(a)?",
  "Você já foi suspenso da escola?",
  "Qual foi o sonho mais estranho que você já teve?",
  "Se hoje fosse o seu último dia de vida, o que você faria?",
  "De 0 a 10, que nota você daria para o (escolha alguém) em termos de (beleza, simpatia, inteligência)?",
  "De 0 a 10, escolha alguém e diga qual a chance dele(a) beijar você",
  "É verdade que você já ficou com alguém dessa roda?",
  "Se o mundo fosse acabar e você pudesse salvar apenas uma pessoa para sobreviver, quem seria?",
  "É verdade que você já mandou nudes?",
  "Você já beijou mais de uma pessoa no mesmo dia? Quantas?",
  "Você ficaria tranquilo se todo o histórico do seu WhatsApp ficasse público agora?",
  "É verdade que você ficaria com alguém que está presente aqui na roda?",
  "Qual é a sua técnica de sedução infalível?",
  "Qual o lugar mais inusitado que você já transou?",
  "Algemas, cordas ou vendas?",
  "Já transou em local público?",
  "Já fez sexo anal?",
  "Transaria por dinheiro?",
  "Ja achou que estava gravida ou que engravidou alguem?",
  "Quantos foras voce ja tomou?",
  "Ja chegou em alguem pessoalmente?",
  "Ficaria com alguem do mesmo sexo por 10 mil reais?",
  "Faria sexo dentro de um templo ou igreja?",
  "Ja fez sexo com seus pais ou os pais dele(a) em casa?",
  "Ja gozou na cara de alguem ou ja recebeu gozada na cara?",
  "Sem camisinha é melhor?",
  "Em local proibido é melhor?",
  "Ficaria com alguem que namora ou é casado(a)?",
  "Se sua chefe quisesse fazer sexo com voce, voce faria?",
  "Se voce fosse um professor(a) universitario e um aluno(a) quisesse transar com voce, voce transaria?",
  "Ja transou com alguem do tinder?",
  "Ja fez sexo no cinema?",
  "Ja foi pego transando?",
  "Ja transou no banheiro da escola/faculdade?",
  ""


];

let container = document.querySelector(".container");
let btn = document.getElementById("spin");

btn.onclick = function () {



 

  let deg = Math.floor(Math.random() * 10000);
  container.style.transition = "all 10s ease-out";
  container.style.transform = `rotate(${deg}deg)`;
  setTimeout(() => {
    container.style.transition = "none";
    let actualDeg = deg % 360;
    container.style.transform = `rotate(${actualDeg}deg)`;

    let winningSlice = getWinningSlice(actualDeg);
    if (winningSlice) {
      let winningValue = winningSlice.dataset.value;
      // alert(`The spin wheel has stopped at ${winningValue}`);
      if (winningValue === "verdade") {
        const titulo = document.getElementById("verdade-desafio"); // Seleciona o elemento <h2> pelo ID
        titulo.textContent = "Verdade para:"; // Define o texto do elemento

        const popup = document.getElementById("challenge-modal");
        const challengeText = document.getElementById("challenge-text");
        let index = Math.floor(Math.random() * challenges.length);
        let verdade = verdades[index];
        challengeText.textContent = verdade;
        popup.style.display = "block";
        10000;



      }
      else if (winningValue === "desafio") {
        const titulo = document.getElementById("verdade-desafio"); // Seleciona o elemento <h2> pelo ID
        titulo.textContent = "Desafio para:"; // Define o texto do elemento

        const popup = document.getElementById("challenge-modal");
        const challengeText = document.getElementById("challenge-text");
        let index = Math.floor(Math.random() * challenges.length);
        let challenge = challenges[index];
        challengeText.textContent = challenge;

        popup.style.display = "block";
        10000;


      }
      function indiceAleatorio(array) {
        let indice = Math.floor(Math.random() * array.length);
        return indice;
      }

      function participanteAleatorio(array) {
        let indice = indiceAleatorio(array);
        let participante = array[indice];
        // alert("O participante selecionado é: " + participante); 
        const popup = document.getElementById("challenge-modal");
        const participanteEscolhido = document.getElementById("desafiado");
        participanteEscolhido.textContent = participante;
        popup.style.display = "block";
        10000;

       

      }
      participanteAleatorio(participantes);



    }


  }, 10000);
  se
};
// setTimeout(() => {
//   const popup = document.getElementById("challenge-modal");
//   const challengeText = document.getElementById("challenge-text");
//   let index = Math.floor(Math.random() * challenges.length);
//   let challenge = challenges[index];
//   challengeText.textContent = challenge;
//   popup.style.display = "block";
// }, 10000);

function getWinningSlice(degrees) {
  let slices = document.querySelectorAll(".container div");
  let sliceAngle = 360 / slices.length;
  let sliceIndex = Math.floor(degrees / sliceAngle);
  return slices[sliceIndex];
}








function addChallenge() {
  const challenge = prompt("Digite um desafio:");
  if (challenge) {
    challenges.push(challenge);
  }
}

const addChallengeButton = document.getElementById("add-challenge");
addChallengeButton.addEventListener("click", addChallenge);

const closeButton = document.getElementById("pronto");
closeButton.addEventListener("click", () => {
  const participantsList = document.getElementById("participants-list");
  const participantNames = participantsList.getElementsByTagName("li");
  const participantsTitle = document.getElementById("participants-title");
  participantsTitle.insertAdjacentHTML("afterend", "<ul id='participants' class='participants-list'></ul>");
  const participants = document.getElementById("participants");
  for (let i = 0; i < participantNames.length; i++) {
    participants.insertAdjacentHTML("beforeend", `<li>${participantNames[i].textContent}</li>`);
  }
  participantsList.innerHTML = "";
  const popup = document.getElementById("challenge-modal");
  popup.style.display = "none";
});

// const closeBtn = document.getElementById("close-popup");
// const popup = document.getElementById("challenge-modal");
// closeBtn.addEventListener("click", function() {
//   popup.style.display = "none";
// });






const participantsList = document.getElementById('participants-list');
const addParticipantButton = document.getElementById('add-participant');
const nameInput = document.getElementById('nome');



const closeBtn = document.querySelector("new-challenge");
const popup = document.querySelector("#challenge-modal");
closeBtn.addEventListener("click", function () {
  popup.style.display = "none";
});




///FECHA O POP-UP QUANDO CLICAR EM 'CONTINUAR'

function closePop() {
  
  document.getElementById("challenge-modal").style.display = "none";
}

//COLOCA UM PARTICIPANTE ALEATORIO NO POP-UP


document.getElementById("show-popup").addEventListener("click", showPop);

//ANIMAÇAO

const containerr = document.getElementById('participants-box');
const colors = ['#e74c3c', '#f1c40f', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#f39c12'];
const circles = 30;

for (let i = 0; i < circles; i++) {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  containerr.appendChild(circle);

  const size = Math.floor(Math.random() * 50) + 10;
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.background = colors[Math.floor(Math.random() * colors.length)];

  const left = Math.floor(Math.random() * 100) + 1;
  const top = Math.floor(Math.random() * 100) + 1;
  const animationDuration = Math.floor(Math.random() * 10) + 5;

  circle.style.left = `${left}%`;
  circle.style.top = `${top}%`;
  circle.style.animationDuration = `${animationDuration}s`;
}

