import React from 'react'
import { Helmet } from 'react-helmet'



export default function Seo({title = 'Dashboard', description = 'Title.'}) {
  return (
    <Helmet>
        <title>APLE Customer — {title}</title>
        <meta name="title" content={`Title — ${title}`} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://Defi.com/" />
        <meta property="og:title" content={`Dannon Verification — ${title}`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={"./logo.jpg"} />

        <meta property="twitter:title" content={`Dannon Verification — ${title}`} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={"./logo.jpg"} />
  </Helmet>
  )
}
