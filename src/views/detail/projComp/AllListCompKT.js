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
              <strong>KT DS / 2024.03 ~ / 재직중 </strong>
            </CCardHeader>
            <CCardBody>
              <CCard textColor={'dark'} className={`mb-3 border-top-success border-top-3`}>
                <CCardBody>
                  <CCardTitle><strong>업무 회고 </strong></CCardTitle>
                  <CCardText>
                    개발을 진행함에 있어 업무 Review 및 회고사항은<br/>
                    아래 Notion 링크에서 확인하실 수 있습니다.<br/>
                  </CCardText>
                  <CCardText>
                    <Link target="\_blank" to ="https://ehaken95.notion.site/Dev-s-Story-1b2acf74360f4b2ab873c20b384fc3e6">Notion 사이트에서 확인하기</Link>
                  </CCardText>
                </CCardBody>
              </CCard>
              <CCard textColor={'dark'} className={`mb-3 border-top-danger border-top-3`}>
                <CCardBody>
                  <CCardTitle><strong>주요 업무 </strong></CCardTitle>
                  <CCardText>
                    - API Gateway 솔루션 백엔드 개발<br/>
                    - 멀티테넌시, Java 17 등 R&D 업무 수행<br/>
                    - WIS, AWS Summit 전시회 보유 솔루션 출품<br/>
                  </CCardText>
                </CCardBody>
              </CCard>
              <p></p>
              <CCard textColor={'dark'} className={`mb-3 border-top-info border-top-3`}>
                <CCardBody>
                  <CCardTitle><strong>1. API Gateway 솔루션 백엔드 개발 </strong></CCardTitle>
                  <CCardText>
                    - 기간 : 2024.03.04 ~<br/>
                    - 역할 : BackEnd 개발<br/>
                    - 주요 업무내용<br/>
                    * Java 17, Spring Boot 3.2.x 버전업 전담 & 보유 솔루션에 대한 완전한 Version Up, lessons learned 팀 공유<br/>
                    * 멀티테넌시 기능 개발 (Saas 솔루션화)<br/>
                    - 사용기술(언어) : Java, Spring Boot, AWS, PostgreSQL
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
