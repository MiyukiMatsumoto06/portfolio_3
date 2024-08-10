import $ from 'jquery'
import router from './modules/Router'
import '../scss/app.scss'

$(() => {
  new router()

  const hoge = 'hoge'
  console.log(hoge)

  // メニューボタン
  const menuBg = $('.p-menu__bg')
  const menuBtn = $('.c-menuBtn')
  const menuContainer = $('.p-menu__container')

  menuBtn.click(function () {
    $(this).toggleClass('is-active')
    menuBg.toggleClass('is-active')
    menuContainer.toggleClass('is-active')
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

  // スライドイン
  const checkScrollSlideIn = (scrollBottom) => {
    const scrollSlideIn = $('._scrollSlideIn')

    scrollSlideIn.each((index, element) => {
      const isActive = $(element).offset().top < scrollBottom

      if (isActive) {
        $(element).addClass('_isActiveSlideIn')
      } else {
        $(element).removeClass('_isActiveSlideIn')
      }
    })
  }

  // スライドオン
  const checkScrollSlideOn = (scrollBottom) => {
    const scrollSlideOn = $('._scrollSlideOn')

    scrollSlideOn.each((index, element) => {
      const isActive = $(element).offset().top < scrollBottom

      if (isActive) {
        $(element).addClass('_isActiveSlideOn')
      } else {
        $(element).removeClass('_isActiveSlideOn')
      }
    })
  }

  // スライドレフト
  const checkScrollSlideRight = (scrollBottom) => {
    const scrollSlideRight = $('._scrollSlideRight')

    scrollSlideRight.each((index, element) => {
      const isActive = $(element).offset().top < scrollBottom

      if (isActive) {
        $(element).addClass('_isActiveSlideRight')
      } else {
        $(element).removeClass('_isActiveSlideRight')
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
    checkScrollSlideIn(scrollBottom)
    checkScrollSlideOn(scrollBottom)
    checkScrollSlideRight(scrollBottom)
    checkScrollFadeIn(scrollBottom)
  })
})
