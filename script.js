// script.js
// Portfólio de Adriano Souza Fonseca — JavaScript puro (sem jQuery/React/qualquer lib)

/* ======================================================
   1. TEMA CLARO/ESCURO
   Alterna o atributo data-theme no <html> e salva a
   preferência do usuário no localStorage.
====================================================== */
(function themeModule() {
  const html = document.documentElement;
  const toggleBtn = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');

  // Recupera tema salvo, ou usa a preferência do sistema operacional
  const saved = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (prefersDark ? 'dark' : 'light');

  applyTheme(initial);

  toggleBtn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('portfolio-theme', next);
  });

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    icon.textContent = theme === 'dark' ? '◑' : '◐';
  }
})();

/* ======================================================
   2. MENU RESPONSIVO (hamburguer)
   Mostra/esconde o menu em telas pequenas e fecha ao
   clicar em qualquer link, conforme pedido no enunciado.
====================================================== */
(function mobileMenuModule() {
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('primaryNav');

  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Fecha o menu mobile após o clique em um link de navegação
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ======================================================
   3. EFEITO DE "TERMINAL" DIGITANDO
   Pequena interação visual: simula um terminal digitando
   comandos, sem nenhuma biblioteca de animação.
====================================================== */
(function terminalModule() {
  const el = document.getElementById('typedLine');
  const lines = [
    '$ whoami',
    '> Adriano Souza Fonseca',
    '$ cat cargo.txt',
    '> Estagiário FullStack & Dev Freelancer',
    '$ status --build',
    '> sempre aprendendo algo novo ✓'
  ];

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    el.textContent = lines.join('\n');
    return;
  }

  let lineIndex = 0;
  let charIndex = 0;
  let buffer = '';

  function typeStep() {
    const fullLine = lines[lineIndex];

    if (charIndex <= fullLine.length) {
      el.textContent = buffer + fullLine.slice(0, charIndex);
      charIndex++;
      setTimeout(typeStep, 35);
    } else {
      buffer += fullLine + '\n';
      lineIndex = (lineIndex + 1) % lines.length;
      charIndex = 0;
      // Reinicia o "terminal" quando o ciclo de linhas termina
      if (lineIndex === 0) buffer = '';
      setTimeout(typeStep, 700);
    }
  }

  typeStep();
})();

/* ======================================================
   4. FORMULÁRIO DE CONTATO: validação + simulação de envio
   Exigência do enunciado: validar nome/e-mail/mensagem
   preenchidos, validar formato de e-mail, e simular o
   envio limpando o formulário e exibindo confirmação.
====================================================== */
(function contactFormModule() {
  const form = document.getElementById('contactForm');
  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');
  const mensagemInput = document.getElementById('mensagem');
  const btn = document.getElementById('btnEnviar');
  const successBox = document.getElementById('formSuccess');

  const erros = {
    nome: document.getElementById('erroNome'),
    email: document.getElementById('erroEmail'),
    mensagem: document.getElementById('erroMensagem'),
  };

  // Regex simples para validar formato "usuario@dominio.com"
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // impede o envio real / recarregamento da página

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const mensagem = mensagemInput.value.trim();

    let valido = true;
    valido = validarCampo(nomeInput, erros.nome, nome.length > 0, 'Informe seu nome.') && valido;
    valido = validarCampo(emailInput, erros.email, EMAIL_REGEX.test(email), 'Informe um e-mail válido (ex: usuario@dominio.com).') && valido;
    valido = validarCampo(mensagemInput, erros.mensagem, mensagem.length > 0, 'Escreva uma mensagem.') && valido;

    if (!valido) {
      successBox.textContent = '';
      return;
    }

    simularEnvio();
  });

  function validarCampo(input, erroEl, condicao, mensagemErro) {
    const field = input.closest('.field');
    if (condicao) {
      field.classList.remove('has-error');
      erroEl.textContent = '';
      return true;
    }
    field.classList.add('has-error');
    erroEl.textContent = mensagemErro;
    return false;
  }

  function simularEnvio() {
    // Feedback visual de "enviando" antes da confirmação
    btn.disabled = true;
    btn.textContent = 'Enviando...';
    successBox.textContent = '';

    setTimeout(() => {
      form.reset();
      btn.disabled = false;
      btn.textContent = 'Enviar mensagem';
      successBox.textContent = '✓ Mensagem enviada com sucesso!';

      // Some a mensagem de confirmação depois de um tempo
      setTimeout(() => { successBox.textContent = ''; }, 4000);
    }, 900);
  }
})();

/* ======================================================
   5. ANO ATUAL NO RODAPÉ
====================================================== */
document.getElementById('year').textContent = new Date().getFullYear();

/* ======================================================
   6. DESTAQUE DO LINK ATIVO NO MENU CONFORME O SCROLL
   Interação simples sugerida no enunciado: o item do menu
   correspondente à seção visível recebe destaque.
====================================================== */
(function activeSectionModule() {
  const sections = document.querySelectorAll('main .section');
  const links = document.querySelectorAll('.nav a[href^="#"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute('id');
      links.forEach((link) => {
        link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--accent)' : '';
      });
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sections.forEach((section) => observer.observe(section));
})();
