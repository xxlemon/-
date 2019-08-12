
//  class Login{
//         constructor(){
//             // 登录的接口
//             this.url = "http://api.icodeilife.cn:81/user";
//             // 获取元素
//             this.user = $(".user");
//             this.pass = $(".pass");
//             this.btn = $(".btn");
//             this.state = $("p span");
//             // 绑定点击事件
//             this.addEvent();
//         }
//         addEvent(){
//             var that = this;
//             this.btn.click(function(){
//                 // 开启ajax
//                 that.load()
//             })
//         }
//         load(){
//             // 请求登录接口
//             $.ajax({
//                 url:this.url,
//                 data:{
//                     type:"login",
//                     user:this.user.val(),
//                     pass:this.pass.val(),
//                 },
//                 success:(res)=>{
//                     // 请求成功之后，解析数据，根据数据的返回信息，决定不同的状态
//                     this.res = JSON.parse(res);
//                      console.log(res);
//                     if(this.res.code == 0){
//                         this.state.html("帐号密码不符，请<a href='login.html'>重新登录</a>")
//                     }else if(this.res.code == 1){
//                         // 登录成功之后，存储状态
//                         this.setState()

//                         this.state.html("登录成功,5秒后跳转到<a href='frist.html'>首页</a>");
//                         setTimeout(() => {
//                             location.href="frist.html";
//                         }, 5000);
//                     }else if(this.res.code == 2){
//                         console.log(res)
//                         this.state.html("不存在该用户信息，请<a href='register.html'>注册</a>")
//                     }
//                 }
//             })
//         }
//         setState(){
//             // 将当前登录成功后返回的用户信息作为登录成功的状态
//             localStorage.setItem("loginUser",JSON.stringify(this.res.msg));
//         }
//     }
    
//     new Login();

class Denglu{
   constructor(){
       this.user=$(".user");
       this.pass=$(".code");
       this.sub=$(".btn");
       this.state=$("p em");

       this.url = "http://api.icodeilife.cn:81/user";
       this.addEvent();
   }
   addEvent(){
       var that=this;
       this.sub.click(function(){
           that.load();
       })
   }
   load(){
       $.ajax({
           url:this.url,
           data:{
               type:"login",
               user:this.user.val(),
               pass:this.pass.val()
           },
           success:(res)=>{
               console.log(res);
               this.res=JSON.parse(res);
               
               if(this.res.code==0){
                   this.state.html("不存在此用户,<a href='registor.html'>亲注册</a>");
                   
               }else if(this.res.code==1){
                   setInterval(()=>{
                       location.href="index.html"	;
                   },3000)
                   localStorage.setItem("logins",JSON.stringify(this.res.msg))
                   this.state.html("登录成功3s后跳转,<a href='index.html'>立即跳转</a>");
                   console.log(this.res)
                   
               }else if (this.res.code==2) {
                       this.state.html("账号密码不符，<a href='login.html'>重新登录</a>");
               }
           }
       })
   }
}
new Denglu();

