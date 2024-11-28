# Etapa 1: Build
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine

ENV REACT_APP_MARVEL_URL=""
ENV REACT_APP_MARVEL_PUBLIC_KEY=""
ENV REACT_APP_MARVEL_PRIVATE_KEY=""

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
