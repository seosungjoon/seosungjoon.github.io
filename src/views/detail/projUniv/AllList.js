import React from 'react'

import {

  CCard,
  CCardBody,
  CCardHeader, CCardSubtitle, CCardText, CCardTitle, CCardLink,
  CCol,
  CRow,

} from '@coreui/react'
import {Link} from "react-router-dom";

const AllList = () => {

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>활동사항 / Projects</strong>
            </CCardHeader>
            <CCardBody>
              <CCard >
                <CCardBody>
                  <CCardTitle><strong>창의설계경진대회2019 (세종창의학기제 Ⅲ,Ⅳ) </strong></CCardTitle>
                  <CCardText>
                    머신러닝을 통한 중고 책 거래가 자동측정 모듈 구축
                  <br/>
                    활동유형 : 공모전/대회 | 활동기간 : 2019.03.01~2019.06.07
                  </CCardText>
                  <Link to ="/detail/projUniv/UnivChang2019">창의설계경진대회(세종창의학기제 Ⅲ,Ⅳ) 활동 결과물 보기</Link>
                </CCardBody>
              </CCard>
              <p></p>
              <CCard >
                <CCardBody>
                  <CCardTitle><strong>캡스톤디자인(산학협력프로젝트)</strong></CCardTitle>
                  <CCardText>
                    세종대학교 고전독서 관리 시스템 구축
                    <br/>
                    활동유형 : 수업/프로젝트 | 활동기간 : 2019.03.01~2019.06.07
                  </CCardText>
                  <CCardText>
                    <Link to ="/detail/projUniv/UnivCapstone">캡스톤디자인(산학협력프로젝트) 활동 결과물 보기</Link>
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
                    활동유형 : 공모전/대회 | 활동기간 : 2018.11.20~2018.12.10
                  </CCardText>
                  <CCardText>
                    <Link to ="/detail/projUniv/UnivIctidea">세종대학교 ICT 아이디어 공모전 활동 결과물 보기</Link>
                  </CCardText>
                </CCardBody>
              </CCard>
              <p></p>
              <CCard >
                <CCardBody>
                  <CCardTitle><strong>창의설계경진대회2018 (세종창의학기제 Ⅰ,Ⅱ)</strong></CCardTitle>
                  <CCardText>
                    멀티플랫폼을 위한 GIS 어플리케이션 기획 및 개발
                    <br/>
                    활동유형 : 공모전/대회 | 활동기간 : 2018.03.01~2018.06.08
                  </CCardText>
                  <Link to ="/detail/projUniv/UnivChang2018">창의설계경진대회(세종창의학기제 Ⅰ,Ⅱ) 활동 결과물 보기</Link>
                </CCardBody>
              </CCard>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      </>
  )
}

export default AllList
