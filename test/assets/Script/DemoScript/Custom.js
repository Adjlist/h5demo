var DemoBar = require("DemoBar");
require("DemoBar");
require("DemoGameController");
cc.Class({
    extends: cc.Component,

    properties: {
        cname:{
            default:""
        },
        want:'',
    },

    // use this for initialization
    onLoad: function () {
          
    },

    changeScore:function(){
      this.customscore+=10;
    },
    //这里为对话框button回调，实际中改成碰撞回调，当食物碰撞到客户时（进入客户碰撞体内），
    //触发碰撞回调（food值通过鼠标点选的对象获取）
    demoEat:function(){
        var _self = this;
        cc.log("顾客正在吃食物");
        this.bar = DemoBar.instance;
        cc.log(this.bar.controller.foodtype);
        if(this.bar.controller.foodtype==this.want){
            cc.log("客户吃到了想吃的食物");
            DemoBar.instance.controller.onEat();
            return true;
        }
        else{

                DemoBar.instance.controller.onMiss();
                cc.log("顾客没有吃到想吃的食物");

            return false;
            //计时继续顾客等待
        };},
        /*if(this.contains(this.want,_food)){
            cc.log("客户吃了 " + _food);
            //如果复合条件，则改变分数，显示离开动画
            if(this.controller){
                this.controller.customOut();//相当于this.bar
                this.controller.changeScore();
            }
        }else{
            this.foodreturn();
        }*/
    onCollisionEnter: function (other, self) {
        console.log('on collision enter');
        if(this.demoEat(this.want)) {
            cc.log("食物被吃掉");

            /*this.changeScore();*/
            setTimeout(60);
            cc.log("custom out");
            /*cc.log(this.customscore);*/
            //食物消失
            return true;
        }
        else{return false};
    },
    /*onCollisionStay: function (other, self) {
        console.log('on collision stay');
    },
    onCollisionExit: function (other, self) {
        console.log('on collision exit');
    },
    contains:function (arr, obj) {
        cc.log(arr);
        cc.log("函数经过调用");

        return false;  
    },*/

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
