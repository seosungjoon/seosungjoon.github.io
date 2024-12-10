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
                    - 자사 API Gateway 솔루션 백엔드 개발 (타 기업 납품 시 Customize 기능 개발 투입)<br/>
                    - 멀티테넌시, Java 17 버전 업 등 R&D 업무 수행<br/>
                    - WIS, AWS Summit 전시회 당팀 보유 솔루션 출품<br/>
                  </CCardText>
                </CCardBody>
              </CCard>
              <p></p>
              <CCard textColor={'dark'} className={`mb-3 border-top-info border-top-3`}>
                <CCardBody>
                  <CCardTitle><strong>1. AICentro 솔루션 고도화 프로젝트 </strong></CCardTitle>
                  <CCardText>
                    - 기간 : 2024.09.19 ~ 2024.10.31<br/>
                    - 역할 : MSA 기반 Backend 프로젝트 Spring Boot 버전업 & PL<br/>
                    - 주요 업무내용 및 성과<br/>
                    * Spring Boot 2.2 -≫ 3.3.4 버전업 전담 (3개 Java 프로젝트)<br/>
                    * 버전업 이후 asis 기능 99% 구현<br/>
                  </CCardText>
                </CCardBody>
              </CCard>
              <p></p>
              <CCard textColor={'dark'} className={`mb-3 border-top-info border-top-3`}>
                <CCardBody>
                  <CCardTitle><strong>2. AI Gateway 솔루션 구축 프로젝트 </strong></CCardTitle>
                  <CCardText>
                    - 기간 : 2024.08.09 ~<br/>
                    - 역할 : AI 기술 분석 및 Backend 개발<br/>
                    - 주요 업무내용<br/>
                    * API Gateway 솔루션을 기초로 AI 기술을 접목 또는 AI Gateway 기능 추가 구축 프로젝트(진행중)<br/>
                  </CCardText>
                </CCardBody>
              </CCard>
              <p></p>
              <CCard textColor={'dark'} className={`mb-3 border-top-info border-top-3`}>
                <CCardBody>
                  <CCardTitle><strong>3. 태국 AIS TV 구축사업 PoC </strong></CCardTitle>
                  <CCardText>
                    - 기간 : 2024.06 ~ 2024.07<br/>
                    - 역할 : API Gateway 솔루션 구축 및 테스트 지원<br/>
                    - 주요 업무내용<br/>
                    * k8s환경 내 솔루션 구축 및 통신 테스트 지원 (AWS, On-Premise)<br/>
                  </CCardText>
                </CCardBody>
              </CCard>
              <p></p>
              <CCard textColor={'dark'} className={`mb-3 border-top-info border-top-3`}>
                <CCardBody>
                  <CCardTitle><strong>4. API Gateway 솔루션 백엔드 개발 </strong></CCardTitle>
                  <CCardText>
                    - 기간 : 2024.03.04 ~<br/>
                    - 역할 : BackEnd 개발<br/>
                    - 주요 업무내용<br/>
                    * Java 17, Spring Boot 3.2.x 버전업 전담 & 보유 솔루션에 대한 완전한 Version Up, lessons learned 팀 공유<br/>
                    * 멀티테넌시 기능 개발 (Saas 솔루션화)<br/>
                    * 타 기업 솔루션 납품 시 Customize 기능 개발 (OO은행 등)<br/>
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
