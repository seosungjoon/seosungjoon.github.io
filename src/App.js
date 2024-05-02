import React, { Component, Suspense } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './scss/style.scss'
import './scss/_custom.scss'
import ScrollToTop from "./views/ScrollRestore";
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop/>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>

      </BrowserRouter>

    )
  }
}

export default App
