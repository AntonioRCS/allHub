# allHub · Meu currículo em formato de site

Oi, eu sou o **Antônio Ricardo** 👋

Este projeto é o meu currículo, só que em vez de um PDF ele é uma página web. Aqui você encontra quem eu sou, por onde já passei, o que sei fazer e como falar comigo. Tudo isso foi feito com React e está publicado no GitHub Pages.

## 🔗 Visite o site

**https://antoniorcs.github.io/allHub/**

É uma página só, com menu no topo para você navegar entre as seções. Ela funciona no computador, no tablet e no celular.

## O que você vai encontrar

- **Sobre:** uma apresentação rápida e meu resumo profissional.
- **Minha Jornada:** minhas experiências, da mais recente para a mais antiga, com o que fiz em cada lugar e as tecnologias que usei (NAICA, Algar Tech, System ID, GAP Sistemas e Hospital de Clínicas da UFU).
- **Tecnologias, educação e certificados:** uma barra lateral com as ferramentas que uso, minha formação (UFU e IFTM) e meus cursos.
- **Além do código:** teatro e cheerleading, e o que essas atividades me ensinaram sobre comunicação e trabalho em equipe.
- **Projetos:** o que estou construindo, com links para o GitHub.
- **Contato:** e-mail, WhatsApp e GitHub.

## Feito com

- **React 19:** um componente para cada seção da página.
- **Vite 7:** para rodar o projeto e gerar a versão final.
- **CSS puro:** com as cores e fontes da minha identidade visual. As cores são roxo (`#BF70FF` e `#800080`), preto e branco. As fontes são Manrope nos títulos, Inter no texto e Space Grotesk nos detalhes.
- **ESLint:** para manter o código padronizado.
- **gh-pages:** para publicar o site com um comando.

## Como o projeto está organizado

```
allHub/
├── index.html
├── vite.config.js          # base: '/allHub/' (necessário no GitHub Pages)
├── package.json            # scripts e dependências
├── public/img/             # favicon
└── src/
    ├── main.jsx            # ponto de entrada
    ├── App.jsx             # monta a página
    ├── index.css           # variáveis, fontes e estilos globais
    ├── components/         # um componente por seção (JSX + CSS)
    │   ├── Header/
    │   ├── Hero/
    │   ├── Jornada/
    │   ├── Projetos/
    │   ├── Contato/
    │   └── Footer/
    └── data/               # o conteúdo do currículo, separado da interface
        ├── perfil.js
        ├── experiencias.js
        ├── projetos.js
        └── contato.js
```

A ideia é que o conteúdo (os textos do currículo) fique separado da aparência. Assim dá para atualizar uma experiência sem mexer em nenhum componente.

## Quer rodar na sua máquina?

Você só precisa ter o [Node.js](https://nodejs.org/) instalado. Depois:

```bash
git clone https://github.com/AntonioRCS/allHub.git
cd allHub
npm install
npm run dev
```

O terminal vai mostrar o endereço para abrir no navegador, normalmente `http://localhost:5173/allHub/`.

## Scripts disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | Abre o projeto localmente e atualiza sozinho quando você salva um arquivo |
| `npm run build` | Gera a versão final do site na pasta `dist` |
| `npm run preview` | Mostra localmente a versão gerada pelo build |
| `npm run lint` | Verifica se o código segue os padrões do ESLint |
| `npm run deploy` | Gera o build e publica o site na branch `gh-pages` |

O `npm run deploy` já roda o `build` antes de publicar, então não precisa fazer os dois.

## Publicando no GitHub Pages

1. Confira se o `vite.config.js` tem `base: '/allHub/'` e se o `homepage` do `package.json` aponta para `https://antoniorcs.github.io/allHub/`.
2. Rode `npm run deploy`.
3. No GitHub, vá em **Settings > Pages** e escolha a branch `gh-pages` com a pasta `/ (root)`.
4. Espere alguns minutos e o site estará no ar.

## Quer adaptar para o seu currículo?

Fique à vontade para usar este projeto como ponto de partida. Todo o conteúdo está na pasta `src/data/`:

- `perfil.js`: resumo, tecnologias, educação, certificados e atividades extras.
- `experiencias.js`: experiências profissionais.
- `projetos.js`: projetos que aparecem na página.
- `contato.js`: e-mail, telefone e GitHub.

Troque os textos por os seus e as cores em `src/index.css`, e o site já muda por inteiro.

## Vamos conversar?

Se você gostou do projeto, tem uma vaga, uma ideia ou só quer trocar uma dica, me chama:

**Antônio Ricardo Corrêa Souza**
Uberlândia, MG
✉️ antoniorcs67@gmail.com
📱 +55 (34) 99645-6304
🐙 https://github.com/AntonioRCS
