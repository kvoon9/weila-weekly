## weila-account-manager

### 新功能

- 移除 useForm，迁移为 zod-arco-rules/valibot 内置接口 (4098188)
- 新增 useWeilaMutation composable api (131f0c2)
- 完善审核信息显示 (42a0a9b)
- 更新其它页面审核信息显示 (7decea3)
- 更新 claude 规则，优化 login 页面显示 (edff70d)
- Update claude code rules (f274633)
- 改善 navbar UI/UX (af418c4)

### 性能优化

- 简化 sidebar 生成逻辑 (5cdfd2d)

### 杂项维护

- Update (baf9ffd)
- Update deps (b9974da)
- 隐藏未开发菜单 (86b797d)

## weila-work-unity

### 新功能

- 迁移使用 zod-arco-rules useForm 进行表单验证 (17cf91f)
- 验证身份证号等信息 (66b7782)
- 认证进度条 (a0fe3d8)
- Add vercel support (b059845)
- 读取 route 信息自动生成 treemenu (e1f5a17)
- 未注册企业弹窗提示注册 (64b2a89)

### 性能优化

- 优化 treemenu 选中逻辑 (e742b96)
- 简化 treemenu 生成逻辑 (07d776b)

### 问题修复

- 更新本地关联依赖 (1758142)
- 认证信息图片列表默认值错误 (cc7bf45)

### 代码重构

- 拆分 legal form (62c89c2)

### 杂项维护

- Update (3e8801c)