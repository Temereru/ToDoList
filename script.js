var list = [];
var netList = getFromLocal();
$(document).ready(function(){
	list = netList;
	printList();
	    $('#button').click(function(){
        var toAdd = $('input[name=toDoText]').val();
        var difficulty = $('#toDoDiff').val();
        if(toAdd != ""){
        $('.List').append('<div class="listItem"><input type="checkbox" class="check">' + '<p class="inb">' + toAdd + '</p>' + '   <div class="diff">' + difficulty + ' </div><div class="remove">remove</div></div>');
        addToList(toAdd,difficulty,false);
        saveToLocal();
        $('input[name=toDoText]').val("");
      }
    });
	    $(document).on('click','.remove',function(){$(this).parent().remove()});
	    $(document).on('click','.check',function(){
	    	for(i = 0; i < list.length; i++){
	    		console.log(list[i].mission);
	    		if($(this).siblings('p').text() === list[i].mission){
	    			console.log('run')
	    			list[i].state === true ? list[i].state = false : list[i].state = true;
	    		}
	    	}
	    	saveToLocal();
	    });
});

function printList(){
	console.log('started');
	for(i = 0; i < list.length; i++){
		console.log(list[i]);
		var toAdd = list[i].mission;
		var difficulty = list[i].difficulty;
		var state = list[i].state;
		$('.List').append('<div class="listItem"><input type="checkbox" class="check">' + '<p class="inb">' + toAdd + '</p>' + '   <div class="diff">' + difficulty + ' </div><div class="remove">remove</div></div>');
			var checkbox = $('.List').children('div').children('.check')[i];
			$(checkbox).attr('checked',state);
	}
}

function addToList(input,diff,state){
	list.push({mission: input, difficulty: diff, state: state});
}

function saveToLocal(){
	localStorage.setItem("list",JSON.stringify(list));
}

function getFromLocal(){
	var str = localStorage.getItem("list");
	return JSON.parse(str);
}