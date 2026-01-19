# Grêmio Recreativo Cultural Escola de Samba Galeria do Ritmo

Site institucional da escola de samba **Grêmio Recreativo Cultural Escola de Samba Galeria do Ritmo**, desenvolvido com foco em:

- Identidade visual
- Responsividade
- Usabilidade mobile
- Código limpo e organizado

O projeto foi pensado para representar uma instituição cultural, respeitando sua história e identidade, com um layout moderno, acessível e consistente com sua proposta institucional.

---

## 🔗 Tecnologias Utilizadas

- **React** — biblioteca para construção da interface
- **Vite** — ferramenta de build e desenvolvimento
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3** (Flexbox e Media Queries)

> Não foi utilizado Bootstrap ou frameworks de UI prontos, priorizando identidade visual própria e maior controle sobre o layout.

---

## 📱 Responsividade

O site foi desenvolvido seguindo a abordagem **mobile-first**, garantindo:

- Menu hambúrguer no mobile
- Navegação fluida
- Logo centralizada e legível em telas pequenas
- Layout adaptado para desktop, tablet e celular

---

## 🎨 Identidade Visual

A identidade visual segue a paleta institucional da escola:

- **Azul institucional** como cor base
- **Dourado** aplicado como destaque (linhas, hovers e separadores)
- Uso controlado do dourado para manter elegância e legibilidade

---

## 🧭 Estrutura de Navegação

O site possui as seguintes seções/páginas:

- História
- Diretoria
- Ações
- Galeria
- Playlist
- Organograma
- Links

No desktop, o menu é centralizado.  
No mobile, o menu ocupa a tela inteira com rolagem interna.

---

## 🗂 Estrutura do Projeto

```text
src/
├─ components/
│  ├─ Header.jsx
│  ├─ Hero.jsx
│  └─ ...
├─ pages/
│  ├─ Home.jsx
│  ├─ Galeria.jsx
│  ├─ Historia.jsx
│  └─ ...
├─ styles/
│  └─ global.css
├─ App.jsx
└─ main.jsx
```

- Componentes reutilizáveis
- Separação clara entre páginas e componentes
- CSS modularizado por responsabilidade

## ▶️ Como Rodar o Projeto Localmente

Pré-requisitos:
- Node.js (LTS)
- npm

```bash
npm install
npm run dev
```
- Acesse no navegador

```bash
http://localhost:5173
```

## 📌 Boas Práticas Aplicadas
- Mobile-first
- Separação de responsabilidades
- Componentização
- Layout sem dependência de frameworks visuais
- Uso consciente de cores institucionais
- Código legível e de fácil manutenção