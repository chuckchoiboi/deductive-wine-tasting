// Scroll function
function goToByScroll(id) {
  $('html,body').animate(
    {
      scrollTop: $('#' + id).offset().top,
    },
    'slow'
  );
}

// Next & Previous Button

$('#next-button button').on('click', function () {
  const nextSiblingElement = $(this).parent().parent().next();

  //   if ($(this).parent().parent().hasClass('instruction')) {
  if ($(this).text() === 'Next' && nextSiblingElement.hasClass('instruction')) {
    console.log('next');
    $(this).parent().hide();
    nextSiblingElement.css('opacity', 1);
    goToByScroll(nextSiblingElement.attr('id'));
  } else if (
    $(this).text() === 'Previous' &&
    $(this).parent().parent().hasClass('instruction')
  ) {
    $(this).parent().parent().css('opacity', 0);
    // $(`#${previousSibling} #next-button`).show();
    goToByScroll($(this).parent().parent().prev().attr('id'));
    if ($(this).parent().parent().prev().attr('id') !== 'tasting-sense') {
      $(`#${$(this).parent().parent().prev().attr('id')} #next-button`).show();
    }
  } else {
    console.log();
    const nextSibling = $(this).parent().parent().next().attr('id');
    const previousSibling = $(this).parent().parent().prev().attr('id');

    if ($(this).attr('id') === 'last-next-button') {
      const labels = $('input');
      $('.summary').css('display', 'flex');
      goToByScroll('summary');
      $('#last-next-button').parent().hide();

      // if ($(labels[152]).val() !== '') {
      //   $('#balance').append($(labels[152]).val());
      // }

      // for loop to log all checked values to summary

      for (i = 0; i < labels.length; i++) {
        if (labels[i].checked) {
          $(`#${labels[i].name}`).append(
            `<span class="label-name">${$(labels[i]).next().text()}</span>`
          );
        } else if (
          $(labels[i]).attr('id') === 'balance-input' &&
          $(labels[i]).val() !== ''
        ) {
          $(`#${labels[i].name}`).append(
            `<span class="label-name">${$(labels[i]).val()}</span>`
          );
          console.log($(labels[i]).val());
        }
      }
    } else if ($(this).text() === 'Next' && nextSibling !== undefined) {
      $(`#${nextSibling}`).collapse('show');
      $(this).parent().hide();
      goToByScroll(nextSibling);
    } else if ($(this).text() === 'Previous') {
      $(this).parent().parent().collapse('toggle');
      $(`#${previousSibling} #next-button`).show();
      goToByScroll(previousSibling);
    }
  }
});

// Wine Type on click function to show proper descriptors based on the wine type selected

$('.wine-type').on('click', function () {
  if ($('#sight-inst').css('opacity') == 0) $('#sight-inst').css('opacity', 1);
  else $('#sight-inst').css('opacity', 0);
  goToByScroll('sight-inst');

  let wineType = $(this).data('wine');
  if (wineType === 'red-wine') {
    $('.red-wine').css('display', 'block');
    $('.white-wine').css('display', 'none');
    $('.summary-red-wine').css('display', 'table-row');
    $('.summary-white-wine').css('display', 'none');
  } else if (wineType === 'white-wine') {
    $('.white-wine').css('display', 'block');
    $('.red-wine').css('display', 'none');
    $('.summary-white-wine').css('display', 'table-row');
    $('.summary-red-wine').css('display', 'none');
  }
});
