# ignews
https://ignews-dev-fullstack.vercel.app/

📚🚧 Projeto para pratica dos conceitos Next.js pelo curso ReactJS da 🚀 Rockteseat

- Camada Next.js entre o Frontend e Backend;
- Static Site Generation (SSG);
- Server Side Render (SSR);
- Stripe: API para inserção de produto e pagamento online com bandeiras Mastercard e Visa;
- Backend no Frontend: API route do Next.js;
- Autenticação de usuário com Next Auth, usando conta GitHub;
- Banco de Dados serverless FaunaDB não relacional e free schema para cadastro de usuário e subscrição em sites;

## 📝Feature:
- Login/Logout com conta GitHub;
- Criação de posts com CMS Prismic;
- Pagina com Posts parcialmente visível, full acesso após ser assinante;
- Pagamento via API Stripe com bandeiras Master Card e VISA(4242 4242 4242);
- Navegação de menu com componente ActiveLink;
- Salva dados sem duplicidade;
- Validação de usuários e assinatura ativa;
- React-Icons ⚛;

## Setup
- yarn;
- yarn dev;
- other terminal: sudo ./stripe listen --forward-to localhost:3000/api/webhooks;
- .env.local: config variavel ambiente;
- APIs keys;

#JavaScript #TypeScript #SASS
