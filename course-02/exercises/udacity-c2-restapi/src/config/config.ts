export const config = {
  "dev": {
    "username": "fwd",
    "password": "fwdcoredb",
    "database": "postgres",
    "host": "fwd-core.cn1vskzfgclt.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",

        "aws_media_bucket": "udagram-4315120000-bucket"

  },
  "jwt": {
    "secret": " "
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
