// 购物车显示
{
    let l = $("#shop_list")
    $("#headerTop_shop").hover(
        function(){
            l.css("display","block");
        },
        function(){
            l.css("display","none");
        }
    )
}
