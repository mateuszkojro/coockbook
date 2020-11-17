FROM node:latest
WORKDIR /client
COPY package-lock.json .
COPY package.json .
COPY tsconfig.json .
RUN npm install
COPY ./public ./public
COPY ./styles ./styles
COPY ./pages ./pages
RUN npm run build
CMD ["npm", "run", "start"]
