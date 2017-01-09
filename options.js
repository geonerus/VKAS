$( document ).ready(function() {


f=function ff(data) {
   console.log(data['filter']);
   document.getElementById('st').innerHTML=data['filter'];
}

chrome.storage.sync.get({'filter':'mdk,сsgo,раздача,опцион'},f);
});
up= function upd(){
  chrome.storage.sync.set({
      'filter': document.getElementById('inp').value,
    });



};
document.getElementById("bb").addEventListener("click", up);
