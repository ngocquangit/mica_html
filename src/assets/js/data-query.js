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
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
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
    "is_refrigerator":0,
    "is_towels":0,
    "is_bathrobe":0,
    "is_espresso_maker":0,
    "is_tv_set":0,
    "is_hairdryer":0,
    "is_hanger":0,
    "is_shampoos":0,
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
  }
]

function showDataRoomDetail (data) {
  let informationData = data[0].room_information

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
    console.log(infoTableArr)
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
      <div class="slide_product_content"> 
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
            <p class="product_description">`+ item.body +`</p><a class="btn_search_vacancy pc_flex" href="`+ item.reservation_engine_link +`">空室検索    </a>
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
}

showDataRoomDetail(dataRoomDetail)
// <---- DATA ROOM-DETAIL PAGE ----/>