import React from "react"
import { Link } from "gatsby"

const Button = ({ children, href }) => (
    <Link className="btn btn-block MHP-btn" to={href}>{children}</Link>
)

// TODO: Add type checking

export default Button
