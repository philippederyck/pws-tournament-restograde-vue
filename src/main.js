import 'mdb-vue-ui-kit/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import DOMPurify from 'dompurify';

const app = createApp(App)

app.use(router)
app.directive('safe-html', {
    created(el, binding) {
        el.innerHTML = DOMPurify.sanitize(binding.value);
    },
    update(el, binding) {
        el.innerHTML = DOMPurify.sanitize(binding.value);
    },
});



app.mount('#app')
