FROM node:latest
WORKDIR /app/client
COPY package.json .
COPY tsconfig.json .
RUN npm install
COPY ./public .
COPY ./styles .
COPY ./pages .
RUN npm run build
CMD ["npm", "run", "start"]
