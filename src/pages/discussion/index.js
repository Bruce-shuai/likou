import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
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
    return (
      // Ul 相当于ul     item 相当于li
      <DiscussionWrapper>
        <input type="checkbox" id="nav" /><label for="nav"></label>
        <DiscussionUl>
          <DiscussionItem>
            <Info>
              发布讨论
            </Info>
            <Link to='/content'>
            <Title>
              【求职面试】区的个人感想
            </Title>
            </Link>
            <DateTime>
              一天前
            </DateTime>
            <Num>4</Num>
            <i className='iconfont'>&#xe629;</i>
          </DiscussionItem>
        </DiscussionUl>
      </DiscussionWrapper>
    )
  }
}

export default Discussion;