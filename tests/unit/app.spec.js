import { mount } from '@vue/test-utils'
import router from '@/router/index.js'
import { routes } from '@/router/index.js'
import App from '@/App.vue'
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth'

const app = initializeApp({ projectId: 'test', // Intializes are mock app with test values
                            appId: 'test',
                            apiKey: 'test', })
const auth = getAuth(app) // Authorizes are mock app with the test values
connectAuthEmulator(auth, 'http://localhost:8080') // Connects are mock app with auth emulator



describe('App.vue', () => {

  it('should expect that App.vue is visible', () => {
        const wrapper = mount(App)

        expect(wrapper.isVisible()).toBe(true)
    })

    it("renders a child component via routing", async () => {
      router.push('/')
      await router.isReady();

      const wrapper = mount(App, {
          global:{
              plugins: [router]
          }
      });
      expect(wrapper.find('[data-test="Home Title"]').exists()).toBe(true);
    })
})
