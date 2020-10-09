# AmpliBox

> Full Amplify Storage demo showing how to build an app to upload and navigate files in AWS S3

![image](https://user-images.githubusercontent.com/6764957/95610354-c7e35700-0a92-11eb-815e-e55a64499df6.png)

## Features demonstrated

- Upload file
- List files (with metadata)
- Delete files
- Download files
- Create folder
- Toast success/failure

Possible extensions left as an exercise to reader:

- Auth + Private/protected files
- Upload entire folders
- Recursively delete folder

## Local Development

If you clone this repo you will need to setup an AWS Amplify environment for your project. Assuming you have the [Amplify CLI installed and configured](https://docs.amplify.aws/cli):

```bash
amplify init # default answers all fine
amplify add storage # default answers all fine, add auth if asked

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