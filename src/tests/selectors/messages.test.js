import React from 'react';
import { select } from 'redux-saga/effects';
import { last } from 'lodash';
import messages from '../fixtures/messages';
import {
  selectMessages,
  conversationSelector,
  selectLastMessage,
  selectLastMessageTimestamp,
  selectActiveConversationId,
  selectConversationist,
  addUsernamesToMessage
} from '../../state/messages/selectors';
import state from '../fixtures/root-reducer';

test('should select array of messages from state', () => {
  const result = selectMessages(state);
  expect(result).toEqual(messages.messages);
});

test('should select messages from state', () => {
  const result = conversationSelector(state);
  expect(result).toEqual(messages);
});

test('should select last message', () => {
  const result = selectLastMessage(state);
  const lastMessage = last(messages.messages);
  expect(result).toEqual(lastMessage);
});

test('should select last message timestamp', () => {
  const result = selectLastMessageTimestamp(state);
  const lastMessageTimestamp = last(messages.messages).timestamp;
  expect(result).toEqual(lastMessageTimestamp);
});

test('should select active conversation id', () => {
  const result = selectActiveConversationId(state);
  const activeConversationId = messages.id;
  expect(result).toEqual(activeConversationId);
});

test('should select conversationist', () => {
  const result = selectConversationist(state);
  const conversationist = messages.conversetionist;
  expect(result).toEqual(conversationist);
});
