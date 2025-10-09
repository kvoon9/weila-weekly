## js_weilasdk_lite

### 问题修复

- 位置消息类型 (291e90d)

## lalife-mini

### 新功能

- Layout (f8febda)

### 杂项维护

- Lint (50d1545)
- Lint (91541cd)
- Update (46e0df5)
- Update (11a7684)
- Update (f631f55)

## weila_life_mini

### 新功能

- 消息显示以及serviceData解析 (f5f44a4)
- 拆分文本、语音、视频等消息并显示 (32a0bbc)
- 视频、图片消息预览，引入 iconify (836255b)
- 发送文本消息 (811e6ab)
- 图片、视频、位置消息发送 (e3e7a43)
- 发送语音 (035035e)

### 问题修复

- HMR 时 query 参数丢失的问题 (5f53637)
- Inputbar 样式失效 (7f78e24)
- 小程序 scrollTop 绑定值不更新 (71356f5)
- 手机号获取账号时国家码缺失 (3995f4c)
- **WIP:** 语音消息解码、封装微信switchTab (46b61ae)

### 代码重构

- **WIP:** 将 weila/weeklog 抽离成 npm weeklog 独立包,拆分出inputbar组件 (874ed10)
- 封装微信recordManager,完成音频录制和取消 (898613a)

### 杂项维护

- Update (4759f35)
- 去除weilaCore和eventEmitter的响应式wrapper (db27e15)
- Lint (6f41bfd)

### 代码样式

- Inputbar 显示效果 (2ad288a)

### 持续集成

- 使用并patch changelogen 用于自动生成上周 changelogs (92dd1ef)