FROM node:18

WORKDIR /app

RUN apt-get update && apt-get install -y default-mysql-client

COPY package*.json ./
RUN npm install

COPY . .

COPY wait-for-it.sh .
RUN chmod +x wait-for-it.sh

EXPOSE 5000

CMD ["./wait-for-it.sh"]
