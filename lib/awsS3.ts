import S3 from 'aws-sdk/clients/s3'

const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY
const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY

export const s3 = new S3({
  region: 'ap-southeast-1',
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY,
  signatureVersion: 'v4',
})
