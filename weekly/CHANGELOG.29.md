## network

### 新功能

- ⚠️  Rename 'onLogout' to 'onAuthError' (9e18454)

### 问题修复

- Axios type error (09a25cf)

### 代码重构

- Enable request, external app_id and key (611d44b)
- ⚠️  Remove not needed code (5a29873)

#### ⚠️ Breaking Changes

- ⚠️  Rename 'onLogout' to 'onAuthError' (9e18454)
- ⚠️  Remove not needed code (5a29873)

## weila-account-manager

### 新功能

- 完成审核基本逻辑，所有接口迁移到 v2 (149a8c4)
- 升级到 nuxt 4.0 (7929cc8)
- UseWeilaFetch 替换为 nuxt 内置实现 (632f13b)
- 项目结构迁移至 nuxt 4 默认结构 (7284589)
- Unocss 从 wind3 迁移到 wind4 (6e1162a)
- 未搜索时显示占位元素 (0a8a778)
- 更新 zod arco rules 及其接口 (b3a4c7b)

### 问题修复

- UseFetch 返回类型报错 (98375c3)
- Wind4 默认边框显示问题 (6e1b48f)

### 代码重构

- 拆分认证审核页面ui和逻辑 (7ea3abf)

### 杂项维护

- 移除测试模块 (f9c979c)

## weila-work-unity

### 新功能

- 基本提交审核逻辑 (09f9639)

### 杂项维护

- Update (646e570)