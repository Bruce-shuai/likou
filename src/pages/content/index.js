import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    ContentWrapper,
    Question,
    Talk,
    Title,
    Info,
    Label,
    AInfo,
    Space,
    User,
    Answer
}from './style';
class Content extends PureComponent {
  
  getAnswerArea(answerBtn) {
    if ( answerBtn === true) {
      return (
        <Answer>
        <AInfo>
          <i className='iconfont'>&#xe6dd;</i>
          <User>
            帅得乱七八糟
          </User>
          <div className='info'>
            但还有一种情况：为了使盒子布局美观，需要对盒子设置一个初始高度，当盒子中的内容很少时，保持这个初始高度，如果内容超过该盒子初始高度的容量，则盒子的高度根据内容自动调整增高。所以这时需要设置一个具体的DIV盒子高度值，又要使其能够在超过初始高度时自适应。
          </div>
          </AInfo>
    </Answer>
      )
    } else {
      return null;
    }  
  }

  getTalkArea(talkBtn) {
    const { handleAnswerBtn, answerBtn } = this.props;
    if (talkBtn === true) {
      return(
        <Talk>
          <Space></Space>
          <AInfo>
          <i className='iconfont'>&#xe6dd;</i>
          <User>
            帅得乱七八糟
          </User>
          <div className='info'>
            但还有一种情况：
          </div>
          </AInfo>
          <div className='talk'>
            查看回复
            <i id='Area' className='iconfont' onClick={()=>handleAnswerBtn(answerBtn)}>&#xe6b6;</i>
          </div>
          {
            this.getAnswerArea(answerBtn)
          }
        </Talk>

      )
    } else {
      return null;
    }
  }
  render() {
    const { talkBtn, handleTalkBtn } = this.props;
    return (
      // Ul 相当于ul     item 相当于li
      <ContentWrapper>
        <Question>
        <i className='iconfont'>&#xe6dd;</i>
        <Title>
          【求职面试
        </Title>
        <Info>
        <div>
          <i id='Area' className='iconfont' onClick={()=>handleTalkBtn(talkBtn)}>&#xe6b6;</i>
          <Label htmlFor='Area'>
          查看讨论
          </Label>
          </div>
        </Info>
        </Question>
        {
          this.getTalkArea(talkBtn)
        }
      </ContentWrapper>
    )
  }
}

const mapState = (state) => ({
  talkBtn: state.getIn(['content','talkBtn']),
  answerBtn: state.getIn(['content', 'answerBtn'])
})

const mapDispatch = (dispatch) => ({
  handleTalkBtn(btn) {
    const action = {
      type: 'talk_btn',
      btn: btn
    }
    dispatch(action);
  },
  handleAnswerBtn(btn) {
    const action = {
      type: 'answer_btn',
      btn: btn
    }
    dispatch(action);
  }
})
export default connect(mapState, mapDispatch)(Content);