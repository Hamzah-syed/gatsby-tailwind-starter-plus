import React, { Fragment } from "react"
import Seo from "../components/shared/seo"

const NotFound = () => {
  return (
    <Fragment>
      <div>
        <Seo title="Page Not Found" />
        <h1 className="text-center py-20">PAGE NOT FOUND</h1>
      </div>
    </Fragment>
  )
}

export default NotFound
