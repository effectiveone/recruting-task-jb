import React from 'react'
import ResponsiveAppBar from '../components/navbar/ResponsiveAppBar'


const withLayout = (Component) => {
  const WithLayout = (props) => {
    React.useEffect(() => {
    }, []);
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