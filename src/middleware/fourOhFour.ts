import { RequestHandler } from 'express'

/**
 * JSON 404 response
 */
const fourOhFour: RequestHandler = (req, res) => {
    console.log('ressss', res);
    return res.status(404).json({ message: 'not found' })
}

export default fourOhFour