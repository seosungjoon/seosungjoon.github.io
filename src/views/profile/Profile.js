import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from '@coreui/react'

const Profile = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>학력 / Education</strong>
          </CCardHeader>
          <CCardBody>
            <CCard >
              <CCardBody>
                <CCardTitle><strong>세종대학교</strong></CCardTitle>
                <CCardSubtitle className="mb-2 text-medium-emphasis">
                  <p className="text-medium-emphasis small">
                    학사(4년제) / 서울
                  </p>
                </CCardSubtitle>
                <CCardText>
                  재학기간 : 2014.03~2020.02 | 재학여부 : 졸업(공학인증 수료)
                  <br/>
                  주전공 : 컴퓨터공학과
                  <br/>
                  [ 총 이수학점 : 130학점 (4.08 / 4.5) ]
                </CCardText>
              </CCardBody>
            </CCard>
            <p></p>
            <CCard >
              <CCardBody>
                <CCardTitle><strong>창현고등학교</strong></CCardTitle>
                <CCardSubtitle className="mb-2 text-medium-emphasis">
                  <p className="text-medium-emphasis small">
                    고등학교 / 수원
                  </p>
                </CCardSubtitle>
                <CCardText>
                  재학기간 : 2011.03~2014.02 | 재학여부 : 졸업
                </CCardText>
              </CCardBody>
            </CCard>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>경력 / Career</strong>
          </CCardHeader>
          <CCardBody>
            <CCard >
              <CCardBody>
                <CCardTitle><strong>롯데정보통신</strong></CCardTitle>
                <CCardSubtitle className="mb-2 text-medium-emphasis">
                  <p className="text-medium-emphasis small">
                    서울
                  </p>
                </CCardSubtitle>
                <CCardText>
                    근무기간 : 2020.01.03 ~ 2023.06.21 | 직급 : 선임(대리)
                  <br/>
                  직무 : B2C 온라인채널 홈페이지 / 사내 ERP 시스템 / 사내 웹앱 개발 및 유지보수
                  <br/>
                  사용 언어 : JavaScript, React, Java, Spring, Android, Xplatform
                </CCardText>
              </CCardBody>
            </CCard>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>자격증 / Certificate</strong>
          </CCardHeader>
          <CCardBody>
            <CCard >
              <CCardBody>
                <CCardTitle><strong>정보처리기사</strong></CCardTitle>
                <CCardText>
                  주관처 : 한국산업인력공단 | 취득일 : 2019.11.22
                </CCardText>
              </CCardBody>
            </CCard>
            <p></p>
            <CCard >
              <CCardBody>
                <CCardTitle><strong>ITQ 정보기술자격(OA MASTER)</strong></CCardTitle>
                <CCardText>
                  주관처 : 한국생산성본부 | 취득일 : 2012.08.02
                </CCardText>
              </CCardBody>
            </CCard>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>수상경력 / Prize</strong>
          </CCardHeader>
          <CCardBody>
            <CCard >
              <CCardBody>
                <CCardTitle><strong>제 7회 창의설계경진대회 최우수상</strong></CCardTitle>
                <CCardText>
                  머신러닝을 통한 중고 책 거래가 자동측정 모듈 구축
                  <br/>
                  주관처 : 세종대학교 소프트웨어 중심대학 사업단 | 수상일 : 2019.06.07
                </CCardText>
              </CCardBody>
            </CCard>
            <p></p>
            <CCard >
              <CCardBody>
                <CCardTitle><strong>세종대학교 ICT 아이디어 공모전 최우수상</strong></CCardTitle>
                <CCardText>
                  김정호가 VR기술을 접목시킨 드론과 3D맵핑 기술을 활용한다면? 아이디어 제출
                  <br/>
                  주관처 : 세종대학교 | 수상일 : 2018.12.10
                </CCardText>
              </CCardBody>
            </CCard>
            <p></p>
            <CCard >
              <CCardBody>
                <CCardTitle><strong>제 5회 창의설계경진대회 우수상</strong></CCardTitle>
                <CCardText>
                  멀티플랫폼을 위한 GIS 어플리케이션 기획 및 개발
                  <br/>
                  주관처 : 세종대학교 소프트웨어 중심대학 사업단 | 수상일 : 2018.06.08
                </CCardText>
              </CCardBody>
            </CCard>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>기타 활동 / Activity</strong>
          </CCardHeader>
          <CCardBody>
            <CCard >
              <CCardBody>
                <CCardTitle><strong>대한민국 자전거 국토종주</strong></CCardTitle>
                <CCardText>
                  인천아라뱃길부터 낙동강하굿둑까지의 633km 자전거길을 자전거로 종주  | 기간 2019.07.17 ~ 2019.07.22
                </CCardText>
              </CCardBody>
            </CCard>
          </CCardBody>
        </CCard>
      </CCol>






    </CRow>
  )
}

export default Profile
