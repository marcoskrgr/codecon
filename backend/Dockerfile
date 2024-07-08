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

# Expor a porta que a aplicação usará
EXPOSE 4000

# Comando para rodar o servidor
CMD ["node", "server.js"]
