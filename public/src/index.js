import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react'
import { render } from 'react-dom'
import Router from './router'
import './index.less'

let app = document.createElement('div')
document.body.appendChild(app)

render(
    <Router />, app
)