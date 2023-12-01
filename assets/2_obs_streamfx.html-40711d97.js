import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r,o,c as l,a as e,b as i,d as a,e as s}from"./app-facf88e9.js";const g={},p=e("p",null,"StreamFX 提供了来源镜像、模糊滤镜、着色器滤镜等多种效果，是 OBS 必装的效果插件。本文将介绍 StreamFX 的 28 种滤镜效果。",-1),c=e("h2",{id:"安装-streamfx",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装-streamfx","aria-hidden":"true"},"#"),i(" 安装 StreamFX")],-1),d={href:"https://github.com/Xaymar/obs-StreamFX/releases",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/Xaymar/obs-StreamFX/blob/root/BUILDING.md",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/MonoLogueChi/obs-StreamFX-build",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/Xaymar/obs-StreamFX/wiki/Uninstallation",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,"安装完成后，StreamFX 将出现在 OBS 软件上方的菜单栏中。接下来，我将使用不同的滤镜处理示例图，并提供对比图。",-1),b=e("figure",null,[e("img",{src:"https://img.newzone.top/2023-01-07-23-27-34.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption",null,"样例原图")],-1),_=e("h2",{id:"来源镜像",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#来源镜像","aria-hidden":"true"},"#"),i(" 来源镜像")],-1),z={href:"https://github.com/Xaymar/obs-StreamFX/wiki/Source-Mirror",target:"_blank",rel:"noopener noreferrer"},x=e("h2",{id:"_3d-转换",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3d-转换","aria-hidden":"true"},"#"),i(" 3D 转换")],-1),F={href:"https://github.com/Xaymar/obs-StreamFX/wiki/Filter-3D-Transform",target:"_blank",rel:"noopener noreferrer"},w=e("figure",null,[e("img",{src:"https://img.newzone.top/2023-01-07-23-27-01.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption",null,"3D 转换")],-1),y=e("h2",{id:"模糊",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#模糊","aria-hidden":"true"},"#"),i(" 模糊")],-1),S={href:"https://github.com/Xaymar/obs-StreamFX/wiki/Filter-Blur",target:"_blank",rel:"noopener noreferrer"},X=e("figure",null,[e("img",{src:"https://img.newzone.top/2023-01-08-06-49-05.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption",null,"右侧为模糊效果")],-1),k=e("figure",null,[e("img",{src:"https://img.newzone.top/2023-01-06-02-51-10.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption",null,"模糊滤镜设置")],-1),D=e("h2",{id:"动态蒙版",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#动态蒙版","aria-hidden":"true"},"#"),i(" 动态蒙版")],-1),I={href:"https://github.com/Xaymar/obs-StreamFX/wiki/Filter-Dynamic-Mask",target:"_blank",rel:"noopener noreferrer"},B=e("figure",null,[e("img",{src:"https://img.newzone.top/2023-01-08-07-05-42.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption",null,"动态蒙版")],-1),N=e("h2",{id:"sdf-特效",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sdf-特效","aria-hidden":"true"},"#"),i(" SDF 特效")],-1),V={href:"https://github.com/Xaymar/obs-StreamFX/wiki/Filter-SDF-Effects",target:"_blank",rel:"noopener noreferrer"},v={href:"https://jishuin.proginn.com/p/763bfbd5a086",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/Xaymar/obs-StreamFX/issues/512",target:"_blank",rel:"noopener noreferrer"},L=s('<figure><img src="https://img.newzone.top/2023-01-09-18-56-14.webp" alt="" tabindex="0" loading="lazy"><figcaption>SDF 特效-外发光+变形</figcaption></figure><h2 id="着色器" tabindex="-1"><a class="header-anchor" href="#着色器" aria-hidden="true">#</a> 着色器</h2><p>着色器滤镜位于 <code>%ProgramFiles%/obs-studio/data/obs-plugins/StreamFX/examples/shaders/filter</code>，后缀均为 <code>.effect</code>。切换着色器文件后，需点击「刷新选项和参数」。</p><h3 id="色彩滤镜" tabindex="-1"><a class="header-anchor" href="#色彩滤镜" aria-hidden="true">#</a> 色彩滤镜</h3><ul><li><p>colorize：对画面重新着色，效果与色彩校正滤镜相似。</p><figure><img src="https://img.newzone.top/2023-01-07-23-11-16.png" alt="" tabindex="0" loading="lazy"><figcaption>colorize</figcaption></figure></li><li><p>posterize：向上下周围放入像素值。</p><figure><img src="https://img.newzone.top/2023-01-07-22-46-26.png" alt="" tabindex="0" loading="lazy"><figcaption>posterize</figcaption></figure></li><li><p>smaa：将画面的轮廓线条化。</p><figure><img src="https://img.newzone.top/2023-01-07-22-03-18.png" alt="" tabindex="0" loading="lazy"><figcaption>smaa</figcaption></figure></li></ul><h3 id="位移变换" tabindex="-1"><a class="header-anchor" href="#位移变换" aria-hidden="true">#</a> 位移变换</h3><ul><li><p>bulge_pinch：挤压滤镜，使图像的中心产生凸起或凹下的效果，可生成循环凸凹的动画。</p><p><img src="https://img.newzone.top/2023-01-07-23-14-10.png" alt="" title="bulge_pinch 凸起效果" loading="lazy"><br><img src="https://img.newzone.top/2023-01-07-23-14-47.png" alt="" title="bulge_pinch 凹下的效果" loading="lazy"></p></li><li><p>displace：置换滤镜，可以产生弯曲，碎裂的图像效果。置换滤镜比较特殊的是设置完毕后，还需要选择一个图像文件作为位移图，滤镜根据位移图上的颜色值移动图像像素。</p><figure><img src="https://img.newzone.top/2023-01-07-23-02-59.png" alt="" tabindex="0" loading="lazy"><figcaption>displace</figcaption></figure></li><li><p>drunk：画面随机晃动</p><figure><img src="https://img.newzone.top/2023-01-07-22-57-18.gif?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption>drunk</figcaption></figure></li><li><p>swirl：漩涡打旋效果，可调整旋涡位置和大小，并可呈现漩涡的正反转动态效果。</p><figure><img src="https://img.newzone.top/2023-01-07-22-06-45.png" alt="" tabindex="0" loading="lazy"><figcaption>swirl</figcaption></figure></li><li><p>wave：波浪滤镜是通过坐标变换来模拟水波效果，使图像呈现出水波的扭曲特效。</p><figure><img src="https://img.newzone.top/2023-01-07-22-12-23.png" alt="" tabindex="0" loading="lazy"><figcaption>wave</figcaption></figure></li><li><p>zigzag：使图像产生同心圆状的波纹效果。</p><figure><img src="https://img.newzone.top/2023-01-07-22-30-25.png" alt="" tabindex="0" loading="lazy"><figcaption>zigzag</figcaption></figure></li></ul><h3 id="画面遮盖" tabindex="-1"><a class="header-anchor" href="#画面遮盖" aria-hidden="true">#</a> 画面遮盖</h3><ul><li><p>pixelation：像素化滤镜，可选择滤镜范围。</p><figure><img src="https://img.newzone.top/2023-01-07-22-48-41.png" alt="" tabindex="0" loading="lazy"><figcaption>pixelation</figcaption></figure></li><li><p>hexagonize：用六角形状元素重构画面，可调节蜂窝元素的大小。</p><figure><img src="https://img.newzone.top/2023-01-07-22-50-21.png" alt="" tabindex="0" loading="lazy"><figcaption>hexagonize</figcaption></figure></li><li><p>semiline：百叶窗栅格形滤镜，让画面像被一个关闭中的百叶窗遮盖。</p><figure><img src="https://img.newzone.top/2023-01-07-22-32-17.png" alt="" tabindex="0" loading="lazy"><figcaption>semiline</figcaption></figure></li><li><p>blur-gaussian：模糊滤镜效果（高斯），对硬件配置要求高。</p></li></ul><h3 id="增强滤镜" tabindex="-1"><a class="header-anchor" href="#增强滤镜" aria-hidden="true">#</a> 增强滤镜</h3><ul><li><p>vignette：晕影/虚光照，用以增强镜头感，突出拍摄主体，营造画面的意境氛围。</p><figure><img src="https://img.newzone.top/2023-01-07-22-10-30.png" alt="" tabindex="0" loading="lazy"><figcaption>vignette</figcaption></figure></li><li><p>rounded-rect：圆角矩形渲染</p><figure><img src="https://img.newzone.top/2023-01-07-22-43-07.png" alt="" tabindex="0" loading="lazy"><figcaption>rounded-rect</figcaption></figure></li><li><p>crt-curvature：将画面放置于 CRT 电视中，可调整画面曲率和四周的光晕颜色。</p><figure><img src="https://img.newzone.top/2023-01-07-23-09-05.png" alt="" tabindex="0" loading="lazy"><figcaption>crt-curvature</figcaption></figure></li><li><p>crt-scanlines：仿 CRT 扫描线效果。</p><figure><img src="https://img.newzone.top/2023-01-07-23-06-17.gif?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption>crt-scanlines</figcaption></figure></li><li><p>repeat：将画面复制排列，例图是 3x3 复制画面。</p><figure><img src="https://img.newzone.top/2023-01-07-22-44-59.png" alt="" tabindex="0" loading="lazy"><figcaption>repeat</figcaption></figure></li><li><p>fxaa：快速近似抗锯齿，是一种「比较廉价」的抗锯齿技术，多用于游戏直播/录制，适用于性能不高的电脑配置。</p></li></ul><h2 id="n-卡滤镜" tabindex="-1"><a class="header-anchor" href="#n-卡滤镜" aria-hidden="true">#</a> N 卡滤镜</h2>',12),M={href:"https://www.nvidia.com/en-us/geforce/broadcasting/broadcast-sdk/resources/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/Xaymar/obs-StreamFX/wiki/Filter-Upscaling",target:"_blank",rel:"noopener noreferrer"},G={href:"https://github.com/Xaymar/obs-StreamFX/wiki/Filter-Denoising",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/Xaymar/obs-StreamFX/wiki/Filter-Auto-Framing",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/Xaymar/obs-StreamFX/wiki/Filter-Virtual-Greenscreen",target:"_blank",rel:"noopener noreferrer"},T=e("figure",null,[e("img",{src:"https://img.newzone.top/2023-01-07-23-19-50.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption",null,"人像背景移除")],-1);function U(O,K){const t=r("ExternalLinkIcon");return o(),l("div",null,[p,c,e("p",null,[i("访问 "),e("a",d,[i("StreamFX 发布页"),a(t)]),i("，选择相应平台的安装包进行下载。如果你的 OBS 版本大于 28，则需按照 "),e("a",h,[i("obs-StreamFX/BUILDING.md"),a(t)]),i(" 中的说明手动构建测试版 StreamFX 插件，或者使用第三方构建包 "),e("a",f,[i("MonoLogueChi/obs-StreamFX-build"),a(t)]),i("。")]),e("p",null,[i("在升级插件前，请按照"),e("a",u,[i("卸载教程"),a(t)]),i("执行旧版的清理操作。")]),m,b,_,e("p",null,[e("a",z,[i("来源镜像"),a(t)]),i("（Source Mirror）是一种来源，而不是滤镜。它可以克隆任何源或场景，并将其应用于当前场景。对来源镜像叠加滤镜和任意效果，都不会对原始来源造成影响。")]),x,e("p",null,[e("a",F,[i("3D 转换"),a(t)]),i("（3D Transform）可以将 2D 图片的坐标系转换为三维，从而可以自由旋转、移动和缩放，形成类似星球大战中的字幕特效。")]),w,y,e("p",null,[e("a",S,[i("模糊"),a(t)]),i("（Blur Filter）提供五种模糊类型：Box、Box Linear、Gaussian、Gaussian Linear 和 Dual Filtering。建议将类型设置为「Dual Filtering（双重过滤）」，大小设为 5。应用蒙版后，可以选择模糊区域。与 Gaussian 类型相比，Dual Filtering 生成模糊效果最快，对配置要求更低。如果只需要对部分区域进行模糊，勾选「应用蒙版」并适量设置「羽化区域」（如 10），以避免模糊边缘显得过于突出。")]),X,k,D,e("p",null,[e("a",I,[i("动态蒙版"),a(t)]),i("（Dynamic Mask）允许叠加任意来源或场景，并使用红色、绿色、蓝色和 alpha 通道建立画面蒙版。下图展示了使用红色通道叠加雨滴来源的效果。")]),B,N,e("p",null,[e("a",V,[i("SDF 特效"),a(t)]),i("（Shader Signed Distance Field Effects）仅对拥有透明图层的画面有效，比如被移除背景后的摄像头画面。SDF 特效会对外观轮廓进行发光处理，并占用大量显存性能。!["),e("a",v,[i("什么是 SDF？"),a(t)]),i("] !["),e("a",A,[i('"SDF Effects" filter is undocumented'),a(t)]),i("]")]),L,e("p",null,[i("本部分的滤镜需要需 NVIDIA 2060 及以上显卡，并安装 "),e("a",M,[i("NVIDIA Video Effects & AR SDK Redistributable"),a(t)]),i("。这些滤镜效果均可用 NVIDIA Broadcast 实现。")]),e("ul",null,[e("li",null,[e("p",null,[e("a",E,[i("画质提升"),a(t)]),i("（Upscaling）：提升画质分辨率，可以将老式摄像头提升到 4K 画质。")])]),e("li",null,[e("p",null,[e("a",G,[i("降噪"),a(t)]),i("（Denoising Filter）：对画面进行降噪。")])]),e("li",null,[e("p",null,[e("a",C,[i("自动帧"),a(t)]),i("（Auto-Framing）：通过 NVIDIA AR 的自动追踪人脸技术，自动裁剪和放大用户、并且在用户移动时保持帧居中。")])]),e("li",null,[e("p",null,[e("a",R,[i("英伟达背景移除"),a(t)]),i("（Virtual Greenscreen）：无需绿幕也能帮你移除人像背景，移除效果略逊色于 NVIDIA Broadcast。样图是用的是漫画，如果是真人画面，移除效果会好很多。")]),T])])])}const q=n(g,[["render",U],["__file","2_obs_streamfx.html.vue"]]);export{q as default};
