import {readFileSync,readdirSync} from 'node:fs';
import {validateEntry,summarizeEntries} from './entry.js';
export const entries=readdirSync('content/entries').filter(f=>f.endsWith('.json')).map(f=>{const e=validateEntry(JSON.parse(readFileSync('content/entries/'+f,'utf8')));if(e.id!==f.slice(0,-5))throw Error('记录 id 与文件名不一致：'+f);return e}).sort((a,b)=>b.startDate.localeCompare(a.startDate));
export const domains=[...new Map(entries.flatMap(e=>e.knowledge.map(k=>[k.id,k.domain]))).entries()].map(([id,name])=>({id,name}));
export const stats=summarizeEntries(entries);
