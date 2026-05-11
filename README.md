# Charles Siqueira Advocacia

Site institucional em **React puro (JavaScript)** com **Vite**, **Tailwind CSS** e **react-router-dom**.

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
├── assets/          # Imagens (retrato e hero)
├── components/
│   └── Layout.jsx   # Header + Footer
├── pages/
│   ├── Home.jsx
│   ├── Sobre.jsx
│   └── Contato.jsx
├── App.jsx          # Rotas
├── main.jsx         # Entry point
└── index.css        # Tailwind + tokens de design
```

## Stack
- React 18
- react-router-dom 6
- Tailwind CSS 3
- Vite 5
