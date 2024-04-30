import React from 'react'

import {

  CCard,
  CCardBody,
  CCardHeader, CCardText, CCardTitle,
  CCol,
  CRow,

} from '@coreui/react'



const Dashboard = () => {


  return (
    <>
      <CRow>
        <CCol xs={12}>
          <p><strong>My Dev-footprints</strong></p>

          <CCard textColor={'dark'} className={`mb-3 border-top-success border-top-3`}>
            <CCardHeader>
              <strong>2017. 01</strong>
            </CCardHeader>
            <CCardBody>
              <CCardTitle><strong>개발자 진로 결정</strong></CCardTitle>
              <CCardText >
                과학기술정보통신부 정보통신기획평가원이 주관하는 소프트웨어 중심대학 사업에 본교가 선정되어, SW관련 교육을 더욱 체계적으로 받을 수 있기에
                본격적으로 개발자라는 직업에 관심을 가지게 되었습니다.<br/>
                많은 IT 분야 중 현대사회에 없어서는 안 될 모바일 스마트폰 어플리케이션 개발에 큰 관심을 갖게 되었습니다.
                이에 안드로이드 어플리케이션 개발자를 목표로 진로를 결정하고 학습을 시작하였습니다.
              </CCardText>
            </CCardBody>
          </CCard>
          <CCard textColor={'dark'} className={`mb-3 border-top-danger border-top-3`}>
            <CCardHeader>
              <strong>2018. 03</strong>
            </CCardHeader>
            <CCardBody>
              <CCardTitle><strong>이공계 국가우수장학금 2년지원 선정</strong></CCardTitle>
              <CCardText >
                한국장학재단에서 운영하는 이공계 우수학생을 위한 국가우수장학금에 선정되었습니다.<br/>
                덕분에 졸업까지 가장 큰 걱정이었던 등록금 문제를 신경쓰지 않고 전공 공부에 좀더 집중할 수 있었습니다.<br/>
                여러모로 큰 도움이 되었고 공부할 수 있는 동기를 부여해 주는 계기였습니다.
              </CCardText>
            </CCardBody>
          </CCard>
          <CCard textColor={'dark'} className={`mb-3 border-top-info border-top-3`}>
            <CCardHeader>
              <strong>2018. 12</strong>
            </CCardHeader>
            <CCardBody>
              <CCardTitle><strong>IOT 아이디어 공모전 최우수상</strong></CCardTitle>
              <CCardText >
                세종대학교가 주관한 교내 IOS 아이디어 공모전입니다.<br/>
                과거의 인물이 최신 IT기술을 가지게 된다면 어떤 변화를 가져올지에 대한 대회입니다.<br/>
                저희 팀은 김정호가 VR을 접목한 드론 및 3D 모델링 기술을 가지고 대동여지도를 제작했으면 어땠을까 라는 아이디어를 제시하였고,<br/>
                결과로 최우수상을 수상하였습니다.
              </CCardText>
            </CCardBody>
          </CCard>
          <CCard textColor={'dark'} className={`mb-3 border-top-dark border-top-3`}>
            <CCardHeader>
              <strong>2019. 06</strong>
            </CCardHeader>
            <CCardBody>
              <CCardTitle><strong>SW 창의설계 경진대회 최우수상</strong></CCardTitle>
              <CCardText >
                세종대학교 SW중심대학이 주관하는 제7회 창의설계 경진대회입니다.<br/>
                자유로운 주제로 참여하는 대회이며, 저희 팀은 Google Vision API와 AWS를 활용하여 중고책 거래가를 AI가<br/>
                자동으로 측정해주는 모듈을 개발하여 대회에 참가했습니다. <br/>결과로 최우수상을 수상하였습니다.
              </CCardText>
            </CCardBody>
          </CCard>
          <CCard textColor={'dark'} className={`mb-3 border-top-primary border-top-3`}>
            <CCardHeader>
              <strong>2020. 01</strong>
            </CCardHeader>
            <CCardBody>
              <CCardTitle><strong>학생에서 직장인으로</strong></CCardTitle>
              <CCardText >
                2020년 1월, 졸업과 동시에 롯데정보통신에 입사하여 개발자로서의 첫 발을 내딛게 되었습니다.<br/>
                비록 목표였던 안드로이드 어플리케이션 개발 직무는 아니었으나, 주어진 일에 최선을 다하여 성장하였습니다.<br/>
              </CCardText>
            </CCardBody>
          </CCard>
          <CCard textColor={'dark'} className={`mb-3 border-top-success border-top-3`}>
            <CCardHeader>
              <strong>And, Next?</strong>
            </CCardHeader>
            <CCardBody>
              <CCardTitle><strong>5년차의 Full-Stack 개발자</strong></CCardTitle>
              <CCardText >
                웹 서비스 (JavaScript, Java, X platform, React 등) 기반의 5년차 WEB 개발자입니다.
                <br/>
                서비스 유지보수와 더불어 새로운 기술에 관심이 많습니다
                <br/>
                • API GW 기반 R&D 개발 경험
                <br/>
                • 웹 앱 서비스의 프론트 엔드, Spring 개발 운영 경험
                <br/>
                • B2C 온라인채널 개발 및 유지보수
                <br/>
                • 사내 ERP 시스템 개발 및 유지보수
                <br/>
                • 제한된 리소스 환경에서 기획 단계부터 참여한 프로젝트 다수
                <br/>
                • 다양한 팀과의 협업 경험
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>

      </CRow>

    </>
  )
}

export default Dashboard
