# 多AI工坊 (Multi-AI Workshop)

> 一对多提问 · 群聊头脑风暴 · 你的AI超级面板

一个**纯前端**的 GitHub Pages 网站工具，让你同时操作多个 AI 聊天服务，并和不同角色的 AI 进行群聊头脑风暴。

---

## ✨ 核心功能

### 🤖 一对多提问
- 2×3 网格布局，同时展示 **ChatGPT、DeepSeek、通义千问、Kimi、豆包、元宝** 等 6 个 AI 面板
- 顶部输入问题 → 「发送到全部」→ 自动复制到剪贴板 + 打开所有 AI 网站
- 每个面板底部可手动粘贴 AI 的回答
- 支持自定义 AI 列表（增/删/改名称、网址、颜色）

### 🎭 自由选角组队
从 **12 种 AI 角色**中挑选最多 4 位，组成你的专属讨论团队：

| 角色 | 风格 |
|------|------|
| 🧠 理性分析 | 逻辑推演·数据验证 |
| 💡 创意先锋 | 天马行空·跨界灵感 |
| ⚡ 实战派 | 落地执行·MVP |
| 🎭 反方辩手 | 批判质疑·找漏洞 |
| 🖥️ 技术专家 | 架构设计·代码方案 |
| 👤 用户体验师 | 用户视角·场景体验 |
| 💼 商业顾问 | ROI·商业模式分析 |
| 🎨 设计思考者 | UX设计·品牌体验 |
| 📊 数据科学家 | 数据洞察·统计分析 |
| 🔭 行业观察者 | 趋势分析·竞品研究 |
| 💚 心灵导师 | 人文关怀·团队氛围 |
| 🔮 未来预言家 | 前瞻判断·趋势预测 |

### 💬 群聊头脑风暴
- 选好团队后进入群聊模式
- 你的问题 → AI 角色轮番发言（每角色有 3 套不同模板）
- 灵感自动收集到「想法板」
- 一键「生成讨论摘要」整理观点
- 内置 4 个预设话题快速启动讨论

### 🔌 Chrome 插件支持
AI 聊天网站默认禁止 iframe 嵌入。安装配套的 Chrome 插件「多AI工坊 Helper」可解除限制。

---

## 🚀 快速开始

### 方式一：直接访问
部署到 GitHub Pages 后，直接访问以下地址：

```
https://bullbeer123.github.io/multi-ai-workshop/
```

### 方式二：本地运行
1. 下载 `index.html`，双击用浏览器打开即可使用
2. 所有数据存储在浏览器的 localStorage 中，刷新不丢失

### 方式三：安装 Chrome 插件
AI 网站默认禁止被嵌入 iframe。安装插件后可解除限制：

1. 打开 Chrome → `chrome://extensions`
2. 开启「开发者模式」
3. 加载 `chrome-plugin/` 文件夹
4. 刷新页面，AI 面板即可正常显示

---

## ⚙️ 数据管理

| 功能 | 说明 |
|------|------|
| 自动保存 | 所有配置和聊天记录自动存入 localStorage |
| 导出数据 | 设置页 → 导出 JSON 备份 |
| 导入数据 | 设置页 → 导入之前备份的 JSON |
| 重置 | 一键恢复默认配置 |

---

## 🛠️ 技术栈

- 纯 HTML + CSS + JavaScript（单页面应用）
- 零外部依赖，无需 npm、HTTP 服务器
- GitHub Pages 兼容
- 绿色主题、卡片式布局、移动端适配
- Chrome Extension (Manifest V3 + declarativeNetRequest)

---

## 📁 项目结构

```
multi-ai-workshop/
├── index.html              # 主应用（单文件）
├── README.md               # 本文件
└── chrome-plugin/          # Chrome 插件
    ├── manifest.json       # 插件配置
    ├── popup.html          # 插件弹窗
    ├── icon.png            # 插件图标
    └── scripts/
        └── background.js   # 后台服务（CSP解除规则）
```

---

## 📄 许可证

MIT License

---

*Made with ❤️ for the multi-AI era*
