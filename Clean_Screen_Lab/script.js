$(function(){
    let timer;
    const colors=["#ff0000","#800000","#d2b48c","#ffa500","#ffd700","#76ff7a","#00ced1","#4169e1","#800080","#c0c0c0 "];

    $('#container').addClass('container');

    $('#start').on('click', start);
    
    function drawCircle(index){

        const size = $('#width').val();

        const color = colors[Math.round(Math.random(0,1) * 10)]; 

        let mtop = 'auto';
        let left = 'auto';

        let height = window.innerHeight;
        let width = window.innerWidth;

        if(height > 820){
            height = height - (height - 830);
            width = width - (width - 1730);
        } else {
            height = height - (height - 830) - height/6;
            width = width - (width - 1730) - width/4;
        }

        if(index % 4 === 0){
            left = width/2 - (6 * index) + 30 + 'px'; 
        }
        else if (index % 4 === 1){
            left = width/2 + (6 * index) - 30 + 'px';
        }
        else if (index % 4 === 2){
            mtop = height/2 - (6 * index) + 20 + 'px'; 
        }
        else{
            mtop = height/2 + (6 * index) - 20 + 'px';
        }

        const newElement = $('<div>', {"id" : "circle", "class": "circle", "css": {
                                                                            'min-height': size + 'px',
                                                                            'min-width': size + 'px',
                                                                            'background-color' : color,
                                                                            'top': mtop,
                                                                            'left': left,
                                        }}).on("click", clickHandler);

        return newElement;

    }

    function start(){
        const total = parseInt($('#total').val());
        let elements = [];
        for(let i = 0; i<total; i++){
            elements.push(drawCircle(i));
        }

        $('#container').append(elements);

        const rate = $('#rate').val();

        timer = setInterval(() => {
            
            const growth = parseInt($('#amount').val());
            const size = parseInt($('div').find('.circle').css('height'));

            $('div').find('.circle')
                    .css({
                        'min-height': size + growth + 'px',
                        'min-width': size + growth + 'px',
                    });
        }, rate);
    }
    function clickHandler(){
        $(this).hide();
    }
})
