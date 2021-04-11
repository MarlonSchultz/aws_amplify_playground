import { createApp } from 'vue'
import App from './App.vue'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

import 'primevue/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './assets/styles/base.css';
import 'primeflex/primeflex.css';

import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';
import PrimeVue from "primevue/config";

Amplify.configure(aws_exports);
applyPolyfills().then(() => {
  defineCustomElements(window);
});
const app = createApp(App);

app.use(PrimeVue);
app.mount('#app')
