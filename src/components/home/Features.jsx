import React from 'react'

import image1 from '../../assets/images/modern-design.jpg'
import image2 from '../../assets/images/clean-design.jpg'
import image3 from '../../assets/images/great-support.jpg'
import image4 from '../../assets/images/easy-customise.jpg'
import image5 from '../../assets/images/unlimited-features.jpg'
import image6 from '../../assets/images/advanced-option.jpg'
import { Card, Col, Row } from 'antd'
import Meta from 'antd/lib/card/Meta'

const cards = [
  {
    id: '1',
    img: image1,
    imgAlt: 'Modern Design',
    title: 'Modern Design',
  },
  {
    id: '2',
    img: image2,
    imgAlt: 'Clean and Elegant',
    title: 'Clean and Elegant',
  },
  {
    id: '3',
    img: image3,
    imgAlt: 'Great Support',
    title: 'Great Support',
  },
  {
    id: '4',
    img: image4,
    imgAlt: 'Easy to customize',
    title: 'Easy to customize',
  },
  {
    id: '5',
    img: image5,
    imgAlt: 'Unlimited Features',
    title: 'Unlimited Features',
  },
  {
    id: '6',
    img: image6,
    imgAlt: 'Advanced Options',
    title: 'Advanced Options',
  },
]

const AppFeatures = () => {
  return (
    <div id="features" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
          <p>
            Obcaecati consequatur libero repudiandae, aperiam itaque laborum!
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {cards.map((card) => {
            return (
              <Col
                key={card.id}
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 8 }}
              >
                <Card
                  hoverable
                  cover={<img alt={card.imgAlt} src={card.img} />}
                >
                  <Meta title={card.title} />
                </Card>
              </Col>
            )
          })}
        </Row>
      </div>
    </div>
  )
}

export default AppFeatures
