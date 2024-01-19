import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://github.com/ehaken95" target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </div>
      <div className="ms-auto">
        <span className="me-1">Based Template</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          CoreUI React
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
