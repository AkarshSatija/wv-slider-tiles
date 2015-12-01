jQuery(document).ready(function ($) {
  $('.cb-tabs ul li').eq(0).addClass('current');
  $('.cb-tabs .cb-panes .cb-tab-content').hide();
  $('.cb-tabs .cb-panes .cb-tab-content').eq(0).show();
  var act_li;
  $('.cb-tabs ul li').click(function (e) {
    e.preventDefault();
    act_li = $(this).index();
    $('.cb-tabs ul li').removeClass('current');
    $(this).addClass('current');
    $('.cb-tabs .cb-panes .cb-tab-content').hide();
    $('.cb-tabs .cb-panes .cb-tab-content').eq(act_li).show();
  });

  //for slider
  var wvtiles_body, wvtiles;
  var captions = "";
  var create_slider = function (afterSelector, dataArray) {
    wvtiles = [];
    //debugger;
    $(dataArray).each(function (i, data) {
      img = $(data.img);
      //caps[i]  = 'caption test '+ (i+1);
      if(data.caption == '' || data.caption == undefined) {
        wvtiles += '<li><img src="' + img.attr("src") + '"></li>';
      }
      else {
        wvtiles += '<li><img src="' + img.attr("src") + '"><p class="slider_caption">' + data.caption + '</p></li>';
      }

    });

    wvtiles_body = '<div class="container the-slider"><div class="slider demo" id=' + Date.now() + '><img class="loader" src="wv_tiles_files/slider/loading_spinner.gif"><ul>' + wvtiles + '</ul></div></div>';

    $(wvtiles_body).insertAfter(afterSelector);
  };

  /*$('.tiled-gallery').each(function (index, value) {
    //debugger;
    imgs = $(this).find('.tiled-gallery-item a > img');
    create_slider(this, imgs, ['caption 1st here', '', 'caption 3rd here', 'caption 4th here', 'caption 5th here', 'caption 6th here'])
  });*/

  $('.master-slider-parent').each(function (index, value) {
    debugger;
    var data=[];
    $(this).find('.ms-slide').each(function (ind) {
      console.log("img", $(this).find('img'));
      console.log("info", $(this).find('.ms-info')[0]);
      data[ind] = {};
      data[ind].img = $(this).find('img')[0];
      data[ind].caption = $(this).find('.ms-info')[0];
      
    });
    create_slider(this, data);

    /*imgs = $(this).find('.ms-slide > img');
    create_slider(this, imgs, ['caption arr 2 1st here', '', 'caption arr 2 3rd here', 'caption arr 2 4th here', 'caption arr 2 5th here', 'caption arr 2 6th here'])*/
  });

/*
  $(this).find('.ms-slide').each(function (index) {
    console.log("img", $(this).find('img'));
    console.log("info", $(this).find('.ms-info')[0]);
    data[index] = {};
    data[index].img = $(this).find('img')[0];
    data[index].caption = $(this).find('.ms-info')[0];
  })*/



  $(window).load(function () {
    $('.the-slider .slider ul').show();
    $('.the-slider .slider .loader').hide();
    $('.demo').jcider();
  });
});
