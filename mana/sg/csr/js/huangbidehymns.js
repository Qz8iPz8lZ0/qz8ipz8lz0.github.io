
function tabChange(obj,id)
{
var arrayli = obj.parentNode.getElementsByTagName("li"); //��ȡli����
var arrayul = document.getElementById(id).getElementsByTagName("ul"); //��ȡul����
for(i=0;i<arrayul.length;i++)
{
if(obj==arrayli[i])
{
arrayli[i].className = "cli";
arrayul[i].className = "";
}
else
{
arrayli[i].className = "";
arrayul[i].className = "hidden";
}
}
}

// һ��ҳ�����ж��audio��ǩ����������һ��ʱ��ͣ������ֻ����һ��audio���š�
var audios = document.getElementsByTagName("audio");
// ��ͣ����
function pauseAll() {
	var self = this;
	[].forEach.call(audios, function (i) {
		// ��audios��������audioȫ����ͣ
			i !== self && i.pause();
		})
}
// ��play�¼�����ͣ����
[].forEach.call(audios, function (i) {
		i.addEventListener("play", pauseAll.bind(i));
})
