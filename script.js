$(document).ready(function(){
	    $('#button').click(function(){
        var toAdd = $('input[name=toDoText]').val();
        $('.List').append('<div class="listItem"><input type="checkbox">' + toAdd + '   <div class="remove">remove</div></div>');
        $('input[name=toDoText]').val("");
    });
	    $(document).on('click','.remove',function(){$(this).parent().remove()});
});