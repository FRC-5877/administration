FROM node:8.9-alpine
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

ENV NODE_ENV production
ENV PORT 80

COPY . /usr/src/app

EXPOSE 80
RUN npm run build:clean && ./node_modules/.bin/webpack --config internals/webpack/webpack.prod.babel.js --color -p
CMD ["npm", "start"]




# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production && npm install webpack
# COPY . .
# EXPOSE 80
# CMD npm run build