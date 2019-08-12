require.config({
    baseUrl:"module",
    paths:{
       select:"select",
        tab:"tab",
        jq:"jquery.1.12.4",
    }
})

require(["jq","select"],function(_,s){
    
	console.log(s)
    var myselect = new s({
		a:$("#sel-box a"),
        oul:$("#sel-box").children("#sel-list")
    })

   
})