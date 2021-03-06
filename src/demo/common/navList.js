const navList = [
    {
        name:'自动搜索AutoSearch',
        url:'/autoSearch',
        des:'zidongsousuozdss',
        description:'当input在键盘输入时，会自动触发一个回调函数'
    },
    {
        name:'自动填充AutoComplete',
        url:'/autoComplete',
        des:'zidongtianchongzdtc',
        description:'模糊搜索专用组件，依托autoSearch'
    },
    {
        name:'按钮Button',
        url:'/button',
        des:'anniuan',
        description:'几种不同类型的按钮，带固定的icon和动画'
    },
    {
        name:'复选框CheckBox',
        url:'/checkbox',
        des:'fuxuankuangfxk',
        description:'对原生checkbox的封装，运行自定义颜色等'
    },
    {
        name:'多选下拉CheckDrop',
        url:'/checkdrop',
        des:'duoxuanxiala',
        description:'下拉列表，可以选择多个条件'
    },
    {
        name:'轮播Carousel',
        url:'/carousel',
        des:'lunbolb',
        description:'自动切换的展示区域，可手动翻页'
    },
    {
        name:'确认弹框ConfirmModal',
        url:'/confirmModal',
        des:'querentankuangqrtk',
        description:'用于重要信息确认的modal，次要信息的确认建议使用floatModal'
    },
    {
        name:'冷却按钮CoolDownBtn',
        url:'/coolDownBtn',
        des:'lengqueanniulqan',
        description:'通常用于发送验证码的按钮，点击后需等待才可以再次点击'
    },
    {
        name:'级联下拉CoupletMenu',
        url:'/coupletmenu',
        des:'jilianxiala',
        description:'多层级下拉选项'
    },
    {
        name:'日历DatePicker',
        url:'/datePicker',
        des:'rilirl',
        description:'日期组件，选择日期，允许自定义日期格式，自定义区间'
    },
    {
        name:'多图上传DropUpload',
        url:'/dropUpload',
        des:'duotushangchuan',
        description:'多图上传，并可以预览'
    },
    {
        name:'拖拽文件DragFile',
        url:'/dragfile',
        des:'tuozhuaiwenjian',
        description:'单文件上传，可响应拖拽事件'
    },
    {
        name:'下拉DropDown',
        url:'/dropDown',
        des:'xialaxl',
        description:'下拉选择器，具有原生select的功能'
    },
    {
        name:'弹出框FloatModal',
        url:'/floatModal',
        des:'tanchukuangtck'
    },
    {
        name:'图片预览ImgViewer',
        url:'/imgViewer',
        des:'tupianyulanyvlantpyl',
        description:'提供一个全屏预览image的容器组件'
    },
    {
        name:'列表List',
        url:'/list',
        des:'liebiaolb',
        description:'与table类似，但不是用table实现，没有表头，具有分页'
    },
    {
        name:'加载loading',
        url:'/loading',
        des:'jiazaijz',
        description:'一个svg的loading图标'
    },
    {
        name:'提示message',
        url:'/message',
        des:'tishits',
        description:'消息提示组件，从页面上部弹出，展示一段时间后消失'
    },
    // {
    //     name:'验证码ModalPhoneCode',
    //     url:'/modalPhoneCode',
    //     des:'yanzhengmayzm'
    // },
    {
        name:'多图预览mutiImgViewer',
        url:'/mutiimgviewer',
        des:'多图预览',
        description:'多图片同时预览，支持左右切换，自动适配屏幕大小'
    },
    {
        name:'多文件上传mutiUploadFile',
        url:'/mutiuploadfile',
        des:'多文件上传',
        description:'多文件同时上传，带进度条'
    },
    {
        name:'通知notification',
        url:'/notification',
        des:'tongzhitz',
        description:'消息通知组件，4种类型，并提供自定义按钮事件'
    },
    {
        name:'分页Pagination',
        url:'/pagination',
        des:'fenyefy'
    },
    {
        name:'PDF预览PdfViewer',
        url:'/pdfViewer',
        des:'yulanyl',
        description:'提供一个预览PDF的容器组件'
    },
    {
        name:'单选Radio',
        url:'/radio',
        des:'danxuandx'
    },
    {
        name:'单选标题RadioTitle',
        url:'/radioTitle',
        des:'danxuanbiaotidxbt'
    },
    {
        name:'评分Rate',
        url:'/rate',
        des:'pingfenpf',
        description:'评定星级的组件'
    },
    {
        name:'滑动条Slider',
        url:'/slider',
        des:'huadongtiaohdt'
    },
    {
        name:'开关Switch',
        url:'/switch',
        des:'kaiguankg',
        description:'表示两种相互对立的状态间的切换，多用于触发「开/关」'
    },
    {
        name:'表格Table',
        url:'/table',
        des:'biaogebg',
        description:'表格相关，自带分页loading等'
    },
    {
        name:'标签页Tabs',
        url:'/tabs',
        des:'biaoqianyebqy',
        description:'分隔内容上有关联但属于不同类别的数据集合'
    },
    {
        name:'警告提示Tips',
        url:'/tips',
        des:'jinggaotishijgts',
        description:'依附在dom上的警告提示，常用于提示有指向性的错误'
    },
    {
        name:'数据绑定YsModel',
        url:'/ysModel',
        des:'shujubangdingsjbd'
    },
    {
        name:'路由YsRouter',
        url:'/ysRouter',
        des:'luyouly'
    },
    {
        name:'滚动条YsScroll',
        url:'/ysScroll',
        des:'gundongtiaogdt'
    },
    {
        name:'文字提示YsTooltip',
        url:'/ysTooltip',
        des:'wenzitishiwzts'
    },
    {
        name:'触摸事件YsTouchHandler',
        url:'/ysTouchHandler',
        des:'chumoshijiancmsj'
    },
    {
        name:'文件上传弹框uploadFileModal',
        url:'/uploadfilemodal',
        des:'wenjianshangchuantankuang',
        description:'弹出modal，进行文件上传'
    },
    {
        name:'工具类Util',
        url:'/util',
        des:'gongjuleigjl'
    }
];

module.exports = navList;