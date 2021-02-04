import { createGlobalStyle } from 'styled-components';
export const GlobalStyleIcon = createGlobalStyle `
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1612423297201'); /* IE9 */
  src: url('./iconfont.eot?t=1612423297201#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1612423297201') format('woff'),
  url('./iconfont.ttf?t=1612423297201') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1612423297201#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-huiyikaihuitaolun:before {
  content: "\e651";
}

.icon-wenzhangchaxun:before {
  content: "\e617";
}
`;
