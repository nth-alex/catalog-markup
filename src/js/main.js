$(document).ready(function () {
    $('body').removeClass('preload');
    svg4everybody();

    $('.open-popup').magnificPopup({
        type: 'inline',
        removalDelay: 300,
        mainClass: 'mfp-zoom-in',
        callbacks: {
            open: function () {
                let item = $(this._lastFocusedEl).parents('.catalog-item');
                let title = item.find('.catalog-item__title').text();
                let price = item.find('.product-price').html();
                $('.product-modal__header').text(title);
                $('.product-modal__price').html(price);
            }
        }
    });

    $('select').niceSelect();
});
