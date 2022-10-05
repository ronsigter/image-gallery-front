import type { NextApiRequest, NextApiResponse } from 'next'
import { s3 } from 'lib/awsS3'

type Data = {
  message?: string | unknown
  url?: string
}

const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    let { name, type } = req.body

    const fileParams = {
      Bucket: AWS_BUCKET_NAME,
      Key: name,
      ContentType: type,
    }

    console.log(fileParams)

    const url = await s3.getSignedUrlPromise('putObject', fileParams)

    res.status(200).json({ url })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error })
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
}
