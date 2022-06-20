
function getDetailWithLink(link,data) {
  let array= link.split("id=");
  let id= array[array.length-1]
  for (const item in data) {
    if(data[item].id == id)
    {
      return data[item];
    }
  }
}

// DATA NEWS PAGE --->

$(function () {
  let container = $('#pagination');
  let dataTemp = {
    title: "ブライダルフェアのご案内1月8(土)、9(日)、10(月)",
    imgsrc: "/assets/img/news/event-img-1.jpg",
    date: "2022.01.03"
  }
  
  let dataSource = [];
  for(let i = 0 ; i < 100 ; i++) {
    id = parseInt(Math.random() * 100)
    dataPush = {...dataTemp,id: id}
    dataSource.push(dataPush)
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
              dataHtml += '<a href="/news-detail?id='+item.id+'" class="infomation_event"><div class="infomation_event_img"><img src=' + item.imgsrc + ' alt="" /></div><div class="infomation_event_date">' + item.date + '</div><div class="infomation_event_des">' + item.title + '</div></a>'
          });
          dataHtml += '</div>';
          $("#data-news").html(dataHtml);
      }
  })
}) 
dataNewsDetail = [
  {
    id:'12',
    title: '東京都民限定スペシャルパ\nッケージを販売開始！',
    imgsrc: "/assets/img/newsdetail/banner.png",
    date: "2022.01.03",
    desc: `「もっと楽しもう！TokyoTokyo」（略称：もっとTokyo/東京都民割）とは、都民が都内を旅行する場合の旅行代金を補助する観光需要喚起策です。\n実施期間は、2022年6月10日から7月31日まで（8月1日チェックアウト）、予約は6月10日正午以降順次開始します。期間中でも、事業者毎に配分された予算に達し次第、
    終了します。8月以降については、GoToトラベルや感染状況を見ながら判断する方針です。\n
    割引内容は、キャンペーンに参加する旅行会社・旅行予約サイト等が販売する旅行を対象に、1人1泊につき6,000円以上で5,000円割引、日帰り旅行商品は1人1回につき3,000円以上で2,500円を割引します。\n
    1回の旅行で5泊まで対象、利用回数に制限はありません。\n
    子供上乗せ割引があります。18歳に達する日以降の最初の3/31までの子供については、1,000円の割引を上乗せします。1人1泊につき6,000円以上で6,000円割引を受けれるため、0円での宿泊が可能です。子どもだけのグループも対象です。\n
    割引を受けるには、免許証等の本人確認書類に加え、ワクチン3回接種済証または陰性結果証明の提示が必要です。\n
    予約方法は、キャンペーンに参画するオンライン予約サイトや旅行会社、宿泊事業者が販売する「もっとTokyo」対象商品を予約します。（後述）\n
    事業規模は、前回実施時分の残予算（約33万泊分）と合わせて約100万泊分です。このうち、第1弾（6/10〜7/31）には約25万泊分を準備します。\n
    これまで小池知事は、GoToトラベルに合わせて再開する考えを示していましたが、ワクチン3回目接種の後押しと宿泊事業者支援の観点から総合的に考え、
    早期再開への判断を下しました。ブロック割については、「感染状況を見ながら判断する」としています。\n
    「もっとTokyo」単体でも最大83%割引のため、争奪戦となることが予想されます。当ページで、販売情報を随時更新します。`
  },
  {
    id:'13',
    title: '東京都民限定スペシャルパ\nッケージを販売開始！1',
    imgsrc: "/assets/img/newsdetail/banner.png",
    date: "2022.01.03",
    desc: `「もっと楽しもう！TokyoTokyo」（略称：もっとTokyo/東京都民割）とは、都民が都内を旅行する場合の旅行代金を補助する観光需要喚起策です。\n実施期間は、2022年6月10日から7月31日まで（8月1日チェックアウト）、予約は6月10日正午以降順次開始します。期間中でも、事業者毎に配分された予算に達し次第、
    終了します。8月以降については、GoToトラベルや感染状況を見ながら判断する方針です。\n
    割引内容は、キャンペーンに参加する旅行会社・旅行予約サイト等が販売する旅行を対象に、1人1泊につき6,000円以上で5,000円割引、日帰り旅行商品は1人1回につき3,000円以上で2,500円を割引します。\n
    1回の旅行で5泊まで対象、利用回数に制限はありません。\n
    子供上乗せ割引があります。18歳に達する日以降の最初の3/31までの子供については、1,000円の割引を上乗せします。1人1泊につき6,000円以上で6,000円割引を受けれるため、0円での宿泊が可能です。子どもだけのグループも対象です。\n
    割引を受けるには、免許証等の本人確認書類に加え、ワクチン3回接種済証または陰性結果証明の提示が必要です。\n
    予約方法は、キャンペーンに参画するオンライン予約サイトや旅行会社、宿泊事業者が販売する「もっとTokyo」対象商品を予約します。（後述）\n
    事業規模は、前回実施時分の残予算（約33万泊分）と合わせて約100万泊分です。このうち、第1弾（6/10〜7/31）には約25万泊分を準備します。\n
    これまで小池知事は、GoToトラベルに合わせて再開する考えを示していましたが、ワクチン3回目接種の後押しと宿泊事業者支援の観点から総合的に考え、
    早期再開への判断を下しました。ブロック割については、「感染状況を見ながら判断する」としています。\n
    「もっとTokyo」単体でも最大83%割引のため、争奪戦となることが予想されます。当ページで、販売情報を随時更新します。`
  },
  {
    id:'14',
    title: '東京都民限定スペシャルパ\nッケージを販売開始！2',
    imgsrc: "/assets/img/newsdetail/banner.png",
    date: "2022.01.03",
    desc: `「もっと楽しもう！TokyoTokyo」（略称：もっとTokyo/東京都民割）とは、都民が都内を旅行する場合の旅行代金を補助する観光需要喚起策です。\n実施期間は、2022年6月10日から7月31日まで（8月1日チェックアウト）、予約は6月10日正午以降順次開始します。期間中でも、事業者毎に配分された予算に達し次第、
    終了します。8月以降については、GoToトラベルや感染状況を見ながら判断する方針です。\n
    割引内容は、キャンペーンに参加する旅行会社・旅行予約サイト等が販売する旅行を対象に、1人1泊につき6,000円以上で5,000円割引、日帰り旅行商品は1人1回につき3,000円以上で2,500円を割引します。\n
    1回の旅行で5泊まで対象、利用回数に制限はありません。\n
    子供上乗せ割引があります。18歳に達する日以降の最初の3/31までの子供については、1,000円の割引を上乗せします。1人1泊につき6,000円以上で6,000円割引を受けれるため、0円での宿泊が可能です。子どもだけのグループも対象です。\n
    割引を受けるには、免許証等の本人確認書類に加え、ワクチン3回接種済証または陰性結果証明の提示が必要です。\n
    予約方法は、キャンペーンに参画するオンライン予約サイトや旅行会社、宿泊事業者が販売する「もっとTokyo」対象商品を予約します。（後述）\n
    事業規模は、前回実施時分の残予算（約33万泊分）と合わせて約100万泊分です。このうち、第1弾（6/10〜7/31）には約25万泊分を準備します。\n
    これまで小池知事は、GoToトラベルに合わせて再開する考えを示していましたが、ワクチン3回目接種の後押しと宿泊事業者支援の観点から総合的に考え、
    早期再開への判断を下しました。ブロック割については、「感染状況を見ながら判断する」としています。\n
    「もっとTokyo」単体でも最大83%割引のため、争奪戦となることが予想されます。当ページで、販売情報を随時更新します。`
  },
  {
    id:'15',
    title: '東京都民限定スペシャルパ\nッケージを販売開始！3',
    imgsrc: "/assets/img/newsdetail/banner.png",
    date: "2022.01.03",
    desc: `「もっと楽しもう！TokyoTokyo」（略称：もっとTokyo/東京都民割）とは、都民が都内を旅行する場合の旅行代金を補助する観光需要喚起策です。\n実施期間は、2022年6月10日から7月31日まで（8月1日チェックアウト）、予約は6月10日正午以降順次開始します。期間中でも、事業者毎に配分された予算に達し次第、
    終了します。8月以降については、GoToトラベルや感染状況を見ながら判断する方針です。\n
    割引内容は、キャンペーンに参加する旅行会社・旅行予約サイト等が販売する旅行を対象に、1人1泊につき6,000円以上で5,000円割引、日帰り旅行商品は1人1回につき3,000円以上で2,500円を割引します。\n
    1回の旅行で5泊まで対象、利用回数に制限はありません。\n
    子供上乗せ割引があります。18歳に達する日以降の最初の3/31までの子供については、1,000円の割引を上乗せします。1人1泊につき6,000円以上で6,000円割引を受けれるため、0円での宿泊が可能です。子どもだけのグループも対象です。\n
    割引を受けるには、免許証等の本人確認書類に加え、ワクチン3回接種済証または陰性結果証明の提示が必要です。\n
    予約方法は、キャンペーンに参画するオンライン予約サイトや旅行会社、宿泊事業者が販売する「もっとTokyo」対象商品を予約します。（後述）\n
    事業規模は、前回実施時分の残予算（約33万泊分）と合わせて約100万泊分です。このうち、第1弾（6/10〜7/31）には約25万泊分を準備します。\n
    これまで小池知事は、GoToトラベルに合わせて再開する考えを示していましたが、ワクチン3回目接種の後押しと宿泊事業者支援の観点から総合的に考え、
    早期再開への判断を下しました。ブロック割については、「感染状況を見ながら判断する」としています。\n
    「もっとTokyo」単体でも最大83%割引のため、争奪戦となることが予想されます。当ページで、販売情報を随時更新します。`
  },
  {
    id:'16',
    title: '東京都民限定スペシャルパ\nッケージを販売開始！4',
    imgsrc: "/assets/img/newsdetail/banner.png",
    date: "2022.01.03",
    desc: `「もっと楽しもう！TokyoTokyo」（略称：もっとTokyo/東京都民割）とは、都民が都内を旅行する場合の旅行代金を補助する観光需要喚起策です。\n実施期間は、2022年6月10日から7月31日まで（8月1日チェックアウト）、予約は6月10日正午以降順次開始します。期間中でも、事業者毎に配分された予算に達し次第、
    終了します。8月以降については、GoToトラベルや感染状況を見ながら判断する方針です。\n
    割引内容は、キャンペーンに参加する旅行会社・旅行予約サイト等が販売する旅行を対象に、1人1泊につき6,000円以上で5,000円割引、日帰り旅行商品は1人1回につき3,000円以上で2,500円を割引します。\n
    1回の旅行で5泊まで対象、利用回数に制限はありません。\n
    子供上乗せ割引があります。18歳に達する日以降の最初の3/31までの子供については、1,000円の割引を上乗せします。1人1泊につき6,000円以上で6,000円割引を受けれるため、0円での宿泊が可能です。子どもだけのグループも対象です。\n
    割引を受けるには、免許証等の本人確認書類に加え、ワクチン3回接種済証または陰性結果証明の提示が必要です。\n
    予約方法は、キャンペーンに参画するオンライン予約サイトや旅行会社、宿泊事業者が販売する「もっとTokyo」対象商品を予約します。（後述）\n
    事業規模は、前回実施時分の残予算（約33万泊分）と合わせて約100万泊分です。このうち、第1弾（6/10〜7/31）には約25万泊分を準備します。\n
    これまで小池知事は、GoToトラベルに合わせて再開する考えを示していましたが、ワクチン3回目接種の後押しと宿泊事業者支援の観点から総合的に考え、
    早期再開への判断を下しました。ブロック割については、「感染状況を見ながら判断する」としています。\n
    「もっとTokyo」単体でも最大83%割引のため、争奪戦となることが予想されます。当ページで、販売情報を随時更新します。`
  },
  {
    id:'17',
    title: '東京都民限定スペシャルパ\nッケージを販売開始！5',
    imgsrc: "/assets/img/newsdetail/banner.png",
    date: "2022.01.03",
    desc: `「もっと楽しもう！TokyoTokyo」（略称：もっとTokyo/東京都民割）とは、都民が都内を旅行する場合の旅行代金を補助する観光需要喚起策です。\n実施期間は、2022年6月10日から7月31日まで（8月1日チェックアウト）、予約は6月10日正午以降順次開始します。期間中でも、事業者毎に配分された予算に達し次第、
    終了します。8月以降については、GoToトラベルや感染状況を見ながら判断する方針です。\n
    割引内容は、キャンペーンに参加する旅行会社・旅行予約サイト等が販売する旅行を対象に、1人1泊につき6,000円以上で5,000円割引、日帰り旅行商品は1人1回につき3,000円以上で2,500円を割引します。\n
    1回の旅行で5泊まで対象、利用回数に制限はありません。\n
    子供上乗せ割引があります。18歳に達する日以降の最初の3/31までの子供については、1,000円の割引を上乗せします。1人1泊につき6,000円以上で6,000円割引を受けれるため、0円での宿泊が可能です。子どもだけのグループも対象です。\n
    割引を受けるには、免許証等の本人確認書類に加え、ワクチン3回接種済証または陰性結果証明の提示が必要です。\n
    予約方法は、キャンペーンに参画するオンライン予約サイトや旅行会社、宿泊事業者が販売する「もっとTokyo」対象商品を予約します。（後述）\n
    事業規模は、前回実施時分の残予算（約33万泊分）と合わせて約100万泊分です。このうち、第1弾（6/10〜7/31）には約25万泊分を準備します。\n
    これまで小池知事は、GoToトラベルに合わせて再開する考えを示していましたが、ワクチン3回目接種の後押しと宿泊事業者支援の観点から総合的に考え、
    早期再開への判断を下しました。ブロック割については、「感染状況を見ながら判断する」としています。\n
    「もっとTokyo」単体でも最大83%割引のため、争奪戦となることが予想されます。当ページで、販売情報を随時更新します。`
  },
]
let dataDetail 
$(function () {
  if($('#newsdetailData').is(":visible")){
    dataDetail = getDetailWithLink(window.location.href,dataNewsDetail)

    let newDetailHtml = `
      <div class="banner-block flex center__align relative banner-detail"> 
        <div class="banner__txt">
          <div class="container_child"> 
            <div class="txt_date">`+dataDetail.date+`</div>
            <div class="txt_title">`+beforeText(dataDetail.title)+`</div>
          </div>
        </div>
        <div class="img_wrap"> <img src="`+dataDetail.imgsrc+`"></div>
        <div class="overlay"></div>
      </div>
      <div class="voucher"> 
        <div class="voucher_content">
          <div class="voucher_des">
            `+beforeText(dataDetail.desc)+`
          </div>
        </div>
      </div> `
    $("#newsdetailData").html(newDetailHtml);
  }
  
}) 
// DATA NEWS PAGE ---/>

// <---- DATA PLAN CONTENT ---->
const dataPlan = [
  {
    image: "../assets/img/top/pc_slide_top_img01.jpg",
    heading: "[極上夜景プラン] 16階以上、\n東京スカイツリー®側\nお部屋確約プラン",
    period_from: "2022年04月01日",
    period_to: "2022年06月30日",
    amount: "45,100~",
    recommended: "人気",
    breakfast: "素泊まり"
  },
  {
    image: "../assets/img/top/pc_slide_top_img01.jpg",
    heading: "[極上夜景プラン] 16階以上、\n東京スカイツリー®側\nお部屋確約プラン",
    period_from: "2022年04月01日",
    period_to: "2022年06月30日",
    amount: "45,100~",
    recommended: "おすすめ",
    breakfast: "すべて"
  },
  {
    image: "../assets/img/top/pc_slide_top_img01.jpg",
    heading: "[極上夜景プラン] 16階以上、\n東京スカイツリー®側\nお部屋確約プラン",
    period_from: "2022年04月01日",
    period_to: "2022年06月30日",
    amount: "45,100~",
    recommended: "おすすめ",
    breakfast: "すべて"
  },
  {
    image: "../assets/img/top/pc_slide_top_img01.jpg",
    heading: "[極上夜景プラン] 16階以上、\n東京スカイツリー®側\nお部屋確約プラン",
    period_from: "2022年04月01日",
    period_to: "2022年06月30日",
    amount: "45,100~",
    recommended: "おすすめ",
    breakfast: "すべて"
  },
  {
    image: "../assets/img/top/pc_slide_top_img01.jpg",
    heading: "[極上夜景プラン] 16階以上、\n東京スカイツリー®側\nお部屋確約プラン",
    period_from: "2022年04月01日",
    period_to: "2022年06月30日",
    amount: "45,100~",
    recommended: "おすすめ",
    breakfast: "すべて"
  },
];
let tempDataPlan = [];
// active recommended btn 
$("#recommended .plan_button_item").click(function (e) {
  var id = $(this).attr("id");
  var idxRCM = $(e.target).text();
  var idxBRF = $('#breakfast .plan_button_item.active').text()
  forEachPlanItem(idxRCM,idxBRF)
  $("#recommended  .plan_button_item").removeClass("active");
  $(`#recommended  #${id}`).addClass("active");
});
// active breakfast btn 
$("#breakfast .plan_button_item").click(function (e) {
  var id = $(this).attr("id");
  var idxBRF = $(e.target).text();
  var idxRCM = $('#recommended .plan_button_item.active').text()
  forEachPlanItem(idxRCM,idxBRF)
  $("#breakfast  .plan_button_item").removeClass("active");
  $(`#breakfast  #${id}`).addClass("active");
});
// sort data by active recommended variable , breakfast variable
function forEachPlanItem(idxRCM,idxBRF) {
  tempDataPlan = [];
  dataPlan.forEach(element => {
    if(element.recommended == idxRCM && element.breakfast == idxBRF) {
      tempDataPlan.push(element)
    }
  });
  showDataPlan(tempDataPlan)
}
// show data
function showDataPlan (data) {
  var dataHtml = '<div class="swiper-wrapper slide__plan_wrap flex">';
  $.each(data, function (index, item) {
      dataHtml += '<div class="slide_plan_box swiper-slide relative"><div class="img_wrap"><img src="' + item.image +'" alt="" /></div><div class="slide_txt_wrap flex col"><div class="slide_txt_title">' + item.heading + '<table class="table_txt flex"><tr class="flex"><td class="table_txt_left">期間：</td><td class="table_txt_right">' + item.period_from + '〜' + item.period_to + '</td></tr><tr class="flex"><td class="table_txt_left">料金：</td><td class="table_txt_right">' + item.amount + '</td></tr><tr><td class="table_txt_left">お料理：</td><td class="table_txt_right">' + item.recommended + '、' + item.breakfast + '</td></tr></table></div><a class="btn_detail_plan sp_flex" href="#">詳細をみる</a></div></div>'
  });
  dataHtml += '</div>';
  $(".slide__plan_swiper").html(dataHtml);
  var swiper = new Swiper(".slide__plan_swiper", {
    centeredSlides: true,
    breakpoints: {
      768: {
        slidesPerView: "auto"
      },
      769: {
        slidesPerView: 1.6,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next-plan",
          prevEl: ".swiper-button-prev-plan",
        },
      },
    },
  });
}
// first show data 
$(document).ready(function () {
  var idxRCM = $('#recommended .plan_button_item.active').text()
  var idxBRF = $('#breakfast .plan_button_item.active').text()
  forEachPlanItem(idxRCM,idxBRF)
});
// <---- PLAN CONTENT ----/>

// <---- DATA ROOM-DETAIL PAGE ---->
const dataRoomDetail = [
  {
    "id":4,
    "title_en":"Double Roomsádasasd",
    "title_ja":"ダブルルーム",
    "body":"こちらのエグゼクティブツインルームは26.1㎡の広さをご用意\nしており、おふたりのちょっと贅沢な東京でのご宿泊をお楽し\nみいただけます。最大3名様までご利用頂けます。",
    "is_internet_access":1,
    "is_refrigerator":1,
    "is_towels":1,
    "is_bathrobe":1,
    "is_espresso_maker":1,
    "is_tv_set":1,
    "is_hairdryer":1,
    "is_hanger":1,
    "is_shampoos":1,
    "is_toothbrush":0,
    "is_soap":0,
    "is_body_towel":0,
    "is_cotton_swab":0,
    "is_cosmetics":0,
    "is_sewing_kit":0,
    "is_shaving":0,
    "is_hairbrush":0,
    "room_information": [
      {
        "image_slide": {
          0:"../assets/img/top/pc_slide_top_img02.jpg",
          1:"../assets/img/top/pc_slide_top_img01.jpg",
          2:"../assets/img/top/pc_slide_top_img03.jpg",
          3:"../assets/img/top/pc_slide_top_img01.jpg",
          4:"../assets/img/top/pc_slide_top_img01.jpg",
          5:"../assets/img/top/pc_slide_top_img01.jpg",
          6:"../assets/img/top/pc_slide_top_img01.jpg",
          7:"../assets/img/top/pc_slide_top_img01.jpg",
        },
        "name_ja":"エグゼクティブツインルーム",
        "breadth":1,
        "capacity":"1~3",
        "body":"最大3名までご利用いただける、こちらの客室では、\nスタンダードとデラックスの2種類からお選びいただけます。",
        "name_en":"STANDARD TRIPPLE",
        "descriptive":null,
        "reservation_engine_link":"#",
        "information_material": [
          {
            "heading": "営業時間",
            "type": 1,
            "descriptive": "03-1234-5678（10:00～17:00）",
            "button_name": "",
            "button_link": "",
            "pdf_descriptive": "",
            "pdf_link": ""
          },
          {
            "heading": "営業時間",
            "type": 2,
            "descriptive": "",
            "button_name": "link",
            "button_link": "#",
            "pdf_descriptive": "",
            "pdf_link": ""
          },
          {
            "heading": "営業時間",
            "type": 3,
            "descriptive": "",
            "button_name": "",
            "button_link": "",
            "pdf_descriptive": "file.pdf",
            "pdf_link": "#"
          }
        ]
      },
      {
        "image_slide": {
          0:"../assets/img/top/pc_slide_top_img01.jpg",
          1:"../assets/img/top/pc_slide_top_img02.jpg",
          2:"../assets/img/top/pc_slide_top_img03.jpg",
          3:"../assets/img/top/pc_slide_top_img01.jpg",
          4:"../assets/img/top/pc_slide_top_img01.jpg",
          5:"../assets/img/top/pc_slide_top_img01.jpg",
          6:"../assets/img/top/pc_slide_top_img01.jpg",
          7:"../assets/img/top/pc_slide_top_img01.jpg",
        },
        "name_ja":"エグゼクティブツインルーム21321312",
        "breadth":1,
        "capacity":"1~3",
        "body":"最大3名までご利用いただける、こちらの客室では、\nスタンダードとデラックスの2種類からお選びいただけます。213212",
        "name_en":"STANDARD TRIPPLE",
        "descriptive":null,
        "reservation_engine_link":"#",
        "information_material": [
          {
            "heading": "営業時間12",
            "type": 1,
            "descriptive": "03-1234-5678（10:00～17:00）",
            "button_name": "",
            "button_link": "",
            "pdf_descriptive": "",
            "pdf_link": ""
          },
          {
            "heading": "営業時間32",
            "type": 2,
            "descriptive": "",
            "button_name": "link",
            "button_link": "#",
            "pdf_descriptive": "",
            "pdf_link": ""
          },
          {
            "heading": "営業時間31",
            "type": 1,
            "descriptive": "",
            "button_name": "",
            "button_link": "",
            "pdf_descriptive": "file.pdf",
            "pdf_link": "#"
          }
        ]
      },
    ]
  },
  {
    "id":5,
    "title_en":"Double Room5",
    "title_ja":"ダブルルーム",
    "body":"こちらのエグゼクティブツインルームは26.1㎡の広さをご用意\nしており、おふたりのちょっと贅沢な東京でのご宿泊をお楽し\nみいただけます。最大3名様までご利用頂けます。",
    "is_internet_access":1,
    "is_refrigerator":1,
    "is_towels":1,
    "is_bathrobe":1,
    "is_espresso_maker":1,
    "is_tv_set":1,
    "is_hairdryer":1,
    "is_hanger":1,
    "is_shampoos":1,
    "is_toothbrush":0,
    "is_soap":0,
    "is_body_towel":0,
    "is_cotton_swab":0,
    "is_cosmetics":0,
    "is_sewing_kit":0,
    "is_shaving":0,
    "is_hairbrush":0,
    "room_information": [
      {
        "image_slide": {
          0:"../assets/img/top/pc_slide_top_img02.jpg",
          1:"../assets/img/top/pc_slide_top_img01.jpg",
          2:"../assets/img/top/pc_slide_top_img03.jpg",
          3:"../assets/img/top/pc_slide_top_img01.jpg",
          4:"../assets/img/top/pc_slide_top_img01.jpg",
          5:"../assets/img/top/pc_slide_top_img01.jpg",
          6:"../assets/img/top/pc_slide_top_img01.jpg",
          7:"../assets/img/top/pc_slide_top_img01.jpg",
        },
        "name_ja":"エグゼクティブツインルーム",
        "breadth":1,
        "capacity":"1~3",
        "body":"最大3名までご利用いただける、こちらの客室では、\nスタンダードとデラックスの2種類からお選びいただけます。",
        "name_en":"STANDARD TRIPPLE",
        "descriptive":null,
        "reservation_engine_link":"#",
        "information_material": [
          {
            "heading": "営業時間",
            "type": 1,
            "descriptive": "03-1234-5678（10:00～17:00）",
            "button_name": "",
            "button_link": "",
            "pdf_descriptive": "",
            "pdf_link": ""
          },
          {
            "heading": "営業時間",
            "type": 2,
            "descriptive": "",
            "button_name": "link",
            "button_link": "#",
            "pdf_descriptive": "",
            "pdf_link": ""
          },
          {
            "heading": "営業時間",
            "type": 3,
            "descriptive": "",
            "button_name": "",
            "button_link": "",
            "pdf_descriptive": "file.pdf",
            "pdf_link": "#"
          }
        ]
      },
      {
        "image_slide": {
          0:"../assets/img/top/pc_slide_top_img01.jpg",
          1:"../assets/img/top/pc_slide_top_img02.jpg",
          2:"../assets/img/top/pc_slide_top_img03.jpg",
          3:"../assets/img/top/pc_slide_top_img01.jpg",
          4:"../assets/img/top/pc_slide_top_img01.jpg",
          5:"../assets/img/top/pc_slide_top_img01.jpg",
          6:"../assets/img/top/pc_slide_top_img01.jpg",
          7:"../assets/img/top/pc_slide_top_img01.jpg",
        },
        "name_ja":"エグゼクティブツインルーム21321312",
        "breadth":1,
        "capacity":"1~3",
        "body":"最大3名までご利用いただける、こちらの客室では、\nスタンダードとデラックスの2種類からお選びいただけます。213212",
        "name_en":"STANDARD TRIPPLE",
        "descriptive":null,
        "reservation_engine_link":"#",
        "information_material": [
          {
            "heading": "営業時間12",
            "type": 1,
            "descriptive": "03-1234-5678（10:00～17:00）",
            "button_name": "",
            "button_link": "",
            "pdf_descriptive": "",
            "pdf_link": ""
          },
          {
            "heading": "営業時間32",
            "type": 2,
            "descriptive": "",
            "button_name": "link",
            "button_link": "#",
            "pdf_descriptive": "",
            "pdf_link": ""
          },
          {
            "heading": "営業時間31",
            "type": 1,
            "descriptive": "",
            "button_name": "",
            "button_link": "",
            "pdf_descriptive": "file.pdf",
            "pdf_link": "#"
          }
        ]
      },
    ]
  },
  {
    "id":6,
    "title_en":"Double Room6",
    "title_ja":"ダブルルーム",
    "body":"こちらのエグゼクティブツインルームは26.1㎡の広さをご用意\nしており、おふたりのちょっと贅沢な東京でのご宿泊をお楽し\nみいただけます。最大3名様までご利用頂けます。",
    "is_internet_access":1,
    "is_refrigerator":1,
    "is_towels":1,
    "is_bathrobe":1,
    "is_espresso_maker":1,
    "is_tv_set":1,
    "is_hairdryer":1,
    "is_hanger":1,
    "is_shampoos":1,
    "is_toothbrush":0,
    "is_soap":0,
    "is_body_towel":0,
    "is_cotton_swab":0,
    "is_cosmetics":0,
    "is_sewing_kit":0,
    "is_shaving":0,
    "is_hairbrush":0,
    "room_information": [
      {
        "image_slide": {
          0:"../assets/img/top/pc_slide_top_img02.jpg",
          1:"../assets/img/top/pc_slide_top_img01.jpg",
          2:"../assets/img/top/pc_slide_top_img03.jpg",
          3:"../assets/img/top/pc_slide_top_img01.jpg",
          4:"../assets/img/top/pc_slide_top_img01.jpg",
          5:"../assets/img/top/pc_slide_top_img01.jpg",
          6:"../assets/img/top/pc_slide_top_img01.jpg",
          7:"../assets/img/top/pc_slide_top_img01.jpg",
        },
        "name_ja":"エグゼクティブツインルーム",
        "breadth":1,
        "capacity":"1~3",
        "body":"最大3名までご利用いただける、こちらの客室では、\nスタンダードとデラックスの2種類からお選びいただけます。",
        "name_en":"STANDARD TRIPPLE",
        "descriptive":null,
        "reservation_engine_link":"#",
        "information_material": [
          {
            "heading": "営業時間",
            "type": 1,
            "descriptive": "03-1234-5678（10:00～17:00）",
            "button_name": "",
            "button_link": "",
            "pdf_descriptive": "",
            "pdf_link": ""
          },
          {
            "heading": "営業時間",
            "type": 2,
            "descriptive": "",
            "button_name": "link",
            "button_link": "#",
            "pdf_descriptive": "",
            "pdf_link": ""
          },
          {
            "heading": "営業時間",
            "type": 3,
            "descriptive": "",
            "button_name": "",
            "button_link": "",
            "pdf_descriptive": "file.pdf",
            "pdf_link": "#"
          }
        ]
      },
      {
        "image_slide": {
          0:"../assets/img/top/pc_slide_top_img01.jpg",
          1:"../assets/img/top/pc_slide_top_img02.jpg",
          2:"../assets/img/top/pc_slide_top_img03.jpg",
          3:"../assets/img/top/pc_slide_top_img01.jpg",
          4:"../assets/img/top/pc_slide_top_img01.jpg",
          5:"../assets/img/top/pc_slide_top_img01.jpg",
          6:"../assets/img/top/pc_slide_top_img01.jpg",
          7:"../assets/img/top/pc_slide_top_img01.jpg",
        },
        "name_ja":"エグゼクティブツインルーム21321312",
        "breadth":1,
        "capacity":"1~3",
        "body":"最大3名までご利用いただける、こちらの客室では、\nスタンダードとデラックスの2種類からお選びいただけます。213212",
        "name_en":"STANDARD TRIPPLE",
        "descriptive":null,
        "reservation_engine_link":"#",
        "information_material": [
          {
            "heading": "営業時間12",
            "type": 1,
            "descriptive": "03-1234-5678（10:00～17:00）",
            "button_name": "",
            "button_link": "",
            "pdf_descriptive": "",
            "pdf_link": ""
          },
          {
            "heading": "営業時間32",
            "type": 2,
            "descriptive": "",
            "button_name": "link",
            "button_link": "#",
            "pdf_descriptive": "",
            "pdf_link": ""
          },
          {
            "heading": "営業時間31",
            "type": 1,
            "descriptive": "",
            "button_name": "",
            "button_link": "",
            "pdf_descriptive": "file.pdf",
            "pdf_link": "#"
          }
        ]
      },
    ]
  },
]
function showDataRoomDetail (data) {
  let informationData = data.room_information
  // create Slide Component --->
    let imgSlideArr = [];
    for(let i = 0 ; i < informationData.length; i++ ) {
      imgSlideArr.push(informationData[i].image_slide)
    }
    let imageSlideHtml = []
    for(let i = 0; i < imgSlideArr.length; i++) {
      let tempHtml =""
      for (const index in imgSlideArr[i]) {
        tempHtml += '<div class="product_slide_box swiper-slide img_wrap"><img src="'+ imgSlideArr[i][index] + '" alt=""></div>'
      }
      imageSlideHtml.push(tempHtml)
    }
  // create Slide Component ---/>
  
  // create Infor Row Component --->
    let infoTableArr = [];
    for(let i = 0 ; i < informationData.length; i++ ) {
      infoTableArr.push(informationData[i].information_material)
    }
    let inforTableHtml = []
    for(let i = 0; i < infoTableArr.length; i++) {
      let tempHtml =""
      for (const index in infoTableArr[i]) {
      tempHtml += `
      <tr class="product_table_row">
        <td class="product_table_col product_table_left">`+infoTableArr[i][index].heading+`</td>
        <td class="product_table_col product_table_right">`
          +(infoTableArr[i][index].type == 1 ? infoTableArr[i][index].descriptive : infoTableArr[i][index].type == 2 ? '<a class="txt_link_defaul" href="'+ infoTableArr[i][index].button_link +'">'+ infoTableArr[i][index].button_name+'</a>' : `<a class="txt_link_defaul" href="`+ infoTableArr[i][index].pdf_link +`">`+ infoTableArr[i][index].pdf_descriptive+`<svg xmlns="http://www.w3.org/2000/svg" width="19.528" height="24" viewBox="0 0 19.528 24">
                    <g id="PDFアイコン" transform="translate(-47.706)">
                      <path id="Path_716" data-name="Path 716" d="M63.208,0H54.616l-.437.437L48.143,6.474l-.437.437V19.974A4.031,4.031,0,0,0,51.732,24H63.208a4.031,4.031,0,0,0,4.026-4.026V4.026A4.03,4.03,0,0,0,63.208,0Zm2.535,19.974a2.535,2.535,0,0,1-2.535,2.536H51.732A2.535,2.535,0,0,1,49.2,19.974V7.528h3.924a2.113,2.113,0,0,0,2.113-2.113V1.491h7.974a2.535,2.535,0,0,1,2.535,2.536Z" fill="#4b4b4b"></path>
                      <path id="Path_717" data-name="Path 717" d="M136.476,252.785h-1.337a.383.383,0,0,0-.407.414v3.457a.469.469,0,1,0,.935,0v-1.05a.034.034,0,0,1,.039-.038h.77a1.4,1.4,0,1,0,0-2.782Zm-.058,1.974h-.713a.034.034,0,0,1-.039-.038v-1.089a.034.034,0,0,1,.039-.038h.713a.584.584,0,1,1,0,1.165Z" transform="translate(-82.947 -240.936)" fill="#4b4b4b"></path>
                      <path id="Path_718" data-name="Path 718" d="M221.069,252.785h-1.025a.383.383,0,0,0-.407.414v3.508a.378.378,0,0,0,.407.408h1.025c.923,0,1.5-.293,1.725-1a5.382,5.382,0,0,0,0-2.33C222.566,253.078,221.992,252.785,221.069,252.785Zm.828,3.005c-.109.344-.42.49-.854.49h-.433a.034.034,0,0,1-.039-.038v-2.585a.034.034,0,0,1,.039-.038h.433c.433,0,.745.147.854.49a4.688,4.688,0,0,1,0,1.681Z" transform="translate(-163.872 -240.936)" fill="#4b4b4b"></path>
                      <path id="Path_719" data-name="Path 719" d="M310.163,252.785h-2.1a.383.383,0,0,0-.408.414v3.457a.469.469,0,1,0,.936,0v-1.235a.034.034,0,0,1,.038-.038h1.223a.4.4,0,1,0,0-.8h-1.223a.034.034,0,0,1-.038-.038v-.911a.034.034,0,0,1,.038-.038h1.534a.405.405,0,1,0,0-.808Z" transform="translate(-247.764 -240.936)" fill="#4b4b4b"></path>
                    </g>
                  </svg></a>` )+
        `</td>
      </tr>
      `
      }
      inforTableHtml.push(tempHtml)
    }
  // create Infor Row Component ---/>

  var mvContainer = '<div class="banner-block flex center__align relative"> '
  $(data).each(function (index, item) {
    mvContainer += `        
      <div class="banner__txt">
        <div class="container_child"> 
          <h1>` + item.title_en + `</h1>
          <p>` + item.title_ja + `</p>
        </div>
      </div>
      <div class="img_wrap"> <img src="/assets/img/executive/executive-mv.jpg" alt="SUITE ROOM banner"/></div>
      <div class="overlay"></div>
    `
  });
  mvContainer += '</div>';
  $("#room-banner").html(mvContainer);

  var contentRoomDetail = '<div class="product-review">'
  $(informationData).each(function (index, item) {
    contentRoomDetail += `
      <div class="slide_product_content" data-aos="fade-in"> 
        <div class="slide__product_swiper">
          <div class="swiper-wrapper slide__product_wrap flex center__align">
            `+ imageSlideHtml[index] +`
          </div>
          <div class="slide_product_pagination swiper-pagination"> </div>
          <div class="swiper-button flex"> 
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </div>
      <div class="product_infor" data-aos="fade-in">
        <div class="container_child flex col_sp"> 
          <div class="product_infor_left">
            <h3 class="product_title">`+ item.name_ja +`</h3>
            <p class="product_description">`+ beforeText(item.body) +`</p><a class="btn_search_vacancy pc_flex" href="`+ item.reservation_engine_link +`">空室検索    </a>
          </div>
          <div class="product_infor_right">
            <table class="product_table_infor"> 
            `
              +inforTableHtml[index]+
            `
            </table>
          </div><a class="btn_search_vacancy sp_flex" href="#">空室検索</a>
        </div>
      </div>
    `
  });
  contentRoomDetail += '</div>';
  $("#rooms-detail-information").html(contentRoomDetail);

  // Declare variable AMENITY icon-label --->
  var internet_access = `<div class="amenity_box"> <div class="amenity_image"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="33" height="33" viewBox="0 0 33 33"> <defs> <clipPath id="clip-path"> <rect id="Rectangle_6340" data-name="Rectangle 6340" width="33" height="33" transform="translate(-0.161 -0.161)" fill="#e0e0e0"></rect> </clipPath> </defs> <g id="Mask_Group_41" data-name="Mask Group 41" transform="translate(0.161 0.161)" clip-path="url(#clip-path)"> <g id="無料のWi-Fiのアイコン" transform="translate(0.231 4.342)"> <path id="Path_811" data-name="Path 811" d="M31.788,9.571a22.252,22.252,0,0,0-31.436,0,1.2,1.2,0,0,0,1.7,1.7,19.851,19.851,0,0,1,28.038,0,1.2,1.2,0,0,0,1.7-1.7Z" transform="translate(0 -3.07)" fill="#4b4b4b"></path> <path id="Path_812" data-name="Path 812" d="M3.524,12.3a1.2,1.2,0,1,0,1.7,1.7,13.834,13.834,0,0,1,19.542,0,1.2,1.2,0,1,0,1.7-1.7A16.237,16.237,0,0,0,3.524,12.3Z" transform="translate(1.076 -1.549)" fill="#4b4b4b"></path> <path id="Path_813" data-name="Path 813" d="M6.7,15.025a1.2,1.2,0,0,0,1.7,1.7,7.82,7.82,0,0,1,11.045,0,1.2,1.2,0,0,0,1.7-1.7A10.223,10.223,0,0,0,6.7,15.025Z" transform="translate(2.152 -0.028)" fill="#4b4b4b"></path> <path id="Path_814" data-name="Path 814" d="M9.588,18.856l3.23,3.231,3.23-3.23A4.569,4.569,0,0,0,9.588,18.856Z" transform="translate(3.252 1.831)" fill="#4b4b4b"></path> </g> </g> </svg> </div> <div class="amenity_desc">インターネットアクセス(無線)</div> </div>`
  var bathrobe = `<div class="amenity_box"> <div class="amenity_image"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="33" height="33" viewBox="0 0 33 33"> <defs> <clipPath id="clip-path"> <rect id="Rectangle_6343" data-name="Rectangle 6343" width="33" height="33" transform="translate(-0.161 -0.21)" fill="#e0e0e0"></rect> </clipPath> </defs> <g id="Mask_Group_42" data-name="Mask Group 42" transform="translate(0.161 0.21)" clip-path="url(#clip-path)"> <g id="冷蔵庫アイコン1" transform="translate(6.274 -0.111)"> <path id="Path_815" data-name="Path 815" d="M23.268,1.3A4.428,4.428,0,0,0,20.131,0H8.949A4.437,4.437,0,0,0,4.512,4.437V27.7A4.438,4.438,0,0,0,8.949,32.14H20.131A4.438,4.438,0,0,0,24.568,27.7V4.437A4.429,4.429,0,0,0,23.268,1.3ZM22.253,27.7a2.123,2.123,0,0,1-2.123,2.123H8.949A2.123,2.123,0,0,1,6.826,27.7V16.97H22.253V27.7Zm0-12.533H6.826V4.437A2.123,2.123,0,0,1,8.949,2.314H20.131a2.123,2.123,0,0,1,2.123,2.123V15.17Z" transform="translate(-4.512 0)" fill="#4b4b4b"></path> <rect id="Rectangle_6341" data-name="Rectangle 6341" width="1.028" height="3.6" transform="translate(4.821 6.985)" fill="#4b4b4b"></rect> <rect id="Rectangle_6342" data-name="Rectangle 6342" width="1.028" height="3.6" transform="translate(4.821 21.556)" fill="#4b4b4b"></rect> </g> </g> </svg> </div> <div class="amenity_desc">冷蔵庫</div> </div>`
  var refrigerator = `<div class="amenity_box"> <div class="amenity_image"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="33" height="33" viewBox="0 0 33 33"> <defs> <clipPath id="clip-path"> <rect id="Rectangle_6345" data-name="Rectangle 6345" width="33" height="33" transform="translate(-0.161 -0.298)" fill="#e0e0e0"></rect> </clipPath> </defs> <g id="Mask_Group_44" data-name="Mask Group 44" transform="translate(0.161 0.298)" clip-path="url(#clip-path)"> <g id="Yシャツの無料アイコン4" transform="translate(0.231 5.403)"> <path id="Path_817" data-name="Path 817" d="M13.233,10.077c.268,0,.485-.16.485-.358s-.217-.358-.485-.358-.485.16-.485.358S12.965,10.077,13.233,10.077Z" transform="translate(4.324 -2.011)" fill="#4b4b4b"></path> <path id="Path_818" data-name="Path 818" d="M11.135,10.925c-.268,0-.485.16-.485.358s.217.358.485.358.485-.16.485-.358S11.4,10.925,11.135,10.925Z" transform="translate(3.612 -1.48)" fill="#4b4b4b"></path> <path id="Path_819" data-name="Path 819" d="M8.961,12.68c-.268,0-.485.16-.485.358s.217.358.485.358.486-.16.486-.358S9.229,12.68,8.961,12.68Z" transform="translate(2.875 -0.885)" fill="#4b4b4b"></path> <path id="Path_820" data-name="Path 820" d="M6.621,14.55a.429.429,0,1,0,.485.425A.458.458,0,0,0,6.621,14.55Z" transform="translate(2.081 -0.251)" fill="#4b4b4b"></path> <path id="Path_821" data-name="Path 821" d="M31.656,12.113l.032.016-.035-.017a.889.889,0,0,0-.927.078l-11.96,8.839V22.3L31.118,13.17V14.3a.359.359,0,0,1-.145.288L17.533,24.549a.355.355,0,0,1-.213.07.364.364,0,0,1-.145-.032v0l-.024-.008a.358.358,0,0,1-.189-.315V21.809a1.8,1.8,0,0,1,.731-1.451l12.889-9.552a1.38,1.38,0,0,0-.394-2.421l-13.494-4.4a2.247,2.247,0,0,0-2.023.321h0L1.148,14.171l0,0A2.827,2.827,0,0,0,0,16.445v2.138c0,.041,0,.1,0,.16a2.7,2.7,0,0,0,.018.337,1.655,1.655,0,0,0,.066.306,1.22,1.22,0,0,0,.287.484,1.246,1.246,0,0,0,.54.318h0l15.882,5.344a1.367,1.367,0,0,0,1.349-.164l13.44-9.961A1.38,1.38,0,0,0,32.14,14.3V12.9A.889.889,0,0,0,31.656,12.113ZM24.717,7.676l-2.341,3.586L19.559,9.038l5.084-1.386ZM19.4,5.942l4,1.306L19.1,8.421Zm-.722.009-.31,2.542-3-.382c.536-.355,1.266-.838,1.953-1.286.5-.33.986-.64,1.347-.867ZM6.658,21.045,1.225,19.216l-.012,0a.246.246,0,0,1-.105-.051l-.031-.041a.453.453,0,0,1-.041-.143,1.619,1.619,0,0,1-.013-.235c0-.051,0-.1,0-.16V16.445a1.805,1.805,0,0,1,.731-1.451l0,0L15.273,5.13A1.224,1.224,0,0,1,16,4.894a1.242,1.242,0,0,1,.381.061l1.677.547-.433.278c-1.411.91-3.446,2.267-3.447,2.268l-.8.531,4.545.578L7.733,17.088h0a2.674,2.674,0,0,0-1.076,2.144v1.812Zm9.282.764v2.359l-8.6-2.893h.03V19.233a1.961,1.961,0,0,1,.793-1.575l0,0,10.649-8.29,3.728,2.943,2.874-4.4,4.45,1.452a.359.359,0,0,1,.242.283l0,.058a.358.358,0,0,1-.145.287L17.084,19.537A2.828,2.828,0,0,0,15.94,21.809Z" transform="translate(0 -3.873)" fill="#4b4b4b"></path> </g> </g> </svg> </div> <div class="amenity_desc">バスローブ</div> </div>`
  var espresso_maker = `<div class="amenity_box"> <div class="amenity_image"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="33" height="33" viewBox="0 0 33 33"> <defs> <clipPath id="clip-path"> <rect id="Rectangle_6346" data-name="Rectangle 6346" width="33" height="33" transform="translate(-0.161 -0.348)" fill="#e0e0e0"></rect> </clipPath> </defs> <g id="Mask_Group_45" data-name="Mask Group 45" transform="translate(0.161 0.348)" clip-path="url(#clip-path)"> <g id="コーヒーカップアイコン" transform="translate(0.231 3.547)"> <path id="Path_822" data-name="Path 822" d="M30.09,20.153a11.365,11.365,0,0,0,2.05-6.931V5.552A2.811,2.811,0,0,0,29.33,2.742H7.37A7.37,7.37,0,0,0,0,10.112a7.131,7.131,0,0,0,2.168,5.143,8,8,0,0,0,5.15,2.226q.214.011.417.011a6.4,6.4,0,0,0,.862-.059,11.266,11.266,0,0,0,3.218,4.431l-.021-.018.016.014c.046.039.1.083.16.128H7.761v2.568a2.983,2.983,0,0,0,2.983,2.983h18.4a2.983,2.983,0,0,0,2.983-2.983V21.988H28.287A9.458,9.458,0,0,0,30.09,20.153Zm.216,3.661v.742a1.159,1.159,0,0,1-1.157,1.157h-18.4a1.159,1.159,0,0,1-1.157-1.157v-.742H30.306Zm-5.832-1.826H15.828a11.969,11.969,0,0,1-1.841-.85,7.149,7.149,0,0,1-.995-.67l.01.009-.015-.012a9.447,9.447,0,0,1-2.93-4.364l-.273-.85-.856.254a4.151,4.151,0,0,1-1.192.162c-.1,0-.207,0-.314-.009a6.172,6.172,0,0,1-3.976-1.709,5.3,5.3,0,0,1-1.619-3.837A5.544,5.544,0,0,1,7.37,4.568H29.33a.986.986,0,0,1,.985.985v7.669a9.544,9.544,0,0,1-1.692,5.845A8.538,8.538,0,0,1,24.475,21.988Z" transform="translate(0 -2.742)" fill="#4b4b4b"></path> <path id="Path_823" data-name="Path 823" d="M6.607,5.726a3.374,3.374,0,1,0,1.622,6.319l.393-.217V6.371l-.393-.216A3.344,3.344,0,0,0,6.607,5.726ZM7.1,10.874a1.7,1.7,0,0,1-.494.078,1.852,1.852,0,0,1,0-3.7,1.742,1.742,0,0,1,.494.078Z" transform="translate(1.097 -1.73)" fill="#4b4b4b"></path> </g> </g> </svg> </div> <div class="amenity_desc">エスプレッソメーカー、ティーセット</div> </div>`
  var towels = `<div class="amenity_box amenity_hide_sp"> <div class="amenity_image"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="33" height="32" viewBox="0 0 33 32"> <defs> <clipPath id="clip-path"> <rect id="Rectangle_6352" data-name="Rectangle 6352" width="33" height="32" transform="translate(-0.161 -0.26)" fill="#e0e0e0"></rect> </clipPath> </defs> <g id="Mask_Group_49" data-name="Mask Group 49" transform="translate(0.161 0.26)" clip-path="url(#clip-path)"> <g id="タオルアイコン1" transform="translate(2.272 -0.453)"> <path id="Path_830" data-name="Path 830" d="M29.094,15.208a2.8,2.8,0,0,0-.82-.746L16.409,7.668V6.517a.941.941,0,0,1,.128-.049,3.309,3.309,0,1,0-4.211-3.879.854.854,0,1,0,1.667.37,1.6,1.6,0,1,1,2.038,1.879,2.542,2.542,0,0,0-.683.323,1.606,1.606,0,0,0-.413.406A1.3,1.3,0,0,0,14.7,6.3V7.668L2.838,14.462a2.846,2.846,0,0,0-.811.714,2.3,2.3,0,0,0-.5,1.411,2.2,2.2,0,0,0,.061.513A2.309,2.309,0,0,0,2.5,18.487a2.154,2.154,0,0,0,1.217.392H6.658V32.14H21.344v-1.97H24.3V18.879h3.1a2.17,2.17,0,0,0,1.218-.389,2.271,2.271,0,0,0,.917-1.4,2.213,2.213,0,0,0,.051-.471A2.372,2.372,0,0,0,29.094,15.208ZM22.588,28.463H21.344V18.879h1.244Zm0-11.292H21a.853.853,0,0,0-.854.854V30.433H8.365V16.909a.786.786,0,0,1,.784-.784H22.168a.422.422,0,0,1,.42.42v.627Zm5.277-.453a.561.561,0,0,1-.219.368.5.5,0,0,1-.248.085H24.3v-.627a2.127,2.127,0,0,0-2.127-2.127H9.149a2.491,2.491,0,0,0-2.491,2.491v.263H3.714a.479.479,0,0,1-.24-.085.591.591,0,0,1-.229-.381l-.015-.118a.606.606,0,0,1,.147-.367,1.175,1.175,0,0,1,.308-.276l11.87-6.8,11.87,6.8a1.129,1.129,0,0,1,.3.28.673.673,0,0,1,.154.392Z" transform="translate(-1.524 0)" fill="#4b4b4b"></path> </g> </g> </svg> </div> <div class="amenity_desc">タオル類</div> </div>`
  var tv_set =`<div class="amenity_box amenity_hide_sp"> <div class="amenity_image"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="33" height="32" viewBox="0 0 33 32"> <defs> <clipPath id="clip-path"> <rect id="Rectangle_6347" data-name="Rectangle 6347" width="33" height="32" transform="translate(-0.161 -0.397)" fill="#e0e0e0"></rect> </clipPath> </defs> <g id="Mask_Group_46" data-name="Mask Group 46" transform="translate(0.161 0.397)" clip-path="url(#clip-path)"> <g id="ディスプレイのアイコン素材_3" data-name="ディスプレイのアイコン素材 3" transform="translate(0.231 2.157)"> <path id="Path_824" data-name="Path 824" d="M30.645,1.959H1.495A1.5,1.5,0,0,0,0,3.454V23.038a1.5,1.5,0,0,0,1.495,1.495H11.06v2.889H9.112v1.431H23.028V27.421H21.08V24.532h9.565a1.5,1.5,0,0,0,1.495-1.495V3.454A1.5,1.5,0,0,0,30.645,1.959ZM30.2,21.992H1.943V3.9H30.2Z" transform="translate(0 -1.959)" fill="#4b4b4b"></path> </g> </g> </svg> </div> <div class="amenity_desc">テレビ/VOD</div> </div>`
  var hairdryer =`<div class="amenity_box amenity_hide_sp"> <div class="amenity_image"><svg xmlns="http://www.w3.org/2000/svg" width="24.922" height="26.018" viewBox="0 0 24.922 26.018"> <g id="ドライヤーアイコン4_1_" data-name="ドライヤーアイコン4 (1)" transform="translate(-10.776)"> <path id="Path_906" data-name="Path 906" d="M33.6,2a7,7,0,0,0-4.9-2h-.163l-12.96,1.43L10.776.6V14.068l4.8-.8,7.063.767V22.7a3.314,3.314,0,1,0,6.628,0V14.651A7,7,0,0,0,35.7,7.676V7A7,7,0,0,0,33.6,2ZM15.063,11.993l-2.947.492V2.195l2.947.509ZM27.925,22.7a1.974,1.974,0,1,1-3.948,0V14.179l3.948.429v8.1Zm1.967-9.5a5.64,5.64,0,0,1-1.193.129h-.08L16.4,12.008V2.689L28.62,1.341H28.7a5.64,5.64,0,0,1,1.193.129Zm4.467-5.531a5.651,5.651,0,0,1-3.127,5.06V1.94A5.652,5.652,0,0,1,34.358,7Z" transform="translate(0 0)" fill="#4b4b4b"/> <path id="Path_907" data-name="Path 907" d="M203.266,294.417v1.846a.6.6,0,0,0,.6.6h1.191v-3.037h-1.191A.6.6,0,0,0,203.266,294.417Z" transform="translate(-182.709 -278.891)" fill="#4b4b4b"/> </g> </svg> </div> <div class="amenity_desc">ヘアドライヤー</div> </div>`
  var hanger =`<div class="amenity_box amenity_hide_sp"> <div class="amenity_image"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="33" height="32" viewBox="0 0 33 32"> <defs> <clipPath id="clip-path"> <rect id="Rectangle_4601" data-name="Rectangle 4601" width="33" height="32" transform="translate(-0.161 -0.26)" fill="#e0e0e0"/> </clipPath> </defs> <g id="Mask_Group_8" data-name="Mask Group 8" transform="translate(0.161 0.26)" clip-path="url(#clip-path)"> <g id="タオルアイコン1" transform="translate(2.272 1.547)"> <path id="Path_20" data-name="Path 20" d="M29.094,15.208a2.8,2.8,0,0,0-.82-.746L16.409,7.668V6.517a.941.941,0,0,1,.128-.049,3.309,3.309,0,1,0-4.211-3.879.854.854,0,1,0,1.667.37,1.6,1.6,0,1,1,2.038,1.879,2.542,2.542,0,0,0-.683.323,1.606,1.606,0,0,0-.413.406A1.3,1.3,0,0,0,14.7,6.3V7.668L2.838,14.462a2.846,2.846,0,0,0-.811.714,2.3,2.3,0,0,0-.5,1.411,2.2,2.2,0,0,0,.061.513A2.309,2.309,0,0,0,2.5,18.487a2.154,2.154,0,0,0,1.217.392H27.4a2.17,2.17,0,0,0,1.218-.389,2.271,2.271,0,0,0,.917-1.4,2.213,2.213,0,0,0,.051-.471A2.372,2.372,0,0,0,29.094,15.208Zm-7.75,3.671h0Zm-1.195-.854Zm7.716-1.306a.561.561,0,0,1-.219.368c-.084.062-2.611.085-17.952.085-1.376,0-1.357-.015-3.035,0H3.714a.479.479,0,0,1-.24-.085.591.591,0,0,1-.229-.381l-.015-.118a.606.606,0,0,1,.147-.367,1.175,1.175,0,0,1,.308-.276l11.87-6.8,11.87,6.8a1.129,1.129,0,0,1,.3.28.673.673,0,0,1,.154.392Z" transform="translate(-1.524 0)" fill="#4b4b4b"/> </g> </g> </svg> </div> <div class="amenity_desc">ハンガー</div> </div>`
  var shampoos =`<div class="amenity_box amenity_hide_sp"> <div class="amenity_image"><svg xmlns="http://www.w3.org/2000/svg" width="15.5" height="28.814" viewBox="0 0 15.5 28.814"> <g id="シャンプーのフリーイラスト4" transform="translate(-118.29)"> <path id="Path_908" data-name="Path 908" d="M132.406,11.251a4.711,4.711,0,0,0-2.993-1.37V7.82a.815.815,0,0,0-.815-.815h-1.01V4.662h1.273V1.856h1.11V0h-8a3.525,3.525,0,0,0-2.285.87l-1.4,1.22,1.221,1.4,1.4-1.22a1.667,1.667,0,0,1,1.082-.412h1.654V4.662h1.273V7.006h-1.01a.814.814,0,0,0-.815.815V9.882a4.722,4.722,0,0,0-4.378,4.712V26.319a2.5,2.5,0,0,0,2.5,2.495h10.086a2.5,2.5,0,0,0,2.5-2.495V14.593A4.714,4.714,0,0,0,132.406,11.251Zm.044,15.068a1.14,1.14,0,0,1-.091.449,1.157,1.157,0,0,1-.419.509,1.144,1.144,0,0,1-.645.2H121.209a1.146,1.146,0,0,1-.45-.091,1.167,1.167,0,0,1-.509-.419,1.148,1.148,0,0,1-.2-.646V14.593a3.387,3.387,0,0,1,3.386-3.386h5.624a3.386,3.386,0,0,1,3.386,3.386V26.319Z" fill="#4b4b4b"/> </g> </svg> </div> <div class="amenity_desc">シャンプー</div> </div>`
  var toothbrush =`<div class="amenity_box amenity_hide_sp"><div class="amenity_image"><svg xmlns="http://www.w3.org/2000/svg" width="23.707" height="28.425" viewBox="0 0 23.707 28.425"> <g id="歯ブラシのアイコン素材" transform="translate(-42.488)"> <path id="Path_909" data-name="Path 909" d="M44.659,28.425a.628.628,0,0,1-.447-.184L42.672,26.7a.634.634,0,0,1,0-.894l11.6-11.6L49.907,9.851a.327.327,0,0,1-.093-.252.4.4,0,0,1,.119-.261L59.151.119A.4.4,0,0,1,59.431,0a.326.326,0,0,1,.233.094l6.347,6.347a.634.634,0,0,1,0,.894L45.105,28.24A.627.627,0,0,1,44.659,28.425ZM52.6,8.329a.383.383,0,0,0-.267.114l-.595.595a.381.381,0,0,0-.114.249.31.31,0,0,0,.088.238l3.264,3.264a.309.309,0,0,0,.221.089.383.383,0,0,0,.267-.114l.594-.595a.347.347,0,0,0,.026-.488L52.82,8.418A.309.309,0,0,0,52.6,8.329Zm2.173-2.173a.383.383,0,0,0-.267.114l-.594.594a.382.382,0,0,0-.114.25.309.309,0,0,0,.088.238l3.264,3.264a.309.309,0,0,0,.221.089.383.383,0,0,0,.267-.114L58.231,10a.347.347,0,0,0,.025-.488L54.993,6.245A.309.309,0,0,0,54.772,6.156Zm2.173-2.173a.383.383,0,0,0-.267.114l-.594.595a.382.382,0,0,0-.114.25.309.309,0,0,0,.088.238l3.264,3.264a.309.309,0,0,0,.221.089.383.383,0,0,0,.267-.114l.595-.595a.382.382,0,0,0,.114-.25.31.31,0,0,0-.088-.238L57.166,4.072A.309.309,0,0,0,56.945,3.983ZM59.118,1.81a.382.382,0,0,0-.267.114l-.595.595a.382.382,0,0,0-.114.25.309.309,0,0,0,.088.238l3.264,3.264a.309.309,0,0,0,.22.089.383.383,0,0,0,.267-.114l.595-.594a.347.347,0,0,0,.025-.488L59.338,1.9A.309.309,0,0,0,59.118,1.81Z" fill="#4b4b4b"/> <path id="Path_910" data-name="Path 910" d="M66.153,6.6,64.76,5.205,59.806.251a.355.355,0,0,0-.5.026l-2.7,2.7h0L54.96,4.622h0l-2.7,2.7h0L50.087,9.495a.355.355,0,0,0-.025.5l4.367,4.367-11.6,11.6a.625.625,0,0,0,0,.881l1.54,1.539a.625.625,0,0,0,.881,0L66.153,7.479A.625.625,0,0,0,66.153,6.6Zm-9.94,5.728-.595.595a.355.355,0,0,1-.5.025L51.854,9.683a.355.355,0,0,1,.025-.5l.595-.595a.355.355,0,0,1,.5-.026l3.264,3.264A.355.355,0,0,1,56.213,12.326Zm2.173-2.173-.595.595a.355.355,0,0,1-.5.025L54.027,7.51a.355.355,0,0,1,.025-.5l.595-.594a.355.355,0,0,1,.5-.026l3.264,3.264A.355.355,0,0,1,58.386,10.153ZM60.559,7.98l-.595.595a.355.355,0,0,1-.5.025L56.2,5.337a.355.355,0,0,1,.025-.5l.595-.595a.355.355,0,0,1,.5-.025L60.584,7.48A.355.355,0,0,1,60.559,7.98Zm2.173-2.173-.595.594a.355.355,0,0,1-.5.026L58.373,3.164a.355.355,0,0,1,.025-.5l.595-.595a.355.355,0,0,1,.5-.025l3.264,3.264A.355.355,0,0,1,62.732,5.807Z" transform="translate(-0.149 -0.151)" fill="#4b4b4b"/> </g> </svg></div> <div class="amenity_desc">歯ブラシ</div></div>`
  var soap =`<div class="amenity_box amenity_hide_sp"> <div class="amenity_image"><svg xmlns="http://www.w3.org/2000/svg" width="29.685" height="25.425" viewBox="0 0 29.685 25.425"> <g id="シャンプーアイコン7" transform="translate(-1461 -3498.737)"> <path id="Path_911" data-name="Path 911" d="M29.15,47.384a2.276,2.276,0,0,0-2.945.045c-.153.128-.473.36-.893.653,0-.031,0-.063,0-.094a5.121,5.121,0,0,0-.48-2.177,5.794,5.794,0,0,0-.8-1.251,7.625,7.625,0,0,0-1.405-1.3c-.223-.16-.433-.3-.619-.41a3.284,3.284,0,0,0,.065-.654,4.693,4.693,0,0,0-.411-1.829,6.979,6.979,0,0,0-2.259-2.83,4.928,4.928,0,0,0-.916-.524,3.528,3.528,0,0,0-1-.271l-.014,0,.015,0a1.286,1.286,0,0,0-.146-.009,1.066,1.066,0,0,0-.38.068.954.954,0,0,0-.323.2,1.057,1.057,0,0,0-.187.243,1.369,1.369,0,0,0-.094.208,2.924,2.924,0,0,0-.092.326,4.137,4.137,0,0,1-.135.49,1.682,1.682,0,0,1-.174.347,1.956,1.956,0,0,1-.57.549,4.609,4.609,0,0,1-1.284.552A7.116,7.116,0,0,0,11.76,40.9,7.916,7.916,0,0,0,9.5,43.642a7.575,7.575,0,0,0-.573,1.507,5.772,5.772,0,0,0-.2,1.445c0,.136.006.27.018.4C5.731,47.467,4.508,49,3.18,50.332L.294,52.853A.858.858,0,0,0,0,53.5v8.376a.286.286,0,0,0,.474.216l5.576-4.78a.868.868,0,0,1,.712-.192l8.69,1.58a2.294,2.294,0,0,0,1.734-.384S28.277,50.6,29.1,49.921A1.713,1.713,0,0,0,29.15,47.384Zm-5.342,1.729c-1.832,1.239-4,2.665-4,2.665H13.023l-.021.01a.647.647,0,1,1,.042-1.293l-.021-.012h5a1.817,1.817,0,1,0,0-3.634H10.753c-.227,0-.444.006-.655.015-.008-.086-.013-.175-.013-.271a4.8,4.8,0,0,1,.274-1.51,6.7,6.7,0,0,1,1.464-2.421,5.878,5.878,0,0,1,2.66-1.632,6.721,6.721,0,0,0,1.18-.45,4.293,4.293,0,0,0,.761-.481,3.107,3.107,0,0,0,.811-.959,3.323,3.323,0,0,0,.266-.669c.037-.128.062-.24.084-.333a2.338,2.338,0,0,1,.3.1,3.778,3.778,0,0,1,1.025.637,5.76,5.76,0,0,1,1.3,1.6,4.643,4.643,0,0,1,.38.9,2.956,2.956,0,0,1,.13.825,1.637,1.637,0,0,1-.137.69,2.731,2.731,0,0,1-.681.929,2.928,2.928,0,0,1-.62.416,4.4,4.4,0,0,1-.937.334c-.143.035-.275.063-.4.089-.061.014-.118.026-.177.042a1.55,1.55,0,0,0-.192.061l.444,1.108.054.153v0h0l.054-.014c.058-.014.151-.034.264-.059.2-.044.456-.1.745-.2a4.778,4.778,0,0,0,1.419-.721,4.049,4.049,0,0,0,.691-.663c.068-.084.134-.174.2-.267.084.054.172.111.262.174a6.069,6.069,0,0,1,1.509,1.449,4.135,4.135,0,0,1,.532,1.022,3.772,3.772,0,0,1,.207,1.241A4.585,4.585,0,0,1,23.808,49.113Z" transform="translate(1461 3462)" fill="#4b4b4b"/> </g> </svg> </div> <div class="amenity_desc">石鹸</div></div>`
  var body_towel =`<div class="amenity_box amenity_hide_sp"> <div class="amenity_image"><svg xmlns="http://www.w3.org/2000/svg" width="29.573" height="21.55" viewBox="0 0 29.573 21.55"> <path id="Path_23" data-name="Path 23" d="M141.489,196.5h-1.963v-1.091a3.087,3.087,0,0,0-3.084-3.084H118.084A3.087,3.087,0,0,0,115,195.406v8.349a3.087,3.087,0,0,0,3.084,3.084h1.963v3.949a3.087,3.087,0,0,0,3.084,3.084h18.358a3.087,3.087,0,0,0,3.084-3.084V199.581A3.088,3.088,0,0,0,141.489,196.5Zm1.057,14.291a1.058,1.058,0,0,1-1.057,1.056H123.131a1.058,1.058,0,0,1-1.056-1.056v-3.949H135a1.014,1.014,0,1,0,0-2.027H118.084a1.058,1.058,0,0,1-1.056-1.056v-8.349a1.058,1.058,0,0,1,1.056-1.056h18.358a1.058,1.058,0,0,1,1.057,1.056v11.851a1.058,1.058,0,0,1-1.057,1.057H124.911a1.014,1.014,0,1,0,0,2.027h11.531a3.087,3.087,0,0,0,3.084-3.084v-8.733h1.963a1.058,1.058,0,0,1,1.057,1.056Z" transform="translate(-115 -192.322)" fill="#4b4b4b"/> </svg> </div> <div class="amenity_desc">ボディタオル</div></div>`
  var cotton_swab =`<div class="amenity_box amenity_hide_sp"> <div class="amenity_image"><svg xmlns="http://www.w3.org/2000/svg" width="39.212" height="42.129" viewBox="0 0 39.212 42.129"> <g id="Group_977" data-name="Group 977" transform="translate(5601.499 -763.871) rotate(90)"> <g id="Rectangle_6824" data-name="Rectangle 6824" transform="translate(774 5575)" fill="#4b4b4b" stroke="#fff" stroke-width="1"> <rect width="24" height="4" stroke="none"/> <rect x="0.5" y="0.5" width="23" height="3" fill="none"/> </g> <g id="Ellipse_546" data-name="Ellipse 546" transform="translate(765 5573)" fill="none" stroke="#fff" stroke-width="1"> <ellipse cx="5.5" cy="4" rx="5.5" ry="4" stroke="none"/> <ellipse cx="5.5" cy="4" rx="5" ry="3.5" fill="none"/> </g> <g id="Ellipse_537" data-name="Ellipse 537" transform="translate(766 5574)" fill="#fff" stroke="#4b4b4b" stroke-width="1"> <ellipse cx="4.5" cy="3" rx="4.5" ry="3" stroke="none"/> <ellipse cx="4.5" cy="3" rx="4" ry="2.5" fill="none"/> </g> <g id="Ellipse_548" data-name="Ellipse 548" transform="translate(795 5573)" fill="none" stroke="#fff" stroke-width="1"> <ellipse cx="5.5" cy="4" rx="5.5" ry="4" stroke="none"/> <ellipse cx="5.5" cy="4" rx="5" ry="3.5" fill="none"/> </g> <g id="Rectangle_6821" data-name="Rectangle 6821" transform="translate(774 5576)" fill="#4b4b4b" stroke="#4b4b4b" stroke-width="1"> <rect width="24" height="2" stroke="none"/> <rect x="0.5" y="0.5" width="23" height="1" fill="none"/> </g> <g id="Ellipse_549" data-name="Ellipse 549" transform="translate(796 5574)" fill="#fff" stroke="#4b4b4b" stroke-width="1"> <ellipse cx="4.5" cy="3" rx="4.5" ry="3" stroke="none"/> <ellipse cx="4.5" cy="3" rx="4" ry="2.5" fill="none"/> </g> </g> <g id="Group_978" data-name="Group 978" transform="translate(5248.072 2129.867) rotate(120)"> <g id="Rectangle_6824-2" data-name="Rectangle 6824" transform="translate(774 5575)" fill="#4b4b4b" stroke="#fff" stroke-width="1"> <rect width="24" height="4" stroke="none"/> <rect x="0.5" y="0.5" width="23" height="3" fill="none"/> </g> <g id="Ellipse_546-2" data-name="Ellipse 546" transform="translate(765 5573)" fill="none" stroke="#fff" stroke-width="1"> <ellipse cx="5.5" cy="4" rx="5.5" ry="4" stroke="none"/> <ellipse cx="5.5" cy="4" rx="5" ry="3.5" fill="none"/> </g> <g id="Ellipse_537-2" data-name="Ellipse 537" transform="translate(766 5574)" fill="#fff" stroke="#4b4b4b" stroke-width="1"> <ellipse cx="4.5" cy="3" rx="4.5" ry="3" stroke="none"/> <ellipse cx="4.5" cy="3" rx="4" ry="2.5" fill="none"/> </g> <g id="Ellipse_548-2" data-name="Ellipse 548" transform="translate(795 5573)" fill="none" stroke="#fff" stroke-width="1"> <ellipse cx="5.5" cy="4" rx="5.5" ry="4" stroke="none"/> <ellipse cx="5.5" cy="4" rx="5" ry="3.5" fill="none"/> </g> <g id="Rectangle_6821-2" data-name="Rectangle 6821" transform="translate(774 5576)" fill="#4b4b4b" stroke="#4b4b4b" stroke-width="1"> <rect width="24" height="2" stroke="none"/> <rect x="0.5" y="0.5" width="23" height="1" fill="none"/> </g> <g id="Ellipse_549-2" data-name="Ellipse 549" transform="translate(796 5574)" fill="#fff" stroke="#4b4b4b" stroke-width="1"> <ellipse cx="4.5" cy="3" rx="4.5" ry="3" stroke="none"/> <ellipse cx="4.5" cy="3" rx="4" ry="2.5" fill="none"/> </g> </g> <g id="Group_979" data-name="Group 979" transform="matrix(-0.174, 0.985, -0.985, -0.174, 5636.172, 215.753)"> <g id="Rectangle_6824-3" data-name="Rectangle 6824" transform="translate(774 5575)" fill="#4b4b4b" stroke="#fff" stroke-width="1"> <rect width="24" height="4" stroke="none"/> <rect x="0.5" y="0.5" width="23" height="3" fill="none"/> </g> <g id="Ellipse_546-3" data-name="Ellipse 546" transform="translate(765 5573)" fill="none" stroke="#fff" stroke-width="1"> <ellipse cx="5.5" cy="4" rx="5.5" ry="4" stroke="none"/> <ellipse cx="5.5" cy="4" rx="5" ry="3.5" fill="none"/> </g> <g id="Ellipse_537-3" data-name="Ellipse 537" transform="translate(766 5574)" fill="#fff" stroke="#4b4b4b" stroke-width="1"> <ellipse cx="4.5" cy="3" rx="4.5" ry="3" stroke="none"/> <ellipse cx="4.5" cy="3" rx="4" ry="2.5" fill="none"/> </g> <g id="Ellipse_548-3" data-name="Ellipse 548" transform="translate(795 5573)" fill="none" stroke="#fff" stroke-width="1"> <ellipse cx="5.5" cy="4" rx="5.5" ry="4" stroke="none"/> <ellipse cx="5.5" cy="4" rx="5" ry="3.5" fill="none"/> </g> <g id="Rectangle_6821-3" data-name="Rectangle 6821" transform="translate(774 5576)" fill="#4b4b4b" stroke="#4b4b4b" stroke-width="1"> <rect width="24" height="2" stroke="none"/> <rect x="0.5" y="0.5" width="23" height="1" fill="none"/> </g> <g id="Ellipse_549-3" data-name="Ellipse 549" transform="translate(796 5574)" fill="#fff" stroke="#4b4b4b" stroke-width="1"> <ellipse cx="4.5" cy="3" rx="4.5" ry="3" stroke="none"/> <ellipse cx="4.5" cy="3" rx="4" ry="2.5" fill="none"/> </g> </g> </svg> </div> <div class="amenity_desc">綿棒</div></div>`
  var cosmetics =`<div class="amenity_box amenity_hide_sp"> <div class="amenity_image"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="29.681" viewBox="0 0 14 29.681"> <g id="メイク落としアイコン1" transform="translate(-135.248)"> <path id="Path_912" data-name="Path 912" d="M148.7,12.347a1.85,1.85,0,0,0-.938-.505V9.919a1.346,1.346,0,0,0-1.346-1.346h-.583V6.552h.9V0H141.08V2.276h-1.374a3.857,3.857,0,0,0-.912.114,5.582,5.582,0,0,0-1.4.57,9.092,9.092,0,0,0-1.532,1.106,8.224,8.224,0,0,0-.618.6l1,.9.2.182h0a8.389,8.389,0,0,1,1.118-.976,5.818,5.818,0,0,1,1.071-.627,3.577,3.577,0,0,1,.555-.189,2.274,2.274,0,0,1,.519-.066h1.374V6.552h.9v2.02H141.4a1.346,1.346,0,0,0-1.347,1.346v1.923a1.855,1.855,0,0,0-1.481,1.818V27.825a1.855,1.855,0,0,0,1.856,1.856h6.97a1.855,1.855,0,0,0,1.855-1.856V13.659A1.852,1.852,0,0,0,148.7,12.347Zm-6.458-8.456V1.167h3.321V5.385h-3.321Zm2.424,2.661v2h-1.526v-2Zm-3.456,3.366a.175.175,0,0,1,.014-.07.184.184,0,0,1,.066-.08.174.174,0,0,1,.1-.031h5.026a.176.176,0,0,1,.07.014.178.178,0,0,1,.08.066.176.176,0,0,1,.03.1V11.8h-5.385Zm6.867,17.906a.689.689,0,0,1-.689.689h-6.97a.691.691,0,0,1-.572-.3.684.684,0,0,1-.118-.385V13.659a.688.688,0,0,1,.3-.572.68.68,0,0,1,.385-.117h6.97a.689.689,0,0,1,.689.689Z" fill="#4b4b4b"/> </g> </svg> </div> <div class="amenity_desc">化粧品</div></div>`
  var sewing_kit =`<div class="amenity_box amenity_hide_sp"> <div class="amenity_image"><svg xmlns="http://www.w3.org/2000/svg" width="25.69" height="22.106" viewBox="0 0 25.69 22.106"> <g id="糸のアイコン" transform="translate(0 -35.717)"> <path id="Path_913" data-name="Path 913" d="M25.284,56.436a4.924,4.924,0,0,1-1.278-.322,2.75,2.75,0,0,1-1.286-1.019,3.251,3.251,0,0,1-.477-1.829,6.9,6.9,0,0,1,.189-1.523,4.713,4.713,0,0,0,.12-1.043,3.845,3.845,0,0,0-1.041-2.687,3.391,3.391,0,0,0-2.45-1.064,3.329,3.329,0,0,0-.817.1V39.282a3.523,3.523,0,0,1,1.238-.783c.746-.186,1.392-.623,1.392-1.391a1.391,1.391,0,0,0-1.392-1.391H1.391A1.391,1.391,0,0,0,0,37.108c0,.768.646,1.206,1.391,1.391a3.529,3.529,0,0,1,1.238.783V54.258a3.529,3.529,0,0,1-1.238.783C.646,55.226,0,55.664,0,56.432a1.391,1.391,0,0,0,1.391,1.391H19.482a1.392,1.392,0,0,0,1.391-1.391c0-.768-.646-1.206-1.391-1.391a3.517,3.517,0,0,1-1.238-.783V48.022a2.407,2.407,0,0,1,2.6.632,2.916,2.916,0,0,1,.783,2.046,3.772,3.772,0,0,1-.1.837,7.843,7.843,0,0,0-.212,1.729,4.608,4.608,0,0,0,.283,1.66,3.46,3.46,0,0,0,1.391,1.7,5.216,5.216,0,0,0,2.179.729.464.464,0,0,0,.115-.92ZM4.021,39.427h7.091L4.021,41.37ZM16.853,54.113H9.8l7.056-1.933Zm0-2.654L7.164,54.113H4.021V52.294l12.832-3.516v2.68Zm0-3.4L4.021,51.573V48.895l12.832-3.518Zm0-3.4L4.021,48.174V45.493l12.832-3.516Zm0-3.4L4.021,44.772v-2.68l9.724-2.665h3.108Z" transform="translate(0 0)" fill="#4b4b4b"/> </g> </svg> </div> <div class="amenity_desc">化粧品</div></div>`
  var shaving =`<div class="amenity_box amenity_hide_sp"> <div class="amenity_image"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="33.056" viewBox="0 0 20 33.056"> <g id="Group_976" data-name="Group 976" transform="translate(-705 -5441)"> <rect id="Rectangle_6817" data-name="Rectangle 6817" width="20" height="9" rx="3" transform="translate(705 5441)" fill="#4b4b4b"/> <rect id="Rectangle_6818" data-name="Rectangle 6818" width="16" height="2" rx="1" transform="translate(707 5443)" fill="#fff"/> <rect id="Rectangle_6819" data-name="Rectangle 6819" width="16" height="2" rx="1" transform="translate(707 5446)" fill="#fff"/> <path id="Path_914" data-name="Path 914" d="M.417,0H8.972c.338,0,.917.274.917.611-.306,1.56-.579,1.833-.917,1.833H.417C.079,2.444-.194,2.171-.5.611-.5.274.079,0,.417,0Z" transform="translate(710.306 5449)" fill="#4b4b4b"/> <path id="Path_915" data-name="Path 915" d="M4.733,2.741l.244,21.409A1.844,1.844,0,0,1,3.206,26.1H1.372A1.844,1.844,0,0,1-.4,24.151L-.156,2.741S4.733,1.666,4.733,2.741Z" transform="translate(712.711 5447.959)" fill="#4b4b4b"/> </g> </svg> </div> <div class="amenity_desc">シェービング</div></div>`
  // var hairbrush =`<div class="amenity_box amenity_hide_sp"> <div class="amenity_image">SVGGGGGG</div> <div class="amenity_desc">シャンプー</div></div>`
  
  
  // Declare variable AMENITY icon-label ---/>

  var amenityContainer = '<div class="amenity_row"> '
  $(data).each(function (index, item) {
    amenityContainer += (item.is_internet_access == 1 ? internet_access : '')
    +(item.is_bathrobe == 1 ? bathrobe : '')
    +(item.is_refrigerator == 1 ? refrigerator : '')
    +(item.is_espresso_maker == 1 ? espresso_maker : '')
    +(item.is_towels == 1 ? towels : '')
    +(item.is_tv_set == 1 ? tv_set : '')
    +(item.is_hairdryer == 1 ? hairdryer : '')
    +(item.is_hanger == 1 ? hanger : '')
    +(item.is_shampoos == 1 ? shampoos : '')
    +(item.is_toothbrush == 1 ? toothbrush : '')
    +(item.is_soap == 1 ? soap : '')
    +(item.is_body_towel == 1 ? body_towel : '')
    +(item.is_cotton_swab == 1 ? cotton_swab : '')
    +(item.is_cosmetics == 1 ? cosmetics : '')
    +(item.is_sewing_kit == 1 ? sewing_kit : '')
    +(item.is_shaving == 1 ? shaving : '')
    // +(item.is_hairbrush == 1 ? hairbrush : '')
  });
  amenityContainer += '</div>';
  $("#amenity-container").html(amenityContainer);
}
// <---- DATA ROOM-DETAIL PAGE ----/>

// <---- DATA RESTAURANT-DETAIL PAGE ---->
const dataRestaurantDetail = [
  {
    'id': 0,
    "title_en":"DINNER1",
    "title_ja":"ご夕食",
    'name': "モーニングhehe",
    'descriptive': "ミシュラン2つ星のレストランで、上質な料理の数々に出会うことができます。\n非日常の空間演出と、こだわり抜いた料理をお楽しみください。23112",
    'silde_image': [
      "/assets/img/top/img_food.png",
      "/assets/img/top/img_food.png",
      "/assets/img/top/img_food.png",
      "/assets/img/top/img_food.png",
      "/assets/img/top/img_food.png",
      "/assets/img/top/img_food.png",
      "/assets/img/top/img_food.png",
      "/assets/img/top/img_food.png",
    ],
    'information_material': [
      {
        'heading': "営業時間2",
        'type': 1,
        'descriptive': "03-1234-5678（10:00～17:00）",
        'button_name': "",
        'button_link': "",
        'pdf_descriptive': "",
        'pdf_link': ""
      },
      {
          'heading': "営業時間2",
          'type': 2,
          'descriptive': "",
          'button_name': "link",
          'button_link': "#",
          'pdf_descriptive': "",
          'pdf_link': ""
      },
      {
          'heading': "営業時間2",
          'type': 3,
          'descriptive': "",
          'button_name': "",
          'button_link': "",
          'pdf_descriptive': "file.pdf",
          'pdf_link': "#"
      },
    ],
    'cooking': [
      {
        'name': "お料理メニュー",
        'description': "フランス料理と日本料理、\n双方の食材と調理法を融合し、\n素材の秘める力を存分に引き出す新境地へと昇華させた、\n美食の数々をお届けいたします。",
        'image': "/assets/img/top/img_food.png",
      },
      {
        'name': "お料理メニュー",
        'description': "フランス料理と日本料理、\n双方の食材と調理法を融合し、\n素材の秘める力を存分に引き出す新境地へと昇華させた、\n美食の数々をお届けいたします。",
        'image': "/assets/img/top/img_food.png",
      },
      {
        'name': "お料理メニュー",
        'description': "フランス料理と日本料理、\n双方の食材と調理法を融合し、\n素材の秘める力を存分に引き出す新境地へと昇華させた、\n美食の数々をお届けいたします。",
        'image': "/assets/img/top/img_food.png",
      },
      {
        'name': "お料理メニュー",
        'description': "フランス料理と日本料理、\n双方の食材と調理法を融合し、\n素材の秘める力を存分に引き出す新境地へと昇華させた、\n美食の数々をお届けいたします。",
        'image': "/assets/img/top/img_food.png",
      }
    ]
  },
  {
    'id': 1,
    "title_en":"DINNER3",
    "title_ja":"ご夕食",
    'name': "モーニングhehe1",
    'descriptive': "ミシュラン2つ星のレストランで、上質な料理の数々に出会うことができます。\n非日常の空間演出と、こだわり抜いた料理をお楽しみください。23112",
    'silde_image': [
      "/assets/img/top/img_food.png",
      "/assets/img/top/img_food.png",
      "/assets/img/top/img_food.png",
      "/assets/img/top/img_food.png",
      "/assets/img/top/img_food.png",
      "/assets/img/top/img_food.png",
      "/assets/img/top/img_food.png",
      "/assets/img/top/img_food.png",
    ],
    'information_material': [
      {
        'heading': "営業時間",
        'type': 1,
        'descriptive': "03-1234-5678（10:00～17:00）",
        'button_name': "",
        'button_link': "",
        'pdf_descriptive': "",
        'pdf_link': ""
      },
      {
          'heading': "営業時間2",
          'type': 2,
          'descriptive': "",
          'button_name': "link",
          'button_link': "#",
          'pdf_descriptive': "",
          'pdf_link': ""
      },
      {
          'heading': "営業時間2",
          'type': 3,
          'descriptive': "",
          'button_name': "",
          'button_link': "",
          'pdf_descriptive': "file.pdf",
          'pdf_link': "#"
      },
    ],
    'cooking': [
      {
        'name': "お料理メニュー",
        'description': "フランス料理と日本料理、\n双方の食材と調理法を融合し、\n素材の秘める力を存分に引き出す新境地へと昇華させた、\n美食の数々をお届けいたします。",
        'image': "/assets/img/top/img_food.png",
      },
      {
        'name': "お料理メニュー",
        'description': "フランス料理と日本料理、\n双方の食材と調理法を融合し、\n素材の秘める力を存分に引き出す新境地へと昇華させた、\n美食の数々をお届けいたします。",
        'image': "/assets/img/top/img_food.png",
      },
      {
        'name': "お料理メニュー",
        'description': "フランス料理と日本料理、\n双方の食材と調理法を融合し、\n素材の秘める力を存分に引き出す新境地へと昇華させた、\n美食の数々をお届けいたします。",
        'image': "/assets/img/top/img_food.png",
      },
      {
        'name': "お料理メニュー",
        'description': "フランス料理と日本料理、\n双方の食材と調理法を融合し、\n素材の秘める力を存分に引き出す新境地へと昇華させた、\n美食の数々をお届けいたします。",
        'image': "/assets/img/top/img_food.png",
      }
    ]
  },
  {
    'id': 2,
    "title_en":"DINNER213",
    "title_ja":"ご夕食",
    'name': "モーニングhehe",
    'descriptive': "ミシュラン2つ星のレストランで、上質な料理の数々に出会うことができます。\n非日常の空間演出と、こだわり抜いた料理をお楽しみください。23112",
    'silde_image': [
      "/assets/img/top/img_food.png",
      "/assets/img/top/img_food.png",
      "/assets/img/top/img_food.png",
      "/assets/img/top/img_food.png",
      "/assets/img/top/img_food.png",
      "/assets/img/top/img_food.png",
      "/assets/img/top/img_food.png",
      "/assets/img/top/img_food.png",
    ],
    'information_material': [
      {
        'heading': "営業時間",
        'type': 1,
        'descriptive': "03-1234-5678（10:00～17:00）",
        'button_name': "",
        'button_link': "",
        'pdf_descriptive': "",
        'pdf_link': ""
      },
      {
          'heading': "営業時間2",
          'type': 2,
          'descriptive': "",
          'button_name': "link",
          'button_link': "#",
          'pdf_descriptive': "",
          'pdf_link': ""
      },
      {
          'heading': "営業時間2",
          'type': 3,
          'descriptive': "",
          'button_name': "",
          'button_link': "",
          'pdf_descriptive': "file.pdf",
          'pdf_link': "#"
      },
    ],
    'cooking': [
      {
        'name': "お料理メニュー",
        'description': "フランス料理と日本料理、\n双方の食材と調理法を融合し、\n素材の秘める力を存分に引き出す新境地へと昇華させた、\n美食の数々をお届けいたします。",
        'image': "/assets/img/top/img_food.png",
      },
      {
        'name': "お料理メニュー",
        'description': "フランス料理と日本料理、\n双方の食材と調理法を融合し、\n素材の秘める力を存分に引き出す新境地へと昇華させた、\n美食の数々をお届けいたします。",
        'image': "/assets/img/top/img_food.png",
      },
      {
        'name': "お料理メニュー",
        'description': "フランス料理と日本料理、\n双方の食材と調理法を融合し、\n素材の秘める力を存分に引き出す新境地へと昇華させた、\n美食の数々をお届けいたします。",
        'image': "/assets/img/top/img_food.png",
      },
      {
        'name': "お料理メニュー",
        'description': "フランス料理と日本料理、\n双方の食材と調理法を融合し、\n素材の秘める力を存分に引き出す新境地へと昇華させた、\n美食の数々をお届けいたします。",
        'image': "/assets/img/top/img_food.png",
      }
    ]
  },
];

function showDataRestaurantDetail (data) {
  // create Slide Component --->
    let imgSlideArr = '';
    $(data.silde_image).each(function (index, item) {
      imgSlideArr+= `<div class="product_slide_box swiper-slide img_wrap"><img src="`+item+`" alt=""></div>`
    })
  // create Slide Component ---/>
  
  // create Infor Row Component --->
    let infoDataTable = '';
    $(data.information_material).each(function (index, item) {
      infoDataTable+= `
      <div class="restaurant-desc__row"> 
        <div class="restaurant-desc__gray">`+ item.heading +`</div>
        `+(item.type == 1 ? '<ul class="restaurant-desc__list"><li class="restaurant-desc__item restaurant-desc__text">'+beforeText(item.descriptive)+'</li> </ul>' : item.type == 2 ? '<a href="'+item.button_link+'" class="restaurant-desc__link restaurant-desc__text">'+item.button_name+'</a>' : ' <a href="'+item.pdf_link+'" class="restaurant-desc__link restaurant-desc__text">'+item.pdf_descriptive+'</a> <span> <svg xmlns="http://www.w3.org/2000/svg" width="19.528" height="24" viewbox="0 0 19.528 24"> <g id="PDFアイコン" transform="translate(-47.706)"> <path id="Path_716" data-name="Path 716" d="M63.208,0H54.616l-.437.437L48.143,6.474l-.437.437V19.974A4.031,4.031,0,0,0,51.732,24H63.208a4.031,4.031,0,0,0,4.026-4.026V4.026A4.03,4.03,0,0,0,63.208,0Zm2.535,19.974a2.535,2.535,0,0,1-2.535,2.536H51.732A2.535,2.535,0,0,1,49.2,19.974V7.528h3.924a2.113,2.113,0,0,0,2.113-2.113V1.491h7.974a2.535,2.535,0,0,1,2.535,2.536Z" fill="#4b4b4b"></path> <path id="Path_717" data-name="Path 717" d="M136.476,252.785h-1.337a.383.383,0,0,0-.407.414v3.457a.469.469,0,1,0,.935,0v-1.05a.034.034,0,0,1,.039-.038h.77a1.4,1.4,0,1,0,0-2.782Zm-.058,1.974h-.713a.034.034,0,0,1-.039-.038v-1.089a.034.034,0,0,1,.039-.038h.713a.584.584,0,1,1,0,1.165Z" transform="translate(-82.947 -240.936)" fill="#4b4b4b"></path> <path id="Path_718" data-name="Path 718" d="M221.069,252.785h-1.025a.383.383,0,0,0-.407.414v3.508a.378.378,0,0,0,.407.408h1.025c.923,0,1.5-.293,1.725-1a5.382,5.382,0,0,0,0-2.33C222.566,253.078,221.992,252.785,221.069,252.785Zm.828,3.005c-.109.344-.42.49-.854.49h-.433a.034.034,0,0,1-.039-.038v-2.585a.034.034,0,0,1,.039-.038h.433c.433,0,.745.147.854.49a4.688,4.688,0,0,1,0,1.681Z" transform="translate(-163.872 -240.936)" fill="#4b4b4b"></path> <path id="Path_719" data-name="Path 719" d="M310.163,252.785h-2.1a.383.383,0,0,0-.408.414v3.457a.469.469,0,1,0,.936,0v-1.235a.034.034,0,0,1,.038-.038h1.223a.4.4,0,1,0,0-.8h-1.223a.034.034,0,0,1-.038-.038v-.911a.034.034,0,0,1,.038-.038h1.534a.405.405,0,1,0,0-.808Z" transform="translate(-247.764 -240.936)" fill="#4b4b4b"></path> </g> </svg> </span>')+`
      </div>
    `
    })
  // create Infor Row Component ---/>

  // create Cooking Slide Component --->
    let cookingHTML = '';
    $(data.cooking).each(function (index, item) {
      cookingHTML+= `
      <div class="product_slide_box swiper-slide img_wrap"><img src="`+item.image+`" alt="">
        <div class="txt_menu">`+item.name+`</div>
        <div class="txt_desc">`+item.description+`</div>
      </div>
    `
    })
  // create Cooking Slide Component ---/>

  var mvContainer = '<div class="banner-block flex center__align relative"> '
  $(data).each(function (index, item) {
    mvContainer += `        
      <div class="banner__txt">
        <div class="container_child"> 
          <h1>` + item.title_en + `</h1>
          <p>` + item.title_ja + `</p>
        </div>
      </div>
      <div class="img_wrap"> <img src="/assets/img/executive/executive-mv.jpg" alt="SUITE ROOM banner"/></div>
      <div class="overlay"></div>
    `
  });
  mvContainer += '</div>';
  $("#restaurant-detail-banner").html(mvContainer);

  var contentRoomDetail = ''
  $(data).each(function (index, item) {
    contentRoomDetail += `
      <div class="slide_product_content" data-aos="fade-in"> 
        <div class="slide__product_swiper">
          <div class="swiper-wrapper slide__product_wrap flex center__align">
            `+imgSlideArr+`
          </div>
          <div class="slide_product_pagination swiper-pagination"> </div>
          <div class="swiper-button flex"> 
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="restaurant-desc">
          <div class="restaurant-desc__col">
            <div class="restaurant-desc__title">`+ item.name +`</div>
            <div class="restaurant-desc__content">
              `+ beforeText(item.descriptive) +`
            </div>
          </div>
          <div class="restaurant-desc__col hide-box-sp">
          `+infoDataTable+`
          </div>
          <div class="restaurant-desc__button sp_flex">詳細をみる</div>
        </div>
      </div>
      <div class="cooking_content">
        <div class="container" data-aos="fade-right"> 
          <div class="cooking_title">お料理メニュー</div>
          <div class="cooking_title sp">MENU</div>
          <div class="cooking_desc sp">メニュー一覧</div>
          <div class="cooking_swiper relative">
            <div class="swiper-wrapper slide__product_wrap flex center__align">
            `
              +cookingHTML+
            `
            </div>
            <div class="swiper-button-prev cooking"></div>
            <div class="swiper-button-next cooking"></div>
          </div>
          <div class="book_dinner">ディナーを予約する</div>
        </div>
      </div>
    `
  });
  contentRoomDetail += '</div>';
  $("#restaurant-detail-information").html(contentRoomDetail);
};


$(function () {
  if($('#restaurantsDetailData').is(":visible")){
    let dataRestaurantResult = getDetailWithLink(window.location.href,dataRestaurantDetail)
    showDataRestaurantDetail(dataRestaurantResult)
}})
$(function () {
  if($('#roomsDetailData').is(":visible")){
    let dataRoomsResult = getDetailWithLink(window.location.href,dataRoomDetail)
    showDataRoomDetail(dataRoomsResult)
}})
// <---- DATA RESTAURANT-DETAIL PAGE ----/>