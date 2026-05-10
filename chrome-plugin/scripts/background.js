// 多AI工坊 Helper - 后台服务工作线程
// 核心功能：使用 declarativeNetRequest API 移除 AI 网站的
// X-Frame-Options 和 Content-Security-Policy 响应头，
// 使其可以在 iframe 中嵌入显示

const AI_SITES = [
  // 主流 AI 聊天网站
  { regex: "^https://chat\\\\.openai\\\\.com/", label: "ChatGPT" },
  { regex: "^https://chat\\\\.deepseek\\\\.com/", label: "DeepSeek" },
  { regex: "^https://tongyi\\\\.aliyun\\\\.com/", label: "通义千问" },
  { regex: "^https://www\\\\.qianwen\\\\.com/", label: "通义千问聊天" },
  { regex: "^https://kimi\\\\.moonshot\\\\.cn/", label: "Kimi" },
  { regex: "^https://www\\\\.doubao\\\\.com/", label: "豆包" },
  { regex: "^https://yuanbao\\\\.tencent\\\\.com/", label: "元宝" },
  { regex: "^https://chatglm\\\\.cn/", label: "智谱清言" },
  { regex: "^https://xinghuo\\\\.xfyun\\\\.cn/", label: "讯飞星火" },
  { regex: "^https://yiyan\\\\.baidu\\\\.com/", label: "文心一言" },
  { regex: "^https://metaso\\\\.cn/", label: "秘塔AI" },
  { regex: "^https://www\\\\.perplexity\\\\.ai/", label: "Perplexity" },
  { regex: "^https://claude\\\\.ai/", label: "Claude" },
  { regex: "^https://gemini\\\\.google\\\\.com/", label: "Gemini" },
];

// 设置 declarativeNetRequest 动态规则
async function setupRules() {
  // 先清除旧规则
  const oldRules = await chrome.declarativeNetRequest.getDynamicRules();
  const oldRuleIds = oldRules.map(r => r.id);

  const newRules = AI_SITES.map((site, index) => ({
    id: index + 1,
    priority: 1,
    action: {
      type: "modifyHeaders",
      requestHeaders: [
        { header: "referer", operation: "remove" }
      ],
      responseHeaders: [
        { header: "X-Frame-Options", operation: "remove" },
        { header: "Content-Security-Policy", operation: "remove" },
        { header: "Access-Control-Allow-Origin", operation: "set", value: "*" },
        { header: "Access-Control-Allow-Credentials", operation: "set", value: "true" }
      ]
    },
    condition: {
      regexFilter: site.regex,
      resourceTypes: ["sub_frame", "main_frame"]
    }
  }));

  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: oldRuleIds,
    addRules: newRules
  });

  console.log(`[多AI工坊] 已设置 ${newRules.length} 条规则，覆盖 ${AI_SITES.length} 个AI站点`);
  return newRules.length;
}

// 安装/更新时自动设置
chrome.runtime.onInstalled.addListener(async (details) => {
  const count = await setupRules();
  console.log(`[多AI工坊] 插件${details.reason === 'install' ? '安装' : '更新'}完成`);
});

// 浏览器启动时重新确保规则有效
chrome.runtime.onStartup.addListener(async () => {
  await setupRules();
});

// 监听来自 popup 或 content script 的消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "GET_STATUS") {
    sendResponse({ enabled: true, siteCount: AI_SITES.length });
  }
  if (message.type === "REFRESH_RULES") {
    setupRules().then(count => sendResponse({ success: true, count }));
    return true; // 异步响应
  }
});
