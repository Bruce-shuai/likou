import React, { PureComponent } from 'react';
import {
    DiscussionWrapper,
    DiscussionUl,
    DiscussionItem,
    DiscussionInfo
}from './style';
class Discussion extends PureComponent {
  render() {
    return (
      // Ul 相当于ul     item 相当于li
      <DiscussionWrapper>
        <input type="checkbox" id="nav" /><label for="nav"></label>
        <DiscussionUl>
          <DiscussionItem>
            <DiscussionInfo>
              项目1
            </DiscussionInfo>

          </DiscussionItem>
          <DiscussionItem>
            <DiscussionInfo>
              项目2
            </DiscussionInfo>
          </DiscussionItem>
          <DiscussionItem>
            <DiscussionInfo>
              项目3
            </DiscussionInfo>
          </DiscussionItem>
        </DiscussionUl>
      </DiscussionWrapper>
    )
  }
}

export default Discussion;