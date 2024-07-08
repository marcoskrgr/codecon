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

# Compilar o aplicativo React
RUN npm run build

# Instalar um servidor estático para servir os arquivos compilados
RUN npm install -g serve

# Expor a porta que o servidor usará
EXPOSE 5000

# Comando para rodar o servidor estático
CMD ["serve", "-s", "build"]
