(function(){
    var getByteLen = function (val) {
        var len = 0;
        for (var i = 0; i < val.length; i++) {
            if (val[i].match(/[^x00-xff]/ig) != null) //全角
                len += 2;
            else
                len += 1;
        };
        return len;
    }

    $(".btn").on("click",function(){
        var name = $(".input").val();
        var name1 = $("#name1").val()
        if(!name){
            alert("请输入你的名字");
            return;
        }
        if(!name1){
            alert("请输入ta的名字");
            return
        }
        var len = getByteLen(name),
        len1 = getByteLen(name1);
        if(len>10 && len1>10){
            alert("您输入的名字太长");
            return;
        }
        $.fn.cookie("name",name);
        $.fn.cookie("name1", name1);
        window.location.href= "result.html?name="+encodeURIComponent(name)+"&name1="+encodeURIComponent(name1);
    });

    // var res = {
    //     "debug": false,
    //     "beta": false,
    //     "appId": "wxa0085f0f71352599",
    //     "nonceStr": "8Rwg3IEVWP",
    //     "timestamp": 1477366814,
    //     "url": "index.html",
    //     "signature": "d78963c548ee98f888a0e4246919c9ec4fbeefb8",
    //     "jsApiList": [
    //         "onMenuShareTimeline",
    //         "onMenuShareAppMessage"
    //     ]
    // };
    // wx.config(res);
    // wx.ready(function(){
    //     setShare('七原罪属性测试', '输入姓名,测试一下你隐藏的七原罪属性吧!', window.location.href.replace("index.html","images/cover.jpeg"));
    // });

    // $.get(window.location.href.replace('h5/seven/index.html', 'wechat_config'), function (res) {
    //     wx.config(res);
    //     wx.ready(function(){
    //         setShare('七原罪属性测试', '输入姓名,测试一下你隐藏的七原罪属性吧!', window.location.href.replace("index.html","images/cover.jpeg"));
    //     });
    // }, 'json');
})();

function setShare(title, desc, imgUrl) {
//            var title = '【微信昵称】的颜值价值【结果】,超过全国【百分比】的人。';
    var link = window.location.href;
//            var imgUrl = '';
//            var desc = '你能靠脸吃饭吗?让科学数据告诉你,你的颜值值多少钱。';
    wx.onMenuShareTimeline({
        title: title, // 分享标题
        link: link, // 分享链接
        imgUrl: imgUrl, // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
//                    window.location.href=$appLink;
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });
    wx.onMenuShareAppMessage({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: link, // 分享链接
        imgUrl: imgUrl, // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
//                    window.location.href=$appLink;
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });
}
