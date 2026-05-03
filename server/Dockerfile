FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Generate Prisma client
RUN npx prisma generate

EXPOSE 5000

# Push DB schema changes and then start the server
CMD ["sh", "-c", "npx prisma db push && node index.js"]
