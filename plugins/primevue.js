import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Textarea from 'primevue/textarea';


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {ripple: false,});
    nuxtApp.vueApp.component('Button', Button);
    nuxtApp.vueApp.component('Textarea', Textarea);


    //other components that you need
});
