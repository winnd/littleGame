import dva from 'dva';

export default {
    namespace: 'm_nextSentence',
    state:{
        CurrentStoryIndex :     0,      //第几剧情
        CurrentSentenceIndex :  0,	    //第几句话
    },
    reducers:{
        'showNext'(state,payload){
            console.log("进入nextSentence");
            return {
                CurrentStoryIndex       : 1,
                CurrentSentenceIndex    : 1,
            };
        }
    }
}


