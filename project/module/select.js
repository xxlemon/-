define(function(){
    // 下拉菜单的效果
    class Select{
        constructor(options){
            this.a = options.oa;
            this.ul = options.oul;
            this.data = "这选项卡的数据";

            this.addEvent()
        }
        addEvent(){
            var that = this;
            this.a.hover(function(){
                that.ul.show()
            },function(){
                that.ul.hide()
            })

            
        }
    }


    return Select;
})