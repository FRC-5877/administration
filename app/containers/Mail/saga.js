import { take, call, select, fork } from 'redux-saga/effects';
import { requestPost } from 'utils/request';
import { makeSelectUserId } from 'containers/HomePage/selectors';
import {} from './actions';
import { SEND_MAIL } from './constants';

export function* sendMailSaga(email) {
  const userId = yield select(makeSelectUserId());
  const sendMailUrl = '/api/mail/send';

  try {
    yield call(requestPost, sendMailUrl, { body: email.body, subject: email.subject, uid: userId });
  } catch (err) {
    console.error(JSON.stringify(err));
  }
}

export function* watchSendMail() {
  while (true) {
    const { email } = yield take(SEND_MAIL);
    yield call(sendMailSaga, email);
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield fork(watchSendMail);
}
