window.onload = function () {
    let home = document.getElementById('home');
    let btnList = document.getElementsByClassName('btnList');

    let tabButton = document.getElementsByClassName('tabButton');
    // console.log(tabButton);
    let tabul = tabButton[0].getElementsByTagName('ul');
    // console.log(tabul);
    let tabli = tabul[0].getElementsByTagName('li');
    // console.log(tabli);


    home.onmouseenter = function () {
        home.style.color = 'red';
    };
    home.onmouseleave = function () {
        home.style.color = '#ffffff';
    };
    /*
    * 轮播点
    * */
    // for(let i=0; i<bannerPointer.length;i++) {
    //
    //     bannerPointer[i].onmouseenter = function () {
    //         bannerPointer[i].style.backgroundColor = '#009966'
    //     };
    //     bannerPointer[i].onmouseleave = function () {
    //         bannerPointer[i].style.backgroundColor = '#ffffff'
    //     }
    // }

    /*
    * diaryLeft
    * */
    // for(let i=0; i<tabli.length; i++){
    //     tabli[i].onclick = function () {
    //         this.style.color = '#009966';
    //     }
    //     tabli[i].onmouseleave = function () {
    //         tabli[i].style.color = '#000000';
    //     }
    // }


    //轮播图
    // let index=0;
    // let btnRight = document.querySelector('.jiantou .right');
    // let btnLeft = document.querySelector('.jiantou .left');
    // let bannerImg = document.querySelectorAll('.bannerLeft .pic a');
    // console.log(bannerImg);
    //
    // btnRight.onclick = function () {
    //     index++;
    //     if(index == bannerImg.length){
    //         index = 0;
    //     }
    //     bannerImg.forEach(function (ele) {
    //         ele.style.zIndex = 1;
    //     });
    //     Array.prototype.forEach.call(bannerPointer,function (elem) {
    //        elem.classList.remove('hot')
    //     });
    //     bannerPointer[index].classList.add('hot');
    //     bannerImg[index].style.zIndex = '999';
    // };
    // btnLeft.onclick = function () {
    //     index--;
    //     if(index == -1){
    //         index = bannerImg.length-1;
    //     }
    //     bannerImg.forEach(function (ele) {
    //         ele.style.zIndex = 1;
    //     });
    //     Array.prototype.forEach.call(bannerPointer,function (elem) {
    //         elem.classList.remove('hot')
    //     });
    //     bannerPointer[index].classList.add('hot');
    //     bannerImg[index].style.zIndex = '999';
    // };
    /*
    * 轮播移入移出
    * */


    // let bannerLeft = document.querySelector('.bannerLeft');
    // let t = setInterval(btnRight.onclick,3000);
    //
    // bannerLeft.onmouseenter = function () {
    //     clearInterval(t);
    // };
    // bannerLeft.onmouseleave = function () {
    //     t = setInterval(btnRight.onclick,3000);
    // };
    //
    // for(let i=0;i<bannerPointer.length;i++){
    //     index = i;
    //     bannerPointer[i].onclick = function () {
    //         Array.prototype.forEach.call(bannerPointer,function (elem) {
    //             elem.classList.remove('hot');
    //         });
    //         bannerImg.forEach(function (ele) {
    //             ele.style.zIndex = 1;
    //         })
    //         bannerPointer[i].classList.add('hot');
    //         bannerImg[i].style.zIndex = 999;
    //         console.log(i);
    //     }
    // }

    //轮播动画
    let current = 0, next = 0;
    let btnRight = document.querySelector('.jiantou .right');
    let btnLeft = document.querySelector('.jiantou .left');
    let bannerImg = document.querySelectorAll('.bannerLeft .pic a ');
    let w = bannerImg[0].offsetWidth;
    let bannerLeft = document.getElementsByClassName('bannerLeft');
    let bannerPointer = btnList[0].getElementsByTagName('li');
    let t = setInterval(btnRight.onclick,3000);
    let flag = true;
    bannerLeft[0].onmouseenter = function () {
        clearInterval(t);
    };
    bannerLeft[0].onmouseleave = function () {
        t = setInterval(btnRight.onclick,3000);
    };

    btnRight.onclick = function(){
        if (!flag){
            return;
        }
        flag = false;
        next++;
        if(next === bannerImg.length){
            next = 0;
        }
        bannerImg[next].style.left = w +'px';
        animate(bannerImg[current],{left:-615});
        animate(bannerImg[next],{left : 0},function () {
           flag = true;
        });
        bannerPointer[next].style.backgroundColor = '#009966';
        bannerPointer[current].style.backgroundColor = '#ffffff';
        current = next;
    };
    btnLeft.onclick = function(){
        if(!flag){
            return;
        }
        flag = false;
        next--;
        if(next < 0){
            next = bannerImg.length-1;
        }
        bannerImg[next].style.left = -w +'px';
        animate(bannerImg[current],{left:w});
        animate(bannerImg[next],{left : 0},function () {
            flag = true;
        });
        bannerPointer[next].style.backgroundColor = '#009966';//轮播点动画
        bannerPointer[current].style.backgroundColor = '#ffffff';//轮播点动画
        current = next;
    };


    for(let i=0 ; i<bannerPointer.length;i++){
        // bannerPointer[i].onmouseenter = function () {
        //     bannerPointer[i].style.backgroundColor = '#009966';
        // };
        // bannerPointer[i].onmouseleave = function () {
        //     bannerPointer[i].style.backgroundColor = '#ffffff';
        // };
        bannerPointer[i].onclick = function(){
            if(!flag){
                return;
            }
            if(next === i){
                return;
            }
            flag = false;
            next =i;
            if (next > current){
                bannerImg[next].style.left = w +'px';
                animate(bannerImg[current],{left:-w});
                animate(bannerImg[next],{left : 0}, function () {
                    flag = true;
                });
            }else{
                bannerImg[next].style.left = -w +'px';
                animate(bannerImg[current],{left:w});
                animate(bannerImg[next],{left : 0} ,function () {
                    flag = true;
                });
            }
            bannerPointer[next].style.backgroundColor = '#009966';//轮播点动画
            bannerPointer[current].style.backgroundColor = '#ffffff';//轮播点动画
            current = next;
        }
    }




    let tabList = document.querySelectorAll('.tabList li');
    tabList.forEach(function (elem,index) {
        elem.onmouseenter = function () {
            for(let i=0;i<tabList.length;i++){
                tabList[i].classList.remove('first');
            }
            this.classList.add('first');
        }
        elem.onmouseleave = function () {
            this.classList.remove('first');
            tabList[0].classList.add('first');
        }
    });
    // for(let j=0;j<tabList.length;j++){
    //     tabList[j].classList.remove('first')
    //     tabList[0].classList.add('first')
    // }

    let tabButtons = document.querySelectorAll('.tabButton li');
    // console.log(tabButtons);


    /*
    * 按需加载图片
    *
    * 页面滚动距离 +窗口高度 >=元素到文档的高度
    * img.src = img.aa
    * */
    let viewH = window.innerHeight;
    let imgs = document.querySelectorAll('.lazyload');
    let positionArr = [];
    imgs.forEach(function (ele) {
        let parent = ele.offsetParent;
        positionArr.push(parent.offsetTop + ele.offsetTop)
    });
    window.onscroll = function () {
        let scrolltop = document.documentElement.scrollTop ||document.body.scrollTop;
        for(let i=0;i<positionArr.length;i++){
            if(scrolltop + viewH >=positionArr[i]+100){
                imgs[i].src = imgs[i].getAttribute('aa');
            }
        }
    }
};