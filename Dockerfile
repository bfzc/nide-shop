# 使用 Node.js 官方镜像作为基础镜像
FROM node:14

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json（如果存在）
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制项目文件
COPY . .

# 编译项目
RUN npm run compile

# 暴露端口
EXPOSE 8360

# 启动命令
CMD ["npm", "start"] 