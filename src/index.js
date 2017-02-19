import dva from 'dva';
import './index.html';
import './index.css';

// 1. Initialize
const app = dva({
    initialState:{
        // CurrentStoryIndex :     0,      //第几剧情
        // CurrentSentenceIndex :  0,	    //第几句话
        // CurrentQuestionIndex :  0,		//第几问题
        // CurrentChoiceIndex :    0,      //第几选择
        // CurrentchoiceLength :   0,		//长度
        // choiceFlag :            false,
    }
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/m_nextSentence'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');


var newJson = [
    {'type':'剧情1',
        'content':[
            '旁白1',
            {'name':'刀刀喵','content':['第一句','第二句','第三句','第四句']},
            '旁白3',
            {'name':'怪怪兽','content':['怪怪兽第一句','怪怪兽第二句','怪怪兽第三句','怪怪兽第四句']},
            {'questionIndex':'0'},
            '不管选择如何,到问题为止选择片段结束,没有问题直接结束',
            {'unitEnd':'true'},
        ]
    },
    {'type':'问题',
        'content':[{
            'question':'你的性别?',
            'choice':[
                {'content':'有大屌','nextPart':'剧情2'},
                {'content':'没大屌','nextPart':'剧情3'},
                {'content':'隐藏大屌','nextPart':'剧情4'},
                {'content':'vgvg','nextPart':false},]
            },{
            'question':'待续',
            'choice':[
                {'content':'选择1','nextPart':'剧情4'},
                {'content':'选择2','nextPart':false}]
            },
    ]}
]



var choiceObj = [
    {"question":"你的性别?","choice":[{"content":"有大屌",'result':true},{"content":"没大屌",'result':false},{"content":"隐藏大屌",'result':false},{"content":"vgvg",'result':false}]},
    {"question":"待续","choice":[{"content":"选择1",'result':true},{"content":"选择2",'result':false}]}
]
/*	问题 gal中对话的格式是怎样保存的? 
    name+content 么
    保存在数据库里还是文本里?
    是在哪个文件中?*/
var struct = [
    {"title":"章节1","content":{
        "content":"story1",
        "content":"qustion1",
    }}
]

var storyStruct = [
]