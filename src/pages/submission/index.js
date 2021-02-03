import React, { PureComponent } from 'react';
import {
    SubmissionWrapper,
    SubmissionUl,
    SubmissionItem,
    SubmissionInfo
}from './style';
class Submission extends PureComponent {
    render() {
        return (
            <SubmissionWrapper>
        <input type="checkbox" id="nav" /><label for="nav"></label>
        <SubmissionUl>
          <SubmissionItem>
            <SubmissionInfo>
              我在题目
            </SubmissionInfo>
          </SubmissionItem>
          <SubmissionItem>
            <SubmissionInfo>
              项目2
            </SubmissionInfo>
          </SubmissionItem>
          <SubmissionItem>
            <SubmissionInfo>
              项目3
            </SubmissionInfo>
          </SubmissionItem>
        </SubmissionUl>
      </SubmissionWrapper>
        )
    }
}

export default Submission;