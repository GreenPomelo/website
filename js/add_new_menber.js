//成员数据
var members = [
    {
        name: "严宇倞",
        goodAt: "Java，Web，Microservices",
        ImgUrl: "img/scalpture_img/yyl.jpg",
        description: "中年程序员，低配全栈，想跨过山和大海，也想穿过人山人海。"
    },
    {
        name: "顾怡",
        goodAt: "房主",
        ImgUrl: "img/scalpture_img/gy.jpg",
        description: "青柚管理员，以前是前端，现在是房主。"
    },
    {
        name: "江子玮",
        goodAt: "前端",
        ImgUrl: "img/scalpture_img/jzw.jpg",
        description: "骚还是我骚啊~"
    },
    {
        name: "朱晓峰",
        goodAt: "后端、数据分析",
        ImgUrl: "img/scalpture_img/zxf.jpg",
        description: "世间草木皆美，人不是。中药很苦，你也是。"
    },
    {
        name: "张楚月",
        goodAt: "UI",
        ImgUrl: "img/scalpture_img/zcy.jpg",
        description: "The unity of inner knowledge and action —"
    },
    {
        name: "唐子惠",
        goodAt: "UI、画师",
        ImgUrl: "img/scalpture_img/tzh.jpg",
        description: "专注做个萌萌哒的吉祥物（求约稿啊！）"
    },
    {
        name: "顾刘健",
        goodAt: "运维",
        ImgUrl: "img/scalpture_img/glj.jpg",
        description: "大概专业打杂100年。"
    },
    {
        name: "王悉宇",
        goodAt: "后端，其他",
        ImgUrl: "img/scalpture_img/wxy.jpg",
        description: "划水打杂。假装自己是后端，其实是咸鱼一条。"
    },
    {
        name: "吴爱天",
        goodAt: "后端",
        ImgUrl: "img/scalpture_img/wat.jpg",
        description: "切图，写写业务，啥杂都打打的万金油。。。。。"
    },
    {
        name: "李赫",
        goodAt: "UI",
        ImgUrl: "img/scalpture_img/lh.jpg",
        description: "电光微院大四学生，负责小程序部分UI设计。"
    },
    {
        name: "周捷",
        goodAt: "安全",
        ImgUrl: "img/scalpture_img/zj.jpg",
        description: "妈耶，这个站怎么日?"
    },
    {
        name: "彭泽凡",
        goodAt: "前端",
        ImgUrl: "img/scalpture_img/pzf.jpg",
        description: "反正主页一般没人看，我就随便写写是不是也没人能发现，顺便，千万不要加江同学微信！切记。"
    },
    {
        name: "宁泓皓",
        goodAt: "前端",
        ImgUrl: "img/scalpture_img/nhh.jpg",
        description: "对不起，02是我老婆…"
    },
    {
        name: "谭康威",
        goodAt: "UI、运营、其他",
        ImgUrl: "img/scalpture_img/tkv.jpg",
        description: "南邮装修专业一个画UI的运营，承包青柚各种宣传推广和各种大活装修业务。"
    },
    {
        name: "赵明睿",
        goodAt: "后端",
        ImgUrl: "img/scalpture_img/zmr.jpg",
        description: "基本上所有精力都放在了后端学习，日常有点颓废，有点懒，觉得自己什么都不会，想要健身的路上。然后单身。"
    },
    {
        name: "邹昊",
        goodAt: "前端",
        ImgUrl: "img/scalpture_img/zh.JPG",
        description: "邹缨齐紫，昊天罔极。我只想说为什么面向对象的程序员没有对象啊！人生真是寂寞如雪唉，恋爱是不可能的，还是好好学前端吧2333。"
    },
    {
        name: "杨丛铭",
        goodAt: "UI、前端",
        ImgUrl: "img/scalpture_img/ycm.jpg",
        description: "在理性的代码和感性的设计中间找到平衡。"
    },
    {
        name: "史朝夕",
        goodAt: "运维",
        ImgUrl: "img/scalpture_img/scx.jpg",
        description: "负责工作室的运维工作，以操作Linux操作系统为主，对相关服务器进行基本环境的搭建，对服务的运行状况进行监控和管理，优化相关服务的效率。\n其实也是个拉拉人("
    },
    {
        name: "安泓烨",
        goodAt: "后端，其他",
        ImgUrl: "img/scalpture_img/ahy.jpg",
        description: "业余写代码，擅长划水喊6，至今单身狗一枚。"
    },
    {
        name: "林禹辰",
        goodAt: "后端",
        ImgUrl: "img/scalpture_img/lyc.jpg",
        description: "B160110班长，爱生活，爱运动，爱挑战，爱做饭，爱编程！！"
    },
    {
        name: "欧阳宇翔",
        goodAt: "安卓",
        ImgUrl: "img/scalpture_img/oyyx.jpg",
        description: "本工作室最菜，广告位招租，头像我老婆。"
    },
    {
        name: "刘源",
        goodAt: "后端",
        ImgUrl: "img/scalpture_img/ly.jpg",
        description: "大三计软件院咸鱼，赵明睿大佬的小弟"
    },
    {
        name: "赵恒远",
        goodAt: "前端",
        ImgUrl: "img/scalpture_img/zhy.jpeg",
        description: "爱好学习，喜欢熬夜，喜欢新奇的事情，喜欢湖人队和电影。"
    },
    {
        name: "黄兴源",
        goodAt: "前端",
        ImgUrl: "img/scalpture_img/hxy.JPG",
        description: "努力成为一个有趣且认真的人([] == ![] //true)"
    },
    {
        name: "鲍可",
        goodAt: "前端",
        ImgUrl: "img/scalpture_img/bk.jpeg",
        description: "南京邮电大学17级计算机学院信息安全学生,主要方向是前端,不断学习中～"
    },
    {
        name: "梁天琦",
        goodAt: "前端",
        ImgUrl: "img/scalpture_img/ltq.jpg",
        description: "JavaScript是世界上最混乱邪恶的语言"
    },
    {
        name: "郑致远",
        goodAt: "后端",
        ImgUrl: "img/scalpture_img/zzy.jpg",
        description: "普通话二甲选手。"
    },
    {
        name: "朱逸尘",
        goodAt: "后端",
        ImgUrl: "img/scalpture_img/zyc.jpg",
        description: "爱生活的我随手一打就是漂亮的十五字。"
    },
    {
        name: "谭嘉晖",
        goodAt: "前端",
        ImgUrl: "img/scalpture_img/tjh.JPG",
        description: "会点js，立志成为一名成功的切图仔。"
    },
    {
        name: "陈康扬",
        goodAt: "前端",
        ImgUrl: "img/scalpture_img/cky.jpg",
        description: "参与本科生小程序前端开发，希望认识更多有趣的灵魂，大家都加油！"
    },
    {
        name: "柏超宇",
        goodAt: "HR",
        ImgUrl: "img/scalpture_img/bcy.jpg",
        description: "狒狒大渣男，校草快脱单"
    },
    {
        name: "张佑杰",
        goodAt: "后端",
        ImgUrl: "img/scalpture_img/zyj.jpg",
        description: "张佑杰，男，1999年生，现年18岁，马上19岁，明年20岁。"
    }
];

//添加一个新成员
var addNew = function (member) {
    //添加团队成员头像
    var scalptreAre = document.getElementById("scalptureArea");
    var newMenberDiv = document.createElement("div");
    newMenberDiv.style.backgroundImage = "url(" + member.ImgUrl + ")";
    scalptreAre.append(newMenberDiv);

    //添加hoverbox
    var infDetail = document.createElement("div");//团队成员简介内容
    var addInf = function () {//填充团队成员内容
        var name = "姓名：" + member.name;
        var goodAt = "方向：" + member.goodAt;
        var description = "自述：" + member.description;
        infDetail.innerText = name + '\n' + goodAt + '\n' + description;
        infDetail.className = "person-inf-box";
        document.body.appendChild(infDetail);
    }
    var removeinf = function () {
        document.body.removeChild(infDetail);
    }

    // 模拟hover
    newMenberDiv.addEventListener('mouseover', function (e) {
        addInf();
        infDetail.style.left = e.pageX;
        infDetail.style.top = e.pageY;
        infDetail.style.pointerEvents = 'none';
        console.log(infDetail.style.left + ',' + infDetail.style.top);
        // alert(e.pageX);
        newMenberDiv.addEventListener('mouseout', function () {
            removeinf();
            // console.log("out");
        }, false);
    }, false);
}
members.forEach(addNew);
