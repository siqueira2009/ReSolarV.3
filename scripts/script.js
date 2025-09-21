// Rodar quando o documento inicializa
let opcoes = document.getElementsByClassName("option");
let opcoesResp = document.getElementsByClassName("optionResp");
opcoes[0].classList.toggle('selected');
opcoesResp[0].classList.toggle('selected');

// Reciclar levar até seção
let buttonReciclar = document.getElementById('reciclarBtn');
let destinoReciclar = document.getElementById('reciclar');

buttonReciclar.addEventListener('click', function(){
    if (destinoReciclar) {
        destinoReciclar.scrollIntoView({behavior: 'smooth'});
    }
});

// Saber mais levar até propósito
let buttonSaber = document.getElementById('saberMais');
let saberDestino = document.getElementById('proposito');

buttonSaber.addEventListener('click', function(){
    if (saberDestino) {
        saberDestino.scrollIntoView({behavior: 'smooth'});
    }
});

// Menu responsivo
let menuBtn = document.getElementById('menu');
let menu = document.getElementById('menuResp');
let navMob = document.getElementById('navMob');
let aberto = false;

menuBtn.addEventListener('click', function () {
    navMob.classList.toggle('ativo');
});

// Funcionamento
let funcTextos = [
    "O processo começa com o registro completo das informações do painel solar que será destinado à reciclagem. O usuário acessa a plataforma e insere dados como o modelo do painel, fabricante, ano de aquisição, estado atual de funcionamento e histórico de manutenção, se houver. Além disso, são solicitadas algumas informações pessoais básicas, como nome, endereço e forma de contato, para que a equipe responsável possa dar continuidade ao processo de forma segura e eficiente. Esse cadastro detalhado é essencial para garantir e facilitar a coleta do painel, além de permitir a análise adequada das condições do equipamento. Com esses dados, é possível avaliar a viabilidade de reaproveitamento, garantindo mais segurança e eficácia no processo.",
    "Após o registro completo das informações do painel solar e dos dados do usuário, o usuário escolha uma data e horário disponível para a coleta do equipamento, com base na disponibilidade logística e localização do solicitante. Uma equipe especializada se dirige até o local indicado para realizar o transporte adequado, seguindo normas de segurança tanto para o equipamento quanto para o meio ambiente. Essa etapa garante que o painel chegue em boas condições ao centro de reciclagem, permitindo uma avaliação técnica mais precisa. O agendamento dá liberdade ao usuário, que não precisa se preocupar com o deslocamento do equipamento, e agiliza todo o processo de reutilização ou descarte correto dos materiais envolvidos.",
    "Quando o painel solar chega ao centro de reciclagem, ele passa por uma análise técnica feita por profissionais especializados. Nessa avaliação, são verificados o estado físico do painel, sua capacidade de geração de energia, possíveis falhas estruturais ou elétricas, desgaste dos materiais e a presença de componentes danificados. O objetivo é determinar se o equipamento ainda possui potencial de uso, mesmo que com performance reduzida. Esse processo é importante porque, sempre que possível, o reaproveitamento do painel é priorizado antes de se considerar o descarte. Com essa triagem, é possível evitar o desperdício de materiais e reduzir a geração de resíduos, otimizando o ciclo de vida útil do painel solar.",
    "Se após a análise técnica for constatado que o painel solar ainda apresenta boas condições de funcionamento, ele passa por uma etapa de manutenção básica, onde recebe pequenos reparos para restaurar sua eficiência e segurança. Em seguida, é disponibilizado para revenda a um preço acessível, promovendo a reutilização e evitando o descarte prematuro. No entanto, caso o painel esteja danificado de forma irreversível ou ineficiente para uso, ele é cuidadosamente desmontado. Seus componentes, como o vidro, silício e metais pesados (como chumbo), são separados de forma técnica e segura, seguindo os protocolos ambientais. Isso garante que nenhum material perigoso seja descartado de forma incorreta, promovendo um ciclo de reciclagem responsável.",
    "Os materiais obtidos a partir da desmontagem dos painéis solares, como vidro, silício, alumínio e metais pesados como chumbo, passam por processos de separação e purificação, sendo preparados para reaproveitamento industrial. Após essa etapa, eles são direcionados para empresas especializadas que utilizam essas matérias-primas em sua linha de produção. Esses materiais podem ser aplicados em novos painéis solares, baterias, eletrônicos ou outros produtos industriais. Com isso, promove-se a economia circular, reduzindo a necessidade de extração de novos recursos da natureza. O reaproveitamento adequado também evita a contaminação do solo e da água, além de gerar receita para o sistema, tornando o ciclo financeiramente sustentável e ambientalmente correto.",
    "Depois de concluídas as etapas de coleta, avaliação e reaproveitamento ou reciclagem dos materiais, o usuário que realizou o descarte correto do painel solar recebe créditos como forma de recompensa. Esses créditos são calculados com base em fatores como o estado do painel, o valor dos materiais recuperados e a possibilidade de revenda do equipamento. Os créditos podem ser utilizados como descontos na compra de novos painéis solares em empresas parceiras da plataforma, incentivando a troca por tecnologias mais eficientes e sustentáveis. Além disso, esse sistema de bonificação reforça a responsabilidade ambiental, ao transformar o descarte consciente em benefício direto para o usuário, promovendo engajamento e adesão à causa.",
]

let funcImgs = [
    "Cadastro.svg",
    "Agendamento.svg",
    "Análise.svg",
    "Desmontagem.svg",
    "Venda.svg",
    "Benefícios.svg"
]

function opt(clicado, tipo) {
    let funcTexto = document.getElementById("funcText");
    let funcImg = document.getElementById("funcImg");

    if (tipo == 'normal') {
        for(var x = 0; x < opcoes.length; x++) {
            opcoes[x].classList.remove('selected');
        }
    
        opcoes[clicado].classList.toggle('selected');
    } else if (tipo =='mobile') {
        for(var x = 0; x < opcoesResp.length; x++) {
            opcoesResp[x].classList.remove('selected');
        }
    
        opcoesResp[clicado].classList.toggle('selected');
    }

    funcTexto.innerHTML = funcTextos[clicado];
    funcImg.setAttribute("src", `imgs/SVGs/Funcionamento/${funcImgs[clicado]}`)

}

// Dúvidas
function duvida(numDuv) {
    let abertas = document.getElementsByClassName('respostaAberta');
    let setas = document.getElementsByClassName('seta-abrir');
    for (let i = abertas.length - 1; i >= 0; i--) {
        if (abertas[i].id === `resposta${numDuv}`) continue;
        abertas[i].classList.remove('respAtivo', 'respostaAberta');
        setas[i].classList.remove('aberta')
    }

    let respostaAtual = document.getElementById(`resposta${numDuv}`);

    respostaAtual.classList.toggle('respAtivo');
    setas[numDuv].classList.toggle('aberta');
    respostaAtual.classList.toggle('respostaAberta');
}

// Animação do ícone reciclar 

let reciclarIcon = document.getElementById('reciclarIcon');
let reciclarButton = document.getElementById('reciclarBtn');

reciclarButton.addEventListener('mouseover', function(){
        reciclarIcon.style.rotate = '360deg';
        reciclarIcon.style.transition = 'rotate 0.6s';
});

reciclarButton.addEventListener('mouseout', function(){
        reciclarIcon.style.rotate = '0deg';
});

// Animação do ícone saber mais 

let saberIcon = document.getElementById('saberMaisIcon');
let saberButton = document.getElementById('saberMais');

saberButton.addEventListener('mouseover', function(){
    saberIcon.style.marginBottom = '10px';
    saberIcon.style.transition = 'margin-bottom 0.35s';

    setTimeout(() => {
        saberIcon.style.marginBottom = '-10px';
    }, 350);

    setTimeout(() => {
        saberIcon.style.marginBottom = '0px';
    }, 700);
});

saberButton.addEventListener('mouseout', function(){
        saberIcon.style.marginTop = '0px';
});