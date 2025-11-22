import type { Meta, StoryObj } from '@storybook/react';

import type { ArticleService } from '../../api';

import { ArticleList } from './ArticleList';

const meta = {
  argTypes: {},
  component: ArticleList,
  decorators: [
    (Story) => (
      <div style={{ width: 640 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  title: 'entities/article/ArticleListSection/ArticleList',
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ArticleListStory: Story = {
  args: {
    articles: [
      {
        title: '📄 연말정산 서류, 이제 ‘클릭 한 번’으로 끝내세요',
        summary:
          '연말정산 시즌마다 여러 웹사이트를 방문해 서류를 발급받고, 다시 회사에 제출하는 과정이 번거로우셨죠? 이제\n            ‘간소화자료 일괄제공 서비스’를 이용해 보세요. 매년 반복되는 연말정산이 훨씬 간편해질\n            거예요.',
        path: '/20',
        author: '임현수 세무사',
        thumbnailUrl:
          'https://blog.kakaocdn.net/dna/ATFiC/dJMcaajo61y/AAAAAAAAAAAAAAAAAAAAAJnmdM4ZIURvQ7XBK3yL5AB0M8oNGo8Nr3fRgvLTe1hl/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1764514799&allow_ip=&allow_referer=&signature=kOgDFLQyYukaTVUFfosaKU7fTB0%3D',
        category: '세무회계 정민',
        categoryPath: '/category',
        date: '2025-11-23',
        dateTime: '2025-11-23 00:00',
        articleId: 20,
        commentCount: 0,
        content:
          '\n          <p>\n            연말정산 시즌마다 여러 웹사이트를 방문해 서류를 발급받고, 다시 회사에 제출하는 과정이 번거로우셨죠? 이제\n            <strong>‘간소화자료 일괄제공 서비스’</strong>를 이용해 보세요. 매년 반복되는 연말정산이 훨씬 간편해질\n            거예요.\n          </p>\n          <h2 id="‘간소화자료-일괄제공’이-뭔가요?">‘간소화자료 일괄제공’이 뭔가요?</h2>\n          <p></p>\n          <figure class="imageblock alignCenter" data-ke-mobilestyle="widthOrigin" data-origin-width="896" data-origin-height="1280">\n            <span data-url="https://blog.kakaocdn.net/dna/umZ4l/dJMcafkIgBd/AAAAAAAAAAAAAAAAAAAAAMPfk3tRR5KmzRD8mgS94h19YQy5Z77Yd4qP_7aB2rbG/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&amp;expires=1764514799&amp;allow_ip=&amp;allow_referer=&amp;signature=DEtBAk98NfaZVROib2wEvbtNCLA%3D" data-phocus="https://blog.kakaocdn.net/dna/umZ4l/dJMcafkIgBd/AAAAAAAAAAAAAAAAAAAAAMPfk3tRR5KmzRD8mgS94h19YQy5Z77Yd4qP_7aB2rbG/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&amp;expires=1764514799&amp;allow_ip=&amp;allow_referer=&amp;signature=DEtBAk98NfaZVROib2wEvbtNCLA%3D"><img src="https://blog.kakaocdn.net/dna/umZ4l/dJMcafkIgBd/AAAAAAAAAAAAAAAAAAAAAMPfk3tRR5KmzRD8mgS94h19YQy5Z77Yd4qP_7aB2rbG/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&amp;expires=1764514799&amp;allow_ip=&amp;allow_referer=&amp;signature=DEtBAk98NfaZVROib2wEvbtNCLA%3D" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&amp;fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FumZ4l%2FdJMcafkIgBd%2FAAAAAAAAAAAAAAAAAAAAAMPfk3tRR5KmzRD8mgS94h19YQy5Z77Yd4qP_7aB2rbG%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DDEtBAk98NfaZVROib2wEvbtNCLA%253D" onerror="this.onerror=null; this.src=\'//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png\'; this.srcset=\'//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png\';" loading="lazy" width="400" height="571" data-origin-width="896" data-origin-height="1280" data-phocus-index="0"></span>\n          </figure>\n          <p></p>\n          <p>\n            매년 1월이면 연말정산을 위해 개인이 직접 내려받아 회사에 내야 했던 각종 증명 자료들이 있어요. 이 서비스를\n            신청하면, <mark><strong>회사가 필요한 자료를 직접 내려받을 수 있도록 개인이 ‘동의’</strong></mark>해 주는 제도예요.\n          </p>\n          <p>\n            이 서비스 덕분에 개인은 연말정산 자료를 일일이 챙겨 제출할 필요가 없어지고, 회사는 직원들의 서류를 한 번에\n            받을 수 있어 모두의 일이 줄어드는 효과가 있어요.\n          </p>\n          <h2 id="어떻게-신청하나요?">어떻게 신청하나요?</h2>\n          <p>\n            신청 방법은 아주 간단해요.\n            <strong>정해진 기간 안에 홈택스(PC)나 손택스(모바일 앱)에 접속해서 ‘동의’ 버튼을 한 번만 누르면 끝</strong>이에요.\n          </p>\n          <p>\n            한 번 동의해 두면 매년 1월 중순 이후, 회사가 직접 필요한 자료를 조회할 수 있게 돼요. 물론, 회사에 제공하고\n            싶지 않은 민감한 정보는 동의 절차 중 확인 과정에서 제외할 수도 있어요.\n          </p>\n          <h2 id="무엇이-편해지나요?">무엇이 편해지나요?</h2>\n          <ul>\n            <li>\n              <strong>시간 절약:</strong> 연말정산 기간에 여러 사이트를 방문하고, PDF 파일을 내려받아 다시 이메일이나\n              사내 시스템에 올리는 과정을 생략할 수 있어요.\n            </li>\n            <li>\n              <strong>간편한 절차:</strong> 최초 한 번의 동의만으로 연말정산 자료 제출이 완료되니, 신경 쓸 일이 크게\n              줄어들어요.\n            </li>\n            <li>\n              <strong>맞춤형 제출:</strong> 전체 자료 중 일부 민감한 정보(예: 의료비)는 제공 항목에서 빼고 제출할 수\n              있어 개인정보를 보호할 수 있어요.\n            </li>\n          </ul>\n          <h2 id="꼭-알아두세요">꼭 알아두세요</h2>\n          <p>\n            서비스 이용을 위한 <strong>동의는 정해진 신청 기간에만 가능</strong>하니, 놓치지 않도록 주의해야 해요. 또한,\n            이직이나 퇴사 등으로 회사 정보가 바뀐 경우에는 새로 입사한 회사에서 다시 동의 절차를 진행해야 해요.\n          </p>\n        ',
        isLikeActive: true,
        likeCount: 3,
      },
      {
        title: '🌏 세계의 세금 문제를 함께 풀어요! OECD 국세청장회의 소식',
        summary:
          '전 세계 58개국 국세청 대표들이 남아프리카공화국 케이프타운에 모여\n            ‘OECD 국세청장회의(FTA)’를 열었어요. 이 회의는 여러 나라가 마주한 세금 문제들을 함께\n            해결하기 위해 의견을 나누는 중요한 자리랍니다.',
        path: '/19',
        author: '임현수 세무사',
        thumbnailUrl:
          'https://blog.kakaocdn.net/dna/8e1AS/dJMcahpiKqi/AAAAAAAAAAAAAAAAAAAAACz0iSGqsYeO9ZfM6IvEoN2naKnaQwY5EDYiO4ShFg8c/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1764514799&allow_ip=&allow_referer=&signature=w9MHqpozvgYqBAhOMelLEYcKh5g%3D',
        category: '#국제협력',
        categoryPath: '/category/%EA%B5%AD%EC%A0%9C%ED%98%91%EB%A0%A5',
        date: '2025-11-22',
        dateTime: '2025-11-22 23:00',
        articleId: 19,
        commentCount: 0,
        content:
          '\n          <p>\n            전 세계 58개국 국세청 대표들이 남아프리카공화국 케이프타운에 모여\n            <strong>‘OECD 국세청장회의(FTA)’</strong>를 열었어요. 이 회의는 여러 나라가 마주한 세금 문제들을 함께\n            해결하기 위해 의견을 나누는 중요한 자리랍니다.\n          </p>\n          <h2 id="인공지능(ai)과-함께하는-세금-행정">인공지능(AI)과 함께하는 세금 행정</h2>\n          <p>\n            이번 회의의 핵심 주제 중 하나는 바로 <strong>‘디지털 전환과 인공지능(AI)’</strong>이었어요. 기술이\n            발전하면서 세금을 관리하는 방식도 크게 바뀌고 있는데요, 많은 나라가 AI를 활용해 더 편리하고 공정한 세금\n            제도를 만들려고 노력하고 있어요.\n          </p>\n          <p>\n            참석자들은 각국의 경험을 공유하며, 납세자들이 쉽고 편리하게 의무를 다할 수 있도록 돕는 디지털 기술 활용\n            방안을 논의했어요.\n          </p>\n          <h2 id="개발도상국에-노하우를-나눠요">개발도상국에 노하우를 나눠요</h2>\n          <p>\n            세금 제도를 운영하는 데 어려움을 겪는 개발도상국을 돕는 <strong>‘역량 강화 지원’</strong> 방안도 중요하게\n            다뤄졌어요. 선진국들이 자신들의 경험과 기술을 나누어 주면, 개발도상국은 더 안정적으로 세금을 걷고 나라를\n            운영할 수 있게 되죠.\n          </p>\n          <p>이러한 국제적 협력은 전 세계가 함께 성장하는 데 큰 도움이 돼요.</p>\n          <h2 id="나라별로-마주-앉아-협력을-약속해요">나라별로 마주 앉아 협력을 약속해요</h2>\n          <p>\n            전체 회의뿐만 아니라, 나라별로 따로 만나서 이야기하는 시간도 가졌어요. 예를 들어, 다른 나라에 진출한 우리\n            기업들이 세금 문제로 어려움을 겪지 않도록 서로 협력하고, 국가 간 금융 정보를 교환하는 등 구체적인 논의가\n            이루어졌답니다.\n          </p>\n          <p>\n            이런 만남은 국가 간의 신뢰를 쌓고, 다국적 기업의 조세 회피 같은 국제적인 세금 문제를 해결하는 데 중요한\n            역할을 해요.\n          </p>\n          <h2 id="마무리">마무리</h2>\n          <p>\n            OECD 국세청장회의는 <strong>국제적인 세금 문제에 공동으로 대응</strong>하고, 더 나은 세금 환경을 만들기 위한\n            논의의 장이에요. 이러한 국제 공조를 통해 전 세계가 더욱 공정하고 투명한 세금 제도를 갖추게 될 것으로\n            기대돼요.\n          </p>\n        ',
        isLikeActive: true,
        likeCount: 3,
      },
      {
        title: '🍶 우리 술 ‘K-술’이 쑥쑥 크도록! 국세청이 도와준대요!',
        summary:
          '우리나라의 전통주, 즉‘K-술(K-SUUL)’도 세계로 뻗어나가기 위해 준비를 하고 있는데요. 이를\n            위해 국세청이“불필요한 규제는 줄이고, 지원은 늘리겠다!”라고 발표했어요.',
        path: '/18',
        author: '임현수 세무사',
        thumbnailUrl:
          'https://blog.kakaocdn.net/dna/6Jq1L/dJMcaajor9n/AAAAAAAAAAAAAAAAAAAAAP75_isPnNjGv7Wl0n5an3m-64wnA5Z0HiAPwqpEpXSO/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1764514799&allow_ip=&allow_referer=&signature=yrAkbHSuPQEIUvKhzcM7vczcBu4%3D',
        category: '#소비세',
        categoryPath: '/category/%EC%86%8C%EB%B9%84%EC%84%B8',
        date: '2025-11-21',
        dateTime: '2025-11-21 00:30',
        articleId: 18,
        commentCount: 0,
        content:
          '\n          <p>\n            우리나라의 전통주, 즉<strong>‘K-술(K-SUUL)’</strong>도 세계로 뻗어나가기 위해 준비를 하고 있는데요. 이를\n            위해 국세청이<strong>“불필요한 규제는 줄이고, 지원은 늘리겠다!”</strong>라고 발표했어요.\n          </p>\n          <h2 id="“스티커-붙이는-비용과-시간을-아껴드려요!”-(납세증명표지-완화)">\n            “스티커 붙이는 비용과 시간을 아껴드려요!” (납세증명표지 완화)\n          </h2>\n          <p>\n            술을 만들면 세금을 냈다는 증명으로 병뚜껑이나 병에 ‘납세증명표지’라는 스티커를 붙여야 해요.그런데 작은\n            규모의 전통주 양조장에서는 일일이 이걸 붙이는 게 비용도 많이 들고 일손도 부족해서 힘들었대요.그래서 국세청이\n            결단을 내렸어요!\n          </p>\n          <ul>\n            <li>\n              <strong>전통주:</strong>세금을 감면받는 일정 수량까지는 이<strong>스티커를 안 붙여도 되게</strong>기준을\n              확 넓혀줬어요.\n            </li>\n            <li>\n              <strong>신규 소규모 업체:</strong>처음 문을 연 작은 양조장은<strong>첫 분기 동안 스티커 부착 의무를 면제</strong>해 줘서, 초반에 자리를 잡을 수 있게 도와주기로 했답니다.\n            </li>\n          </ul>\n          <p>\n            👉 <strong>한마디로</strong>: 사장님들이 스티커 붙일 돈과 시간으로 더 맛있는 우리 술을 개발하는 데 집중할 수\n            있게 된 거예요!\n          </p>\n          <h2 id="“맛을-봐야-알죠!-시음-행사-더-크게!”-(시음주-규제-완화)">\n            “맛을 봐야 알죠! 시음 행사 더 크게!” (시음주 규제 완화)\n          </h2>\n          <p>\n            새로 나온 과자도 시식 코너가 있어야 맛을 보고 사듯이, 술도 홍보하려면 ‘시음 행사’가 중요해요.하지만 그동안은\n            홍보용으로 쓸 수 있는 술(시음주)의 양이 정해져 있어서 마음껏 홍보하기가 어려웠어요.\n          </p>\n          <ul>\n            <li>\n              <strong>양을 늘려요:</strong>홍보용으로 쓸 수 있는 술의 양을<strong>10~20% 정도 더 늘려줬어요</strong>.\n            </li>\n            <li>\n              <strong>장소도 넓혀요:</strong>예전에는 정해진 홍보관에서만 시음이 가능했는데, 이제는 국가나 지자체가\n              여는<strong>지역 축제나 행사</strong>에서도 소매업자 사장님들이 우리 전통주를 맛보여 줄 수 있게\n              되었답니다.\n            </li>\n          </ul>\n          <p>👉 <strong>한마디로</strong>: 축제에서 우리 전통주를 알릴 기회가 훨씬 많아진다는 뜻이죠!</p>\n          <h2 id="“종이-영수증은-이제-그만!-스마트하게!”-(전자문서-허용)">\n            “종이 영수증은 이제 그만! 스마트하게!” (전자문서 허용)\n          </h2>\n          <p>\n            그동안 술을 거래할 때는 꼭 ‘종이’로 된 계산서를 주고받아야 했대요. 종이는 잃어버리기도 쉽고 보관하기도\n            힘들잖아요?\n          </p>\n          <ul>\n            <li>\n              이제는 전자문서(파일)로도 계산서를 주고받을 수 있게 바뀌어요.분실 걱정도 없고, 종이값도 아낄 수 있어서\n              훨씬 편리해지겠죠?\n            </li>\n          </ul>\n          <h2 id="“관광지에는-술-도매상이-더-생길-수-있어요!”-(면허-기준-개선)">\n            “관광지에는 술 도매상이 더 생길 수 있어요!” (면허 기준 개선)\n          </h2>\n          <p>\n            술을 전문적으로 납품하는 도매업을 하려면 허가(면허)가 필요한데, 그동안은 그 지역의 ‘인구수’를 중요하게\n            봤어요.그러다 보니 사람은 적지만 관광객이 많아서 술 소비가 많은 관광지에는 새로운 도매상이 생기기 어려웠죠.\n          </p>\n          <ul>\n            <li>\n              앞으로는 <strong>‘인구수’</strong>와<strong>‘술 소비량’</strong>중 더 큰 숫자를 기준으로 면허를 내주기로\n              했어요.이렇게 되면 관광지처럼 실제 수요가 많은 곳에 새로운 업체들이 들어와서 더 활발하게 경쟁할 수 있겠죠?\n            </li>\n          </ul>\n          <h2 id="마무리">마무리</h2>\n          <p>\n            이번 국세청의 발표는<strong>“우리 술을 만드는 분들이 더 편하게 일하고, 더 많이 홍보해서, 세계적인 명품 술을 만들 수 있도록 기초\n              체력을 키워주자!”</strong>는 뜻이에요.규제가 풀려서 우리 전통주 시장이 활발해지면, 더욱 멋지고 자랑스러운 ‘K-술’ 문화를 만날 수 있을\n            거예요.\n          </p>\n        ',
        isLikeActive: true,
        likeCount: 3,
      },
    ] as ArticleService.Article[],
  },
};

ArticleListStory.storyName = 'ArticleList';
