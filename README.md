# RED

一名学生的日常学习记录，仅此而已的网站。

网站：https://redyellowgreenred.github.io/

## 三个板块

- Knowledge：学过什么，按日期与领域整理。点击领域查看简短说明、关联资料和当时的问题。
- Resources：看过什么，只记录有明确观看或阅读经历的资料，推荐清单不算作已学。
- Questions：困惑过什么，保留原话，可补充后来的理解，标为待回顾、仍在探索或已澄清。

已按用户修订稿录入 2026.11.02—11.08 的记录：30 个知识点、2 份资料、9 个关键问题与简短解答。Knowledge 按日期倒序显示短标题，点击展开说明、公式及相关资料。知识点按领域统一底色，顶部提供小号颜色图例。11 月 7 日的三项研究设想保留探索状态。

## 添加日常记录

1. 打开 `/write/`（前台已隐藏编辑入口）。按需要填写 Knowledge、Resources、Questions，也可以添加随记。
2. 点击「准备提交到 GitHub」，再打开 GitHub 提交预填的记录文件。
3. 较长内容可以下载 JSON 文件，上传到 `content/entries/` 后提交。
4. GitHub Actions 自动校验、构建并发布。

草稿只保存在当前浏览器；正式记录在 Git 仓库中保留完整版本历史。

可通过 `/write/?entry=记录id&question=问题id` 补充回顾状态、解释与日期。更新已有文件时，先复制新内容，再到 GitHub 全部替换并提交。

## 项目结构

- `content/entries/`：日常或周记录，每份一个 JSON 文件，文件名与 id 一致。
- `garden/pages/`：主页、资料、问题、领域详情及写作页面。
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
