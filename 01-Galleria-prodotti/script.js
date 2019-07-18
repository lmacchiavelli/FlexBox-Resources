var attr_class= [
  '2-product',
  '3-product',
  '4-product'
]

$('.order > span').click(function(){
    let id = $(this).index();
    $('.product-list').attr('class','product-list product-list__' + attr_class[id]);
    $('.order > span').attr('class','');
    $(this).addClass('select');
});
