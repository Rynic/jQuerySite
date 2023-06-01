// window.addEventListener("load", function () {
        //JavaScript
        // document.getElementsByTagName("h2")[0].style.backgroundColor = "lightgreen";
        // const items = document.getElementsByTagName("h2");
        // for (let i = 0, max = items.length; i <= max; i++) {
        //     items[i].style.backgroundColor = "lightgreen";
        // }

        // jQuery('selectors').css('樣式名稱','樣式的值')
        // $('h2').css('background-color', 'lightgreen');

        $(function () {



            // $('h2').css('background-color', 'lightgreen')
            // .css('padding','10px')
            // .css('width','500px');
            // $('h2').on('mouseenter',function(){
            //     $(this).css('backgroundColor', 'pink')
            // });
            // $('h2').on('mouseleave',function(){
            //     $(this).css('backgroundColor', 'lightgreen')
            // })

            $('h2')
                .css({ 'background-color': 'lightgreen', 'padding': '10px', 'width': '500px' })
                .on({
                    'mouseenter': function () {
                        $(this).css('backgroundColor', 'pink')
                    },
                    'mouseleave': function () {
                        $(this).css('backgroundColor', 'lightgreen')
                    }
                });


        })