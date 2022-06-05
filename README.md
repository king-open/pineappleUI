# 汤圆框架

作者：JackWang

## 介绍

这是我在学习 Vue 过程中的一个 UI 框架，希望对你有用

## 开始使用

1. 添加 CSS 样式
使用本框架前请在 CSS 中开启 border-box

```css
*,*::before,*::after{box-sizing:border-box}
```
IE 8 及以上浏览器都支持此样式。

你还需要设置默认颜色等变量 (后续改为 SCSS 变量)

```html
html {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
  }
```

IE 15 及以上浏览器都支持此样式

2.  安装 sweet-dumpling

```bash
yarn global add sweet-dumpling

or

npm install -g sweet-dumpling
```

3. 引入 sweet-dumpling

```vue
import{Button,ButtonGroup,Icon} from 'sweet-dumpling'
import 'sweet-dumpling/dist/index.css'

export default{
  name:'app',
  components:{
    'j-button':Button,
    'j-icon':Icon
  },
}
```

4. 引入 svg symbols 

```js
 <script src="//at.alicdn.com/t/font_3434323_ezw5wf15hi9.js"></script>
```

