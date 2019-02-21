/**
	Загрузка данных в центральный блок
*/
function loadCenterBlock(fileName){
	$('#center_block').load('./files/' + fileName, function(response, status, xhr) {
		if (status == "error") {
			var msg = "Ошибка при загрузке файла:<br />";
			$("#center_block").html(msg + xhr.status + " " + xhr.statusText);
		}
	});
}

/**
	Действия после загрузки документа
*/
$(document).ready(function()
{
	var fileName = location.href.replace(/.*?#!/, '');
	if(fileName != location.href){
		loadCenterBlock(fileName);
	}
});

/**
	Загрузка данных из html файла
*/
function loadHtmlFile(obj){
	var fileName = $(obj).attr('href').replace(/.*?#!/, '');
	if(fileName){
		loadCenterBlock(fileName);
	}
}