import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';
import {
    DiscussionWrapper,
    DiscussionUl,
    DiscussionItem,
    Info,
    Title,
    DateTime,
    Num
}from './style';
class Discussion extends PureComponent {
  render() {
    const { dataList, getMoreDisList } = this.props;
    return (
      <DiscussionWrapper>
        <input type="checkbox" id="nav" /><label for="nav"></label>
        <DiscussionUl>
          <DiscussionItem>
            <Info>
              发布讨论
            </Info>
            <Link to='/content'>
            <Title>
              { dataList.problemComment.problemName }
            </Title>
            </Link>
            <DateTime>
            { dataList.problemComment.commentDatetime }
            </DateTime>
            {/* 这里之后设置成length */}
            <Num>4</Num>
            <i className='iconfont'>&#xe629;</i>
          </DiscussionItem>
        </DiscussionUl>
        { getMoreDisList() }
      </DiscussionWrapper>
    )
  }
}

const mapState = (state)=>({
  dataList: state.getIn(['discussion', 'data'])
})

const mapDispatch = (dispatch) => ({
  getMoreDisList() {
    dispatch(actionCreators.MoreDisList())
  }
})

export default connect(mapState, mapDispatch)(Discussion);