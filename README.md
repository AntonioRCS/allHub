# allHub · Meu currículo em formato de site

Oi, eu sou o **Antônio Ricardo** 👋

Este projeto é o meu currículo, só que em vez de um PDF ele é uma página web. Aqui você encontra quem eu sou, por onde já passei, o que sei fazer e como falar comigo. Tudo isso foi feito com React e está publicado no GitHub Pages.

## 🔗 Visite o site

**https://antoniorcs.github.io/allHub/**

É uma página só. Funciona no computador, no tablet e no celular.

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

## Quer rodar na sua máquina?

Você só precisa ter o [Node.js](https://nodejs.org/) instalado. Depois:

```bash
git clone https://github.com/AntonioRCS/allHub.git
cd allHub
npm install
npm run dev
```

O terminal vai mostrar o endereço para abrir no navegador, normalmente `http://localhost:5173/allHub/`.

## Quer adaptar para o seu currículo?

Fique à vontade para usar este projeto como ponto de partida. Todo o conteúdo está na pasta `src/data/`:

- `perfil.js`: resumo, tecnologias, educação, certificados e atividades extras.
- `experiencias.js`: experiências profissionais.
- `projetos.js`: projetos que aparecem na página.
- `contato.js`: e-mail, telefone e GitHub.

Troque os textos por os seus e as cores em `src/index.css`, e o site já muda por inteiro.

## Scripts disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | Abre o projeto localmente e atualiza sozinho quando você salva um arquivo |
| `npm run build` | Gera a versão final do site na pasta `dist` |
| `npm run preview` | Mostra localmente a versão gerada pelo build |
| `npm run lint` | Verifica se o código segue os padrões do ESLint |
| `npm run deploy` | Gera o build e publica o site na branch `gh-pages` |

O `npm run deploy` já roda o `build` antes de publicar, então não precisa fazer os dois.

## Vamos conversar?

Se você gostou do projeto, tem uma vaga, uma ideia ou só quer trocar uma dica, me chama:

**Antônio Ricardo Corrêa Souza**
Uberlândia, MG

✉️ antoniorcs67@gmail.com

📱 +55 (34) 99645-6304

🐙 https://github.com/AntonioRCS
