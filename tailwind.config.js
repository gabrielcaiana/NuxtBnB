module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  corePlugins: {
    animation: false,
    textOpacity: false,
  },
  theme: {
    extend: {
      colors: {
        lynch: '#71809d',
        zumthor: '#E3ECFF',
        'dusty-gray': '#979797',
        trout: '#494e61',
        mineshaft: '#212121',
        'catskill-white': '#F6F8FB',
        'east-bay': '#3E5786',
        'dodger-blue': '#367cff',
        'polo-blue': '#88a2d2',
        'link-water': '#CED5F1',
      },
      fontFamily: {
        roboto: [
          'Roboto',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      spacing: {
        px: '1px',
        0: '0',
        1: '0.25rem', // 3px
        2: '0.5rem', // 6px
        3: '0.75rem', // 12px
        4: '1rem', // 16px
        5: '1.25rem', // 20px
        6: '1.5rem', // 24px
        8: '2rem', // 32px
        9: '2.25rem', // 36px
        10: '2.5rem', // 40px
        12: '3rem', // 48px
        14: '3.5rem', // 56px
        15: '3.75rem', // 60px
        16: '4rem', // 64px
        17: '4.25rem', // 68px
        18: '4.5rem', // 72px
        20: '5rem', // 80px
        22: '5.5rem', // 88px
        24: '6rem', // 96px
        28: '7rem', // 112px
        30: '7.5rem', // 120px
        32: '8rem', // 128px
        34: '8.5rem', // 136px
        40: '10rem', // 160px
        44: '11rem', // 176px
        48: '12rem', // 192px
        49: '12.25rem', // 196px
        56: '14rem', // 224px
        60: '15rem', // 240px
        64: '16rem', // 256px
        72: '18rem', // 288px
        76: '19rem', // 304px
        79: '19.75rem', // 316px
        84: '21rem', // 336px
        88: '22rem', // 352px
        94: '23.5rem', // 376px
        95: '23.75rem', // 380px
        96: '24rem', // 384px
        104: '26rem', // 416px
        128: '32rem', // 512px
        136: '34rem', // 554px
        148: '37rem', // 592px
        152: '38rem', // 608px
        160: '40rem', // 640px
        164: '41rem', // 656px
        200: '50rem', // 800px
        282: '70.5rem', // 1128px
        300: '75rem', // 1200px
        400: '100rem', // 1600px
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px',
      },
      maxWidth: (theme) => theme('spacing'),
    },
  },
}
