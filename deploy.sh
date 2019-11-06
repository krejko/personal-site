# PREREQs
# Must have aws cli installed: `pip3 install awscli --upgrade --user`
# And have a user with 'programatic access' configured: `aws configure`

COMPILED_APP_PATH=./dist/personal
S3_BUCKET_NAME=krejko-test-auto-upload

# build the app
# ng build --aot --prod

# Sync files with s3 bucket
aws s3 sync ${COMPILED_APP_PATH} s3://${S3_BUCKET_NAME} --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers --delete 
