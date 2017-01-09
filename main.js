main = function(inp_words){

  keywords=inp_words.split(',');

  console.log('page ready, start scaning');
  var feed_list=document.getElementsByClassName('feed_row ')
  console.log(feed_list);
  for(var i=0; i!=feed_list.length;i++){
    for(var i1=0; i1<keywords.length;i1++){
      if(feed_list[i].outerHTML.indexOf(keywords[i1])!=-1){
        document.getElementsByClassName('feed_row ')[i].removeChild(document.getElementsByClassName('feed_row ')[i].firstChild);
        console.log('keyword detect on load');
      };
    };
  };


  var new_func= function() {
      console.log('showMore called');
      if (!cur.isFeedLoading) {
          cur.disableAutoMore = !1;
          var e = ge("feed_rows_next");
          if (e) {
              if (e.firstChild){
                  for (; e.firstChild;){
                  cur.rowsCont.insertBefore(e.firstChild, e);};

                };
              re(e)
          }
          var t = ge("show_more_link");
          cur.all_shown && (hide(t), show("all_shown"));
          var s = !1,
              o = function(e) {
                  e.keyCode == KEY.ESC && (s = !0)
              };
          addEvent(document, "keyup", o);
          var r = feed.getSectionParams(cur.section || "news");
          extend(r, {
              offset: cur.offset,
              from: cur.from,
              part: 1,
              more: 1,
              last_view: ge("feedback_unread_bar") ? 1 : cur.options.last_view
          });
          var i = cur.section;
          ajax.post("al_feed.php?sm_" + cur.section, r, {
              onDone: function(e, t) {
                var news_list=t.split('<div class="feed_row ">')
                console.log(news_list.length);
                for (var i1 = 0; i1 != news_list.length; i1++){
                  for (var i2 = 0; i2 < keywords.length; i2++){
                    if(  news_list[i1].indexOf(keywords[i2])!= -1){
                      console.log('keywords detected');
                      news_list[i1]=''
                    };
                };};
                t=news_list.join('<div class="feed_row ">')
                console.log('t joined');
                  if (removeEvent(document, "keyup", o), i == cur.section) {
                      if (s) return void(cur.disableAutoMore = !0);
                      if (t) {
                          var r, n = ce("div");
                          for (n.innerHTML = t; r = n.firstChild;) r.firstChild && r.firstChild.id && !ge(r.firstChild.id) || "feedback_unread_bar" == r.id || "feed_row_fb_hidden" == r.className ? cur.rowsCont.appendChild(r) : n.removeChild(r)

                      }
                      shortCurrency(), feed.applyOptions(e), setTimeout(feed.scrollCheck, 200)
                  }
              },
              showProgress: function() {
                  lockButton(t), cur.isFeedLoading = !0
              },
              hideProgress: function() {
                  unlockButton(t), cur.isFeedLoading = !1
              },
              cache: 1
          })
      }
  };
  Feed.showMore=new_func;
};
