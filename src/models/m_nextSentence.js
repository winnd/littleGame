import dva from 'dva';

export default {
    namespace: 'm_nextSentence',
    state:{
        CurrentStoryIndex       : 0,      //第几剧情
        CurrentSentenceIndex    : 0,	    //第几句话
 
        //故事的序 
        storyObj0 : [  //if(如果问题后面还有剧情则继续 否则该剧情结束)
		    {"title":"开始前言","content":["口袋喂鸡网络版 v 1.0 测试版","某一天, 你走在路上","突然摔进坑里 遇见了vg之神","vg之神: ",{"questionIndex":"0"},"asdfasdfasdf",{"questionIndex":"1"}]},		//第0剧情
		    {"title":"阶段","content":["阿斯顿发","案犯的"]}
	    ],

        //主角1的线
        storyObj2 : [
            {"title":"开始前言","content":["口袋喂鸡网络版 v 1.0 测试版","某一天, 你走在路上","突然摔进坑里 遇见了vg之神","vg之神: ",{"questionIndex":"0"},"asdfasdfasdf",{"questionIndex":"1"}]},		//第0剧情
		    {"title":"阶段","content":["阿斯顿发","案犯的"]}
        ],

        //选择支的问题和选择
        choiceObj : [
            {"question":"你的性别?","choice":[{"content":"有大屌",'result':"跳转剧情1"},{"content":"没大屌",'result':false},{"content":"隐藏大屌",'result':false},{"content":"vgvg",'result':false}]},
            {"question":"待续","choice":[{"content":"选择1",'result':true},{"content":"选择2",'result':false}]}
        ],
    },
    
    reducers:{
        'showNext'(state,{payload : CurrentSentenceIndex}){
            console.log(state.CurrentSentenceIndex+1);
            return {
                ...state,
                CurrentSentenceIndex    : state.CurrentSentenceIndex+1,
            };
        }
    }
}
