import $ from 'jquery'
import router from './modules/Router'
import '../scss/app.scss'

$(() => {
  new router()

  const hoge = 'hoge'
  console.log(hoge)

  // ロード
  $(() => {
    $('.p-hero__logo').fadeIn(1300, () => {
      $('.p-slider')
        .css('opacity', '0')
        .animate({ opacity: 1 }, 500, () => {
          $('.p-hero__caption').fadeIn(500, () => {
            $('.p-hero__text').fadeIn(500, () => {
              $('.p-hero__scroll').fadeIn(500, () => {
                $('.p-banner').fadeIn(500)
              })
            })
          })
        })
    })
  })

  // $(() => {
  //   $('.p-hero__logo').fadeIn(2000)
  //   $('.p-slider').fadeIn(2000)
  //   $('.p-hero__caption').fadeIn(2000)
  //   $('.p-hero__text').fadeIn(2000)
  //   $('.p-hero__scroll').fadeIn(2000)
  //   $('.p-banner').fadeIn(2000)
  //   // $('.p-hero__text').addClass('is-load')
  //   // $('.p-hero__caption').addClass('is-load')
  //   // $('.p-slider').addClass('is-load')
  //   // $('.p-hero__logo').addClass('is-load')
  //   // $('.p-hero__scroll').addClass('is-load')
  //   // $('.p-banner').addClass('is-load')
  // })

  // メニューボタン
  const menuBg = $('.p-menu__bg')
  const menuBtn = $('.c-menuBtn')
  const menuContainer = $('.p-menu__container')
  const menuItemSp = $('.p-menu__item--sp')
  const menuLogin = $('.p-menu__login')

  menuBtn.click(() => {
    menuBg.removeClass('is-close').addClass('is-active')
    menuContainer.removeClass('is-close').addClass('is-active')
    menuItemSp.removeClass('is-close').addClass('is-active')
    menuLogin.removeClass('is-close').addClass('is-active')
  })

  // メニュークローズ
  menuBg.click(() => {
    menuBg.removeClass('is-active').addClass('is-close')
    menuContainer.removeClass('is-active').addClass('is-close')
    menuItemSp.removeClass('is-active').addClass('is-close')
    menuLogin.removeClass('is-active').addClass('is-close')
  })

  // バナークローズ
  const banner = $('.p-banner')
  const bannerClose = $('.p-banner__close')

  bannerClose.click(() => {
    banner.toggleClass('is-active')
  })

  // スライドアップ
  const checkScrollSlideUp = (scrollBottom) => {
    const scrollSlideUp = $('._scrollSlideUp')

    scrollSlideUp.each((index, element) => {
      const isActive = $(element).offset().top < scrollBottom

      if (isActive) {
        $(element).addClass('_isActiveSlideUp')
      } else {
        $(element).removeClass('_isActiveSlideUp')
      }
    })
  }

  // フェードイン
  const checkScrollFadeIn = (scrollBottom) => {
    const scrollFadeIn = $('._scrollFadeIn')

    scrollFadeIn.each((index, element) => {
      const isActive = $(element).offset().top < scrollBottom

      if (isActive) {
        $(element).addClass('_isActiveFadeIn')
      } else {
        $(element).removeClass('_isActiveFadeIn')
      }
    })
  }

  // スクロール時の処理
  $(window).scroll(() => {
    const scrollTop = $(window).scrollTop()
    const windowHeight = $(window).height()
    const scrollBottom = scrollTop + windowHeight

    checkScrollSlideUp(scrollBottom)
    checkScrollFadeIn(scrollBottom)
  })
})
