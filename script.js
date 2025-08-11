function enviar() {
  const mensagem = document.getElementById('msg').value;
  const logDiv = document.getElementById('log');

  if (!mensagem) {
    logDiv.innerText = "Please type your message";
    return;
  }

  // ⚠️ Substitua pela sua URL real do Pipedream Webhook:
  const webhookURL = "https://eoyfqotnuetzqqi.m.pipedream.net";

  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      type: "Text",
      text: mensagem,
      from: {
        id: "external_user_testclient",
        nickname: "Client Test"
      },
      metadata: {
        page: "webchat_webmessaging",
        origin: "github"
      }
    })
  })
  .then(() => {
    logDiv.innerText = "Mensagem enviada com sucesso!";
    document.getElementById('msg').value = "";
  })
  .catch((error) => {
    logDiv.innerText = "Erro ao enviar: " + error;
  });
}
