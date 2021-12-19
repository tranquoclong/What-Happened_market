import React from "react";
import snsicon_01 from "../../assets/Images/snsicon-01.png";
import snsicon_02 from "../../assets/Images/snsicon-02.png";
import snsicon_03 from "../../assets/Images/snsicon-03.png";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer-first">
        <div>
          <h4>what happened</h4>
          <p className="footer-col-1">
            [공지] 개인 정보 처리 방침 변경 사전 안내 <br />
            [공지] 29CM 강남 스토어 영업 종료 <br />
            [공지] 개인 정보 처리 방침 변경 사전 안내 <br />
            [공지] iOS 10 이하 버전 지원 중단 안내 <br />
            [공지] 개인 정보 처리 방침 변경 사전 안내
          </p>
        </div>
        <div>
          <h4>about us</h4>
          <p className="footer-col-2">회사 소개 인재 채용 상시 할인 혜택</p>
        </div>
        <div>
          <h4>my order</h4>
          <p className="footer-col-3">
            내 주문 주문 배송 취소 / 교환 / 반품 내역 상품 리뷰 내역 증빙 서류
            발급
          </p>
        </div>
        <div>
          <h4>my account</h4>
          <p className="footer-col-4">
            회원 정보 수정 회원 등급 마일리지 현황 쿠폰
          </p>
        </div>
        <div>
          <h4>help</h4>
          <p className="footer-col-5">
            1 : 1 상담 내역 상품 Q & A 내역 공지 사항 자주하는 질문 고객의 소리
          </p>
        </div>
      </div>
      <hr />
      <div className="footer-second">
        <p className="footer-second_f">
          © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜
          사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
          서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스
          이용약관 l 개인정보처리방침
        </p>
        <div className="footer-second_icon">
          <img src={snsicon_01} alt="" />
          <img src={snsicon_02} alt="" />
          <img src={snsicon_03} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
