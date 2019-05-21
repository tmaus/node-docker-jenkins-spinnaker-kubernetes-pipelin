FROM node
ENV NPM_CONFIG_LOGLEVEL info
RUN mkdir -p /server
EXPOSE 3000
WORKDIR /server
COPY . .
RUN npm install 
ENTRYPOINT ["npm", "start"]