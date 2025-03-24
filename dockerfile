FROM node:22.3.0

WORKDIR /app

COPY package.json .

RUN npm install --omit-dev

COPY src/ src/

CMD [ "npm", "/src" ]