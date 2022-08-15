import { mount, config } from '@vue/test-utils'
import App from '@/App.vue'
import { VueRouterMock, createRouterMock, injectRouterMock} from 'vue-router-mock'

config.plugins.VueWrapper.install(VueRouterMock)

describe('App.vue', () => {

  const router = createRouterMock()  
  beforeEach(() => {
    injectRouterMock(router)
  })

  it('should expect that App.vue is visible', () => {
        const wrapper = mount(App)

        expect(wrapper.isVisible()).toBe(true)
    })
//   it('should be routed to the register page when register button  is clicked', async ()  => {
//         const store = createStore()
//         const wrapper = mount(App, {
//             global: {
//                 provide: {
//                     store
//                 }
//             }
//         })

//         expect(store.getState().posts.ids).toHaveLength(0)

//         //const register  = wrapper.get('[data-test="register btn"]')

//         //expect(register.text()).toContain("Register")

//         //expect((register.attributes()).to).toBe("/register")

//         await wrapper.find('[data-test="register btn"]').trigger('click')
//         await wrapper.vm.$nextTick()

//         //await register.trigger('click')
//         expect(wrapper.router.push).toHaveBeenCalledTimes(1)


//     })
})
