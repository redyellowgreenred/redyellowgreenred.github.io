export const repository='redyellowgreenred/redyellowgreenred.github.io';
export const branch='main';
export const githubRoot='https://github.com/'+repository;
export function validateNote(input){
 if(!input||typeof input!=='object'||Array.isArray(input))throw Error('记录格式不正确。');
 const result={};for(const [key,max] of Object.entries({title:120,topic:40,notes:30000,gains:10000})){if(typeof input[key]!=='string'||!input[key].trim()||input[key].trim().length>max)throw Error('请完整填写标题、主题、学习笔记和收获。');result[key]=input[key].trim()}
 if(typeof input.date!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(input.date)||!Number.isFinite(Date.parse(input.date))||new Date(input.date).toISOString().slice(0,10)!==input.date)throw Error('请填写有效日期。');
 if(!Number.isInteger(input.minutes)||input.minutes<0||input.minutes>1440)throw Error('学习时间须为 0 至 1440 的整数。');
 if(!['understand','practice','apply'].includes(input.stage))throw Error('掌握阶段无效。');
 if(!Array.isArray(input.resources)||input.resources.length>12)throw Error('最多添加 12 份资料。');
 result.resources=input.resources.map(r=>{if(!r||typeof r.title!=='string'||!r.title.trim()||r.title.length>160||typeof r.url!=='string'||r.url.length>2000)throw Error('请填写完整的资料名称和链接。');const u=new URL(r.url);if(!['http:','https:'].includes(u.protocol)||u.username||u.password)throw Error('资料请使用不含登录信息的 http 或 https 链接。');return{title:r.title.trim(),url:u.href}});
 const kind=input.kind||'learning';if(!['thought','learning'].includes(kind))throw Error('内容类型无效。');
 return{...result,date:input.date,minutes:kind==='thought'?0:input.minutes,stage:input.stage,kind};
}
export function buildGithubUrl(note,existing=false){const file='notes/'+note.id+'.json';const value=JSON.stringify(note,null,2);const url=new URL(githubRoot+(existing?'/edit/':'/new/')+branch+(existing?'/'+file:''));if(!existing){url.searchParams.set('filename',file);url.searchParams.set('value',value)}return url.href}
export function downloadRecord(note){const blob=new Blob([JSON.stringify(note,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=note.id+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
