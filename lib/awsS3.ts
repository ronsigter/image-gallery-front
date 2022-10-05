import S3 from 'aws-sdk/clients/s3'

const AWS_S3_ACCESS_KEY = process.env.AWS_S3_ACCESS_KEY
const AWS_S3_SECRET_KEY = process.env.AWS_S3_SECRET_KEY

export const s3 = new S3({
  region: 'ap-southeast-1',
  accessKeyId: AWS_S3_ACCESS_KEY,
  secretAccessKey: AWS_S3_SECRET_KEY,
  signatureVersion: 'v4',
})
