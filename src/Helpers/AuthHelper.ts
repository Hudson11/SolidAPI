import { NextFunction, Request, Response } from 'express'
import jsonwebtoken, { VerifyErrors } from 'jsonwebtoken'

class AuthHelper {

  static tokenVerify(request: Request, response: Response, next: NextFunction): Response {

    const { authorization } = request.headers

    if (!authorization) {
      return response.status(401).json({ message: 'No Token Provided' })
    }

    const parts = authorization.split(' ')

    if (parts.length !== 2) {
      return response.status(401).json({ message: 'Token error' })
    }

    const [schema, token] = parts

    if (!/^Bearer$/.test(schema)) {
      return response.status(401).json({ message: 'Token malformatted' })
    }

    jsonwebtoken.verify(token, process.env.JWT_SECRET, (err: VerifyErrors) => {
      if(err) {
        return response.status(401).json({ message: 'Token invalid', err: err.message })
      }
      return next()
    })
  }

}

export default AuthHelper