var util = require('./index');

util.selectData({pageId: 10}, (data) => {
    console.log(data);
});
util.insertData({
    "_id": "1015125415027768785934",
    "title": "About me",
    "url": "https://www.iyuxy.com/aboutme/",
    "pageId": 10,
    "froms": "985207224@qq.com",
    "nickname": "我有一万个名字",
    "comment": "UI推荐好评！",
    "website": "",
    "parentId": "0",
    "time": 1512541502780
})