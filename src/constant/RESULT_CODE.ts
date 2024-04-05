const RESULT_CODE = (<T extends {[key: string]: number}>(arg: T): T => arg)({
  OK: 0, // 정상

  /* MARKET 에러 - 90XX */
  NOT_FOUND_MARKET: 9001,

  /* COMMON 에러 - 100XX */
  INVALID_PARAMETER: 10001,
  INVALID_REQUEST_DATE: 10002,
  UNDEFINED_PAGE: 10011,

  /* AUTH 관련 에러 - 102XX */
  AUTH_NEED_LOGIN: 10201,
  AUTH_NEED_ADMIN: 10202,
  AUTH_WRONG_ID_PW: 10205,
  AUTH_UNAPPROVED_ACCOUNT: 10206,
  AUTH_SUSPENDED_ACCOUNT: 10207,
  AUTH_WITHDRAWN_ACCOUNT: 10212,
  AUTH_INVALID_USER_ID: 10208,
  AUTH_INVALID_VERIFICATION_CODE: 10209,
  AUTH_FAILED_TO_REQUEST_TOKEN: 10210,
  AUTH_FAILED_TO_VERIFY_TOKEN: 10210,
  AUTH_NEW_PASSWORD_IS_SAME_WITH_CURRENT_PASSWORD: 10211,
  AUTH_INVALID_USER_PASSWORD: 10212,
  DUPLICATED_PHONE: 10213,
  NOT_FOUND_USER: 10214,
  NOT_FOUND_ADMIN: 10215,
  NOT_PERMISSION: 10215,
  DUPLICATED_ADMIN_ID: 10216,
  AUTH_NEED_ACCESS_ID: 10217,
  BODY_VALIDATION_ERROR: 10218,
  AUTH_OTHER_LOGGED_IN: 10219,
  AUTH_NEED_NAME: 12220,
  AUTH_NEED_PASSWORD: 12221,
  AUTH_NEED_ADMIN_ID: 12222,

  /* SQS 관련 에러 - 103XX */
  SQS_PARSING_BODY_FAIL: 10301,
  UNDEFINED_CODE: 10302,
  SQS_SENDING_MESSAGE_FAIL: 10311,

  /* VERIFICATION 관련 에러 - 104XX */
  AUTH_NEED_PHONE_NUMBER: 10401,
  VERIFICATION_TOKEN_NOT_FOUND: 10402,
  AUTH_NEED_KEY: 10403,
  NOT_FOUND_VERIFICATION: 10404,
  ONLY_SMS_TYPE_VERIFICATION: 10405,

  /* GROUP 관련 에러 - 105XX */
  DUPLICATED_GROUP_NAME: 10501,
  SELECT_ERROR: 10502,
  NOT_FOUND_GROUP: 10503,
  GROUP_NAME_IS_REQUIRE: 10504,
  NOT_CREATE_ERROR: 10505,

  /* MENU 관련 에러 - 106XX */
  DUPLICATED_MENU: 10601,
  NOT_FOUND_MENU: 10602,

  /* MENU_CATEGORY 관련 에러 - 107XX */
  DUPLICATED_MENU_CATEGORY: 10701,
  NOT_FOUND_MENU_CATEGORY: 10702,

  /* MENU_OPTION_CATEGORY 관련 에러 - 108XX */
  DUPLICATED_MENU_OPTION_CATEGORY: 10801,
  NOT_FOUND_MENU_OPTION_CATEGORY: 10802,

  /* MENU_OPTION 관련 에러 - 109XX */
  DUPLICATED_MENU_OPTION: 10901,
  NOT_FOUND_MENU_OPTION: 10902,

  /* TABLE 관련 에러 - 110XX */
  DUPLICATED_TABLE: 11001,
  NOT_FOUND_TABLE: 11002,

  /* PUSH 관련 에러 - 111XX */
  NOT_FOUND_PUSH_TOKEN: 11101,
  NOT_FOUND_DEVICE_SERIAL: 11102,
  NOT_FOUND_DEVICE_PLATFORM: 11103,

  /* ORDER 관련 에러 - 120XX */
  NOT_FOUND_ORDER: 12001,
  NOT_FOUND_ORDER_MENU: 12002,
  NOT_FOUND_ORDER_MENU_OPTION: 12003,
  CALL_CREATE_STATS_API_NULL: 12051,
  CALL_CREATE_STATS_API_UNKNOWN: 12052,
  NON_BUSINESS_HOURS: 12112,
  BREAK_TIME: 12113,
  FAIL_TO_VALIDATE_TABLE_CODE: 12131,

  UNKNOWN_ERROR: 99999, // 알 수 없는 오류
});

export default RESULT_CODE;
