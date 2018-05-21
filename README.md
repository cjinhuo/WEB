## Summary
**All Web Test**

* Countdown 封装成函数

![](IllustrateImg/Countdown.gif)

* mouseRotate 封装成函数，div随之鼠标的移动旋转平移

![](IllustrateImg/mouseRotate.gif)

* toolTip封装成函数，默认top，提示框

![](IllustrateImg/toolTip.gif)

* First_Web

![](IllustrateImg/first.gif)

* Second_Web

![](IllustrateImg/second.gif)

* SVGLoading

![](IllustrateImg/SVGLoading.gif)

* CSSLoading01

![](IllustrateImg/CSSLoading01.gif)

* CSSLoading02

![](IllustrateImg/CSSLoading02.gif)

* click

![](IllustrateImg/click&ripple.gif)

* clock

![](IllustrateImg/clock.gif)

* divCarousel

![](IllustrateImg/divCauousel.gif)

* PersonalInfomation

![](IllustrateImg/PersonalInfomation.gif)

* SloshingPeachs

![](IllustrateImg/SloshingPeachs.gif)

* RegisterPage

![](IllustrateImg/Register.gif)

* navFollowScroll

![](IllustrateImg/navScroll.gif)

* scroll + requestAnimationFlame

```
function DocumentScroll(scrollValue) {
    //页面要滚动到哪个位置 Y轴
    this.scrollValue = scrollValue;
}
//用请求帧动画来过渡scroll
DocumentScroll.prototype = {
    constructor:DocumentScroll,
    requestAnimationFrameScroll:(function f() {
     let s;
        //兼容模式和未兼容模式
        if (typeof window.pageYOffset != 'undefined')
        {
            s = window.pageYOffset;
        }
        else if (typeof document.compatMode != 'undefined' &&    document.compatMode != 'BackCompat')
        {
            s = document.documentElement.scrollTop;
        }
        else if (typeof document.body != 'undefined')
        {
            s = document.body.scrollTop;
        }
        s += 25;
        document.documentElement.scrollTop = s
        f.cancelID = requestAnimationFrame(f);
        if(!f.pre){
            f.pre = 0;
        }
        //有可能滚动不到那个位置，有时页面长度太小，所有加个判断，要是一直滚动不到就退出循环
        if(s > this.scrollValue || document.documentElement.scrollTop === f.pre){
            console.log('stop')
            window.cancelAnimationFrame(f.cancelID)
        }
        f.pre = document.documentElement.scrollTop;
        //两边都得赋值
    })
}
```
Finally
-----
CSS&JS的一些实验
