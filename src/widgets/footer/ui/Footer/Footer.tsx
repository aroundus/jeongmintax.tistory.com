export function Footer() {
  return (
    <footer className="bg-canvas relative z-2 shadow-inner">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-6 py-7">
        <address className="flex flex-col gap-4 not-italic">
          <ul className="flex flex-wrap text-base leading-normal text-stone-400">
            <li className="after:mx-2 after:content-['|']">
              <strong>대표세무사</strong> 임현수
            </li>
            <li className="after:mx-2 after:content-['|']">
              <strong>사업자등록번호</strong> 879-36-01461
            </li>
            <li className="after:mx-2 after:content-['|']">
              <strong>이메일 상담</strong> <a href="mailto:imtax8250@naver.com">imtax8250@naver.com</a>
            </li>
            <li className="after:mx-2 after:content-['|']">
              <strong>전화 상담</strong> 010-7643-3007
            </li>
            <li>
              <strong>주소</strong> 서울시 서초구 사평대로55길 82-3 301호
            </li>
          </ul>
        </address>
      </div>
    </footer>
  );
}
