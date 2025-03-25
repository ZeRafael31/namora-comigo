document.addEventListener("DOMContentLoaded", function () {
    const botaoNao = document.getElementById("nao");
    const botaoSim = document.getElementById("sim");
    const card = document.querySelector(".card");
  
    //Aqui o botão "Não!!!", toda vez que é passado o mouse em cima ele "teletransporta" pra algum lugar aleatório da tela.
    botaoNao.addEventListener("mouseover", function () {
      const larguraTela = window.innerWidth;
      const alturaTela = window.innerHeight;
  
      let novaPosX, novaPosY, colisao;
  
      do {
        novaPosX = Math.random() * (larguraTela - botaoNao.offsetWidth);
        novaPosY = Math.random() * (alturaTela - botaoNao.offsetHeight);
  
        //Aqui eu fiz um codiguin pra não sobrepor o botão "Sim!!!" na tela, deixa o botão sempre aparente.
        const colisaoSim =
          novaPosX < botaoSim.offsetLeft + botaoSim.offsetWidth &&
          novaPosX + botaoNao.offsetWidth > botaoSim.offsetLeft &&
          novaPosY < botaoSim.offsetTop + botaoSim.offsetHeight &&
          novaPosY + botaoNao.offsetHeight > botaoSim.offsetTop;
  
        //Aqui eu fiz um codiguin pra não sobrepor o texto na tela, deixando a mensagem sempre exibida.
        const colisaoTexto =
          novaPosX < card.offsetLeft + card.offsetWidth &&
          novaPosX + botaoNao.offsetWidth > card.offsetLeft &&
          novaPosY < card.offsetTop + card.offsetHeight &&
          novaPosY + botaoNao.offsetHeight > card.offsetTop;
  
        colisao = colisaoSim || colisaoTexto;
      } while (colisao);
  
      botaoNao.style.position = "absolute";
      botaoNao.style.left = `${novaPosX}px`;
      botaoNao.style.top = `${novaPosY}px`;
    });
  
    //Aqui exibe a mensagem quando aperta o botão "Sim!!!".
    botaoSim.addEventListener("click", function () {
      document.body.innerHTML = `
        <div class="mensagem">
          <h1>Perfeito! Agora vamos nos casar 💍❤️</h1>
        </div>
      `;
  
      //Aqui a gente põe um estilinho no script que aparece clicando no botão "Sim!!!".
      document.body.style.display = "flex";
      document.body.style.justifyContent = "center";
      document.body.style.alignItems = "center";
      document.body.style.height = "25vw";
      document.body.style.fontFamily = "Arial, sans-serif";
      document.body.style.textAlign = "center";
      document.body.style.borderRadius = "10px";
    });
  });
  