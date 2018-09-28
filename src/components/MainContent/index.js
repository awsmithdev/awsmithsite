import React, { Component } from 'react'
import MainContentFooterButtons from './MainContentFooterButtons'
import MainContentSideButtons from './MainContentSideButtons'

export default class MainContent extends Component {
  render () {
    return (
      <div>
        <p>About Me:
         I'm AW Smith, I'm a  full stack developer who specializes
         in creating applications using the React library.
         React is special because of its concise syntax and
         capacity to quickly orient data with minimum burden on
         consumers devices. I have a background in medicine,
          as a primary care physician. I enjoy opportunities work
          on projects that combine medicine and code!
           I also design bespoke herbal products and formulations for various
           firms around the world.
        </p>
        <MainContentSideButtons />
        <MainContentFooterButtons />
      </div>
    )
  }
}
