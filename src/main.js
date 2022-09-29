import {createApp} from 'vue'
import App from './App.vue'
import components from '@/components/UI'
import router from '@/router/router'
import GqButton from '@/components/UI/GqButton'
import GqButtonGoogle from '@/components/UI/GqButtonGoogle'
import GqCheckbox from '@/components/UI/GqCheckbox'
import GqContainer from '@/components/UI/GqContainer'
import GqPanel from '@/components/UI/GqPanel'
import GqInput from '@/components/UI/GqInput'
import '@/assets/styles.scss'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})
app.component('GqButton', GqButton)
app.component('GqButtonGoogle', GqButtonGoogle)
app.component('GqCheckbox', GqCheckbox)
app.component('GqContainer', GqContainer)
app.component('GqPanel', GqPanel)
app.component('GqInput', GqInput)
app.use(router).mount('#app')
