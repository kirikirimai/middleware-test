import React from 'react'
import jwt from 'jsonwebtoken'

const SECRET_KEY = "secret_key"

const Middleware = (handler) => {

  //トークンを調べる
  return async (req, res) => {
    const token = req.headers.authorization.split(" ")[1]
    console.log(token)
    if (!token) {
      return res.status(401).json({ message: "トークンがありません。" })
    }

    //トークンを検証する
    try {
      const decodedToken = jwt.verify(token, SECRET_KEY)
      console.log("decodedtoken:",decodedToken)
      return handler(req, res)

    } catch (error) {

      return res.status(401).json({ message: "トークンの期限が切れている"})

    }

  }
}

export default Middleware