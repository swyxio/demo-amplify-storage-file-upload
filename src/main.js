import App from './App.svelte';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const app = new App({
	target: document.body,
	props: {}
});

window.app = app;

export default app;