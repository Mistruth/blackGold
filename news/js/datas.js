/**
 * Created by apple on 2018/5/4.
 */
  //新闻页面的数据

var newsCompanyDetails = {
  company0:1
  ,
  company1:1
  ,
  company2:1
  ,
  company3:1
  ,
  company4:1
};
var newsShangDetails = {
  shang0:1,
  shang1:1,
  shang2:1,
  shang3:1
  ,
  shang4:1
  ,
  shang5:1
  ,
  shang6:1
  ,
  shang7:1
  ,
  shang7:1
  ,
  shang8:1
  ,
  shang9:1
  ,
  shang10:1
  ,shang11:1
  ,shang12:1
  ,shang13:1
  ,shang14:1
  ,shang15:1
  ,shang16:1
  ,shang17:1
  ,shang18:1
  ,shang19:1
  ,shang20:1
  ,shang21:1
  ,shang22:1
  ,shang23:1

};
var newsZengDetails = {
  zeng0:{
  },
  zeng1:1,
  zeng2:1,
  zeng3:1,
  zeng4:1,
  zeng5:1,
  zeng6:1,
  zeng7:1,
  zeng8:1,
  zeng9:1,
  zeng10:1,
  zeng11:1,
  zeng12:1,
  zeng13:1,
  zeng14:1,
  zeng15:1,
  zeng16:1,
  zeng17:1,
  zeng18:1,
  zeng19:1,
  zeng20:1,
  zeng21:1,
  zeng22:1,
  zeng23:1

};
var newsHouDetails = {
  hou0:1,
  hou1:1,
  hou2:1,
  hou3:1,
  hou4:1,
  hou5:1,
  hou6:1,
  hou7:1,
  hou8:1,
  hou9:1,
  hou10:1,
  hou11:1,
  hou12:1,
  hou13:1,
  hou14:1,
  hou15:1,
  hou16:1,
  hou17:1,
  hou18:1,
  hou19:1,
  hou20:1,
  hou21:1,
  hou22:1,
  hou23:1
};
var newsDiDetails = {
  di0:1,
  di1:1,
  di2:1,
  di3:1,
  di4:1,
  di5:1,
  di6:1,
  di7:1,
  di8:1,
  di9:1,
  di10:1,
  di11:1,
  di12:1,
  di13:1,
  di14:1,
  di15:1,
  di16:1,
  di17:1,
  di18:1,
  di19:1,
  di20:1,
  di21:1,
  di22:1,
  di23:1
};
var newsJiangDetails = {
  jiang0:1,
  jiang1:1,
  jiang2:1,
  jiang3:1,
  jiang4:1,
  jiang5:1
};





var newsArr1 = [
  {
    id: 0,
    name:"尚雯婕",
    img: "news (14).png",
    h6: "尚雯婕受聘为中国国际文化传播中心 中南联络部文艺部部长",
    p: "日前中国国际文化传播中心中南联络部2018年年会暨一带一路国际大咖秀全球发布会在广州召开。鉴于尚雯婕女士在文艺领域的精深造诣、强大影响力以及对国际文化传播事业所做的突出贡献，中国国际文化传播中心中南联络部特聘尚雯婕女士出任文艺部部长一职。",
    link:"shang1.html"
  },
  {
    id: 1,
    name:"侯明昊",
    img: "news (15).png",
    h6: "侯明昊春日写真 在游走中汲取能量",
    p: "近日，侯明昊一组春日写真曝光。照片中，侯明昊游走在纽约布鲁克林大桥下，卡其撞色系的衣着搭配与四周年代感十足的红砖瓦墙相应，初显沉着稳重之感。",
    link:"hou1.html"
  },
  {
    id: 2,
    name:"曾舜晞",
    img: "news (16).png",
    h6: "曾舜晞魅力写真   孤独患者尽现深邃眼神",
    p: "近日曾舜晞一组随性惬意写真曝光，镜头中的他身着黑色宽松丝纱衬衫，抬手轻抚额头，整个人显得格外帅气，魅力十足，深邃眼神“回眸杀”格外吸睛。",
    link:"zeng1.html"
  },
  {
    id: 3,
    name:"迪玛希",
    img: "news (17).png",
    h6: "迪玛希D时代巡演本周曝光多组幕后团队 首次彩排 引人期待 ",
    p: "本周黑金音乐曝光了迪玛希此次演唱会两组幕后团队视觉造型团队 DO-Fashion，巡演造型备受瞩目，此次演唱会再度邀请到杜杜小小回归，旨在为迪玛希打造更多惊喜造型。除了备受瞩目的造型，高级服装定制品牌施华洛世奇度身设计高定华服，助力亚洲歌王音乐盛宴。",
    link:"di1.html"
  },
  {
    id: 4,
    name:"尚雯婕",
    img: "news (18).png",
    h6: "尚雯婕携手公安部女警官再登经典咏流传 传唱经典与正能量木兰诗",
    p: "4月21日，经典传唱人尚雯婕登2018经典咏流传年度盛典，与蒋沐函共同携手公安部女警官再次唱响经典与正能量《木兰诗》。",
    link:"shang2.html"
  },
  {
    id: 5,
    name:"迪玛希",
    img: "news (23).png",
    h6: "迪玛希王者归来 重回歌手献唱经典情歌《Hello》",
    p: "4月20日，湖南卫视《2018歌手金典之夜》现场直播。迪玛希、汪峰和腾格尔组成“经典之声”队，以致敬经典歌手为主题进行表演。其中，时隔一年再度登台的迪玛希将带来lionel richie的经典作品《Hello》，深情又震撼的演唱令观众十分动容。",
    link:"di2.html"
  },
  {
    id: 6,
    name:"尚雯婕",
    img: "news (26).png",
    h6: "尚雯婕被授予中国青年马术文化推广大使，助力马术大赛",
    p: "4月18日，尚雯婕身着Gucci银色西装外套参与新浪杯未来之星马术大赛赛事启动仪式及参与赛事城市的授牌仪式。",
    link:"shang3.html"
  },
  {
    id: 7,
    name:"侯明昊",
    img: "news (9).png",
    h6: "《盗墓笔记第二季》开机 侯明昊神还原“吴邪本邪”",
    p: "由欢瑞世纪、企鹅影视出品，刘国辉、李昂、周煜执导，白一骢、李昂编剧，侯明昊、成毅、李曼等演员领衔主演的超级季播剧《盗墓笔记第二季》于近日正式官宣。",
    link:"hou2.html"
  },
  {
    id: 8,
    name:"迪玛希",
    img: "news (24).png",
    h6: "迪玛希D时代巡演深圳站开票 5月19日夺耀深圳",
    p: "2018年5月19日，黑金音乐旗下“亚洲人气歌王”迪玛希D-Dynasty世界巡演将于深圳举行。日前，迪玛希D-Dynasty世界巡演全新升级版主视觉海报公布。",
    link:newsDiDetails.di2
  },
  {
    id:9,
    name:"尚雯婕",
    img:"news (25).png",
    h6:"Daydream中国区形象大使尚雯婕压轴幻日音乐节，献唱主题曲",
    p:"4月16日，中国区形象大使尚雯婕身着MASHAMA 亮黑色外衣登陆上海国际音乐村，作为唯一华人女歌手压轴献唱世界顶级电音音乐节幻日音乐节主题曲《The One That Ran Away》。",
    link:newsShangDetails.shang3
  },
  {
    id:10,
    name:"曾舜晞",
    img:"news (42).png",
    h6:"曾舜晞官宣法国贝德玛形象大使 新生代表备受品牌青睐",
    p:"备受品牌青睐的新生代演员曾舜晞官宣成为法国贝德玛形象大使。认真生活、不断进取的他坚持悉心呵护羽翼，以匠人精神雕刻作品，一步一步彰显青春力量。",
    link:newsZengDetails.zeng1
  },
  {
    id:11,
    name:"迪玛希",
    img:"news (41).png",
    h6:"迪玛希D时代世界巡演全面升级 深圳站舞美将破华语史上纪录",
    p:"2018年5月19日，黑金音乐旗下“亚洲人气歌王”迪玛希D-Dynasty世界巡演深圳站将在大运中心体育馆开启，全新升级版主视觉海报也于今日揭开面纱。此次D时代演唱会将以全新的、舞美、创意、造型，给人耳目一新的全视听感受，打造沸腾式现场气氛及完美的视听盛宴。",
    link:newsDiDetails.di3
  },
  {
    id:12,
    name:"尚雯婕",
    img:"news (19).png",
    h6:"世界顶级音乐节Daydream 尚雯婕作为中国区形象大使首唱主题曲",
    p:"世界顶级电音音乐节 DaydreamFestival 幻日音乐节将于4月14、15日登陆上海国际音乐村，音乐节汇集 Ruby Rose，Afrojack 等近60组国际知名艺人阵容！尚雯婕即将作为中国区形象大使也是唯一华人女歌手压轴献唱 Daydream 幻日音乐节主舞台献唱音乐节主题曲 。",
    link:newsShangDetails.shang4
  },
  {
    id:13,
    name:"曾舜晞",
    img:"news (40).png",
    h6:"曾舜晞再现时尚魅力 异域古堡间释放新能量",
    p:"演员曾舜晞今日曝光一组去年拍摄的新写真。身穿深蓝色拼接风衣内搭纯色T恤，创意巧思的设计增添了几分时尚感。",
    link:newsZengDetails.zeng2
  },
  {
    id:14,
    name:"曾舜晞",
    img:"news (39).png",
    h6:"网友恶搞电视剧快哥预告 神展现破次元进击的爱",
    p:"日前公布的电视剧 《快把我哥带走》预告片中，曾舜晞把时分的“蠢萌贱”演绎的淋漓尽致，一播出即收到大批粉丝的喜爱，更是使出绝学破次元进击欺负时秒。",
    link:newsZengDetails.zeng3
  },
  {
    id:15,
    name:"侯明昊",
    img:"news (43).png",
    h6:"侯明昊赶赴新剧拍摄 商务代言紧跟不落",
    p:"近日，侯明昊现身机场出发横店，马不停蹄赶赴新剧拍摄。据悉，新剧系国民级超级IP大剧，侯明昊在剧中挑梁出演男一号，期待他呈现出不一样的经典。随后侯明昊低调现身上海，为其最新代言的某国际知名品牌拍摄广告。侯明昊在潜心磨炼演技的同时，商务价值不断攀升，令人期待。",
    link:newsHouDetails.hou2
  },
  {
    id:16,
    name:"尚雯婕",
    img:"news (38).png",
    h6:"尚雯婕一周连登两次微博热搜榜  耿直电子唱作人上线",
    p:"尚雯婕一周连登两次微博热搜榜，耿直电子唱作人上线",
    link:newsShangDetails.shang5
  },
  {
    id:17,
    name:"曾舜晞",
    img:"news (34).png",
    h6:"《快把我哥带走》发预告海报  曾舜晞神还原脑残时分哥哥与妹互怼",
    p:"3月30日，由企鹅影视与中汇影视联合出品，著名导演韩青执导，曾舜晞、孙千主演的青春校园偶像剧《快把我哥带走》首次发布了先导预告片和“漫撕版”海报。",
    link:newsZengDetails.zeng4
  },
  {
    id:18,
    name:"尚雯婕",
    img:"news (37).png",
    h6:"电子唱作人尚雯婕 Daydream 幻日音乐节中国站主题曲即将上线",
    p:"3月28号，尚雯婕身着MASHAMA 18SS系列套装出席Daydream幻日音乐节发布会，科幻美学元素的西装搭配出独一无二的气质，传递给我们新鲜的视觉体验。",
    link:newsShangDetails.shang6
  },
  {
    id:19,
    name:"尚雯婕",
    img:"news (36).png",
    h6:"尚雯婕出席上海时装周外滩时尚盛典  献唱原创歌曲《The One That Ran Away》",
    p:"3月27号，尚雯婕身着MASHAMA 18SS系列经典条纹西装亮相2018上海时装周外滩时尚盛典，经典黑色西装搭配白色条纹碰撞出春日里标新立异的气质，个性鲜明的展示自我。",
    link:newsShangDetails.shang7
  },
  {
    id:20,
    name:"侯明昊",
    img:"news (35).png",
    h6:"侯明昊《经典咏流传》 唱响95后“惜时”正能量",
    p:"由央视综合频道和央视创造传媒联合推出的大型文化节目《经典咏流传》日前正于央视一套火热播出。3月24日（上周六）最新一期，迎来了人气小生侯明昊的加盟。作为节目中的新生代嘉宾，侯明昊以“经典传唱人”的身份登场，演唱了一首关于“惜时”的歌曲《岁月不待人》。",
    link:newsHouDetails.hou3
  },
  {
    id:21,
    name:"尚雯婕",
    img:"news (6).jpg",
    h6:"尚雯婕录制CCTV网络春晚 光影大秀美轮美奂",
    p:"1月19日，电子唱作人尚雯婕亮相CCTV网络春晚的录制现场。",
    link:newsShangDetails.shang8
  },
  {
    id:22,
    name:"侯明昊",
    img:"news (5).jpg",
    h6:"侯明昊获年度进取艺人殊荣 喜揽2018开年大奖",
    p:"1月18日晚，超能少年侯明昊出席微博之夜颁奖典礼，一袭黑色西装帅气亮相红毯，并获得微博年度进取艺人荣誉。",
    link:newsHouDetails.hou4
  },
  {
    id:23,
    name:"迪玛希",
    img:"news (1).jpg",
    h6:"迪玛希斩获微博之夜 “年度音乐新力量” 神级Live再次惊艳全场",
    p:"1月18日，2017微博之夜在北京水立方举行，群星闪耀亮相",
    link:newsDiDetails.di4
  }

];
var newsCompany = [
  {
    id: 0,
    name:"公司动态",
    img: "news-company (1).jpg",
    h6: "黑金经纪17年指标破千 黑金家族开启殿堂级年会",
    p: "2017年战绩爆表的黑金经纪BG Talent，在升级后的黑金殿堂举办了“2017-2018黑金经纪年度超级盛典",
    link:"company1.html"
  },
  {
    id: 1,
    name:"公司动态",
    img: "news-company (1).png",
    h6: "黑金家族全体出席开工仪式 殿堂级工作环境低调公开",
    p: "2017年接近尾声，黑金经纪 BG Talent 历时数月斥资百万打造的殿堂级办公室于近日完美收工。12月23日，黑金家族全体人员出席了新公司乔迁盛典。黑金经纪创始人兼董事长聂心远，电子唱作人黑金经纪合伙人尚雯婕及黑金经纪 BG Talent旗下 新晋演员曾舜晞 、国民萌宠 蒋佳恩等一同出席了黑金经纪开工仪式，见证这一重要时刻。 开工仪式上，董事长聂心远致辞发表感言并表示将在2018年打造黑金经纪继续在内地娱乐产业的发展格局中增添至关重要的一笔，同时为发展开启了崭新的篇章。",
    link:"company2.html"
  },
  {
    id: 2,
    name:"公司动态",
    img: "news-company (2).png",
    h6: "黑金经纪创始人聂心远 受邀出席V影响力畅谈经纪核心思维",
    p: "12月6日，黑金经纪创始人兼董事长聂心远受邀出席2017新浪V影响力峰会盛典。在盛典当中，圆桌论坛环节更是精彩发声，畅谈“打造明星在社交平台的持久生命力”。",
    link:"company3.html"
  },
  {
    id: 3,
    name:"公司动态",
    img: "news-company (2).jpg",
    h6: "黑金经纪成绩耀眼连斩三项大奖,新势力军团惊艳亮相引热议",
    p: "近日，华娱新一代偶像教父 黑金经纪创始人兼董事长 聂心远、电子唱作人黑金经纪合伙人尚雯婕、新锐亿元俱乐部导演姚婷婷 及 黑金经纪 BG Talent旗下人气偶像 超能少年侯明昊、森萌少女Michelle J一同出席2016凤凰......",
    link:"company4.html"
  }
];
var newsShang = [
  {
    id: 0,
    name:"尚雯婕",
    img: "news (14).png",
    h6: "尚雯婕受聘为中国国际文化传播中心 中南联络部文艺部部长",
    p: "日前中国国际文化传播中心中南联络部2018年年会暨一带一路国际大咖秀全球发布会在广州召开。鉴于尚雯婕女士在文艺领域的精深造诣、强大影响力以及对国际文化传播事业所做的突出贡献，中国国际文化传播中心中南联络部特聘尚雯婕女士出任文艺部部长一职。",
    link:"shang1.html"
  },
  {
    id: 1,
    name:"尚雯婕",
    img: "news (18).png",
    h6: "尚雯婕携手公安部女警官再登经典咏流传 传唱经典与正能量木兰诗",
    p: "4月21日，经典传唱人尚雯婕登2018经典咏流传年度盛典，与蒋沐函共同携手公安部女警官再次唱响经典与正能量《木兰诗》。",
    link:"shang2.html"
  },
  {
    id: 2,
    name:"尚雯婕",
    img: "news (26).png",
    h6: "尚雯婕被授予中国青年马术文化推广大使，助力马术大赛",
    p: "4月18日，尚雯婕身着Gucci银色西装外套参与新浪杯未来之星马术大赛赛事启动仪式及参与赛事城市的授牌仪式。",
    link:"shang3.html"
  },
  {
    id:3,
    name:"尚雯婕",
    img:"news (25).png",
    h6:"Daydream中国区形象大使尚雯婕压轴幻日音乐节，献唱主题曲",
    p:"4月16日，中国区形象大使尚雯婕身着MASHAMA 亮黑色外衣登陆上海国际音乐村，作为唯一华人女歌手压轴献唱世界顶级电音音乐节幻日音乐节主题曲《The One That Ran Away》。",
    link:newsShangDetails.shang3
  },
  {
    id:4,
    name:"尚雯婕",
    img:"news (19).png",
    h6:"世界顶级音乐节Daydream 尚雯婕作为中国区形象大使首唱主题曲",
    p:"世界顶级电音音乐节 DaydreamFestival 幻日音乐节将于4月14、15日登陆上海国际音乐村，音乐节汇集 Ruby Rose，Afrojack 等近60组国际知名艺人阵容！尚雯婕即将作为中国区形象大使也是唯一华人女歌手压轴献唱 Daydream 幻日音乐节主舞台献唱音乐节主题曲 。",
    link:newsShangDetails.shang4
  },
  {
    id:5,
    name:"尚雯婕",
    img:"news (38).png",
    h6:"尚雯婕一周连登两次微博热搜榜  耿直电子唱作人上线",
    p:"尚雯婕一周连登两次微博热搜榜，耿直电子唱作人上线",
    link:newsShangDetails.shang5
  },
  {
    id:6,
    name:"尚雯婕",
    img:"news (37).png",
    h6:"电子唱作人尚雯婕 Daydream 幻日音乐节中国站主题曲即将上线",
    p:"3月28号，尚雯婕身着MASHAMA 18SS系列套装出席Daydream幻日音乐节发布会，科幻美学元素的西装搭配出独一无二的气质，传递给我们新鲜的视觉体验。",
    link:newsShangDetails.shang6
  },
  {
    id:7,
    name:"尚雯婕",
    img:"news (36).png",
    h6:"尚雯婕出席上海时装周外滩时尚盛典  献唱原创歌曲《The One That Ran Away》",
    p:"3月27号，尚雯婕身着MASHAMA 18SS系列经典条纹西装亮相2018上海时装周外滩时尚盛典，经典黑色西装搭配白色条纹碰撞出春日里标新立异的气质，个性鲜明的展示自我。",
    link:newsShangDetails.shang7
  },
  {
    id:8,
    name:"尚雯婕",
    img:"news (6).jpg",
    h6:"尚雯婕录制CCTV网络春晚 光影大秀美轮美奂",
    p:"1月19日，电子唱作人尚雯婕亮相CCTV网络春晚的录制现场。",
    link:newsShangDetails.shang8
  },
  {
    id:9,
    name:"尚雯婕",
    img:"news-shang (5).jpg",
    h6:"尚雯婕时尚大片曝光 演绎另类辛辣派时髦",
    p:"电子唱作人尚雯婕曝光了一组时尚时尚大片。",
    link:newsShangDetails.shang9
  },
  {
    id:10,
    name:"尚雯婕",
    img:"news-shang (4).jpg",
    h6:"尚雯婕亮相湖南卫视2018跨年演唱会 霸气开唱「黑金 Black &amp; Golden」",
    p:"12月31日，电子唱作人尚雯婕亮相快乐中国青春嗨18湖南卫视跨年演唱会。",
    link:newsShangDetails.shang10
  },
  {
    id:11,
    name:"尚雯婕",
    img:"news-shang (3).jpg",
    h6:"尚雯婕亮相CCTV两岸一家亲晚会 献唱《故乡的云》",
    p:"CCTV两岸一家亲——纪念两岸开放民间交流30周年特别节目 在CCTV4黄金时段播出。",
    link:newsShangDetails.shang11
  },
  {
    id:12,
    name:"尚雯婕",
    img:"news-shang (15).png",
    h6:"尚雯婕献声手游《奇迹MU觉醒》同名主题曲 音源正式曝光",
    p:"电子唱作人尚雯婕 为奇迹MU觉醒 手游演唱的主题曲《奇迹MU觉醒》正式版音源于近日上线！歌曲完美融合电子音乐与交响元素，迷幻神秘又极具感染力。或如情人般在耳畔低语，微风拂过花瀑映出彩虹，转瞬间整个世界却突然粉碎，强烈对比让整首音乐成功复现了勇者大陆的辉煌与热血。",
    link:newsShangDetails.shang12
  },
  {
    id:13,
    name:"尚雯婕",
    img:"news-shang (14).png",
    h6:"尚雯婕现身十佳劳伦斯冠军奖颁奖盛典 献唱hero致敬梦想",
    p:"12月20日，电子唱作人尚雯婕现身2017中国十佳劳伦斯冠军奖颁奖盛典。作为中国优秀运动员和教练员的至高荣誉。劳伦斯冠军奖通过体育的影响力和号召力去传播公益力量，当天尚雯婕一席白色礼服现身，用一首大气磅礴的《hero》致敬中国职业帆船第一人郭川。郭川挑战自我，永不服输、突破极限的勇气伴随着尚雯婕 的歌声完美诠释了劳伦斯精神。",
    link:newsShangDetails.shang13
  },
  {
    id:14,
    name:"尚雯婕",
    img:"news-shang (13).png",
    h6:"尚雯婕亮相2017新浪风格大赏 获年度时尚态度艺人大奖",
    p:"12月19日，电子唱作人尚雯婕出席2017新浪风格大赏。当天，尚雯婕先是以一身绿色西装亮相红毯，随性又不失帅气。随后更换上大气的紫色衬衫演绎《The One That Ran Away》，展现特有的霸气舞台。同时，尚雯婕更在当晚斩获“年度时尚态度艺人”大奖！将自己的音乐和时尚造型相结合，“年度时尚态度艺人”大奖实至名归！",
    link:newsShangDetails.shang14
  },
  {
    id:15,
    name:"尚雯婕",
    img:"news-shang (12).png",
    h6:"尚雯婕原创《I Love You》首播 打造“暗黑系”电子情歌",
    p:"&nbsp;“电子唱作人”尚雯婕 全新全创作唱片第一主打曲目《I Love You》在尚雯婕生日当天正式曝光，《I Love You》由尚雯婕包揽词曲创作及制作，音乐大师DJ Krush操刀编曲，打造令人耳目一新的“暗黑系”电子情歌。",
    link:newsShangDetails.shang15
  },
  {
    id:16,
    name:"尚雯婕",
    img:"news-shang (18).png",
    h6:"尚雯婕全新大片曝光 演绎机械风摇滚范十足",
    p:"近日，电子唱作人尚雯婕曝光一组时尚大片。组图中，尚雯婕展现出多种风格，或身着黑色皮衣摇滚范十足；或是站在机车厂前，侧头低望，时尚帅气；又或者一袭墨绿风衣，随性简约机械感十足。该组写真一经曝光，就引来不少网友纷纷评论道：“好喜欢这样帅气随性的尚雯婕！”跟随这组写真曝光的还有尚雯婕“犀利”的音乐风格，即将发行的新专辑目前曝光的三首歌曲都可看出她音乐风格的独树一帜，据悉新专辑的第一主打曲目也将于近日曝光，敬请期待。",
    link:newsShangDetails.shang16
  },
  {
    id:17,
    name:"尚雯婕",
    img:"news-shang (17).png",
    h6:"尚雯婕献唱2018央视元旦晚会《山水中国美》",
    p:"近日，电子唱作人尚雯婕亮相云南参与2018年央视元旦晚会《山水中国美》的录制。当天尚雯婕身穿Oscar de le Renta红色长裙喜庆亮相，一曲《山歌好比春江水》让听众仿佛置身陶醉于中国山水之美中。晚会将于2018年元旦在CCTV3播出 敬请期待。",
    link:newsShangDetails.shang17
  },
  {
    id:18,
    name:"尚雯婕",
    img:"news-shang (16).png",
    h6:"尚雯婕助阵嘉人十周年盛典 霸气开唱展音乐态度",
    p:"近日，嘉人中国风10周年盛典在北京盛大举行。电子唱作人尚雯婕作为开场嘉宾助阵，一首《free &amp; unafraid 自由与勇敢》温婉又不失大气，随后尚雯婕更带来最新单曲《That Bra》热力引爆全场。舞台上，尚雯婕身着Balmain SS2018 Menswear外套霸气展现live实力，用音乐表达自己的时尚态度，现场瞬间被点燃。",
    link:newsShangDetails.shang18
  },
  {
    id:19,
    name:"尚雯婕",
    img:"news-shang (9).png",
    h6:"尚雯婕出席罗博报告美好生活方式盛典 获年度音乐唱作人奖项",
    p:"12月1日，罗博报告 致敬臻榜 美好生活方式盛典best of the best在北京举办。盛典现场，多位艺术家团队带来新媒体艺术的震撼表演，同时艺术气质满满的电子唱作人尚雯婕在开场为大家带来《little star星光 》点亮现场，不仅如此，尚雯婕更收获年度音乐唱作人奖项，开启艺术与音乐融合的新未来 ！",
    link:newsShangDetails.shang19
  },
  {
    id:20,
    name:"尚雯婕",
    img:"news-shang (11).png",
    h6:"尚雯婕获年度时尚音乐先锋大奖 新歌舞台点燃全场",
    p:"近日，电子唱作人尚雯婕闪耀亮相某时尚盛典，并斩获“2017年度时尚音乐先锋大奖”成为当天盛典上备受瞩目的焦点。此外，尚雯婕也在开场为大家带来了全新全创作唱片首发单曲《The One That Ran Away》的精彩舞台，劲爆的电音旋律瞬间点燃全场。",
    link:newsShangDetails.shang20
  },
  {
    id:21,
    name:"尚雯婕",
    img:"news-shang (10).png",
    h6:"尚雯婕加盟北京卫视「舞力觉醒」任舞力唤醒师",
    p:"11月6日，北京卫视推出的全国首档顶级街舞竞技秀《舞力觉醒》在京举行开播发布会。电子唱作人尚雯婕、苏醒、大目三位舞力唤醒师正式亮相，“电子唱作人”尚雯婕也是首次以舞力唤醒师身份加盟节目，出道十余年，尚雯婕秉持着心中做最Real的音乐，一路走来，好评不断。在尚雯婕看来，传播最Real HIPHOP文化是《舞力觉醒》最吸引她的地方。她相信随着《舞力觉醒》的热播，真正的HIPHOP会越来越被大众熟悉，得到认可。",
    link:newsShangDetails.shang21
  },
  {
    id:22,
    name:"尚雯婕",
    img:"news-shang (2).jpg",
    h6:"尚雯婕全创作新单《Blue Maze》首播 glitch诠释故障艺术之美",
    p:"“电子唱作人”尚雯婕&nbsp;2017全新全创作唱片第二首主打单曲《Blue Maze》今日正式曝光，《Blue Maze》由尚雯婕包揽词曲创作及制作，知名音乐人Alex Banks操刀编曲，在视觉和听觉上作用glitch手法营造迷幻神游电子。",
    link:newsShangDetails.shang22
  },
  {
    id:23,
    name:"尚雯婕",
    img:"news-shang (1).jpg",
    h6:"尚雯婕原创《The One That Ran Away》首播 另类电子摇滚剖析内心",
    p:"“电子唱作人”尚雯婕2017全创作唱片首支单曲《The One That Ran Away》今日对外首播。由尚雯婕包揽词曲创作及制作，英国知名音乐人Anu Pillai编曲，也是尚雯婕首次独立制作的另类电子摇滚。",
    link:newsShangDetails.shang23
  }

];
var newsZeng = [
  {
    id: 0,
    name:"曾舜晞",
    img: "news (16).png",
    h6: "曾舜晞魅力写真,孤独患者尽现深邃眼神",
    p: "近日曾舜晞一组随性惬意写真曝光，镜头中的他身着黑色宽松丝纱衬衫，抬手轻抚额头，整个人显得格外帅气，魅力十足，深邃眼神“回眸杀”格外吸睛。",
    link:"zeng1.html"
  },
  {
    id:1,
    name:"曾舜晞",
    img:"news (42).png",
    h6:"曾舜晞官宣法国贝德玛形象大使 新生代表备受品牌青睐",
    p:"备受品牌青睐的新生代演员曾舜晞官宣成为法国贝德玛形象大使。认真生活、不断进取的他坚持悉心呵护羽翼，以匠人精神雕刻作品，一步一步彰显青春力量。",
    link:"zeng2.html"
  },
  {
    id:2,
    name:"曾舜晞",
    img:"news (40).png",
    h6:"曾舜晞再现时尚魅力 异域古堡间释放新能量",
    p:"演员曾舜晞今日曝光一组去年拍摄的新写真。身穿深蓝色拼接风衣内搭纯色T恤，创意巧思的设计增添了几分时尚感。",
    link:"zeng3.html"
  },
  {
    id:3,
    name:"曾舜晞",
    img:"news (39).png",
    h6:"网友恶搞电视剧快哥预告 神展现破次元进击的爱",
    p:"日前公布的电视剧 《快把我哥带走》预告片中，曾舜晞把时分的“蠢萌贱”演绎的淋漓尽致，一播出即收到大批粉丝的喜爱，更是使出绝学破次元进击欺负时秒。",
    link:newsZengDetails.zeng3
  },
  {
    id:4,
    name:"曾舜晞",
    img:"news (34).png",
    h6:"《快把我哥带走》发预告海报  曾舜晞神还原脑残时分哥哥与妹互怼",
    p:"3月30日，由企鹅影视与中汇影视联合出品，著名导演韩青执导，曾舜晞、孙千主演的青春校园偶像剧《快把我哥带走》首次发布了先导预告片和“漫撕版”海报。",
    link:newsZengDetails.zeng4
  },
  {
    id:5,
    name:"曾舜晞",
    img:"news-zeng (1).jpg",
    h6:"曾舜晞出演倚天屠龙记张无忌 倚天屠龙尘封十年终开启",
    p:"新版倚天屠龙记于1月20日正式开机！",
    link:newsZengDetails.zeng5
  },
  {
    id:6,
    name:"曾舜晞",
    img:"news-zeng (10).jpg",
    h6:"曾舜晞暖心回归《萌宠》 当家开花店萌娃齐助阵",
    p:"曾舜晞参加的爱奇艺综艺《萌宠小大人》于周六上线播出。",
    link:newsZengDetails.zeng6
  },
  {
    id:7,
    name:"曾舜晞",
    img:"news-zeng (9).jpg",
    h6:"曾舜晞自穿搭皮衣短靴现身上海  展现劲酷街头风潮",
    p:"演员曾舜晞与元气少女宋祖儿一同于上海出席活动，此次活动的整体造型皆由曾舜晞本人完成",
    link:newsZengDetails.zeng7
  },
  {
    id:8,
    name:"曾舜晞",
    img:"news-zeng (8).jpg",
    h6:"曾舜晞感谢舞台继续前行 《演员的诞生》获吴君如赞赏",
    p:"演员曾舜晞参加热门综艺《演员的诞生》半决赛已于上周结束",
    link:newsZengDetails.zeng8
  },
  {
    id:9,
    name:"曾舜晞",
    img:"news-zeng (7).jpg",
    h6:"曾舜晞受邀出席国剧盛典   荣获“媒体推荐男演员”  感恩观众",
    p:"曾舜晞荣获2017年国剧盛典的“媒体推荐男演员”大奖。",
    link:newsZengDetails.zeng9
  },
  {
    id:10,
    name:"曾舜晞",
    img:"news-zeng (5).jpg",
    h6:"曾舜晞圣诞写真 鬼马混搭秒杀菲林",
    p:"演员曾舜晞在圣诞节当天为回馈粉丝特别放送一组时尚写真",
    link:newsZengDetails.zeng10
  },
  {
    id:11,
    name:"曾舜晞",
    img:"news-zeng (6).jpg",
    h6:"曾翠鹅爆笑上线 另类教育方式引人深思",
    p:"周六在爱奇艺上线的《萌宠小大人》中，曾舜晞颠覆形象以女装扮相曾翠鹅的身份爆笑出场，与孩子们斗智斗勇",
    link:newsZengDetails.zeng11
  },
  {
    id:12,
    name:"曾舜晞",
    img:"news-zeng (11).png",
    h6:"曾舜晞再战演员的诞生 搭档欧阳娜娜致青春",
    p:"演员#曾舜晞#今晚再登#演员的诞生#出演《八月照相馆》陈孝正，搭档#欧阳娜娜#深情致青春，再次参赛的@曾舜晞Joseph 褪去了初次登场的青涩懵懂，更多的展示了自己对于表演的理解和诠释，此次演绎陈孝正更是收获了导师们的肯定，期待未来曾舜晞给我们带来更加精彩的表现。",
    link:newsZengDetails.zeng12
  },
  {
    id:13,
    name:"曾舜晞",
    img:"news-zeng (10).png",
    h6:"“铃音cp”再重逢 本周萌宠爆笑来袭",
    p:"本周萌宠学园迎来新客人，许久未见的“铃音cp”再度重合。副园长曾舜晞为隐瞒身份英韩双语神转换，与好友张雪迎一唱一和的忽悠萌娃，引发爆笑不停。本期节目副院长第一次面对了孩子们之间发生的严重矛盾，也刚20岁的曾舜晞站在一个朋友的角度和孩子阐述道理。这种特别的教育角度也引发了网友们的诸多讨论。",
    link:newsZengDetails.zeng13
  },
  {
    id:14,
    name:"曾舜晞",
    img:"news-zeng (9).png",
    h6:"演员曾舜晞荣获“年度活力之星”   敬畏表演感恩观众",
    p:"&nbsp; &nbsp;近日演员曾舜晞出席盛典活动。他身穿黑色西装内搭浅蓝色丝绸衬衫帅气亮相现场。整体造型优雅中又不失年轻活力，简约大方，时尚感十足。&nbsp;&nbsp;2017年对演员曾舜晞来说是收获满满的一年，他在今年给观众带来了许多精彩的作品，在《择天记》中他饰演了潇洒仗义的“唐三十六”、在《青春最好時》中他饰演了深情学霸许空凛，在最近的《演员的诞生》中他让观众看见了曾舜晞是一个对表演充满敬畏的“新生演员”。他出道第一年便连续拍戏超过300天，这样的勤奋刻苦认真谦逊更是得到了业界一片褒奖。&nbsp; &nbsp;曾舜晞凭借优秀的成绩被授予“年度活力之星”的称号。相信在2018，可以看见这个少年更加精彩的表现。",
    link:newsZengDetails.zeng14
  },
  {
    id:15,
    name:"曾舜晞",
    img:"news-zeng (13).png",
    h6:"《萌宠小大人》爱奇艺开播 国欠哥曾舜晞温暖上线",
    p:"由曾舜晞、刘涛出演的成长实验类真人秀《萌宠小大人》于12月16日在爱奇艺平台正式上线播出，节目中曾舜晞作为副园长展现了一个辅助孩子们成长并有自己独到教育见解的角色。曾舜晞曾表示“刚接触这个节目我真的很害怕，一下子面对六个小孩子我觉得完蛋了”。而在一次任务失败后，副园长曾舜晞不得不离开萌宠学园，他说：“我看到孩子们哭着为我求情的时候心都融化了，觉得当时我很爱这个大家庭。”通过这个节目让我们看见了一个和孩子们相处时有担当有责任心的大男孩，一个飞速成长的曾舜晞。",
    link:newsZengDetails.zeng15
  },
  {
    id:16,
    name:"曾舜晞",
    img:"news-zeng (14).png",
    h6:"刘涛曾舜晞献上新综艺  欢脱下饭引网友期待",
    p:"日前刘涛、曾舜晞所参与的爱奇艺真人秀《萌宠小大人》召开发布会，园长刘涛与副园长曾舜晞，化身萌宠学园管家2人组，与 6个萌娃 + 6只汪星人 展开了一场奇妙又惊险不断的欢脱旅行。节目将于12月16日起每周6晚8点爱奇艺独家放送，这部年末温情综艺尚未播出就引起众多网友期待。",
    link:newsZengDetails.zeng16
  },
  {
    id:17,
    name:"曾舜晞",
    img:"news-zeng (12).png",
    h6:"曾舜晞摩纳哥写真曝光 潮装少年疯狂打call",
    p:"近日演员曾舜晞最新公布一组摩纳哥写真大片，整组大片摩登复古，帅气十足。红黑格子衬衫叠穿黑白格子衬衫不见格子衬衫以往的清爽开朗，却更显搭配别致有风格，大片整体色调温暖柔和，撞上曾舜晞年轻带着傲气的眼神，渲染出曾舜晞独立的气质。大片中的曾舜晞置身于一个空无一人的空间，昏黄的灯光打在的少年的身上，空气中充满了孤寂的气息。白色的卷闸门前身穿格子衬衫的少年，头顶闪烁橙色灯光的广告灯牌中有一个带着墨镜的俏皮emoji，和曾舜晞的清冷的表情形成强烈的对比。曾舜晞站在白色的电话亭旁，电话亭是一个寄托乡愁的地方，仿佛又看见了那个为了梦想孤身一人离家远行的男孩。那个幼小的男孩如今已经变成一个坚毅的少年，这几年的的经历更是为他增添了成熟的魅力。这个今年刚满二十岁的少年曾经说过：“我有一个老灵魂”，这个拥有老灵魂的少年有一双深邃的眼睛，让人猜不透这个少年的心底深处又有怎么样的故事。",
    link:newsZengDetails.zeng17
  },
  {
    id:18,
    name:"曾舜晞",
    img:"news-zeng (8).png",
    h6:"曾舜晞新歌混音版首发 坚持个性音乐反流行",
    p:"今天曾舜晞发布最新单曲《THANK YOU (Easyfun remixed)》，这首单曲是对前单曲《THANK YOU 谢你。》的重新编曲，通过融入全新的元素，向大家呈现了一部充满动感旋律的诚意之作，这首单曲翻唱自英国天后级歌手Dido的成名之作《THANK YOU 》，这首最新单曲由英国独立先锋音乐厂牌制作人Easyfun亲自操刀重新编曲的二度制作。低沉的而富有磁性的嗓音，加入remix元素，在原歌曲的悲伤的意境中再添了对生活的无畏，一切都会过去，即使今天再糟糕。",
    link:newsZengDetails.zeng18
  },
  {
    id:19,
    name:"曾舜晞",
    img:"news-zeng (7).png",
    h6:"曾舜晞感恩节发感恩新单 翻唱英伦天后Dido成名曲",
    p:"今日，曾舜晞最新单曲《Thank you》正式上线，这是继20岁生日当天发布的《乐园Eden》之后特别发布的又一诚心之作。这首单曲翻唱自英国天后级歌手Dido的成名之作《Thank you》，这首最新单曲由英国独立先锋音乐厂牌制作人Easyfun亲自操刀重新编曲的二度制作。曾舜晞以其干净清爽的声音重新诠释这首经典之作，并且于感恩节之日发布新歌，作为出道两年的礼物回馈大众，与此同时，曾舜晞最新单曲《Thank you》同名MV也同步上线。此次的MV的拍摄更是来自曾舜晞本人的想法，首次自编自导MV，完美演绎颓废少年的失落与不羁。",
    link:newsZengDetails.zeng19
  },
  {
    id:20,
    name:"曾舜晞",
    img:"news-zeng (6).png",
    h6:"曾舜晞担任公益形象大使助力深圳益跑",
    p:"昨日，2017青春中国·益跑深圳官宣97年新晋演员，土生土长的上进深圳仔曾舜晞担任其公益形象大使。作为“2017青春中国·益跑深圳”公益形象大使，曾舜晞一直以来致力于公益事业的发展，并积极参与和推广，他表示：希望能有更多人，加入益跑行列，注入并传递更多青春正能量。据悉，曾舜晞将在12月10日现身深圳，与数千跑友一起，用眼睛发现身边的感动，用脚步丈量深圳的魅力！届时更会有现场直播，与跑友亲密互动。",
    link:newsZengDetails.zeng20
  },
  {
    id:21,
    name:"曾舜晞",
    img:"news-zeng (4).jpg",
    h6:"曾舜晞出席手机品牌发布会 清爽白西装彰显轻熟魅力",
    p:"近日，新晋演员曾舜晞以全新代言人身份出席某手机品牌新品发布会。此次的手机见证全能晞的“全屏”实力。当天曾舜晞身着一套白色西装，搭配黑色皮鞋,尽显轻熟魅力，充分彰显了他的穿搭品味与个人气质。",
    link:newsZengDetails.zeng21
  },
  {
    id:22,
    name:"曾舜晞",
    img:"news-zeng (3).jpg",
    h6:"曾舜晞出任欧莱雅男士品牌大使 热情分享护肤心得",
    p:"11月1日，演员曾舜晞以巴黎欧莱雅男士品牌大使身份出席2017京东超市“星”品之夜。继“吴彦祖，阮经天，吴亦凡，井柏然”之后，又一股潜力实力兼具的青春力量&nbsp;“曾舜晞”加入了欧莱雅男士的型男行列 。",
    link:newsZengDetails.zeng22
  },
  {
    id:23,
    name:"曾舜晞",
    img:"news-zeng (2).jpg",
    h6:"曾舜晞大片曝光 尽显少年纯真之态",
    p:"近日鲜橙派再次放出了一组曾舜晞的写真大片，这组大片展现了曾舜晞别样的少年纯真，在水珠的映衬下，曾舜晞的脸庞显得格外梦幻，眼神中透露出一股少年人特有的倔强和坚定。不禁让人期待这个20岁的坚定少年给我们带来更多的惊喜。",
    link:newsZengDetails.zeng23
  }
];
var newsHou = [
  {
    id: 0,
    name:"侯明昊",
    img: "news (15).png",
    h6: "侯明昊春日写真 在游走中汲取能量",
    p: "近日，侯明昊一组春日写真曝光。照片中，侯明昊游走在纽约布鲁克林大桥下，卡其撞色系的衣着搭配与四周年代感十足的红砖瓦墙相应，初显沉着稳重之感。",
    link:"hou1.html"
  },
  {
    id: 1,
    name:"侯明昊",
    img: "news (9).png",
    h6: "《盗墓笔记第二季》开机 侯明昊神还原“吴邪本邪”",
    p: "由欢瑞世纪、企鹅影视出品，刘国辉、李昂、周煜执导，白一骢、李昂编剧，侯明昊、成毅、李曼等演员领衔主演的超级季播剧《盗墓笔记第二季》于近日正式官宣。",
    link:"hou2.html"
  },
  {
    id:2,
    name:"侯明昊",
    img:"news (43).png",
    h6:"侯明昊赶赴新剧拍摄 商务代言紧跟不落",
    p:"近日，侯明昊现身机场出发横店，马不停蹄赶赴新剧拍摄。据悉，新剧系国民级超级IP大剧，侯明昊在剧中挑梁出演男一号，期待他呈现出不一样的经典。随后侯明昊低调现身上海，为其最新代言的某国际知名品牌拍摄广告。侯明昊在潜心磨炼演技的同时，商务价值不断攀升，令人期待。",
    link:"hou3.html"
  },
  {
    id:3,
    name:"侯明昊",
    img:"news (35).png",
    h6:"侯明昊《经典咏流传》 唱响95后“惜时”正能量",
    p:"由央视综合频道和央视创造传媒联合推出的大型文化节目《经典咏流传》日前正于央视一套火热播出。3月24日（上周六）最新一期，迎来了人气小生侯明昊的加盟。作为节目中的新生代嘉宾，侯明昊以“经典传唱人”的身份登场，演唱了一首关于“惜时”的歌曲《岁月不待人》。",
    link:newsHouDetails.hou3
  },
  {
    id:4,
    name:"侯明昊",
    img:"news (5).jpg",
    h6:"侯明昊获年度进取艺人殊荣 喜揽2018开年大奖",
    p:"1月18日晚，超能少年侯明昊出席微博之夜颁奖典礼，一袭黑色西装帅气亮相红毯，并获得微博年度进取艺人荣誉。",
    link:newsHouDetails.hou4
  },
  {
    id:5,
    name:"侯明昊",
    img:"news-hou (8).jpg",
    h6:"《人不彪悍枉少年》热拍 侯明昊校园剧照燃爆热血青春",
    p:"由企鹅影视、耀客传媒联合出品，邓科执导，侯明昊主演的青春校园剧《人不彪悍枉少年》日前正在火热拍摄中。",
    link:newsHouDetails.hou5
  },
  {
    id:6,
    name:"侯明昊",
    img:"news-hou (7).jpg",
    h6:"侯明昊最新写真 时尚诠释鲜活本色",
    p:"侯明昊一组纽约时尚写真曝光。",
    link:newsHouDetails.hou6
  },
  {
    id:7,
    name:"侯明昊",
    img:"news-hou (6).jpg",
    h6:"侯明昊开年意境大片 逐梦少年不负可期时光",
    p:"超能少年侯明昊一组梦幻大片强势上线。",
    link:newsHouDetails.hou7
  },
  {
    id:8,
    name:"侯明昊",
    img:"news-hou (5).jpg",
    h6:"侯明昊新戏《人不彪悍枉少年》开机 热血少年尽显彪悍青春",
    p:"12月28日，由侯明昊主演的热血青春校园剧《人不彪悍枉少年》开机。",
    link:newsHouDetails.hou8
  },
  {
    id:9,
    name:"侯明昊",
    img:"news-hou (5).png",
    h6:"侯明昊出席品牌活动 现场深情首唱《脸谱》",
    p:"12月21日，侯明昊以品牌大使身份出任某知名护肤品牌活动。活动中，侯明昊不仅分享了个人护肤秘籍，还与在线网友隔空互动，更大放福利，首次在现场正式演唱其个人单曲《脸谱》。侯明昊深情款款的专注和投入引发网友疯狂刷屏，加之一袭蓝色西服的造型，令网友直呼：圣诞节请送我一个这样的“蓝朋友”。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由侯明昊主演的新剧即将于28日开机。此次，他将饰演一位看似性格彪悍实则内心柔软的校园风云人物，敬请期待。",
    link:newsHouDetails.hou9
  },
  {
    id:10,
    name:"侯明昊",
    img:"news-hou (4).png",
    h6:"侯明昊英伦学院写真 尽显青葱少年时",
    p:"近日，超能少年侯明昊曝光一组最新写真。照片中，侯明昊如同沉浸在图书馆的青葱少年，托腮沉思，置身于冬日中的一角温暖天地，任窗外寒风凛冽，而他却自悠闲惬意。橘红色的灯光下，身着白色英伦风毛衣的少年，时而低头浅笑，时而认真思索，仿佛像个有故事的男同学。由侯明昊主演的新剧即将于月底开机。此次，他将饰演一位看似性格彪悍实则内心柔软的校园风云人物，敬请期待。",
    link:newsHouDetails.hou10
  },
  {
    id:11,
    name:"侯明昊",
    img:"news-hou (7).png",
    h6:"侯明昊《演员的诞生》致敬经典：我不只是小鲜肉",
    p:"12月9日播出的《演员的诞生》中，95后新人演员侯明昊搭档张雪迎、冯文娟、姚远同台飙戏，联袂演绎经典剧目《将爱情进行到底》的改编片段。四人合力呈现了一场精彩饱满的舞台表演。作为新生代演员，侯明昊在节目中谈到，“比赛本就有输赢，这次经历对于自己来说是学习。”而后其也在微博上发布长微博来表明对“小鲜肉”的看法，“外表和年纪不是我能改变的，但我可以决定我是否努力，是否善良，是否坚持！”希望在接下来的演艺道路上，侯明昊能够继续真实做自己，保持演员的初心，一路前行。",
    link:newsHouDetails.hou11
  },
  {
    id:12,
    name:"侯明昊",
    img:"news-hou (12).png",
    h6:"侯明昊《演员的诞生》 将播出 潜心学习专注表演",
    p:"本周六12月9日晚十点，95后新人演员侯明昊将现身浙江卫视《演员的诞生》最后一期踢馆赛，与一众挑战者们展开激烈的舞台角逐。据悉，侯明昊此次将与另外三位参赛者组成一队，合力完成选自九十年代热播剧《将爱情进行到底》的改编片段。侯明昊在其中饰演杨峥，首次挑战舞台剧致敬经典。据网友路透，本次侯明昊将为观众带来一段勾起年少回忆的爱情故事，随着剧情的起伏，侯明昊也将在甜蜜发糖与情绪爆发之间展现出不同状态下的精彩演绎，令不少网友直言期待。四进一的赛制升级，与前辈们的演技切磋，将迎来怎样的结果？期待本周六晚浙江卫视《演员的诞生》，一睹超能少年侯明昊走向演员之路的潜心演绎。",
    link:newsHouDetails.hou12
  },{
    id:13,
    name:"侯明昊",
    img:"news-hou (6).png",
    h6:"侯明昊冬日写真 沉淀自我超能迸发",
    p:"今日，超能少年侯明昊曝光一组冬日写真。镜头下的侯明昊在湖边沉淀自我，眺望远方，眉宇间时而呈现出大男孩的单纯清澈，时而露出深邃神情日显稳重，为冬日的灰白色调中添上一笔少年自有的新鲜与活力色彩。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;据悉，侯明昊近半年内无缝隙进出两个剧组，先后担纲超级IP剧《西游记女儿国》及青春魔幻大电影《完美魔咒》男一号。坚持演员身份潜心专注表演的他，日前加盟浙江卫视热门综艺《演员的诞生》，在节目中虚心向演员前辈们讨教学习。该节目将于本周六12月9日晚播出，期待侯明昊为我们带来惊喜的演技展现，更期待这位踏实努力的少年能持续积累，超能迸发。",
    link:newsHouDetails.hou13
  },
  {
    id:14,
    name:"侯明昊",
    img:"news-hou (3).png",
    h6:"侯明昊爱心林初建成 演员身份下持续公益",
    p:"2017年8月3日，新晋演员侯明昊在其20岁生日之际，通过中国绿化基金会“百万森林”公益项目成功捐赠了1083棵适宜在荒漠生长的树苗，以帮助中国西部气候贫困地区人口改善生态环境，助力环保。据悉，该项目已于近日起正式进入播种期，1083棵树苗将一一栽种于广阔的西北荒漠地区，在绿化工作者的浇灌下茁壮成长。侯明昊作为95后人气小生，一直以其正能量形象及踏实努力的进取态度深获业界和观众的看好与肯定。在侯明昊一步步走向演员身份的道路上，其热爱公益慈善事业的积极表现也是有目共睹。除了此次为中国绿化环保贡献力量，侯明昊此前更是参与了“绘本时光”阅读公益活动、并助力非物质文化遗产行动，他曾表示：“慈善其实是人的一种生活方式，尽力而为，量力而行。”侯明昊正身体力行成为偶像模范，而回归到演员身份下的他更是维系初心，不断钻研前行。日前，侯明昊加盟录制浙江卫视热门综艺《演员的诞生》，在节目中虚心向演员前辈们讨教学习。该节目将于本周六12月2日晚播出，期待侯明昊为我们带来惊喜的演技展现。",
    link:newsHouDetails.hou14
  },
  {
    id:15,
    name:"侯明昊",
    img:"news-hou (2).png",
    h6:"侯明昊《推理笔记》收官 智勇博弈“超能”继续",
    p:"由林清振执导，侯明昊主演的校园推理剧《推理笔记》今日正式收官。侯明昊在剧中饰演男一号米卡卡，机智暖心的性格令不少网友留言表达不舍，称 “青春欠我一个米卡卡”，更有不少粉丝表示，“不舍米卡卡，期待小猴子的更多新作品”。",
    link:newsHouDetails.hou15
  },
  {
    id:16,
    name:"侯明昊",
    img:"news-hou (1).png",
    h6:"侯明昊《推理笔记》热播 细腻演技再塑“学霸”",
    p:"根据早安夏天同名轻小说改编，侯明昊主演的校园推理网络剧《推理笔记》正在热播当中。侯明昊饰演男一号米卡卡，是一名拥有高智商与极强推理能力的天才少年。该剧一经播出，便引发了原著粉及剧迷的高度关注。",
    link:newsHouDetails.hou16
  },
  {
    id:17,
    name:"侯明昊",
    img:"news-hou (4).jpg",
    h6:"《推理笔记》今日开播  侯明昊“柯南”附体烧脑断案",
    p:"由林清振执导，侯明昊、张子枫主演的校园推理剧《推理笔记》今日烧脑开播。侯明昊此次在剧中饰演男一号米卡卡，是一个极富正义感且深藏不露的高智商天才少年。自从该剧定档以来，侯明昊的粉丝纷纷表示“终于有剧可以追了”，并称非常期待他在剧中即将逐一勘破的一系列神秘悬疑案件。",
    link:newsHouDetails.hou17
  },
  {
    id:18,
    name:"侯明昊",
    img:"news-hou (11).jpg",
    h6:"侯明昊出任美即品牌好友 与粉丝互动分享护肤秘籍",
    p:"近日，新晋人气演员侯明昊出任美即品牌好友，现身美即直播间分享护肤心得。活动过程中，侯明昊与网友细心讲解他的日常护肤秘籍，并表示，清洁肌肤和及时补水是他格外重视的护肤步骤。随后，侯明昊更与现场粉丝有爱互......",
    link:newsHouDetails.hou18
  },
  {
    id:19,
    name:"侯明昊",
    img:"news-hou (1).jpg",
    h6:"侯明昊《快乐大本营》首秀 表白热舞惊喜不断",
    p:"10月14日本周六晚，湖南卫视《快乐大本营》将迎来一众青春活力的优秀少年。95后新晋人气演员侯明昊，作为新鲜血液首登快本舞台，不仅大秀灵魂画功，展现完美舞技，现场更带来暖心表白直击少女心，令人惊喜不断。",
    link:newsHouDetails.hou19
  },
  {
    id:20,
    name:"侯明昊",
    img:"news-hou (12).jpg",
    h6:"侯明昊纽约写真漫步街头 少年姿态魅力爆表",
    p:"今日，超能少年侯明昊曝光一组漫步纽约街头的时尚写真。照片中，侯明昊身着拼接夹克摩登范儿十足，游走在艺术家们聚焦的第五大道，尽显秋冬魅力。红与黑带来的视觉冲击更衬托出侯明昊精致的五官，服饰中巧妙运用的金属元素使整体造型风格自然又不失时尚感。在镜头前，侯明昊或站或坐，时而深情凝望时而嘴角上扬，展现出少年感十足的多面魅力姿态，与纽约街道的活力潮流相得益彰，十分融洽。日前，由侯明昊主演的院线大电影《完美魔咒》正在火热拍摄中，侯明昊在剧中饰演完美男神高斯林，将带领观众体验一场青春的魔幻之旅。此前在众多影视作品中都有亮眼表现并深受观众喜爱的侯明昊，首次挑大梁担纲院线男一号，令人十分期待他的精彩演绎。",
    link:newsHouDetails.hou20
  },
  {
    id:21,
    name:"侯明昊",
    img:"news-hou (10).jpg",
    h6:"侯明昊获“年度新锐艺人” 大剧不断闪耀荧屏",
    p:"9月26日，首届微博电视影响力盛典在上海隆重举行，现场数位明星盛装出席。当天，侯明昊身着Bottega Veneta西装搭配Gucci长裤以及Maison Margiela皮鞋帅气亮相，并斩获“2017微博电视年度新锐艺人”奖，获得了来自业内与观众的双重认可。",
    link:newsHouDetails.hou21
  },
  {
    id:22,
    name:"侯明昊",
    img:"news-hou (3).jpg",
    h6:"侯明昊街头篮球写真 享受肆意运动青春",
    p:"今日，超能少年侯明昊曝光一组篮球写真。镜头中的侯明昊在纽约街头忽明忽暗的光影下，帅气玩转运球、过球等各式花样篮球动作，展现出不凡的篮球实力与热血青春。这组写真中，侯明昊一身篮球服装扮，在午后的街头篮球场享受一场酣畅淋漓的运动时光。少年与篮球，肆意挥洒的汗水，侯明昊诠释了20岁少年该有的年轻姿态。",
    link:newsHouDetails.hou22
  },
  {
    id:23,
    name:"侯明昊",
    img:"news-hou (2).jpg",
    h6:"侯明昊《西游记女儿国》杀青 即刻赶赴拍摄新电影",
    p:"昨日，由侯明昊担当男一号出演的超级IP大剧《西游记女儿国》杀青。侯明昊与导演、制片及一众主创人员不舍道别，感恩剧组工作人员的悉心照顾。据悉，《女儿国》自开机以来辗转各地取景，历经“九九八十一难”及90多天酷暑的考验，最终在剧组全体的共同努力下圆满杀青。",
    link:newsHouDetails.hou23
  }

];
var newsDi = [
  {
    id: 0,
    name:"迪玛希",
    img: "news (17).png",
    h6: "迪玛希D时代巡演本周曝光多组幕后团队 首次彩排 引人期待",
    p: "本周黑金音乐曝光了迪玛希此次演唱会两组幕后团队视觉造型团队 DO-Fashion，巡演造型备受瞩目，此次演唱会再度邀请到杜杜小小回归，旨在为迪玛希打造更多惊喜造型。除了备受瞩目的造型，高级服装定制品牌施华洛世奇度身设计高定华服，助力亚洲歌王音乐盛宴。",
    link:"di1.html"
  },
  {
    id: 1,
    name:"迪玛希",
    img: "news (23).png",
    h6: "迪玛希王者归来 重回歌手献唱经典情歌《Hello》",
    p: "4月20日，湖南卫视《2018歌手金典之夜》现场直播。迪玛希、汪峰和腾格尔组成“经典之声”队，以致敬经典歌手为主题进行表演。其中，时隔一年再度登台的迪玛希将带来lionel richie的经典作品《Hello》，深情又震撼的演唱令观众十分动容。",
    link:"di2.html"
  },
  {
    id: 2,
    name:"迪玛希",
    img: "news (24).png",
    h6: "迪玛希D时代巡演深圳站开票 5月19日夺耀深圳",
    p: "2018年5月19日，黑金音乐旗下“亚洲人气歌王”迪玛希D-Dynasty世界巡演将于深圳举行。日前，迪玛希D-Dynasty世界巡演全新升级版主视觉海报公布。",
    link:"di3.html"
  },
  {
    id:3,
    name:"迪玛希",
    img:"news (41).png",
    h6:"迪玛希D时代世界巡演全面升级 深圳站舞美将破华语史上纪录",
    p:"2018年5月19日，黑金音乐旗下“亚洲人气歌王”迪玛希D-Dynasty世界巡演深圳站将在大运中心体育馆开启，全新升级版主视觉海报也于今日揭开面纱。此次D时代演唱会将以全新的、舞美、创意、造型，给人耳目一新的全视听感受，打造沸腾式现场气氛及完美的视听盛宴。",
    link:newsDiDetails.di3
  },
  {
    id:4,
    name:"迪玛希",
    img:"news (1).jpg",
    h6:"迪玛希斩获微博之夜 “年度音乐新力量” 神级Live再次惊艳全场",
    p:"1月18日，2017微博之夜在北京水立方举行，群星闪耀亮相",
    link:newsDiDetails.di4
  },
  {
    id:5,
    name:"迪玛希",
    img:"news-di (3).jpg",
    h6:"迪玛希时尚大片曝光  异域男爵上演暮夜轶事",
    p:"男人装曝光了一组迪玛希时尚大片，异域少年黑白色调演绎天使与恶魔",
    link:newsDiDetails.di5
  },
  {
    id:6,
    name:"迪玛希",
    img:"news-di (2).jpg",
    h6:"迪玛希中国出道一年 大奖商演不断，受邀湖南 浙江双跨年",
    p:"2017年对于迪玛希来说是收获满满的一年，从歌手的惊艳四座，到一次次解锁高难度歌曲",
    link:newsDiDetails.di6
  },{
    id:7,
    name:"迪玛希",
    img:"news-di (1).jpg",
    h6:"迪玛希D-Dynasty世界巡回演唱会闪耀福州 感恩相遇燃爆开年第一站",
    p:"迪玛希D-Dynasty世界巡回演唱会将被带到更多的地方，这个少年将开启属于Dimash和Dears的D时代!",
    link:newsDiDetails.di7
  },{
    id:8,
    name:"迪玛希",
    img:"news-di (3).png",
    h6:"迪玛希受邀出席美动华人公益盛典 获年度匠作国际歌手大奖",
    p:"结束中国地区首场个人演唱会之后，近日，迪玛希受邀出席中国儿童少年基金会、众桥传播联合主办，中国非物质文化遗产保护协会协办的“维拉国际第四届美动华人公益盛典”，现场高音重现中文歌曲《拿不走的记忆》，还特别荣获年度匠作国际歌手大奖，领奖时他坦言特别深爱中国这片土地，感谢中国观众一年来的支持。歌手后的小哥哥，首个新年，将和中国粉丝一起度过，届时将在湖南、浙江双跨年，随后他将马不停蹄地赶往1月5日的福州演唱会！",
    link:newsDiDetails.di8
  },{
    id:9,
    name:"迪玛希",
    img:"news-di (7).png",
    h6:"迪玛希D-Dynasty巡回演唱会首站引爆长沙 高燃现场座无虚席",
    p:"2017年12月16日，迪玛希D-Dynasty巡回演唱会，长沙站完美收官。作为中国首个个人演唱会，此次巡演配备了国际标准高规格的舞台，天籁之音迪玛希和知名音乐人谭伊哲合作，共同打造出一场超高音乐水准的音乐盛宴。&nbsp;&nbsp; 此次巡演施华洛世奇特别打造三款璀璨造型，其中一款由著名设计师Zaldy打造，灵感源自迈克尔.杰克逊的‘This is It’巡回演唱会，演出中专门设置了有Michael Jackson的致敬片段，超强舞蹈和音乐感染力让观众沉迷其中。多国语言无缝切换已经成为小哥哥演出标配，除了经典曲目重现，新歌《Give Me Love》也咋当天首唱，此外还曝光了《月光 妈妈》《热闹星球》还未发表的两首新歌。&nbsp;一直致力于中哈两国文化交流的迪玛希，也将中哈两个代表民俗乐器带上舞台，两国乐手同台演奏，激情尖叫打破了文化的壁垒。",
    link:newsDiDetails.di9
  },{
    id:10,
    name:"迪玛希",
    img:"news-di (6).png",
    h6:"迪玛希中文单曲 《Give Me Love困在爱里面》温暖首发",
    p:"近日，迪玛希全新中文单曲《Give Me Love困在爱里面》正式首发，早在之前的歌手2017巅峰会上，这支作品全球首唱，就颇受好评，全新的中文填词后的《Give Me Love困在爱里面》，相对于上一支中文单曲，对演唱者的中文又提了更高的要求，然而他清晰的咬字、发音，果然没有让大家失望。&nbsp;&nbsp; 迪玛希天生忧郁气质与一往情深的天赋嗓音相结合，干净的声线，唱出爱情的缠绵，深情的天籁之音可以穿透语言文化的差异。他温柔的声音像一双无形的手，轻轻捂住你的眼睛，只能用心感受：失去爱情后，我们都成为空心病患者，中文词叙事般的散开，在耳边说着柔软内心的深情之言。",
    link:newsDiDetails.di10
  },{
    id:11,
    name:"迪玛希",
    img:"news-di (5).png",
    h6:"迪玛希D-Dynasty巡演首站进入倒计时",
    p:"距离12月16日迪玛希D-Dynasty巡演首站长沙站演唱会进入倒计时，演唱会彩排进入白热化。据悉，为了这场演唱会，小哥哥已经停止一切工作来保证最后彩排阶段的密集排练，力求以最完美的状态出现在巡演中。演唱会导演团队也于近日曝光，以Alicesy导演为主来自于香港的金牌团队，曾与那英、莫文蔚等众多知名歌手进行过合作。在舞台概念、表演内容、舞美的整体结构等诸多方面都拥有丰富的经验和独到的理解，此次将为“天籁之声”迪玛希量身定制一场独一无二的音乐盛会，而担任音乐总监的著名音乐艺术家谭伊哲老师，也充分的保证了本场演唱会的音乐品质。",
    link:newsDiDetails.di11
  },{
    id:12,
    name:"迪玛希",
    img:"news-di (4).png",
    h6:"迪玛希做客同道大叔 解锁卖萌搞怪新姿势",
    p:"近日，双子座小哥哥迪玛希做客同道大叔, 小哥哥一改往日舞台上异域王子形象，大秀中文功力，开场一个我是迪玛希哥，笑翻全场，在后面的问答中，迪玛希更是机智应对，跟Dears 笔芯告白环节，更是甜到爆。",
    link:newsDiDetails.di12
  },{
    id:13,
    name:"迪玛希",
    img:"news-di (2).png",
    h6:"爱奇艺2018尖叫之夜  小哥哥高能现唱热单《荆棘王冠The Crown》",
    p:"12月2日，超人气歌手、高音小王子迪玛希受邀参加爱奇艺2018尖叫之夜，并斩获年度人气男歌手奖，小哥哥表示：唱歌是自己的梦想，是粉丝为梦想插上翅膀，他会永远带着对粉丝的爱继续不忘初心的走下去，带来更多更好的音乐作品回馈大家。当日迪玛希身着黑色皮衣和棕色外套，举手投足间尽显儒雅气质，小哥哥的现身引发现场尖叫不断，再次证明了亚洲人气王的头衔名不虚传，现场演唱新歌《荆棘王冠》再次将气氛推向高潮，与粉丝眼神互动爱意涟涟，让我们祝福这位会发光的小王子未来可期",
    link:newsDiDetails.di13
  },{
    id:14,
    name:"迪玛希",
    img:"news-di (1).png",
    h6:"小米超神游戏公测 迪玛希献唱游戏主题曲《荆棘王冠The Crown》",
    p:"11月30日，亚洲人气王迪玛希携手小米互娱，在小米首款电竞产品《小米超神》发布会现场演唱其游戏主题曲《荆棘王冠》，引发了粉丝的尖叫连连。&nbsp;&nbsp;&nbsp; &nbsp; 发布会现场，小米副总裁尚进邀请迪玛希上台，当问到迪玛希是否喜欢玩游戏的时候，迪玛希用中文爽快的回答“对对对，喜欢”，尚总随即发出开黑的邀约，小哥哥字正腔圆一句好嘞，引起了现场粉丝的阵阵欢笑。趣味互动的同时，迪玛希也用熟练的中文与现场观众热情打招呼，幽默风趣的互动引发了现场高潮。",
    link:newsDiDetails.di14
  },{
    id:15,
    name:"迪玛希",
    img:"news-di (12).png",
    h6:"迪玛希现身2017时装之夜  进口小哥哥细腻也摇滚",
    p:"11月29日晚，迪玛希现身2018时装之夜，进口小哥哥一秒变红毯焦点。&nbsp;&nbsp; &nbsp; 作为表演嘉宾，现场演唱了新单《荆棘王冠》《我的星星》两首歌曲，无论是《荆棘王冠》清晰的中文咬字， 还是《我的星星》小哥哥从高贵王子希转而唱跳摇滚希，引得全场尖叫。",
    link:newsDiDetails.di15
  },{
    id:16,
    name:"迪玛希",
    img:"news-di (13).png",
    h6:"迪玛希拍摄ELLE shop时尚大片  演绎复古异想世界",
    p:"近日 ELLE shop曝光一组迪玛希时尚大片 ，将复古油画的元素融入潮流之中，带着玩味之意，演绎出复古的异想世界。&nbsp;&nbsp; &nbsp; 过人的才华并没有掩盖他的颜值，完美的侧脸，模特的身材，还入围TC Candler2017全球最美面孔100人，是行走的衣架子，是舞台上聚光灯下的焦点。谈到时尚，迪玛希说自己平时也会关注，他觉得时尚是一种生活的态度，衣着会选择比较简单和百搭的颜色，黑色是他的日常色，不管什么颜色迪玛希都能驾驭的有自己的风格。",
    link:newsDiDetails.di16
  },{
    id:17,
    name:"迪玛希",
    img:"news-di (14).png",
    h6:"迪玛希中文单曲《荆棘王冠The Crown》 首发 超高人气 实力霸榜",
    p:"亚洲人气王迪玛希最新单曲《荆棘王冠The Crown》于11月27日零点上线，歌曲一经发布热度就不断攀升，短短上线十几分钟，就迅速跃居数位榜首，并成功跻占总榜。&nbsp;&nbsp; &nbsp; 迪玛希充满真诚的清晰咬字，呈现出悲伤爱情的画面感，单曲首发当日，一向内敛的小哥哥在微博上po出一段走心文字：表示这首歌对他来说意义重大，也感谢了这首歌的作曲人，同时也是自己的干爹——Ulukpan Zholdasov先生，还专门感谢了一路陪伴他走来的歌迷们。",
    link:newsDiDetails.di17
  }

];
var newsJiang = [
  {
    id:0,
    name:"蒋佳恩",
    img:"news-jiang (1).png",
    h6:"蒋佳恩《伙头军客栈》杀青 &nbsp;感恩剧组努力前行",
    p:"近日，由高亚麟导演执导的系列情景喜剧《伙头军客栈》拍摄完成，在京顺利杀青。蒋佳恩在剧中饰演乖巧可爱的二次元萌妹岳萌萌。《伙头军客栈》拍摄的这68天对于第一次接触情景喜剧的蒋佳恩来讲在表演上有了很大的突破和提高。因情景喜剧在表演节奏和形式上较普通电视剧有很大不同，在拍摄现场各位戏骨前辈们也是耐心为蒋佳恩讲解在表演中所遇到的各种问题。",
    link:newsJiangDetails.jiang0
  },
  {
    id:1,
    name:"蒋佳恩",
    img:"news-jiang (1).jpg",
    h6:"《伙头军客栈》开机 蒋佳恩化身二次元萌妹",
    p:"日前，由高亚麟导演执导的情景系列喜剧《伙头军客栈》在北京举行开机仪式，主创纷纷到场出席。蒋佳恩在该剧中饰演乖巧可爱的二次元萌妹。本剧以退转军人再就业为背景，讲述了某部炊事班战士退伍后联合其他老战友创建并经营一所客栈，开启人生新篇章的故事。蒋佳恩在剧中饰演人畜无害，喜欢各种流浪小动物还特别容易受骗的客房服务员岳萌萌。于此同时蒋佳恩所主演的另一部电视剧《豪门天价前妻》（暂定名）也正式官宣，该剧将于11月开机。",
    link:newsJiangDetails.jiang1
  },
  {
    id:2,
    name:"蒋佳恩",
    img:"news-jiang (5).jpg",
    h6:"国民萌宠 Michelle J 出席活动 白衣优雅仙气十足",
    p:"黑金经纪旗下艺人国民萌宠&nbsp;Michelle J 、新锐唱作人万翔以及新晋偶像郑繁星也一同受邀盛装亮相于12月27日在北京举行的主题为“偶像集盒战 17年一起上”的盒饭LIVE发布会暨战略合作签约仪式。发布会现场可谓星光熠熠，大咖......",
    link:newsJiangDetails.jiang2
  },
  {
    id:3,
    name:"蒋佳恩",
    img:"news-jiang (4).jpg",
    h6:"Michelle J 学院风亮相时尚派对清新学妹气质成全场焦点",
    p:"近日，“国民女友”Michelle J 受邀出席某品牌时尚派对。活动现场Michelle J以一身军装双排扣大衣搭配蓝底学院风衬衣亮相。派对后Michelle J受邀观看了法语原版音乐剧《罗密欧与朱丽叶》。",
    link:newsJiangDetails.jiang3
  },
  {
    id:4,
    name:"蒋佳恩",
    img:"news-jiang (3).jpg",
    h6:"Michelle J 出席首映礼 国民师妹清新亮相",
    p:"近日，“国民师妹”Michelle J 受邀出席电影《罗曼蒂克消亡史》全球首映礼。活动现场，Michelle J 白色雪纺衬衣搭配巴洛克古典风格背心裙。淡雅的妆容与微卷的长发，在首映礼现场展现出95后新生代小花旦特有的的清新少女感。",
    link:newsJiangDetails.jiang4
  },
  {
    id:5,
    name:"蒋佳恩",
    img:"news-jiang (2).jpg",
    h6:"Michelle J 帅气写真曝光 化身街头时尚icon",
    p:"近日，Michelle J 曝光一组街头时尚写真。镜头下的Michelle J 身着OverSize 撞色棉服，头扎率性丸子头。与以往展现给大家的甜美、可爱形象所不同的是，此次的写真中看到了Michelle J与众不同的一面。淡色系的妆容将Michelle J......",
    link:newsJiangDetails.jiang5
  }
];
var newsAll = [newsCompany,newsShang,newsZeng,newsHou,newsDi,newsJiang];