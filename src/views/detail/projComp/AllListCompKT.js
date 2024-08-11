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
              <strong>KT DS / 2024.03 ~ / 재직중 </strong>
            </CCardHeader>
            <CCardBody>
              <CCard textColor={'dark'} className={`mb-3 border-top-danger border-top-3`}>
                <CCardBody>
                  <CCardTitle><strong>주요 업무 </strong></CCardTitle>
                  <CCardText>
                    - API Gateway 솔루션 백엔드 개발<br/>
                    - 멀티테넌시, Java 17 등 R&D 업무 수행<br/>
                    - 백엔드 Java 11 &gt; Java 17 버전업 전담<br/>
                  </CCardText>
                </CCardBody>
              </CCard>
              <p></p>
              <CCard textColor={'dark'} className={`mb-3 border-top-info border-top-3`}>
                <CCardBody>
                  <CCardTitle><strong>1. API Gateway 솔루션 백엔드 개발 </strong></CCardTitle>
                  <CCardText>
                    - 기간 : 2024.03.04 ~ ( 수명업무 )<br/>
                    - 역할 : BackEnd 개발<br/>
                    - 주요 업무내용<br/>
                    * Java 17, Spring Boot 3.2.x 버전업<br/>
                    * 멀티테넌시 기능 개발 (Saas 솔루션화)<br/>
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
