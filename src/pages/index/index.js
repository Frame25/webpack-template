/* eslint-disable-next-line */
import React from 'react'
import ReactDOM from 'react-dom'
/* eslint-disable-next-line */
import Page from '../../components/Page'
import './index.sass'

const elem = <Page description="This is description" />

ReactDOM.render(elem,
  document.getElementById('app')
)
