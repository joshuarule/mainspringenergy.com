import React from 'react'

import { ReactComponent as Logo } from '../assets/icons/logo.svg'
import { ReactComponent as Chevron } from '../assets/icons/chevron.svg'
import { ReactComponent as Mark } from '../assets/icons/mark.svg'
import { ReactComponent as LinkedIn } from '../assets/icons/linkedIn.svg'
import { ReactComponent as Play } from '../assets/icons/play.svg'

const icons = {
  logo: Logo,
  chevron: Chevron,
  mark: Mark,
  linkedIn: LinkedIn,
  play: Play,
}

export default props => {
  if (props.name in icons) {
    return <>{icons[props.name](props)}</>
  } else {
    return <>Undefined icon name: {props.name}</>
  }
}
