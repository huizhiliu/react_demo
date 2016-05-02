var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res) {
	res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    handle(req,res);
});

function handle(req,res) {
	var pathname = url.parse(req.url).pathname;
	if (pathname === '/') {
		var data = {
                "date_id": "3",                //约会 item id
                "head": "imgs/1.jpg",          //用户头像
                "nickname": "梁朝伟",            //用户昵称
                "authened": 1,                  //该用户是否认证过 `1`已认证 `2`未认证
                "uid": "1",                    //用户id
                "created_at": "1439094919536",    //创建时间     时间戳
                "date_time": "1429456315",     //约的具体时间  时间戳
                "place": "重邮宾馆",            //地点
                "title": "来约炮!来约炮!来约炮!来约炮!来约炮!来约炮!来约炮!来约炮!",             //标题
                "date_type": "1",              // type
                "category_id": "1",            //
                "signature": "今天晚上我请客shdjygkyfrjyfsgrbhftjytjrtjjjjjjjjjj!",  //个性签名
                "erolled": 20,                  //多少人已报名
                "commented": 20,                //多少人已评论
                "praised": 20,                  //多少人已点赞
                "gender": 1,                   //性别 "1" 男性  "2"女性
                "cost_mode": "1",              //0无限制 1AA, 2我请客, 3求请客 4无花费
                "tags": ["吃饭", "睡觉", "打蛋蛋"]        //用户标签
		}
		res.end( JSON.stringify(data) );
	};
	
};

server.listen(8080,function(){
	console.log('success');
})
