### 电影订票系统

这是一个**电影订票系统**，允许用户浏览可用的电影、选择座位并在线预订电影票。该系统提供了一个直观且易于使用的界面，适用于电影观众和管理员。用户可以查看电影放映时间，选择座位并完成预订，而管理员可以管理电影、放映时间和座位的可用性。

---

## 功能

### 1. **用户功能**
- **浏览电影**：查看当前可用的电影列表。
- **查看放映时间**：查看每部电影的放映时间。
- **选择座位**：为特定电影的放映时间选择座位。
- **预订电影票**：完成预订过程并获得票务确认。
- **订单历史**：查看过往的预订和票务记录。

### 2. **管理员功能**
- **添加/删除电影**：添加新电影或修改/删除现有电影信息。
- **管理放映时间**：为电影设置或删除放映时间。
- **座位可用性管理**：管理每个放映时间的座位可用性。

---

## 技术栈

- **前端**：
  - Vue 3
  - Vue Router
  - Pinia（状态管理）
  - Naive UI（UI 组件库）
  - Axios（API 请求）
  - Vite（快速构建）

- **后端**（如适用）：
  - Node.js + Express（API）
  - MySQL Workbench 8.0 CE

- **认证**：
  - JWT（JSON Web Token）用于用户和管理员身份验证

---

## 安装

### 前提条件：
请确保你的计算机上已经安装了**Node.js**和**npm/yarn**。

1. **克隆项目仓库**：
   ```bash
   git clone https://github.com/yourusername/movie-ticket-booking-system.git
   cd movie-ticket-booking-system
   ```

2. **安装依赖**：
   ```bash
   npm install
   ```
   或者
   ```bash
   yarn install
   ```

3. **启动开发服务器**：
   ```bash
   npm run dev
   ```
   或者
   ```bash
   yarn dev
   ```

   启动后，通常可以通过 `http://localhost:3000` 或 `http://localhost:5173` 访问前端应用。

4. **后端（可选）**：
   如果你使用了后端，确保设置好后端部分（通常在一个单独的文件夹中）。通常，你需要设置数据库并运行：
   ```bash
   nodemon app.js
   ```

---

## 配置

1. **API 路由**：
   - **GET /api/movies**：获取所有可用电影。
   - **GET /api/movies/:id**：获取单个电影的详细信息。
   - **POST /api/bookings**：为某部电影进行预订。
   - **GET /api/bookings/:userId**：获取特定用户的所有预订记录。
   - **POST /api/auth/login**：用户登录（进行身份验证）。
   - **POST /api/auth/register**：用户注册。

2. **环境变量**：
   - `VITE_API_BASE_URL`：API 的基本 URL。
   - `VITE_NODE_ENV`：根据开发环境设置为 `"development"` 或 `"production"`。

---

## 文件结构

```plaintext
src/
│
├── assets/                # 图片、图标和其他静态资源
├── components/            # 可复用组件（如 MovieCard、SeatSelector）
├── views/                 # 页面组件（如 HomePage、MovieDetail）
├── router/                # Vue Router 配置
├── store/                 # Pinia 状态管理
├── styles/                # 全局样式（如 CSS、SCSS）
└── App.vue                # 根组件
└── main.js                # Vue 应用初始化
```

---

## 使用说明

### 用户流程：

1. **首页**：显示可用电影的列表，包括电影海报和放映时间。
2. **电影详情**：点击某部电影，展示该电影的详细信息，包括可选的放映时间。
3. **选择座位**：选择特定的放映时间并挑选座位。
4. **预订**：完成座位选择后，进入预订流程，提供支付信息（如需要）。
5. **确认**：完成预订后，用户会收到确认信息，并可查看自己的预订记录。

### 管理员流程：

1. **登录**：管理员使用自己的账户进行登录。
2. **管理电影**：管理员可以添加、更新或删除电影条目。
3. **管理放映时间**：管理员可以为电影设置和管理放映时间。
4. **查看预订记录**：管理员可以查看用户的预订记录，并进行必要的管理。

---

## 运行测试

确保你已经安装了依赖并配置了测试框架（如 Jest）。

1. **运行测试**：
   ```bash
   npm run test
   ```
   或者
   ```bash
   yarn test
   ```

---

## 贡献

欢迎为本项目做出贡献！如果你希望帮助改进该系统，请按照以下步骤操作：

1. Fork 本仓库。
2. 创建一个新的分支 (`git checkout -b feature-xyz`)。
3. 进行你的更改。
4. 提交更改 (`git commit -m 'Add feature xyz'`)。
5. 推送到你的分支 (`git push origin feature-xyz`)。
6. 提交 Pull Request 到 `main` 分支。

---

## 许可证

本项目采用 **MIT 许可证**，详情请参见 [LICENSE](LICENSE) 文件。
