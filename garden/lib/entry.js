export const repository='redyellowgreenred/redyellowgreenred.github.io';
export const githubRoot='https://github.com/'+repository;
export const questionStatuses={review:'待回顾',open:'仍在探索',resolved:'已澄清'};
const nonempty=(x,max=30000)=>typeof x==='string'&&x.trim().length>0&&x.length<=max;
const validDate=x=>typeof x==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(x)&&Number.isFinite(Date.parse(x))&&new Date(x).toISOString().slice(0,10)===x;
export function validateEntry(e){
 if(!e||!nonempty(e.id,100)||!/^[a-zA-Z0-9-]+$/.test(e.id))throw Error('记录 id 只能使用字母、数字和连字符。');
 if(!nonempty(e.title,160)||!validDate(e.startDate)||!validDate(e.endDate)||e.endDate<e.startDate)throw Error('请填写标题与有效的日期区间。');
 for(const key of ['knowledge','resources','questions'])if(!Array.isArray(e[key]))throw Error('内容格式不正确：'+key);
 if(!e.knowledge.length&&!e.resources.length&&!e.questions.length&&!e.reflection?.trim())throw Error('至少填写一项内容。');
 for(const k of e.knowledge){if(!nonempty(k.id,150)||!nonempty(k.domain,100)||!Array.isArray(k.concepts)||!k.concepts.length||k.concepts.some(c=>!nonempty(c,1000))||!['recorded','planned','exploring'].includes(k.status))throw Error('请检查知识点内容与学习状态。');if(k.date&&(!validDate(k.date)||k.date<e.startDate||k.date>e.endDate))throw Error('知识点日期应在记录区间内。')}
 for(const r of e.resources){if(!nonempty(r.id,150)||!nonempty(r.title,300)||!validDate(r.date)||!['watched','read'].includes(r.status)||!['video','paper','article','book','other'].includes(r.type))throw Error('请检查资料的名称、日期和阅读状态。');let url;try{url=new URL(r.url)}catch{throw Error('请填写有效的资料链接。')}if(!['https:','http:'].includes(url.protocol)||url.username||url.password)throw Error('资料链接必须使用不含登录信息的 HTTP 或 HTTPS 网址。');if(!Array.isArray(r.domainIds))throw Error('资料的关联领域格式不正确。')}
 for(const q of e.questions){if(!nonempty(q.id,150)||!nonempty(q.text,3000)||!nonempty(q.group,100)||!Object.keys(questionStatuses).includes(q.status)||!Array.isArray(q.domainIds))throw Error('请检查问题、分组和回顾状态。');if(q.resolvedAt&&!validDate(q.resolvedAt))throw Error('问题回顾日期无效。')}
 for(const key of ['knowledge','resources','questions']){const ids=e[key].map(x=>x.id);if(new Set(ids).size!==ids.length)throw Error('同一记录中的 id 不能重复：'+key)}
 return e;
}
export const period=e=>e.startDate===e.endDate?e.startDate.replaceAll('-','.'):`${e.startDate.replaceAll('-','.')} — ${e.endDate.slice(5).replace('-','.')}`;
export const summarizeEntries=entries=>({knowledge:entries.reduce((s,e)=>s+e.knowledge.filter(k=>k.status==='recorded').length,0),resources:entries.reduce((s,e)=>s+e.resources.length,0),questions:entries.reduce((s,e)=>s+e.questions.length,0),resolved:entries.reduce((s,e)=>s+e.questions.filter(q=>q.status==='resolved').length,0)});
export function publishUrl(entry,existing=false){const file='content/entries/'+entry.id+'.json';const u=new URL(githubRoot+(existing?'/edit/main/'+file:'/new/main'));if(!existing){u.searchParams.set('filename',file);u.searchParams.set('value',JSON.stringify(entry,null,2))}return u.href}
