import {createApp} from 'vue'
import App from './App.vue'
import router from '@/router/router'
import GqButton from '@/components/UI/GqButton'
import GqButtonGoogle from '@/components/UI/GqButtonGoogle'
import GqCheckbox from '@/components/UI/GqCheckbox'
import GqContainer from '@/components/UI/GqContainer'
import GqPanel from '@/components/UI/GqPanel'
import GqInput from '@/components/UI/GqInput'
import GqHeader from '@/components/UI/GqHeader'
import '@/assets/styles.scss'

const app = createApp(App)

app.component('GqButton', GqButton)
app.component('GqButtonGoogle', GqButtonGoogle)
app.component('GqCheckbox', GqCheckbox)
app.component('GqContainer', GqContainer)
app.component('GqPanel', GqPanel)
app.component('GqInput', GqInput)
app.component('GqHeader', GqHeader)
app.use(router).mount('#app')
