FROM node:16.14.2-alpine3.14 as development

WORKDIR /usr/src/app

EXPOSE 3031
EXPOSE 80
EXPOSE 443

COPY package*.json ./

# RUN npm install  --only=production

# RUN npm install eslint-plugin-unused-imports

RUN npm install

COPY . .

CMD ["npm", "run", "start"]