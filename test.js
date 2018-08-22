
//var content = '';
function loadDoc(localurl,liveurl){
	$.ajax({
		url:localurl,
		type:'GET',
		async:true,
		data:{ livelink : liveurl },
		success: function(data){
			//content = data;
			console.log(' data : ' + data );
			ajax_response(data,'SalesRank');
			//$('#textDiv').html($(data).find('#SalesRank').html());
		}
	});
}

function ajax_response(string_html, id_string ){
	return $('#textDiv' ).html($(string_html).find('#'+id_string ).html());	
}

