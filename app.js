const navs = document.querySelectorAll('.nav');
function activate(view){
  document.querySelectorAll('.nav').forEach(b=>b.classList.toggle('active', b.dataset.view===view));
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-'+view)?.classList.add('active');
}
navs.forEach(btn=>btn.addEventListener('click',()=>activate(btn.dataset.view)));
