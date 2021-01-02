import React from 'react'

import { ReactComponent as Logo } from '../assets/icons/logo.svg'

const icons = {
  logo: Logo,
}

export default props => {
  if (props.name in icons) {
    return <>{icons[props.name](props)}</>
  } else {
    return <>Undefined icon name: {props.name}</>
  }
}
