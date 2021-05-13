import React, { Fragment } from "react"
// Image Plugin
import { StaticImage } from "gatsby-plugin-image"
// Components
import Seo from "../components/shared/seo"

const Index = () => {
  return (
    <Fragment>
      <div className="mx-auto">
        <Seo title="GatsWind Starter Plus" />
        <div className="flex h-screen bg-gray-50 flex-col justify-center">
          <StaticImage
            className="object-none object-center mx-auto"
            src="../images/gatsby-icon.png"
            alt="Gatsby"
            placeholder="blurred"
            layout="fixed"
            width={200}
            height={200}
          />
          <h2 className="py-2  text-center mt-10">
            Gatsby And Tailwindcss Starter Plus
          </h2>
        </div>
      </div>
    </Fragment>
  )
}

export default Index
