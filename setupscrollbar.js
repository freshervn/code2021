// bắt đầu chạy jquery khi các tệp js đã dc tải 
$(document).ready(
    function () {
        // đặt chiều dài bên trong dài hơn bên ngoài
        $('.scrolling-bar').each(
            function (i) {
                // thêm class để phân biêt các khối trong cùng 1 trang
                $(this).addClass('scrolling-bar-' + (i + 1));
                // css cho thanh kéo
                $(this)
                    .find('.scrolling-setting')
                    .css('width',
                        $(this).find('.scrolling-setting').attr('data-level-scrol') * 100 + "%");
                // không css inline với pseudo được nên -> tao style trước class rồi viết vào trong style

                // làm 2 đầu con lăn tròn
                let scrollingHeight = $(this).height();
                $(this).prepend("<style>.scrolling-bar.scrolling-bar-" + (i + 1) + "::-webkit-scrollbar-track{border-radius:" + scrollingHeight / 2 + "px /50%}</style>");
                // viết style cho thanh kéo        
                $(this).prepend("<style>.scrolling-bar.scrolling-bar-" + (i + 1) + "::-webkit-scrollbar{height:" + scrollingHeight + "}</style>");
                // viết style cho con lăn
                $(this).prepend("<style>.scrolling-bar.scrolling-bar-" + (i + 1) + "::-webkit-scrollbar-thumb{border-radius:" + scrollingHeight / 2 + "px /50%}</style>");
            });
        $('.scrolling-bar').scroll(
            // taọ nội dung trắng cho khối để có thể  kéo                   
            function () {
                let ScrollBarLeft = $(this).scrollLeft();
                let scrollBarWidth = $(this).find('.scrolling-setting').width();
                // chieu dai cua thanh ben trong
                let scrollingBarLevel = 1 + Number($(this).find('.scrolling-setting').attr('data-level-scrol'));
                // so muc chia
                $(this).find('.scroll-position').html(
                    Math.round(ScrollBarLeft / scrollBarWidth * scrollingBarLevel)
                );
            }
        )
        // để thích ứng với nhiều thanh kéo ngang trong cùng 1 page 
        // mỗi thanh ngang sẽ có 1 class name khác nhau và class scrolling-bar là chung giống như owl          
    }
);