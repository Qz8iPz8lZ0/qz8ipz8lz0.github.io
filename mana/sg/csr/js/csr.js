
// Write the `Go to Hymn' input box.
function go_hymn_box(main)
{
  document.write
  ('<form name=f style=display:inline'
  +' onsubmit="go_'+(main?'num':'hymn')+'(document.f.num.value);return false;">'
  +'\u8f93\u5165\u9996\u6570 (1-206)&nbsp; <input type=text size=8 name=num>'
  +' <input type=submit value=\u67e5\u627e></form>')
}

// Same function, but printed from the main page.
function go_num_box()
{
  go_hymn_box(1)
}

// Go to a hymn number.
function go_num(num,pre_dir)
{
  try{num=parseInt(num)}catch(e){alert("Invalid number: "+num);return}
if(num<1||num>206){return alert("Number out of range (Valid: 1-206)")}
  window.location.href=(pre_dir?pre_dir:"")+"csr/"+"csr"+num+".htm"
}

// Same function, but linked from the hymn pages.
function go_hymn(num)
{
  go_num(num,"../")
}

// Embed the music player into the webpage.
function embed_music(filename)
{
  var type="mid";
  var width=280;
  var height=44;
  //document.write('<embed src="'+filename+'" if (navigator.appName=="Microsoft Internet Explorer") {  type="application/x-mplayer2" }if (navigator.appName=="Netscape") {  type="audio/'+type+'" }pluginspage="http://www.microsoft.com/Windows/MediaPlayer/" width="144" height="44" autostart="true" loop="true" border="1">')
  if(filename=="none")
    document.write("<table cellpadding=0 cellspacing=0 style=\"width:"+width+"px;height:"+height+"px;border:1px solid #dddddd;\"><tr><td style=text-align:center;vertical-align:middle;font-size:80%;>The music file for this hymn is unavailable! Sorry!</td></tr></table>")
  else
    document.write('<embed src="'+filename+'" type=audio/'+type+' autostart=false loop=false width='+width+' height='+height+'>')
}

