---
### 产品设计：axure\_design
---

### 各种文档及规范要求：document\_folder
---

### 游戏相关：game\_design

####  common\_folder:存放各种通用文件
- **css**:通用css文件(Koala编译less后的css文件)
	1. **PC\_library.css**:编译后的PC\_library
- **fonts**:用到的特殊字体文件(目前没有)
- **images**:通用图片(目前没有)
- **javascripts**:通用js文件
	1. **base.js**:封装的插件以及函数
	1. **register.js**:通用的注册函数
- **less**:通用less文件
	1. **Game\_library.less**:通用less文件,（所有的less文件都需要@import引入）
- **stylesheets**:通用CSS文件
	1. **base.css**:css reset,不需要修改
	1. **game\_base.css**:游戏全局通用样式,一般也不需要修改

####  contents\_folder:存放具体前端文件(按照左侧目录顺序进行排序)
- **collect\_word**:集字游戏
- **crowd\_funding**:众筹
- **Euro\_quiz**:欧洲杯
- **game\_template**:游戏通用模板
- **gamepro**:红包
- **MobileGameTemplate**:原来的游戏通用模板

####  demo\_app:历史遗留文件

####  frame\_folder:历史遗留文件

####  plugin\_folder:存放插件以及框架,格式为"插件名_v版本号"
- **bootstrap**:前端框架bootstrap
- **font-awesome**:icon库
- **jquery.validate**:jQuery表单验证插件
- **jquery-ui**:jquery的ui框架
- **jquery**:jQuery
- **less**:less解析插件

####  ps\_folder:存放ppt以及设计图
---

### 移动端相关：mobile\_design

#### common\_folder:存放各种通用文件
- **fonts**:用到的特殊字体文件(目前没有)
- **images**:通用图片(目前没有)
- **javascripts**:通用js文件
	1. **base.js**:封装的插件以及函数
	1. **common\_index.js**:首页通用js
	1. **register.js**:通用的注册函数
- **less**:通用less文件
	1. **Mobile\_index.less**:首页通用less文件
	1. **Mobile\_library.less**:移动端通用less文件,（所有的less文件都需要@import引入）
- **stylesheets**:通用CSS文件
	1. **common\_base.css**:css reset,不需要修改

####  contents\_folder:存放具体前端文件(按照左侧目录顺序进行排序)
- **coupons\_list**:卡券列表
- **mobile\_universal\_register**:移动端通用注册页面
- **mobile\_template**:移动端模板
            
####  demo\_app:历史遗留文件
     
####  frame\_folder:历史遗留文件  

####  plugin\_folder:存放插件以及框架,格式为"插件名\_v版本号"
- **bootstrap**:前端框架bootstrap
- **font-awesome**:icon库
- **jquery.validate**:jQuery表单验证插件
- **jquery-ui**:jquery的ui框架
- **jquery**:jQuery
- **less**:less解析插件

####  ps\_folder:存放ppt以及设计图
---

### PC端相关：web\_design
#### common\_folder:存放各种通用文件
- **css**:通用css文件(Koala编译less后的css文件)
	1. **library\_platform\_module.css**:编译后的library\_platform\_module
	1. **PC\_index.css**:编译后的PC\_index
	1. **PC\_library.css**:编译后的PC\_library
- **fonts**:用到的特殊字体文件(目前没有)
	1. **SourceHanSansCN**:思源黑体
- **images**:通用图片
	1. **platform\_module.png**:几个html页面里面都用到的图片 
- **javascripts**:通用js文件
	1. **base.js**:封装的插件以及函数
	1. **common\_index.js**:首页通用方法
	1. **less\_compile.js**:less编译文件
- **less**:通用less文件
	1. **library\_platform\_module.less**:一些html页面通用的less文件
	1. **PC\_index.less**:首页通用less文件
	1. **PC\_library.less**:通用less文件,（所有的less文件都需要@import引入）
- **stylesheets**:通用CSS文件
	1. **common\_base.css**:css reset,不需要修改
	1. **common\_index.css**:首页通用样式（已废弃）
	1. **common\_index\_new.css**:新的首页通用样式(已废弃)

####  contents\_folder:存放具体前端文件(按照左侧目录顺序进行排序)
- **A\_manage**:A端管理
    1. **category\_manage**:品类管理
    1. **check\_collection**:查看收藏
	1. **configure\_list**:配置列表
	1. **ID\_code\_list**:标志码列表
	1. **open\_delay**:开通延期
	1. **publish\_list**:发布列表
- **A\_user_manage**:A端用户管理
	1. **account\_list**:账户列表
	1. **company\_list**:公司列表
	1. **configure\_menu\_B**:配置菜单B端
	1. **configure\_menu\_C**:配置菜单C端
	1. **create\_account**:创建账户
	1. **edit\_account**:编辑账户
	1. **weixin\_group\_list**:微信群组列表
- **auto\_reply**:自动回复
- **brand\_list**:品牌列表
	1. **brand\_detail**:品类详情
	1. **brand\_list**:品牌品类列表
- **card\_ticket**:卡券
	1. **coupon\_data**:优惠券数据
	1. **coupon\_manage**:优惠券管理
	1. **form\_list**:表单列表
	1. **vertificate\_record**:核销记录
- **connect\_custom\_service**:联系客服
- **create\_document**:创建文案
	1. **get\_tag.json**:标签所用json文件
- **data\_record\_center**:数据记录中心
	1. **brand\_list**:品牌列表
	2. **brand\_location**:品牌定位
	3. **category\_list**:品类列表
	4. **goods\_SKU\_list**:商品SKU列表
	5. **member\_grade\_list**:会员等级列表
- **data\_reduction\_backup**:数据备份/还原
- **data\_upload\_center**:数据上传中心
	1. **data\_format\_management**:数据格式管理
	2. **data\_upload**:数据上传
	3. **data\_upload\_list**：数据上传列表
- **data\_upload\_fast**:旧的快速数据上传
- **department\_manage**:部门管理
- **document\_management**:文案管理
	1. **multiple\_document\_list**:多文案列表
	2. **send\_document\_list**:发送列表
	3. **single\_document\_list**:单文案列表 
- **Euro\_quiz**:欧洲杯竞猜后台配置
	1. **battle\_list**:对战列表
	2. **create\_battle**:新建对战
	3. **entry\_result**:录入结果
	4. **quiz\_check**:核销
- **fast\_data\_upload**:快速数据上传
- **form\_brick**:报表组(已废弃)
- **form\_center\_final**:报表中心最终版
	1. **form\_center\_form**:报表中心-报表
	2. **form\_center\_module**:报表中心-模块
	3. **form\_draggable\_show**:报表中心-可拖拽
	4. **form\_modules\_show**:报表中心-查看
- **form\_text**:报表示例(活跃粉丝比例)
- **function\_center**:功能中心
	1. **form\_module**:报表模块
	2. **function\_list**:功能列表
	3. **function\_module**:功能模块
- **game\_zhuanpan\_configure**:大转盘游戏后台配置
- **index\_new**:新的首页
- **interaction\_center**:互动中心
	1. **custom\_interaction**:定制互动
	2. **custom\_list**:定制列表
	3. **game\_check**:游戏核销
	4. **template\_interaction**:模版互动
	5. **template\_list**:模版列表
- **login**:登录页面
- **M-CRM**:CRM系统
	1. **actions\_all**:行为的数据json
	2. **group\_management**:群组管理
	3. **market\_axle\_manage**:市场轴管理
	4. **user\_list**:用户列表
	5. **life\_expectancy**:用户行为具体数据
	6. **User\_message**:用户信息
- **menu\_mould**:菜单模板
	1. **mould\_list**:模板列表
	2. **create\_B\_mould**:创建B端模板
	3. **create\_C\_mould**:创建C端模板
- **message\_manage**:短信管理
	1. **document\_list**:文档列表
	2. **document\_upload**:文档上传
	3. **key\_word\_list**:关键词列表
	4. **key\_word\_upload**:关键词上传
	5. **masking\_message\_create**:创建蒙版消息
	6. **message\_list**:通知消息列表
	7. **popup\_message_\create**:创建弹窗消息
- **message\_system**:短信系统
	1. **precharge\_record**:预充记录
	2. **precharge\_setting**:预充配置(旧)
	3. **precharge\_setting\_change**:预充配置(新)
	4. **send\_list**:发送列表
	5. **send\_record**:发送记录
- **modules\_details**:模块详情页
	1. **attention\_number\_changes**:关注人数变化曲线
	2. **mobile\_user\_changes**:移动端使用人数变化曲线
- **modules\_folder**:模块组
	1. 文件太多,不一一解释,每个html对应一个同名js,即使js中没有内容
- **service\_management**:服务管理
	1. **document\_center**:文档中心
	2. **message\_management**:消息管理
- **system\_maintenance**:系统维护
- **test**:测试专用
- **user\_defined\_menu**:自定义菜单
- **user\_manage**:用户管理
	1. **authority\_list**:权限列表
	2. **user\_authority**:用户权限
- **web\_template**:web端通用模板

####  demo\_app:历史遗留文件

####  frame\_folder:历史遗留文件 

####  plugin\_folder:存放插件以及框架,格式为"插件名\_v版本号"
- **bootstrap**:前端框架bootstrap
- **Echarts**:js生成图表插件
- **font-awesome**:icon库
- **Highcharts**:js生成图表插件
- **html2canvas**:将html生成图片的插件
- **jquery.gridly**:jquery的将html变成可拖拽元素的插件
- **jquery.validate**:jQuery表单验证插件
- **jquery-ui**:jquery的ui框架
- **jquery**:jQuery
- **less**:less解析插件
- **Tdrag**:jQuery拖拽插件

####  ps\_folder:存放ppt以及设计图

---