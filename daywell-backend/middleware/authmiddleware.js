import jwt from 'jsonwebtoken'

function protect(req, res, next) {
  const secret = process.env.JWT_SECRET

  if (!secret) {
    console.error('JWT_SECRET is not configured')
    return res.status(500).json({
      message: 'Authentication is not configured',
    })
  }

  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({
      message: 'Access denied. Please log in first.',
    })
  }

  const [scheme, token] = authHeader.trim().split(/\s+/)

  if (scheme?.toLowerCase() !== 'bearer' || !token) {
    return res.status(401).json({
      message: 'A valid bearer token is required',
    })
  }

  try {
    req.user = jwt.verify(token, secret)
    return next()
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({
        message: 'Invalid or expired token',
      })
    }

    console.error('Authentication error:', error)
    return res.status(500).json({
      message: 'Authentication failed',
    })
  }
}

export { protect }