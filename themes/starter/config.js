/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: '不靠意志力，靠架构。', // 英雄区文字
  STARTER_HERO_TITLE_2: '知行合一，是一套为 AI 时代重新设计的个人操作系统——让执行有结构，让知识能被用，让复盘生成数据。', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '立即获取系统', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL: '/#pricing', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '查看功能详情', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: '/#feature', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '/images/starter/github.svg', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/hero/hero-image.webp', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: '', // hero区下方的全宽图

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: 'Sign In',
  STARTER_NAV_BUTTON_1_URL: '/sign-in',

  STARTER_NAV_BUTTON_2_TEXT: 'Sign Up',
  STARTER_NAV_BUTTON_2_URL: '/sign-up',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '三大核心系统', // 特性
  STARTER_FEATURE_TEXT_1: '知行合一的核心模块', // 特性
  STARTER_FEATURE_TEXT_2: '执行有结构，知识能落地，复盘有数据——三个系统，形成完整闭环。', // 特性

  STARTER_FEATURE_1_TITLE_1: '执行系统', // 特性1
  STARTER_FEATURE_1_TEXT_1: '四层架构（任务→项目→里程碑→目标）自动关联，29条自动化+65条公式零维护运行，内置多巴胺引擎对抗拖延。每一个微小行动，都知道自己在推进什么目标。', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: '/#feature', // 特性1

  STARTER_FEATURE_2_TITLE_1: '知识整理系统', // 特性2
  STARTER_FEATURE_2_TEXT_1: '知识→行动直通车，每条笔记直接关联支撑项目。四层分类树+双链自关联，构建真正可被调用的知识网络，而非收藏夹坟场。', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '了解更多', // 特性2
  STARTER_FEATURE_2_BUTTON_URL: '/#feature', // 特性2

  STARTER_FEATURE_3_TITLE_1: '日志复盘系统', // 特性3
  STARTER_FEATURE_3_TEXT_1: '五层复盘节律（日/周/月/季/年）数据自动装载，自律指数加权公式反速成文化，打开即有数据，注意力只用于思考。', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '了解更多', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: '/#feature', // 特性3

  STARTER_FEATURE_4_TITLE_1: '多巴胺引擎', // 特性4
  STARTER_FEATURE_4_TEXT_1: 'XP / 金币 / 等级 / 双币经济，神经科学级激励设计内置于系统底层。完成任务自动触发奖励，对抗拖延从架构层面解决，无需意志力。', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '了解更多', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: '/#feature', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '为 AI 时代重新设计的个人操作系统',
  STARTER_ABOUT_TEXT:
    'AI 让信息获取成本趋近于零。但"执行力"和"整合力"，仍然是人类最稀缺的能力。知行合一不是又一个 Notion 模板，而是一套经过系统性设计的个人操作系统——让执行有架构可依，让知识真正落地，让复盘产生数据洞察。 <br /> <br /> 你一直都知道该怎么做。问题从来不是「知道」，而是「做到」。',
  STARTER_ABOUT_BUTTON_TEXT: '立即获取',
  STARTER_ABOUT_BUTTON_URL: '/#pricing',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '29条+',
  STARTER_ABOUT_TIPS_2: '自动化规则',
  STARTER_ABOUT_TIPS_3: '零维护自运转',

  // 首页价格区块
  STARTER_PRICING_ENABLE: true, // 价格区块开关
  STARTER_PRICING_TITLE: '获取知行合一',
  STARTER_PRICING_TEXT_1: '一次性买断，终身使用',
  STARTER_PRICING_TEXT_2: '选择适合你当前阶段的版本，随时可升级。所有版本均包含完整的使用文档与快速上手指南。',

  STARTER_PRICING_1_TITLE: '标准版',
  STARTER_PRICING_1_PRICE: '99',
  STARTER_PRICING_1_PRICE_CURRENCY: '¥',
  STARTER_PRICING_1_PRICE_PERIOD: '一次性',
  STARTER_PRICING_1_HEADER: '包含功能',
  STARTER_PRICING_1_FEATURES: '执行系统,知识整理系统,日志复盘系统,快速上手文档', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '立即获取',
  STARTER_PRICING_1_BUTTON_URL: '/#contact',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: '完整版',
  STARTER_PRICING_2_PRICE: '168',
  STARTER_PRICING_2_PRICE_CURRENCY: '¥',
  STARTER_PRICING_2_PRICE_PERIOD: '一次性',
  STARTER_PRICING_2_HEADER: '包含功能',
  STARTER_PRICING_2_FEATURES: '包含标准版全部内容,多巴胺引擎,健康管理系统,订阅跟踪系统,优先答疑支持', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '立即获取',
  STARTER_PRICING_2_BUTTON_URL: '/#contact',

  STARTER_PRICING_3_TITLE: '陪跑版',
  STARTER_PRICING_3_PRICE: '299',
  STARTER_PRICING_3_PRICE_CURRENCY: '¥',
  STARTER_PRICING_3_PRICE_PERIOD: '一次性',
  STARTER_PRICING_3_HEADER: '包含功能',
  STARTER_PRICING_3_FEATURES: '包含完整版全部内容,1对1系统配置指导,专属答疑通道,未来版本免费更新', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '立即获取',
  STARTER_PRICING_3_BUTTON_URL: '/#contact',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '用户反馈',
  STARTER_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
  STARTER_TESTIMONIALS_TEXT_2:
    '数千位站长选择用NotionNext搭建他们的网站,通过帮助手册、交流社群以及技术咨询，大家成功上线了自己的网站',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '感谢大佬的方法。之前尝试过Super、Potion等国外的第三方平台，实现效果一般，个性化程度远不如这个方法，已经用起来了！ ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Ryan_G',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Ryan`Log 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.gaoran.xyz/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '很喜欢这个主题，本代码小白用三天台风假期搭建出来了，还根据大佬的教程弄了自定义域名，十分感谢，已请喝咖啡~',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '阿森的百宝袋 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://asenkits.top/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '呜呜呜，经过一个下午的努力，终于把博客部署好啦，非常感谢Tangly1024大佬的框架和教程，这是我有生之年用过的最好用的博客框架┭┮﹏┭┮。从今之后，我就可以在自己的博客里bb啦，( •̀ ω •́ )y ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2F338962f1-d352-49c7-9a1b-746e35a7005c%2Fhf.png?table=block&id=ce5a48a9-d77a-4843-a3d9-a78cd4f794ce&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '且听风吟 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://www.dwind.top/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '感谢提供这么好的项目哈哈 之前一直不知道怎么部署(别的项目好难好复杂)这个相对非常简单 新手非常友好哦',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '迪升disheng ',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'AI资源分享 Blog',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.disheng.org/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '灰常感谢大佬的博客项目，能将博客和notion结合起来，这一直是我挺期待的博客模式。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafb21381-f51b-4fd0-9998-800dbeb64dbe%2Favatar.png?table=block&id=195935d2-0d8d-49fc-bd81-1db42ee50840&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'AnJhon',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Anjhon`s Blog 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://www.anjhon.top'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '用好久了，太感谢了',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4f391d7-7d65-4c05-a82c-c6e2c40f06e4%2Fa2a7641a26b367608c6ef28ce9b7e983_(2).png?table=block&id=a386eb0e-4c07-4b18-9ece-bba4e79ce21c&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'LUCEN',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'LUCEN考验辅导 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://www.lucenczz.top/'
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '常见问题',
  STARTER_FAQ_TEXT_1: '你可能想知道的',
  STARTER_FAQ_TEXT_2: '关于知行合一系统的常见疑问',

  STARTER_FAQ_1_QUESTION: '我没有 Notion 基础，能用这个系统吗？',
  STARTER_FAQ_1_ANSWER: '可以。系统附带完整的快速上手文档，从零开始引导你配置好属于自己的知行合一。陪跑版还提供1对1配置指导，确保你真正用起来。',

  STARTER_FAQ_2_QUESTION: '这和普通 Notion 模板有什么区别？',
  STARTER_FAQ_2_ANSWER: '普通模板是「表格」，知行合一是「系统」。核心差异在于：任务与目标四层自动关联、知识与行动直通、复盘数据自动装载、29条自动化零维护运行。你不需要手动维护，系统会自己运转。',

  STARTER_FAQ_3_QUESTION: '系统维护起来会不会很复杂？',
  STARTER_FAQ_3_ANSWER: '不会。系统的核心设计原则就是「零维护」——29条自动化和65条公式在后台静默运行。你唯一需要做的，就是把你的任务和笔记放进去，其余的交给系统。',

  STARTER_FAQ_4_QUESTION: '购买后如何获取系统？',
  STARTER_FAQ_4_ANSWER: '付款后你会收到系统的 Notion 模板链接，点击复制到你的工作区即可开始使用。同时附赠完整使用文档，帮助你快速完成初始配置。',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: '关于创作者',
  STARTER_TEAM_TEXT_1: '知行合一的背后',
  STARTER_TEAM_TEXT_2: '知行合一由 faiz 独立设计与开发。作为一名深度 Notion 用户，faiz 用超过 2 年的时间打磨这套系统，目标只有一个：让「知道」真的开始发生。',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa06c61bb-980e-4180-bc18-c15f92c78bb4%2Ftangly1024.jpg?table=collection&id=8e7acf17-de09-4fa1-abde-b5b80ad4a813&t=8e7acf17-de09-4fa1-abde-b5b80ad4a813&width=100&cache=v2',
      STARTER_TEAM_ITEM_NICKNAME: 'Tangly',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Developer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Melissa Tatcher',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Marketing Expert'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Stuard Ferrel',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Digital Marketer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Eva Hudson',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Creative Designer'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '使用心得',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '来自真实用户的记录',
  STARTER_BLOG_TEXT_2: '这里记录了使用知行合一系统过程中的真实体验、踩坑复盘，以及系统持续迭代的最新动态。',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: '获取系统',
  STARTER_CONTACT_TEXT: '有任何问题，直接告诉我',
  STARTER_CONTACT_LOCATION_TITLE: '创作者所在地',
  STARTER_CONTACT_LOCATION_TEXT: '中国',
  STARTER_CONTACT_EMAIL_TITLE: '邮件联系',
  STARTER_CONTACT_EMAIL_TEXT: 'moravekcarriger368@gmail.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/yfctc7', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: true, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: '让那些你一直知道但做不到的事，开始真的发生。',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '产品',
      LINK_GROUP: [
        { TITLE: '功能介绍', URL: '/#feature' },
        { TITLE: '定价方案', URL: '/#pricing' },
        { TITLE: '常见问题', URL: '/#faq' },
        { TITLE: '联系获取', URL: '/#contact' }
      ]
    },
    {
      TITLE: '三大系统',
      LINK_GROUP: [
        { TITLE: '执行系统', URL: '/#feature' },
        { TITLE: '知识整理系统', URL: '/#feature' },
        { TITLE: '日志复盘系统', URL: '/#feature' }
      ]
    },
    {
      TITLE: '关于',
      LINK_GROUP: [
        { TITLE: '创作者博客', URL: '/blog' },
        { TITLE: '使用文档', URL: '/docs' },
        { TITLE: '联系我', URL: '/#contact' }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新内容',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: '这个页面不存在。',
  STARTER_404_TEXT: '但你的执行系统可以存在。回到主页，开始让「知道」真的发生。',
  STARTER_404_BACK: '回到主页',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: '你已经知道了足够多。',
  STARTER_CTA_TITLE_2: '是时候让「知道」开始真的发生',
  STARTER_CTA_DESCRIPTION:
    '你需要的不是更多信息。你需要的是一个让「知道」变成「做到」的系统。知行合一，为此而生。',
  STARTER_CTA_BUTTON: true, // 是否显示按钮
  STARTER_CTA_BUTTON_URL: '/#pricing',
  STARTER_CTA_BUTTON_TEXT: '立即获取知行合一',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
