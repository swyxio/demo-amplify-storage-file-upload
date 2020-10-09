import App from './App.svelte';
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

window.app = app;

export default app;