import {DATA} from './data.js';
const $=id=>document.getElementById(id);
const make=(tag,className,text)=>{const e=document.createElement(tag);if(className)e.className=className;if(text!==undefined)e.textContent=text;return e;};
function sources(ids){const p=make('p','source-line');ids.forEach(id=>{const a=make('a','',id==='CASE'?'[病例紀錄]':'['+id+']');a.href='#ref-'+id;p.append(a);});return p;}
const kinds={fact:'已知事實 / 衍生計算',inference:'合理推論',unknown:'仍待確認'};
DATA.timeline.forEach(t=>{const li=make('li');li.append(make('span','day',t.day));const div=make('div');div.append(make('h3','',t.title),make('p','',t.text));li.append(div);$('timeline').append(li);});
DATA.references.forEach(r=>{const article=make('article','reference');article.id='ref-'+r.id;article.append(make('h3','',(r.id==='CASE'?'CASE':r.id)+' · '+r.title),make('p','',r.citation));if(r.href){const a=make('a','external-link','閱讀來源（另開分頁）');a.href=r.href;a.target='_blank';a.rel='noopener noreferrer';article.append(a);}article.append(make('p','scope',r.scope));$('reference-list').append(article);});
const rows=[];
DATA.series.forEach(s=>{const tr=make('tr');const values=[s.label,s.lactate.toFixed(1),(s.lactate/9.008).toFixed(2),s.ph.toFixed(3),s.na,s.cl,s.hco3.toFixed(1),(s.na-s.cl-s.hco3).toFixed(1)];values.forEach((v,i)=>{const c=make(i===0?'th':'td','',String(v));if(i===0)c.scope='row';tr.append(c);});$('lab-table').querySelector('tbody').append(tr);rows.push(tr);});

const NS='http://www.w3.org/2000/svg';
const svg=(tag,attrs,text)=>{const e=document.createElementNS(NS,tag);Object.entries(attrs).forEach(([k,v])=>e.setAttribute(k,String(v)));if(text!==undefined)e.textContent=text;return e;};
const chart=$('trend-chart'),left=55,top=24,h=194;
const chartLabels=[chart.querySelector('title'),chart.querySelector('desc')];
let plotWidth=735,chartWidth=0,markerLine,dots=[];
const x=s=>left+s.hours/37.75*plotWidth,y=s=>top+h-(s.lactate/9.008)/40*h;
function drawChart(){
 const width=Math.max(320,Math.round(chart.getBoundingClientRect().width)||840);
 if(width===chartWidth)return;
 chartWidth=width;plotWidth=width-left-24;
 chart.setAttribute('viewBox','0 0 '+width+' 270');
 chart.replaceChildren(...chartLabels);
 const grid=svg('g',{'aria-hidden':'true'});
 [0,10,20,30,40].forEach(v=>{const yy=top+h-v/40*h;grid.append(svg('line',{x1:left,y1:yy,x2:left+plotWidth,y2:yy,stroke:'#d5dfe7','stroke-width':1}),svg('text',{x:left-12,y:yy+4,'text-anchor':'end',fill:'#526578','font-size':13},v));});
 const ticks=width<500?[0,10,20,37.75]:[0,10,20,30,37.75];
 ticks.forEach((v,i)=>{const xx=left+v/37.75*plotWidth;grid.append(svg('text',{x:xx,y:top+h+27,'text-anchor':i===ticks.length-1?'end':'middle',fill:'#526578','font-size':13},v===37.75?'37.75 h':v+' h'));});
 grid.append(svg('text',{x:left,y:15,fill:'#526578','font-size':12},'Lactate (mmol/L)'));
 chart.append(grid,svg('polyline',{points:DATA.series.map(s=>x(s)+','+y(s)).join(' '),fill:'none',stroke:'#156082','stroke-width':3,'stroke-linejoin':'round','aria-hidden':'true'}));
 markerLine=svg('line',{x1:0,y1:top,x2:0,y2:top+h,stroke:'#b74d19','stroke-dasharray':'4 5','stroke-width':1.5,'aria-hidden':'true'});chart.append(markerLine);
 dots=DATA.series.map(s=>{const c=svg('circle',{cx:x(s),cy:y(s),r:5,fill:'#fff',stroke:'#156082','stroke-width':2,'aria-hidden':'true'});chart.append(c);return c;});
 selectTime(Number($('time-slider').value));
}
drawChart();
if('ResizeObserver' in window)new ResizeObserver(drawChart).observe(chart);
function selectTime(index){const s=DATA.series[index];$('time-slider').setAttribute('aria-valuetext',s.label+', lactate '+(s.lactate/9.008).toFixed(2)+' mmol/L, pH '+s.ph.toFixed(3)+', Na '+s.na+' mEq/L');const out=$('time-readout');out.replaceChildren(make('strong','',s.label),document.createTextNode('Lactate '+s.lactate.toFixed(1)+' mg/dL ('+(s.lactate/9.008).toFixed(2)+' mmol/L)　pH '+s.ph.toFixed(3)+'　Na '+s.na+' mEq/L'));markerLine.setAttribute('x1',x(s));markerLine.setAttribute('x2',x(s));dots.forEach((d,i)=>{d.setAttribute('fill',i===index?'#b74d19':'#fff');d.setAttribute('stroke',i===index?'#b74d19':'#156082');d.setAttribute('r',i===index?7:5);});rows.forEach((r,i)=>r.classList.toggle('selected-row',i===index));}
$('time-slider').addEventListener('input',e=>selectTime(Number(e.target.value)));
selectTime(6);

const tabs=[],panels=[];
function selectMethod(index,focus=false){tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1;panels[i].hidden=i!==index;});if(focus)tabs[index].focus();}
DATA.methods.forEach((m,i)=>{const tab=make('button','',m.name);tab.type='button';tab.id='tab-'+m.id;tab.setAttribute('role','tab');tab.setAttribute('aria-controls','panel-'+m.id);tab.setAttribute('aria-selected',String(i===0));tab.tabIndex=i===0?0:-1;const panel=make('div','method-panel');panel.id='panel-'+m.id;panel.setAttribute('role','tabpanel');panel.setAttribute('aria-labelledby',tab.id);panel.tabIndex=0;panel.hidden=i!==0;panel.append(make('h3','',m.heading),make('p','method-status',m.status),make('p','method-description',m.description));const dl=make('dl');m.rows.forEach(([label,text])=>{const row=make('div');row.append(make('dt','',label),make('dd','',text));dl.append(row);});panel.append(dl,sources(m.sources));tab.addEventListener('click',()=>selectMethod(i));tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(i+1)%DATA.methods.length;if(e.key==='ArrowLeft')next=(i-1+DATA.methods.length)%DATA.methods.length;if(e.key==='Home')next=0;if(e.key==='End')next=DATA.methods.length-1;if(next!==undefined){e.preventDefault();selectMethod(next,true);}});tabs.push(tab);panels.push(panel);$('method-tabs').append(tab);$('method-panels').append(panel);});

const filterButtons=[];
function filterCorrelation(kind){filterButtons.forEach(({key,button})=>button.setAttribute('aria-pressed',String(key===kind)));$('correlation-list').replaceChildren();const items=DATA.correlations.filter(item=>kind==='all'||item.kind===kind);items.forEach(item=>{const article=make('article','correlation-item kind-'+item.kind);const content=make('div');article.append(make('span','evidence-label',kinds[item.kind]));content.append(make('h3','',item.title),make('p','',item.text),sources(item.sources));article.append(content);$('correlation-list').append(article);});$('filter-status').textContent='顯示 '+items.length+' 則：'+(kind==='all'?'全部證據層級':kinds[kind]);}
[['all','全部'],['fact','已知事實'],['inference','合理推論'],['unknown','仍待確認']].forEach(([key,label])=>{const b=make('button','',label);b.type='button';b.setAttribute('aria-pressed',String(key==='all'));b.addEventListener('click',()=>filterCorrelation(key));filterButtons.push({key,button:b});$('correlation-filters').append(b);});
filterCorrelation('all');

const quizState=Array(DATA.quiz.length).fill(null),quizElements=[];
function updateScore(){const answered=quizState.filter(v=>v!==null).length;const correct=quizState.filter((v,i)=>v===DATA.quiz[i].answer).length;$('quiz-score').textContent=answered?'已核對 '+answered+' / '+DATA.quiz.length+' 題，'+correct+' 題正確':'尚未核對答案';}
DATA.quiz.forEach((q,qi)=>{const article=make('article','question');article.id='question-'+(qi+1);const fieldset=make('fieldset');const legend=make('legend');legend.append(make('span','q-title',String(qi+1).padStart(2,'0')+' · '+q.title),document.createTextNode(q.stem));fieldset.append(legend);const opts=make('div','options'),labels=[];q.options.forEach((opt,oi)=>{const label=make('label','option');const input=make('input');input.type='radio';input.name='question-'+qi;input.value=String(oi);input.id='q'+qi+'-o'+oi;label.append(input,make('span','',String.fromCharCode(65+oi)+'. '+opt.text));opts.append(label);labels.push(label);});fieldset.append(opts);const button=make('button','button','核對答案');button.type='button';const hint=make('p','selection-hint');hint.setAttribute('role','status');hint.hidden=true;const feedback=make('div','feedback');feedback.id='feedback-'+qi;feedback.setAttribute('aria-live','polite');feedback.hidden=true;button.setAttribute('aria-controls',feedback.id);button.setAttribute('aria-expanded','false');button.addEventListener('click',()=>{const picked=fieldset.querySelector('input:checked');if(!picked){hint.textContent='請先選擇一個答案，再核對解析。';hint.hidden=false;return;}hint.hidden=true;const value=Number(picked.value);quizState[qi]=value;labels.forEach((label,oi)=>{label.classList.toggle('correct',oi===q.answer);label.classList.toggle('wrong',oi===value&&oi!==q.answer);});feedback.replaceChildren(make('h4','',value===q.answer?'答對了。正確答案：'+String.fromCharCode(65+q.answer):'正確答案：'+String.fromCharCode(65+q.answer)));const explanations=make('ol');explanations.type='A';q.options.forEach((opt,oi)=>{const li=make('li');if(oi===q.answer)li.append(make('strong','', '正確選項。'));li.append(document.createTextNode(opt.why));explanations.append(li);});feedback.append(explanations,sources(q.sources));feedback.hidden=false;button.setAttribute('aria-expanded','true');updateScore();});article.append(fieldset,button,hint,feedback);$('quiz-list').append(article);quizElements.push({fieldset,labels,feedback,hint,button});});
$('reset-quiz').addEventListener('click',()=>{quizState.fill(null);quizElements.forEach(q=>{q.fieldset.querySelectorAll('input').forEach(input=>input.checked=false);q.labels.forEach(label=>label.classList.remove('correct','wrong'));q.feedback.hidden=true;q.feedback.replaceChildren();q.hint.hidden=true;q.button.setAttribute('aria-expanded','false');});updateScore();});
