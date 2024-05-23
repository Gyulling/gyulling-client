# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16
WORKDIR /usr/src/app
COPY krampoline/ ./
RUN npm ci
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
