//奖项类型，1 表示奖项不分等级，不限数量，2 表示奖项分等级，限制每个等级的数量
const awardsType = 1

//奖项类型是1的时候，使用此配置
var globalkeys = [
	"999元",
	"试卷一套",
	"辣条一包",
	"放假一天"
];
//奖项类型是2的时候，使用此配置
var globalkeys2 = {
	"一等奖":{
			"awards":"888元",
			"num":3
			},
	"二等奖":{
			"awards":"试卷一套",
			"num":2
			},
	"三等奖":{
			"awards":"辣条一包",
			"num":1
			}
	};
