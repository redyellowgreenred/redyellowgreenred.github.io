# 冯黄煜的个人主页

记录日常思考与学习轨迹。基于 Astro，以 Fuwari 的封面、侧栏与卡片布局为起点定制。头像和插画由站点所有者提供。

网站：https://redyellowgreenred.github.io/

## 写一篇记录

1. 打开网站，点击「写一篇」，选择「日常思考」或「学习记录」。
2. 填写正文、思考与收获，可以附上资料链接。
3. 点击「准备提交到 GitHub」，再点击「去 GitHub 提交」。
4. 新记录已预填在 GitHub 文件编辑器中。点击 Commit changes 提交后，Actions 自动发布。

较长内容可以下载 JSON 文件，再上传到仓库 notes 文件夹。编辑已有记录时，先复制生成的记录内容，再到 GitHub 替换文件正文后提交。草稿只保存在当前浏览器，不算作已发布的记录。

## 内容结构

- `notes/`：已发布的记录，每篇一个 JSON 文件，文件名须与 id 一致。
- `garden/`：主页、样式及浏览器交互。
- `scripts/prepare-notes.mjs`：校验记录，生成网站数据。
- `public/previous-site/`：保留的原个人主页。
- `.github/workflows/pages.yml`：测试、构建、自动发布 GitHub Pages。

正式记录初始为空。示例内容只在点击「先看看示例效果」后显示，不会加入真实统计。日常思考不计算学习时长和掌握阶段；记录热力图展示全部写作足迹。

## 本地运行

使用 Node.js 22 或更高版本。

```sh
npm ci
npm run dev
npm test
npm run build
```

## 发布与数据

仓库及网站是公开的。只有本仓库的写入者可以提交记录，普通访客不能修改网站。发布内容保存在 Git 中，有完整版本历史；不使用浏览器存储代替已发布内容，不需要数据库或额外服务。

在仓库 Settings → Pages 中选择 GitHub Actions。旧站仍可访问 `/previous-site/`。保持原提交历史，未使用强制推送。

Fuwari：https://github.com/saicaca/fuwari （MIT）。保留原 LICENSE。
