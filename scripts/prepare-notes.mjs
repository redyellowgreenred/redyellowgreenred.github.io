import {mkdirSync,readdirSync,readFileSync,writeFileSync} from 'node:fs';
import {validateNote} from '../garden/scripts/github.js';
mkdirSync('notes',{recursive:true});mkdirSync('public',{recursive:true});const notes=[];
for(const filename of readdirSync('notes').filter(f=>f.endsWith('.json'))){const raw=JSON.parse(readFileSync('notes/'+filename,'utf8'));const id=filename.slice(0,-5);if(!/^[a-zA-Z0-9-]+$/.test(id))throw Error('记录文件名只能包含字母、数字和连字符：'+filename);if(raw.id!==id)throw Error('记录 id 与文件名不一致：'+filename);notes.push({...validateNote(raw),id})}
notes.sort((a,b)=>b.date.localeCompare(a.date));writeFileSync('public/notes.json',JSON.stringify({notes}));console.log('Prepared '+notes.length+' learning records.');
