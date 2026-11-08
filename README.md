# RED

一名计算机系学生的日常学习记录，仅此而已的网站。

网站：https://redyellowgreenred.github.io/

## 两个板块

- 学习到的知识：学过什么，按日期与领域整理。点击领域查看简短说明及关联资料。
- 觉得不错的资料：看过什么，只记录有明确观看或阅读经历的资料，推荐清单不算作已学。

已按用户修订稿录入 2026.11.02—11.08 的记录：58 个知识点、2 份资料；已移除问题板块与 k-plex 内容。学习到的知识 按日期倒序显示短标题，点击展开说明、公式及相关资料。知识点按领域统一底色，顶部提供小号颜色图例。数学优化按已学习内容记录。

## 添加日常记录

1. 打开 `/write/`（前台已隐藏编辑入口）。按需要填写 学习到的知识、觉得不错的资料，也可以添加随记。
2. 点击「准备提交到 GitHub」，再打开 GitHub 提交预填的记录文件。
3. 较长内容可以下载 JSON 文件，上传到 `content/entries/` 后提交。
4. GitHub Actions 自动校验、构建并发布。

草稿只保存在当前浏览器；正式记录在 Git 仓库中保留完整版本历史。


## 项目结构

- `content/entries/`：日常或周记录，每份一个 JSON 文件，文件名与 id 一致。
- `garden/pages/`：主页、资料、知识点详情及写作页面。
- `garden/components/`：页面结构和内容组件。
- `garden/lib/entry.js`：数据校验与发布链接。
- `scripts/check-content.mjs`：发布前校验。
- `.github/workflows/pages.yml`：自动发布 GitHub Pages。
- `public/previous-site/`：保留的原个人主页。

## 本地开发

Node.js 22 或更高版本：

```sh
npm ci
npm run dev
npm test
npm run build
```

字体随网站一起托管，不依赖 Google Fonts 在线请求。中文采用霞鹜文楷，英文采用 Literata。字体采用 OFL 许可，见 `public/licenses/`。

网站及仓库公开，只有拥有仓库写权限的用户可以提交。微信号按网站所有者要求展示。

最初以 Fuwari（https://github.com/saicaca/fuwari，MIT）为起点，后按需求改成学术个人主页风格，保留原 LICENSE。旧网站地址：https://redyellowgreenred.github.io/previous-site/
