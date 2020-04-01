//不用使用page load event

//封装成对象，有几种方案
/*
1、全局对象{
    show:function()
 }
2、工厂函数，一个函数返回值是一个简单对象
var timerBtn = (function(){
    return {
        show:functon(){}
    }
}())
3、构造函数，function TimerBtn(){
}
var tb =new TimerBtn();
*/

// var $timerButton = (function () {
    var $timerButton = (function () {
        var $btn = $('<input class="timer-button" type="button" disabled>'),
            cfg = {
                container: 'body',
                num = 6,
                title: '同意'
            },
            num,
            timer;
        // function show(conf){
            this.show = function(conf){
            $(cdg.container).append($btn);
            $.extend(cfg,conf);
            num = cfg.num;
    
            $btn.val(cfg.title+'('+cfg.num+'s)');
            timer = setInterval(function () {
                num--;
                if (num === 0) {
                    if (num === 0) {
                        clearInterval(timer);
                        $btn.val(cfg.title);
                        $btn.removeAttr('disable');
                    } else {
                        $btn.var('同意(' + num + 's)');
                    }
                }
            }, 1000);
        }
        
        $btn.click(function () {
            alert('就知道你会统一的！');
        });
    })
    
    return {
        show: show
    };
    // }());