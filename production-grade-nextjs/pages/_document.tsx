// import React from 'react'
// import Document, { Head, Main, NextScript, Html } from 'next/document'
// import { extractStyles } from 'evergreen-ui'

// export default class MyDocument extends Document<any> {

// // static async getInitialProps(ctx) {
// //   const initialProps = await Document.getInitialProps(ctx)
// //   return { ...initialProps, helmet: Helmet.renderStatic() }
// // }

//   static getInitialProps({ renderPage, ctx }) {
//     const page = renderPage();
//     const initialProps = MyDocument.getInitialProps(ctx)
//     const { css, hydrationScript } = extractStyles()
//     // const initialProps = await Document.getInitialProps(renderPage)

//     return {
//       ...page,
//       css,
//       hydrationScript,
//       initialProps
//     }
//   }

//   render() {
//     const { css, hydrationScript } = this.props

//     return (
//       <Html lang="eng-us">
//         <Head>
//           <style dangerouslySetInnerHTML={{ __html: css }} />
//         </Head>

//         <body>
//           <Main />
//           {hydrationScript}
//           <NextScript />
//         </body>
//       </Html>
//     )
//   }
// }


import Document, { Html, Head, Main, NextScript } from 'next/document'
import { extractStyles } from 'evergreen-ui'
export default class MyDocument extends Document<any> {    
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage
    //  const { css, hydrationScript } = extractStyles()
    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
      //  css,
      //  hydrationScript,
    
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
