
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

