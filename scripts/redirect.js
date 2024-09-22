/**
 * 직접 모바일 주소로 접속한 경우 리디렉션
 *
 * 블로그 관리 - 플러그인 - 구글 애널리틱스 - 측정 ID 또는 추적 ID - 다음 값을 입력합니다.
 * ');</script><script src="[redirect.js 파일 주소]"></script><script>('
 */
if (location.pathname.startsWith('/m')) {
  location.href = `https://${location.host}/${location.pathname.replace('/m', '')}`;
}