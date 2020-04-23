// // red wine text display on mouseover
// $('#red-wine').on('mouseover', function () {
//     $('#red-wine span').text('Red Wine')
// })

// $('#red-wine').on('mouseleave', function () {
//     $('#red-wine span').text('')
// })

// // white wine text display on mouseover
// $('#white-wine').on('mouseover', function () {
//     $('#white-wine span').text('White Wine')
// })

// $('#white-wine').on('mouseleave', function () {
//     $('#white-wine span').text('')
// })

// // other wine text display on mouseover
// $('#other-wine').on('mouseover', function () {
//     $('#other-wine span').text('Other Wine')
// })

// $('#other-wine').on('mouseleave', function () {
//     $('#other-wine span').text('')
// })

// Scroll function
function goToByScroll(id) {
    $('html,body').animate({
        scrollTop: $("#" + id).offset().top
    }, 'slow');
}

// Next & Previous Button

$('#other-wine-prev-button').on('click', function () {
    $('#other-wine-notice').css('display', 'none')
})

$('#next-button button').on('click', function () {

    const nextSibling = $(this).parent().parent().next().attr('id')
    const previousSibling = $(this).parent().parent().prev().attr('id')


    if ($(this).attr('id') === 'last-next-button') {

        const labels = $('input')
        $('.summary').css('display', 'flex')
        goToByScroll('summary')
        $('#last-next-button').parent().hide()

        if ($(labels[152]).val() !== '') {
            $('#balance').append($(labels[152]).val())
        }


        // for loop to log all checked values to summary

        for (i = 0; i < labels.length; i++) {
            if (labels[i].checked) {
                console.log(i)
                $(`#${labels[i].name}`).append($(labels[i]).next().text())
            }
        }

    } else if ($(this).text() === 'Next' && nextSibling !== undefined) {

        $(`#${nextSibling}`).collapse('show')
        $(this).parent().hide()
        goToByScroll(nextSibling)

    } else if ($(this).text() === 'Previous') {

        $(this).parent().parent().collapse('toggle')
        $(`#${previousSibling} #next-button`).show()
        goToByScroll(previousSibling)

    }

}
)

// Wine Type on click function to show proper descriptors based on the wine type selected
$('.wine-type').on('click', function () {
    // if ($(this).data('wine') === 'other-wine') {
    // }
    let wineType = $(this).data('wine')
    if (wineType === 'other-wine') {
        $('#other-wine-notice').css('display', 'block')
        goToByScroll('other-wine-notice')
    } else if (wineType === 'red-wine') {
        $('.red-wine').css('display', 'block')
        $('.white-wine').css('display', 'none')
        $('#sight-row1').collapse('show')
        goToByScroll('sight-row1')
    } else if (wineType === 'white-wine') {
        $('.white-wine').css('display', 'block')
        $('.red-wine').css('display', 'none')
        $('#sight-row1').collapse('show')
        goToByScroll('sight-row1')
    }
})

