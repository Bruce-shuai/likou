import styled from 'styled-components';

export const SubmissionWrapper = styled.div `
  /* 相对定位 */
  position: relative;
  margin: 10px 10%;
  /* 让元素的宽度占浏览器可视区域的宽度 */
  width: 100vm;
  height: 100px;
  background-color: #e6f1f9;
  /* 盒子阴影 */
  box-shadow: 0 10px 50px #c6d9ed;
  input {
    /* 隐藏复选框 */
    display: none;
    &:checked + label {
      /* 加了inset就是内部阴影 啥都不写就是默认的外部阴影(outset) */
      box-shadow: 0 0 0 #fff, 0 0 0 #fff, 5px 3px 6px 1px #c6d9ed inset,
        -5px -3px 6px 1px #fff inset;
    }
    &:checked + label::before {
      top: calc(50% - 2px);
      /* 逆时针旋转45度 */
      transform: rotate(-45deg);
      transition: top 0.3s ease-out, transform 0.3s ease-out 0.3s;
    }
  }
  label {
    /* 绝对定位 */
    position: absolute;
    /* clac方法自动计算 让元素垂直居中 */
    top: calc(50% - 25px);
    right: 50px;
    width: 50px;
    height: 50px;
    /* 圆角属性 */
    border-radius: 6px;
    /* 元素边框 */
    border: 1px solid rgba(198, 217, 237, 0.3);
    background-color: #e6f1f9;
    /* 盒子阴影 多组值用逗号隔开 */
    box-shadow: 5px 3px 6px 1px #c6d9ed, -5px -3px 6px 1px #fff;
    /* 鼠标移入变小手 */
    cursor: pointer;
    transition: all 0.5s ease-out;

    &::before {
    content: "";
    /* 分别定义两条线的位置 */
    top: calc(50% - 10px);
    /* 利用两个伪元素来定义 */
    position: absolute;
    left: 5px;
    width: 40px;
    height: 4px;
    /* 让两条更佳圆滑 */
    border-radius: 4px;
    background-color: #042a41;
    /* 收回来的动画刚好相反 */
    transition: transform 0.3s ease-out, top 0.3s ease-out 0.3s;
    }
    &::after {
    content: "";
    top: calc(50% + 6px);
    /* 利用两个伪元素来定义 */
    position: absolute;
    left: 5px;
    width: 40px;
    height: 4px;
    /* 让两条更佳圆滑 */
    border-radius: 4px;
    background-color: #042a41;
    /* 收回来的动画刚好相反 */
    transition: transform 0.3s ease-out, top 0.3s ease-out 0.3s;
    }  
  }
  input:checked + label::after {
    top: calc(50% - 2px);
    /* 顺时针旋转45度 */
    transform: rotate(45deg);
    /* 定义过渡效果 */
    /* 先执行top的变化 然后在.3s后执行transform转换 ease-out是从快速到慢速的过程 */
    transition: top 0.3s ease-out, transform 0.3s ease-out 0.3s;
  }
  // 这里的操作我没看懂，为什么不能使用SubmissionUl呢？
  input:checked ~ ul {
    opacity: 1;
    transform: scaleY(1);
  }
`;

export const SubmissionUl = styled.ul `
  position: relative;
	top: 100px;
	width: 100%;
	/* 元素的不透明度 为0 就是完全透明 */
	opacity: 0;
	/* 让元素缩放到0 就是直接隐藏 */
	transform: scaleY(0);
	/* 这个属性设置元素缩放的中心点 设置到了最上面的中间位置 */
	transform-origin: 50% 0;
	transition: all 0.5s ease-out;
`;

export const SubmissionItem = styled.li `
  list-style: none;
  width: 100%;
  height: 66px;
`;

export const SubmissionInfo = styled.div `
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  line-height: 66px;
  padding-left: 10px;
  font-size: 14px;
  color: #453f86;
  border: 1px solid rgba(198, 217, 237, 0.3);
  box-shadow: 0 15px 20px #c6d9ed;
  transition: all 0.3s ease-out;
  
  &:hover {
    box-shadow: 0 0 0 #fff, 0 15px 20px #c6d9ed inset;
  }
`