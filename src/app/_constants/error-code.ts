export enum ErrorCode {
  UNKNOWN = 0,
  RAW_HTTP_ERROR = 1,
  ASSERTION = 2,
  UNAUTHENTICATED = 10001,
  FORBIDDEN = 10002,
  POST_SESSION_INVALID_USERNAME_OR_PASSWORD = 20201,
  GET_STUDENT_NO_SUCH_STUDENT = 30101,
  POST_STUDENT_USERNAME_ALREADY_EXISTS = 30201,
  GET_NOTICE_NO_SUCH_NOTICE = 40101,
  PUT_NOTICE_NO_SUCH_NOTICE = 40302,
  DELETE_NOTICE_NO_SUCH_NOTICE = 40403,
}