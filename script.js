$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown()
    })

    $('btn-cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()
        const newImgAddress = $('address-new-img').val
        const newItem = $('<li style="display:none"></li>')
        $(`<img src='${newImgAddress})'>`).appendTo(newItem)
        $(`
        <div class='overlay-img-link'>
            <a href='${newImgAddress}' target='_blank' title='Ver imagem em tamanho real'>
                Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(newItem)
        $(newItem).appendTo('ul')
        $(newItem).fadeIn(5000)
        $('address-new-img').val('')
    })
})