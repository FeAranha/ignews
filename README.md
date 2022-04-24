# ignews

📚🚧 Projeto para pratica dos conceitos Next.js pelo curso ReactJS da 🚀 Rockteseat

- Camada Next.js entre o Frontend e Backend;
- Static Site Generation (SSG);
- Server Side Render (SSR);
- Stripe: API para inserção de produto e pagamento online com bandeiras Mastercard e Visa;
- Backend no Frontend: API route do Next.js;
- Autenticação de usuário com Next Auth, usando conta GitHub;
- Banco de Dados serverless FaunaDB não relacional e free schema para cadastro de usuário e subscrição em sites;

## 📝Feature:

- Inserção de CMS Prismic;
- Construção da pagina Posts;
- Navegação no menu;
- Componente ActiveLink;
- Validanddo assinatura ativa;

## Setup
- yarn;
- yarn dev;
- other terminal: sudo ./stripe listen --forward-to localhost:3000/api/webhooks
- .env.local: config variavel ambiente
