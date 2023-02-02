import React, { useContext } from 'react'
import ResponsiveAppBar from '../components/navbar/ResponsiveAppBar'


const withLayout = (Component) => {
  const WithLayout = (props) => {
    return (
      <div>
        <ResponsiveAppBar />
        <Component {...props} />
      </div>
    )
  }

  WithLayout.getInitialProps = async (ctx) => {
    const componentProps =
      Component.getInitialProps && (await Component.getInitialProps(ctx))

    return { ...componentProps }
  }

  return WithLayout
}

export default withLayout