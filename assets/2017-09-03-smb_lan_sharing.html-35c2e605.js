import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,e as c}from"./app-facf88e9.js";const t={},o=c('<p>Windows 系统开启 SMB 协议：</p><ol><li><p>打开「控制面板」窗口，在「类别」查看方式下单击「程序」。</p><figure><img src="https://pic1.zhimg.com/v2-af3e5c2a16a1f245ac6584097c53be60_r.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>打开「程序」窗口，单击「启用或关闭 windows 功能」。</p><figure><img src="https://pic1.zhimg.com/v2-36207f67a5eb3aeb8ee7c1ae855b13dc_r.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>打开「windows 功能」窗口，勾选 SMB 直通。</p><figure><img src="https://pic3.zhimg.com/v2-b1feb5554e6f1da003266be9cb470dfe_r.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>勾选「远程差分压缩 API 支持」。</p><figure><img src="https://pic4.zhimg.com/v2-c5fc3e3d771b6e4bd2516372c69b340b_r.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ol><p>网上很多教程都要求关闭“远程差分压缩”复选框，这是对“远程差分压缩”的误解。</p><p>官方解释：远程差分压缩 (RDC) 功能是一组应用程序编程接口 (API)，这些应用程序可用于确定某个文件集是否发生了变化，如果是，就检测哪部分文件进行了更改。RDC 检测文件中数据的插入、删除和重新排列，使应用程序能够仅复制文件的已更改部分。这对于在有限带宽网络（如广域网 (WAN) 连接）上复制文件非常有用。</p>',4),p=[o];function n(g,l){return a(),e("div",null,p)}const s=i(t,[["render",n],["__file","2017-09-03-smb_lan_sharing.html.vue"]]);export{s as default};
