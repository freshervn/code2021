
// thêm listent cho nút kéo khi ấn chuột
var clicked = 0;
$(window).mouseup(function (){
    clicked=1;
});
$('.drag-thumb').mousedown(function () {
    // khi di chuột
    clicked=0;
    $Thumb = $(this);
    $(window).mousemove(
        function () {
            // tắt khi ko ấn nữa              
            if (clicked ) return false;
            x = event.pageX - $Thumb.width() / 2 - $Thumb.parent().offset().left;
            // không cho kéo ra ngoài
            if (event.pageX >= ($Thumb.parent().width() + $Thumb.parent().offset().left)) {
                x = $Thumb.parent().width();
                // alert('run');
            }
            if (event.pageX <= $Thumb.parent().offset().left) {
                x = 0;
            }
            $Thumb.css({ 'left': x + 'px' });
            
            // tim vi tri con tro ben trai
            var ThumbMinPosition = $Thumb.parent().offset().left + $Thumb.parent().width();
            $('.drag-thumb').each(function(){
                ThumbMinPosition  = Math.min(ThumbMinPosition ,$(this).offset().left);                
                if($(this).offset().left == ThumbMinPosition ) {
                    $('.drag-thumb').each(function(){
                        $(this).removeClass('thumb-min');
                    })
                    $(this).addClass('thumb-min');
                };
            });
            //  tim vi tri con tro ben phai
             var ThumbMaxPosition = 0;
             $('.drag-thumb').each(function(){
                 ThumbMaxPosition = Math.max(ThumbMaxPosition,$(this).offset().left);                
                 if($(this).offset().left == ThumbMaxPosition) {
                     $('.drag-thumb').each(function(){
                         $(this).removeClass('thumb-max');
                     })
                     $(this).addClass('thumb-max');
                 };
             });
            //  alert('run');
            // style cho thanh giua
            var TrackPosition =ThumbMinPosition - $Thumb.parent().offset().left ;
            var TrackLength= ThumbMaxPosition - ThumbMinPosition;
            $('.track').css({'left':TrackPosition  + 'px','width': TrackLength +'px'});
            $('#text').html(event.pageX + ' ' + x + ' ');
        }
    );
})
