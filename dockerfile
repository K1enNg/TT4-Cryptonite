FROM node:23.11.0-slim AS base

WORKDIR /app

FROM base AS frontend-base
COPY client/package.json .
COPY client/package-lock.json .
RUN npm install --omit-dev
COPY client/vite.config.js  client/index.html  client/eslint.config.js ./
COPY client/src ./src

FROM frontend-base AS frontend-build
RUN npm run build

FROM base AS final
ENV NODE_ENV=production
COPY server/models ./models
COPY server/routes ./routes
COPY server/config.js .
COPY server/package.json .
COPY server/package-lock.json .
RUN npm install --omit-dev
COPY server/index.js .
COPY --from=frontend-build /app/dist ./static
EXPOSE 3000


CMD [ "node", "index.js" ]
