/* eslint-disable-next-line */
import React from 'react'
import ReactDOM from 'react-dom'
/* eslint-disable-next-line */
import Page from '../../components/Page'
import './index.sass'

const Foo = (props) => pug`
    .pug-comp
      h1 ama pug comp
  `

const elem = (
  <div class="wrap">
    <Page description="This is description" />
    <Foo/>
  </div>
)

ReactDOM.render(elem,
  document.getElementById('app')
)
