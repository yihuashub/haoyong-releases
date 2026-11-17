# haoyong 输入法

无广告、不上传、会学习你习惯的 macOS 拼音输入法。

**[⬇️ 下载最新版](https://github.com/yihuashub/haoyong-releases/releases/latest)**（`.pkg` 安装包，已经过 Apple 公证）

## 功能

- **整句更准**：万象词库（170 万词）+ 可选的语法模型增强包
- **会学习**：按你的选择调整候选顺序，还会参考前一两个字
- **打错键纠错**：相邻键按错、多按一个键、两个键按反都能纠正
- **模糊音**：平翘舌、n/l、前后鼻音
- **emoji**：打「可」也能出 🉑（可以关掉）
- **领域词包**：IT、财经、法律、医学、地名、历史名人、成语、诗词等，可单独开关
- **皮肤**：原生、橘红、墨黑、玻璃、纸白、极简，支持竖排、字号和颜色自定义
- **多设备同步**：iCloud / 文件夹 / WebDAV，端到端加密
- **按 App 默认英文**：终端、编辑器里自动切英文

## 安装

1. 下载 `Haoyong-x.y.z.pkg`，双击安装（需要管理员密码），安装到 `/Library/Input Methods`
2. 在菜单栏的输入法菜单里选择 **haoyong拼音**
   - 列表里没有的话：系统设置 → 键盘 → 输入法 → 编辑… → ＋ → 简体中文 → haoyong拼音
3. 推荐：输入法菜单 → 设置… → 通用 → 下载「语法模型」增强包（约 400 MB），整句会更准

系统要求：macOS 14 及以上，Apple 芯片和 Intel 都支持。

## 隐私

- **不上传你打的字**。学习数据只有「输入码 → 选了什么」和「前一两个字 → 选了什么」的次数，存在本机 `~/Library/Haoyong/`
- **同步是端到端加密的**。只有你自己开启同步才会上传，而且是在本机用你的密钥加密之后；iCloud 或你的服务器上只有密文
- **没有广告**。除了你自己开的同步、你手动点的「下载语法模型」，输入法不连接任何服务器

## 校验

每个版本都附带 `.sha256` 文件：

```bash
shasum -a 256 Haoyong-0.1.0.pkg
```

## 开源组件与署名

| 组件 | 作者 / 来源 | 许可证 | 说明 |
|---|---|---|---|
| [librime](https://github.com/rime/librime) | RIME 项目 | BSD-3-Clause | 输入法引擎 |
| [万象拼音词库与语法模型](https://github.com/amzxyz/rime_wanxiang)（[数据](https://github.com/amzxyz/RIME-LMDG)） | amzxyz | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | 主词库、英文词、emoji 对照表、语法模型。改动：去掉声调（ü 写成 v），合并同一词同一读音的重复项 |
| [THUOCL 清华大学开放中文词库](https://github.com/thunlp/THUOCL) | 清华大学 THUNLP | MIT | 领域词包，用 pypinyin 注音 |
| [pypinyin](https://github.com/mozillazg/python-pinyin) | mozillazg | MIT | 领域词包注音 |
| [jieba](https://github.com/fxsjy/jieba) | fxsjy | MIT | 备用词库 |
| [OpenCC](https://github.com/BYVoid/OpenCC) | BYVoid | Apache-2.0 | 简繁转换数据 |

这个仓库只发布安装包，不含源代码。
