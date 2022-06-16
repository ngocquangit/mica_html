$(function () {
  let container = $('#pagination');
  let dataTemp = {
    title: "ブライダルフェアのご案内1月8(土)、9(日)、10(月)",
    imgsrc: "/assets/img/news/event-img-1.jpg",
    date: "2022.01.03"
  }
  
  let dataSource = [];
  for(let i = 0 ; i < 100 ; i++) {
    dataSource.push(dataTemp)
  }
  container.pagination({
      dataSource: dataSource,
      pageSize: 12,
      nextText: "次へ >",
      prevText: "< 前へ",
      autoHidePrevious: true,
      autoHideNext: true,
      callback: function (data, pagination) {
          var dataHtml = '<div class="infomation_events">';
          $.each(data, function (index, item) {
              dataHtml += '<div class="infomation_event"><div class="infomation_event_img"><img src=' + item.imgsrc + ' alt="" /></div><div class="infomation_event_date">' + item.date + '</div><div class="infomation_event_des">' + item.title + '</div></div>'
          });
          dataHtml += '</div>';
          $("#data-news").html(dataHtml);
      }
  })
}) 