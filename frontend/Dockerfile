# Usar uma imagem oficial do Node.js como a base
FROM node:lts-iron

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar todos os arquivos do projeto para o diretório de trabalho
COPY . .

# Expor a porta que o Vite usará
EXPOSE 3000

# Comando para rodar o servidor de desenvolvimento do Vite
CMD ["npm", "run", "dev"]