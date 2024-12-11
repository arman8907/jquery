$(function(){



    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 200) {
                $('#scrollToTop').fadeIn();
            } else {
                $('#scrollToTop').fadeOut();
            }
        });

        $('#scrollToTop').click(function() {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });
    });  


    $(document).ready(function() {
        $('#img').click(function() {
            $('.overlay').fadeIn();
            $(this).css('transform', 'scale(2)');
        });

        $('#close').click(function() {
            $('.overlay').fadeOut();
            $('#img').css('transform', 'scale(1)');
        });
    });



    $('.tab-list').on('click', '.tab', function(){
        $('.tab').removeClass('active');
        $(this).addClass('active');
    
        $('.tab-content').removClass('show');
        $($(this).attr('href')).addClass('show')
    
    
    });

    var mini = document.getElementById('mini')
    var max = document.getElementById('max')
    var div1 = document.getElementById('div1')
    
    mini.onclick = function(){
        div1.style.display = 'block'
        max.src = this.src 
    }
    
    var close = document.getElementsByClassName('close')[0]
    
    close.onclick = function(){
        div1.style.display = 'none'
    }

})