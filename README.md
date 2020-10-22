# AmpliBox

> Full Amplify Storage demo showing how to build an app to upload and navigate files in AWS S3

- Blogpost: https://dev.to/swyx/amplibox-a-self-hosted-file-storage-app-with-aws-amplify-1f6g
- 6 min Codebase Walkthrough: https://youtu.be/Be0hmfNMdxI

![amplibox1](https://user-images.githubusercontent.com/6764957/95765969-2c95f000-0ce5-11eb-8452-af013c4b04e6.gif)


I would really love to give you a live demo but you can understand the security issue here. Instead, you should deploy it for yourself!

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/sw-yx/demo-amplify-storage-file-upload)

>⚠️ Note that this demo is designed explicitly for educational purposes around Amplify Storage - you still need to [add authentication](https://docs.amplify.aws/lib/auth/getting-started/q/platform/js) if you are to release it for broader production use. You can also run `amplify delete` when you are done to remove all resources provisioned.

## [Blogpost on Dev.to](https://dev.to/swyx/amplibox-a-self-hosted-file-storage-app-with-aws-amplify-1f6g)

## Features demonstrated

- Upload file with progress bar
- List files (with metadata)
- Delete files
- Download files
  - we use programmatic downloads here, but left instructions for signed URL downloads in DownloadButton.svelte
- Create folder
- Toast success/failure

Possible extensions left as an exercise to reader:

- Clientside routing - to make "Back" button work with folders
- File search:
  - filename search
  - file contents search
- Auth + Private/protected files
- S3 + AWS Lambda Trigger to validate/screen the content uploaded
- Upload entire folders
  - useful resources https://dev.to/atapas/10-useful-html-file-upload-tips-for-web-developers-2d1d
- Recursively delete folder

## Local Development

If you clone this repo you will need to setup an AWS Amplify environment for your project. Assuming you have the [Amplify CLI installed and configured](https://docs.amplify.aws/cli):

```bash
amplify init # default answers all fine
amplify add storage # pick Content, default answers all fine, add auth if asked

amplify push # this step provisions your project resources in the cloud (long)
```

If you want to run this project locally, install the dependencies...

```bash
npm install
```

...then start webpack:

```bash
npm start
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit a component file in `src`, save it, and the page should reload with your changes.

## Deploying to the web

You can deploy to [Amplify Console](https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html) or any other static site host. Before you deploy, we recommend [creating a new repo](https://repo.new) and pushing your code there so as to automatically set up CI/CD for you.

```bash
amplify add hosting # customize as needed

amplify publish # to actually publish to the open web (long)
```



## Help me share this

If you liked this demo, you can help me [share it on Twitter](https://twitter.com/swyx/status/1315695498032902144?s=20) or [signup to my YouTube](https://youtu.be/Be0hmfNMdxI)!
