import React from 'react'

import {

  CCard,
  CCardBody,
  CCardHeader, CCardSubtitle, CCardText, CCardTitle, CCardLink,
  CCol,
  CRow,

} from '@coreui/react'

const AllList = () => {

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>롯데정보통신 / 2020.01 ~ 2023.06 / 3년 6개월 </strong>
            </CCardHeader>
            <CCardBody>
              <CCard textColor={'dark'} className={`mb-3 border-top-danger border-top-3`}>
                <CCardBody>
                  <CCardTitle><strong>주요 업무 </strong></CCardTitle>
                  <CCardText>
                    - B2C 온라인채널 홈페이지 개발 및 유지보수<br/>
                    - 사내 ERP시스템 개발 및 유지보수<br/>
                    - 사내 웹앱 개발 및 유지보수<br/>
                  </CCardText>
                </CCardBody>
              </CCard>
              <p></p>
              <CCard textColor={'dark'} className={`mb-3 border-top-info border-top-3`}>
                <CCardBody>
                  <CCardTitle><strong>1. 개인 신용평가(Credit Scoring System) 솔루션 고도화 </strong></CCardTitle>
                  <CCardText>
                    - 기간 : 2022.08 ~ 2023.02 ( 7개월 )<br/>
                    - 기여도 : 70%<br/>
                    - 역할 : WEB개발<br/>
                    - 성과: 고객 체감 심사기능 AS-IS 대비 로딩시간 80% 절감<br/>
                    - 사용기술(언어): JavaScript, Spring, SAP<br/>
                  </CCardText>
                </CCardBody>
              </CCard>
              <p></p>
              <CCard textColor={'dark'} className={`mb-3 border-top-info border-top-3`}>
                <CCardBody>
                  <CCardTitle><strong>2. 사내 플랫폼 구축 소규모 프로젝트</strong></CCardTitle>
                  <CCardText>
                    - 기간 : 2022.06 ~ 2022.12 ( 7개월 )<br/>
                    - 기여도 : 60%<br/>
                    - 역할 : WEB개발<br/>
                    - 성과: 팀 내 불필요 프로세스 약 50% 절감<br/>
                    - 사용기술(언어): React, Spring Boot, Gitlab, Jenkins<br/>
                  </CCardText>
                </CCardBody>
              </CCard>
              <p></p>
              <CCard textColor={'dark'} className={`mb-3 border-top-info border-top-3`}>
                <CCardBody>
                  <CCardTitle><strong>3. B2C 온라인채널 일부 페이지 개편</strong></CCardTitle>
                  <CCardText>
                    - 기간 : 2022.02 ~ 2022.05 ( 4개월 )<br/>
                    - 기여도 : 70%<br/>
                    - 역할 : WEB개발<br/>
                    - 성과: 고객 관련 VOC 감소(약 70%), 향후 유사 프로젝트 시 참고 페이지로 활용<br/>
                    - 사용기술(언어): JavaScript, Spring, myBatis, Oracle<br/>
                  </CCardText>
                </CCardBody>
              </CCard>
              <p></p>
              <CCard textColor={'dark'} className={`mb-3 border-top-info border-top-3`}>
                <CCardBody>
                  <CCardTitle><strong>4. 사내 칭찬문화(ESG경영) 플랫폼 구축</strong></CCardTitle>
                  <CCardText>
                    - 기간 : 2021.11 ~ 2022.04 ( 6개월 )<br/>
                    - 기여도 : 30%<br/>
                    - 역할 : 프로젝트 지원<br/>
                    - 성과: 사내 칭찬문화 활성화 기여 (총 임직원 중 65%이상 플랫폼 이용)<br/>
                    - 사용기술: Thymeleaf, Spring, MySQL<br/>
                  </CCardText>
                </CCardBody>
              </CCard>
              <p></p>
              <CCard textColor={'dark'} className={`mb-3 border-top-info border-top-3`}>
                <CCardBody>
                  <CCardTitle><strong>5. 온라인채널 내 중고차 승계 간편심사 서비스 도입</strong></CCardTitle>
                  <CCardText>
                    - 기간 : 2021.10 ~ 2021.12 ( 3개월 )<br/>
                    - 기여도 : 50%<br/>
                    - 역할 : WEB개발<br/>
                    - 성과: 고객이 영업매니저를 거치지 않고 직접 신용 심사 기능 개발 -≫ 승계 프로세스 단축<br/>
                    - 사용기술(언어): JavaScript, Spring, SAP<br/>
                    - 프로그램 : Eclipse, SAP<br/>

                  </CCardText>
                </CCardBody>
              </CCard>
              <p></p>
              <CCard textColor={'dark'} className={`mb-3 border-top-info border-top-3`}>
                <CCardBody>
                  <CCardTitle><strong>6. 사내 ERP시스템 개발 및 유지보수</strong></CCardTitle>
                  <CCardText>
                    - 기간 : 2020.03 ~ 2022.03 ( 3년 )<br/>
                    - 기여도 : 20%<br/>
                    - 역할 : ERP 시스템 개발 및 유지보수<br/>
                    - 성과: ERP시스템 성능 향상 및 업무 효율화 기여<br/>
                    - 사용 기술(언어): Xplatform<br/>
                    - 프로그램 : Xplatform, Eclipse<br/>

                  </CCardText>
                </CCardBody>
              </CCard>
              <p></p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      </>
  )
}

export default AllList
