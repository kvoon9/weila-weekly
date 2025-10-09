## weila_life_mini

### 问题修复

- Change postcss config to esm (8a60404)
- 文件上传问题 (bd6a346)
- 解决textarea无法获取焦点问题，解析uploadFile response data (8a2545b)

### 代码重构

- 1. globalData 迁移到global store，不再使用非空断言2. 拆分 apis.ts 逻辑，进一步封装 request (b362b53)

### 杂项维护

- Lint (c6252b3)
- Lint (949e4e1)
- Lint (0fcf701)