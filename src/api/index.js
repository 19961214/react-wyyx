import ajax from './ajax';

//搜索关键字获取

//热门搜索
export const reqHotWord = () => ajax('/xhr/search/init.json');
//关键字搜索
export const reqKeyWord = (value) => ajax('/xhr/search/searchAutoComplete.json',{'keywordPrefix':value});
//topic界面拿数据
export const reqData = (key,value) => ajax('/topic/v1/find/recAuto.json',{page:key,size:value});