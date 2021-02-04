import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    SubmissionWrapper,
    SubmissionUl,
    SubmissionItem,
    Info,
    Problem,
    Submit,
    SubmitTime
}from './style';
class Submission extends PureComponent {
  render() {
    return (
      <SubmissionWrapper>
        <input type="checkbox" id="nav" /><label for="nav"></label>
        <SubmissionUl>
          <SubmissionItem>
            <Info>
              我在题目
            </Info>
            <Problem>
              1.两数之和
            </Problem>
            <Info>
              中使用
            </Info>
            <Problem>
              JavaScript
            </Problem>
            <SubmitTime>
              一天前
            </SubmitTime>
            <Submit className='succ'>
              通过 
            </Submit>
          </SubmissionItem>
          <SubmissionItem>
            <Info>
              我在题目
            </Info>
            <Problem>
              1.两数之和
            </Problem>
            <Info>
              中使用
            </Info>
            <Problem>
              JavaScript
            </Problem>
            <SubmitTime>
              一天前
            </SubmitTime>
            <Submit className='error'>
              编译出错
            </Submit>
          </SubmissionItem>
        </SubmissionUl>
      </SubmissionWrapper>
    )
  }
}

export default Submission;