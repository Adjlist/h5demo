var DemoBar = cc.Class({
    extends: cc.Component,

    properties: {

        customs:[],
        controller:{
            default:null
        },
        foodtype:'',

    },

    statics: {
        instance: null
    },

    // use this for initialization
    onLoad: function () {
        DemoBar.instance = this;
    },
   /* getCustomByName: function(name){
        for(var i = 0;i<this.customs.length;i++){
            if(name==customs[i].name){
                return customs[i];
            }
        }
    },//获取姓名，貌似没有用*/

    customIn:function(custom){
        this.customs.push(custom);
        cc.log("custom in");
        cc.log("current custom count is " + this.customs.length);
    },
    customOut:function(custom){
        this.customs.pull(custom);
        cc.log("custom out");
        cc.log("miss custom count is " + this.customs.length);
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
