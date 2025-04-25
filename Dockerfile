FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install vite

COPY . .
RUN npm run build

FROM nginx:stable-alpine AS production

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

