function criarBarra(var_nome = 'Seu Nome', var_avatar = '', var_insta_nome = 'seunome', var_insta_url = 'https://instagram.com', var_seguidores = '1,2 mil', var_publi = '132') {

var varStatus = document.createElement("span");
var elementoPai = document.getElementsByTagName("typebot-standard")[0].shadowRoot.querySelector('.typebot-container');
    

var userBar = document.createElement("div");
userBar.className = "user-bar";

var backButton = document.createElement("div");
backButton.className = "back";
backButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>`;

// Adicionando um evento de clique para redirecionar quando o botÃ£o de volta for clicado
backButton.addEventListener("click", function() {
window.location.href = `${var_insta_url}`; // Substitua pelo URL desejado
});

var avatar = document.createElement("div");
avatar.className = "avatar";
avatar.innerHTML = '<img src="'+var_avatar+'">';

var name = document.createElement("div");
name.className = "name";
name.innerHTML = '<span>'+var_nome+'</span>&nbsp<span style="float: right" data-testid="psa-verified" data-icon="psa-verified" class=""><svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18" xml:space="preserve"><polygon id="Star-2" fill="#0099FD" points="9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9 "></polygon><polygon id="Check-Icon" fill="#FFFFFF" points="13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4 "></polygon></svg></span><span class="status"></span>';

varStatus.className = "status";
name.appendChild(varStatus)

var moreActions = document.createElement("div");
moreActions.className = "actions more";
//moreActions.innerHTML = '<i class="zmdi zmdi-more-vert"></i>';

var attachmentAction = document.createElement("div");
attachmentAction.className = "actions attachment";
attachmentAction.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-camera-video" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"/>
</svg>`;

var phoneAction = document.createElement("div"); // Alterado para um elemento de link <a>
phoneAction.className = "actions";
phoneAction.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>`;
// Adicionando um evento de clique para redirecionar quando o botÃ£o de volta for clicado
phoneAction.addEventListener("click", function() {
window.location.href = `${var_insta_url}`; // Substitua pelo URL desejado
});

userBar.appendChild(backButton);
userBar.appendChild(avatar);
userBar.appendChild(name);
userBar.appendChild(moreActions);
userBar.appendChild(attachmentAction);
userBar.appendChild(phoneAction); // Adicionado o elemento <a> com o Ã­cone do telefone

if (elementoPai) {
    elementoPai.prepend(userBar);
  }

  
  const botBody = elementoPai
  const status = varStatus;
  
  createInfoMessage();
  
  function createInfoMessage() {
  const div = document.createElement('div');
  const infoHTML = `<div>
  <div class="user-metadata">
      <div class="avatar">
          <div>
              <img src="${var_avatar}" alt="avatar">
          </div>
          <div class="primary-info">
              <p class="name">${var_nome}</p>
              <p>Instagram â€¢ ${var_insta_nome}</p>
          </div>
          <div class="secondary-info">
              <p>${var_seguidores} seguidores â€¢ ${var_publi} publicaÃ§Ãµes</p>
              <p>Segue vocÃª</p>
          </div>
          <a href="${var_insta_url}" target="_blank">ver perfil</a>

      </div>
  </div>
</div>`;
  
  div.innerHTML = infoHTML;
  const messagesContainer = botBody.querySelector('.typebot-chat-view');
  messagesContainer.insertBefore(div, messagesContainer.firstChild);
  }
  
  setInterval(() => {
    const isTyping = botBody.querySelector('.bubble1');
    const sibling = isTyping?.parentElement?.parentElement?.nextSibling;
  
    if(isTyping && sibling.src) {
      status.innerText = 'gravando audio...'
    } else if(isTyping) {      
      status.innerText = 'digitando...'
    } else {
      status.innerText = 'Online'
    }
  
  }, 400)
  
  var cssId = 'myCss';  // you could encode the css path itself to generate id..
  if (!document.getElementById(cssId))
  {
      var head  = document.getElementsByTagName("typebot-standard")[0].shadowRoot.querySelector('.typebot-container');
      var link  = document.createElement('link');
      link.id   = cssId;
      link.rel  = 'stylesheet';
      link.type = 'text/css';
      link.href = 'https://cdn.jsdelivr.net/gh/igorlemoes/template_typebot_instagram@0.0.1/style.css';
      link.media = 'all';
      head.appendChild(link);
  }
}