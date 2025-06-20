# Stage 1: Build
FROM node:20 AS build

WORKDIR /usr/src/app

# Copy package.json và package-lock.json (nếu có) trước để tận dụng cache của Docker
COPY package*.json ./

# Cài dependencies bao gồm devDependencies (dùng để build)
RUN npm install

# Copy toàn bộ project vào
COPY . .

# Nếu bạn dùng TypeScript hoặc cần build, thêm bước build tại đây
# RUN npm run build

# Stage 2: Runtime
FROM node:20-alpine AS production

WORKDIR /usr/src/app

# Chỉ copy file cần thiết từ stage build
COPY --from=build /usr/src/app/package*.json ./

# Cài đặt production dependencies
RUN npm install --only=production

# Copy source code (hoặc chỉ dist nếu đã build TypeScript trước đó)
COPY --from=build /usr/src/app ./


CMD [ "npm", "start" ]