# PersonalWebsite
Contains code for my personal website, located at jessehwoods.com.

This repository is set up for continuous deployment to the website hosting in AWS. The "deployment" branch of this repo is monitored by AWS CodePipeline. Changes pushed to that branch will trigger a deployment, which will build the Angular project contained in the "website-source" directory and the produced files wil be deployed to an S3 bucket that is served to my website via CloudFront.
