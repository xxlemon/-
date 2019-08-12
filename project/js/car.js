

class Car{
    constructor(){
        this.tbody = document.querySelector("tbody");
        this.url = "http://localhost/project/json/goodsList.json";

        // 1.先请求所有数据
        this.load();
        // D1.绑定事件
        this.addEvent()
    }
    addEvent(){
        var that = this;
        // D2.采用事件委托绑定删除的事件
        this.tbody.addEventListener("click",function(eve){
            if(eve.target.className == "del"){
                // D3.获取点击商品的id
                that.id = eve.target.parentNode.getAttribute("index");
                // D4.删除DOM元素
                eve.target.parentNode.remove();
                // D5.删除cookie中的数据
                that.changeCookie(function(i){
                    that.goods.splice(i,1)
                });
            }
            
        })
        // U1.采用事件委托绑定修改数量的事件
        this.tbody.addEventListener("input",function(eve){
            if(eve.target.className == "num"){
                // U2.获取修改数量对应的商品的id
                that.id = eve.target.parentNode.parentNode.getAttribute("index");
                // U3.获取修改之后的实时数量
                // that.num = eve.target.value;
                // U4.修改cookie中的数据
                that.changeCookie(function(i){
                    that.goods[i].num = eve.target.value;
                });
            }
        })
    }
    changeCookie(callback){
        // 先遍历cookie中读取出来的数据
        var i = 0;
        this.goods.some((val,index)=>{
            // 拿到与点击相同的数据，结束
            i = index;
            return val.id == this.id;
        })
        callback(i);
        // U5.最后要把操作之后的数据，再设置给cookie
        setCookie("goods",JSON.stringify(this.goods));
    }
    load(){
        var that = this;
        ajaxGet(this.url,function(res){
            that.res = JSON.parse(res);
            // 2.读取cookie
            that.getCookie()
        })
    }
    getCookie(){
        this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];

        // 3.开始比对数据，渲染页面
        this.display();
    }
    display(){
        var str = "";
        // 遍历所有数据
        this.res.forEach((resVal)=>{
            // 遍历cookie中的数据
            this.goods.forEach((goodsVal)=>{
                // 比较,一致,渲染对应数据
                if(resVal.goodsId == goodsVal.id){
                    str += `<tr index="${resVal.goodsId}">
                                <td><img src="${resVal.goodsImg}"></td>
                                <td>${resVal.items}</td>
                                <td>${resVal.price}</td>
                                <td><input class="num" type="number" value="${goodsVal.num}" min=1></td>   
                                <td class="del">删除</td>
                            </tr>`;
                }
            })
        })
        this.tbody.innerHTML = str;
    }
}

new Car;
