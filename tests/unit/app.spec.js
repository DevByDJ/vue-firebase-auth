import { mount } from '@vue/test-utils'
//import router from '@/router/index.js'
import { createRouter, createWebHistory} from 'vue-router'
import { routes } from '@/router/index.js'
import App from '@/App.vue'
import Register from '@/views/Register.vue'
import  Home from '@/views/Home.vue'
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

    it("renders the child component 'Home Page' via routing ", async () => {
    const router = createRouter({                  // Creates Mock Router to handle routing 
        history: createWebHistory(),
        routes: [{                                 // Inserting the router-link path used for testing
            path: '/',
            name: 'Home',
            component:  Home
        }],
    })

    router.push('/')                                // Pushing the path to the top of the router stack
    await router.isReady();                         // Router is ready

    const wrapper = mount(App, {                    // Mount the app with the configured router into wrapper.
        global: {
          plugins: [router]
        }
      })
    expect(wrapper.find('[data-test="Home Title"]').exists()).toBe(true);     // Finds the title to verify the correct route was made.

    })

    it("renders the child component 'Home Page' via routing ", async () => {
        const router = createRouter({                  // Creates Mock Router to handle routing 
            history: createWebHistory(),
            routes: [{                                 // Inserting the router-link path used for testing
                path: '/register',
                name: 'Register',
                component:  Register
            }],
        })
    
        router.push('/register')                                // Pushing the path to the top of the router stack
        await router.isReady();                         // Router is ready
    
        const wrapper = mount(App, {                    // Mount the app with the configured router into wrapper.
            global: {
              plugins: [router]
            }
          })
        expect(wrapper.findComponent(Register).exists()).toBe(true)
        expect(wrapper.find('[data-test="Register title"]').exists()).toBe(true);     // Finds the title to verify the correct route was made.
    
        })
})
