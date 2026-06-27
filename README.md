# Portfólio — Adriano Souza Fonseca

Site refeito do zero em **HTML5 + CSS3 + JavaScript puros**, sem nenhum framework
(Tailwind, Bootstrap, React, Swiper, Font Awesome, Devicon, etc.), para atender
às exigências da Atividade Prática de Fundamentos da Programação Web.

## Estrutura
```
portfolio-adriano/
├── index.html      → as 4 seções obrigatórias (Sobre mim, Formação, Portfólio, Contato)
├── style.css       → CSS puro, com tema claro/escuro via variáveis CSS
├── script.js       → JS puro: tema, menu mobile, terminal animado, validação do formulário
└── public/
    ├── profile.jpeg          → sua foto (copie a sua foto atual para aqui)
    └── projetos/*.png/.jpg   → prints dos seus projetos (copie os mesmos arquivos do site antigo)
```

**Importante:** copie sua pasta `public/` (foto de perfil e imagens dos projetos) do
site antigo para dentro desta nova pasta — os nomes dos arquivos já estão mantidos
iguais ao seu portfólio anterior, então basta colar a pasta `public` aqui dentro.

## O que foi removido/trocado em relação ao site antigo
- ❌ Tailwind CSS (proibido) → ✅ CSS3 puro com variáveis (`style.css`)
- ❌ Font Awesome / Devicon (bibliotecas externas) → ✅ removidos; visual baseado em tipografia
- ❌ Swiper.js (biblioteca de carrossel) → ✅ grade (`grid`) de projetos em CSS puro
- ✅ Mantidos: seu conteúdo real (currículo, formação, certificações, projetos)
- ✅ Adicionados: validação de formulário em JS puro, simulação de envio com mensagem
  de sucesso, menu mobile (hambúrguer) e alternância de tema claro/escuro — tudo
  sem bibliotecas, conforme a seção 5 do enunciado.

## Como publicar no GitHub Pages (50% da nota)
1. Crie um repositório público no GitHub. **O endereço final precisa conter seu nome**,
   então nomeie o repositório, por exemplo: `portfolio-adriano-souza-fonseca`.
2. Suba os arquivos desta pasta (`index.html`, `style.css`, `script.js`, `public/`) para
   a raiz do repositório.
3. Vá em **Settings → Pages → Branch: main → / (root) → Save**.
4. Seu site ficará disponível em algo como:
   `https://adrianoads910-max.github.io/portfolio-adriano-souza-fonseca/`
   (esse endereço já contém seu nome, atendendo à exigência do enunciado).

## Checklist antes de entregar
- [ ] Testar todos os links (repositório e demo de cada projeto)
- [ ] Confirmar que a foto e as imagens dos projetos aparecem corretamente
- [ ] Testar o formulário de contato (campos vazios, e-mail inválido, envio válido)
- [ ] Testar o menu mobile e o botão de tema claro/escuro
- [ ] Confirmar que o link publicado **não** mostra `localhost` ou `127.0.0.1`
- [ ] Tirar prints de cada seção com o endereço do GitHub Pages visível na barra do navegador
