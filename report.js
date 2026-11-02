(() => {
 const rows=[...document.querySelectorAll('#catalog-table tr.row')];
 if(!rows.length)return;
 const input=document.getElementById('q'),status=document.getElementById('status'),expand=document.getElementById('expand-all');
 function toggle(row,on){const button=row.querySelector('.exp');button.setAttribute('aria-expanded',String(on));document.getElementById(button.getAttribute('aria-controls')).hidden=!on;}
 function filter(){let count=0;for(const row of rows){const show=(status.value==='all'||row.dataset.status===status.value)&&row.dataset.q.includes(input.value.trim().toLowerCase());row.hidden=!show;const button=row.querySelector('.exp');document.getElementById(button.getAttribute('aria-controls')).hidden=!show||button.getAttribute('aria-expanded')!=='true';if(show)count++;}document.getElementById('result-count').textContent=`Showing ${count} of ${rows.length} recordings`;}
 rows.forEach(row=>row.querySelector('.exp').addEventListener('click',()=>toggle(row,row.querySelector('.exp').getAttribute('aria-expanded')!=='true')));
 input.addEventListener('input',filter);status.addEventListener('change',filter);
 expand.addEventListener('click',()=>{const on=expand.getAttribute('aria-pressed')!=='true';expand.setAttribute('aria-pressed',String(on));expand.textContent=on?'Collapse all':'Expand all';rows.filter(r=>!r.hidden).forEach(r=>toggle(r,on));});
})();
