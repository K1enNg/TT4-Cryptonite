FROM node:22.3.0 AS base

WORKDIR /app

COPY package.json .
RUN npm install --omit-dev
COPY vite.config.js . index.html ./ eslint.config.js ./
COPY /src ./src

FROM base AS dev
RUN npm run build

CMD [ "node", "/src" ]