'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const swiper = new Swiper(".mySwiper", {
    // slidesPerView: 5, //１画面に表示するスライド数
    /* スライド自動切り替え */
    autoplay: {
        /* スライド自動切り替え永続 */
        disableOnInteraction: false,
        /* スライド自動切り替え方向 */
        reverseDirection: false,
        /* マウスホバーでスライド自動切り替え停止 */
        pauseOnMouseEnter: true,
    },

    /* カバフロー構成 */
    effect: "coverflow",

    /* 最初の画像(img1.jpeg)をスライドの先頭にする */
    centeredSlides: true,

    // ドットインジケーターの表示
    pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
        clickable: true,
    },

    // 前後スライドボタンを表示
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    /* ループの有効化*/
    loop: true,

    slidesPerView: 2, // 表示するスライドの枚数
    centeredSlides: true, // スライドを中央揃えを有効化
    effect: "coverflow",
    coverflowEffect: {
        rotate: -15, // 回転角度
        stretch: 50, // 間隔（px単位）
        depth: 700, // pxで奥行き
        modifier: 1, // 角度
        slideShadows: true, // 先頭のbox-shadow
        /* イベント */
        on: {
            /* スライドが切り替わったとき */
            slideChange: function() {
                slideVisibleToggle(document.querySelectorAll('.swiper-slide'));
            },
        },
    },
});
