# Use a imagem oficial do Node.js
FROM node:14

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de configuração do projeto
COPY package.json yarn.lock ./

# Instala as dependências do projeto
RUN yarn install

# Copia todo o código do projeto para o container
COPY . .

# Executa o comando de build do Next.js
RUN yarn build

# Comando padrão para iniciar a aplicação
CMD ["yarn", "start"]
