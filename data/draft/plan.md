3 个月做了哪些项目

- ppreader 模仿 chatpdf.com
- MistreeAI/UnsencoredAI 模仿 perplexty ,ai 陪伴
- allenyan.ca 博客
- scotiahome.com 模仿 homesigma.com
- halifaxer.com 模仿 nsnewlife.ca/ NodeBB 开源项目

技术栈

- React/Redux/Next.js?
- Node.js/Express
- MongoDB/Redis/Postgres
- Firebase/Google Cloud Run
- Docker/Kubernetes
- TailwindCSS/Bootstrap

Todo

1. 登录问题 P1 OK
2. 如何监听浏览器 url OK
3. 切换语言 刷新 OK
4. 解决 init 3 秒延迟问题 OK
5. key insights 优化速度
6. 记录用户的语言设置 OK
7. 格式化 key insights 如何在签名增加 emoji，如何分段？ OK
8. 处理 没有字幕的情况 OK
9. changeHeight 事件通知 OK
10. 处理 字幕文件太长的问题
    - 将字幕进行分段，每段字幕的长度不超过 1000 个字符
    - 并发将每段字幕数据，发送给 OpenAI 进行总结归纳，然后合并在一起后，再精简一次。
11. 如何动态调整 高度？
12. 不同长度的视频策略不同
    假设我们让所有的视频都最多有 8 个 key insight.
    字幕需要存哪些？
13. raw 全部拼接在一起的字幕
    解决监听问题
    Uncaught TypeError: Cannot read properties of null (reading 'firstChild')
    at contentScript.bundle.js:1:937
    如何解决 x-frame-options deny 问题？
    https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest?hl=zh-cn
    https://stackoverflow.com/questions/15532791/getting-around-x-frame-options-deny-in-a-chrome-extension
    https://www.youtube.com/watch?v=XtzOEKHuL9k
    使用 nextjs 编写 google chrome extension 报错 如图
    如何解决？
    ChatGPT
    您上传的截图显示了一个 Chrome 扩展错误信息，具体为：“Uncaught (in promise) Error: Could not establish connection. Receiving end does not exist.” 这通常是由于扩展程序尝试与一个未运行或未正确注册的 background script 或 content script 通信时出现的。

以下是一些可能的解决步骤：

检查消息发送方与接收方是否都已激活：确保您正在尝试通信的 background script 或 content script 已经加载并激活。如果是在扩展程序安装后立即尝试通信，可能因为相关的脚本还未运行而导致错误。

确保监听器已经设置：在 background script 或 content script 中，确保您已经设置了 chrome.runtime.onMessage 或者 chrome.runtime.onConnect 监听器来接收消息。

检查 Manifest 文件：确保您的 manifest.json 文件中已经正确声明了 background scripts 和 permissions。

检查通信 API 的使用：如果您使用的是 chrome.runtime.sendMessage，请确保接收消息的部分（可能是 popup、background 或 content script）已经注册了监听器来处理这些消息。

重新加载扩展程序：在 chrome://extensions/页面，开启"Developer mode"，然后点击"Reload"来重新加载您的扩展程序。这有时可以解决一些初始化问题。

查看 Chrome 的扩展文档：Chrome 开发者文档中有关于 extensions APIs 的详尽信息，包括 background pages 和 messaging。

如果您能分享更具体的代码，或者更详细地描述您的扩展程序是如何设置消息通信的，我可能能提供更具体的帮助。

Using AI to summarize the key ideas of YouTube long videos, extract subtitles, and translate them into the multi-language.

Apply for activeTab permission for the extension to monitor browser URL changes, update the UI, refresh the latest summary information, and extract the latest subtitles

We apply for host permissions in order to monitor changes in the www.youtube.com/watch web page, refresh the plug-in UI in real time, refresh summary information, and extract subtitle information.

Our extended core functionality relies on remote code because we need real-time data updates and personalized content for users. We attach great importance to the security and privacy of our users, so we have taken the following measures to ensure the security of remote code: the code is sourced from trustworthy servers, regular security reviews are conducted, and strict data encryption and privacy protection measures are implemented. We promise that any use of remote code will strictly comply with the security policies of the Google Chrome Web Store. "
