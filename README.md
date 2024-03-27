# Template Do Instagram Para Typebot

Template para Typebot com design similar ao Instagram

____________________________________________________________

***OBS - Apenas para relembrar durante o desenvolvimento:**

>
> Após realizar modificações nos arquivos, script.js e style.css:
>
> Enviar as modificações para o Github e depois criar uma tag de versão, Ex:
>
> 1. git tag 0.0.1
> 2. git push origin 0.0.1
> 3. modificar a versão no script dentro do fluxo.
>
> `var script = document.createElement('script');
> script.src = "https://cdn.jsdelivr.net/gh/igorlemoes/template_typebot_instagram@0.0.1/script.js";
> document.getElementsByTagName('head')[0].appendChild(script);
> script.onload = function() {
>   criarBarra(
>     {{var_nome}},
>     {{var_avatar}},
>     {{var_insta_nome}},
>     {{var_insta_url}},
>     {{var_seguidores}},
>     {{var_publi}}
>   );
> };`
>
> 4. baixar o fluxo com a versão modificada e enviar para o repositório
>