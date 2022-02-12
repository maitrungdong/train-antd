import React from 'react'
import './App.css'

import { Layout } from 'antd'
import AppHeader from './components/common/Header'
import { Content } from 'antd/lib/layout/layout'
import AppHome from './views/Home'
import AppFooter from './components/common/Footer'

const { Header, Footer } = Layout

function App() {
  return (
    <div className="App">
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <AppHome />
        </Content>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
    </div>
  )
}

export default App
