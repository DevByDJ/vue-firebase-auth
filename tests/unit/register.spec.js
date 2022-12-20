import { shallowMount, mount } from '@vue/test-utils'
import Register from '@/views/Register.vue'
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth'

const app = initializeApp({ projectId: 'test', // Intializes are mock app with test values
                            appId: 'test',
                            apiKey: 'test', })
const auth = getAuth(app) // Authorizes are mock app with the test values
connectAuthEmulator(auth, 'http://localhost:8080') // Connects are mock app with auth emulator

describe('Register.vue', () => {

  /**
   * TODO: FIND ALL ELEMENTS ON THE PAGE
   */

  it('should expect that Register.vue is visible', () => {
    const wrapper = shallowMount(Register)

    expect(wrapper.isVisible()).toBe(true)
  })

  it('should see if the title is displayed on the Register page', () => {
    const wrapper = shallowMount(Register)

    const title  = wrapper.get('[data-test="Register title"]')

    expect(title.text()).toContain("Create an Account")
    
  })

  it('should see if the email input is displayed on the Register page', () => {
    const wrapper = shallowMount(Register)

    const emailInput  = wrapper.get('[data-test="Email input"]')

    expect(emailInput.text()).toContain("")
    
  })

  it('should see if the password input is displayed on the Register page', () => {
    const wrapper = shallowMount(Register)

    const passwordInput  = wrapper.get('[data-test="Password input"]')

    expect(passwordInput.text()).toContain("")
    
  })

  it('should see if the submit button is displayed on the Register page', () => {
    const wrapper = shallowMount(Register)

    const submitBtn  = wrapper.get('[data-test="Submit button"]')

    expect(submitBtn.text()).toContain("Submit")
    
  })

  it('should see if the Oauth button is displayed on the Register page', () => {
    const wrapper = shallowMount(Register)

    const OauthBtn  = wrapper.get('[data-test="Oauth button"]')

    expect(OauthBtn.text()).toContain("Sign In With Google")
    
  })

  /**
   * * END OF SECTION
   */



  /**
   * TODO: TEST IF EMAIL AND PASSWORD CAN BE SUBMITTED.
   */

  it('should expect the function register to be called if an email and password input is submitted', async () => {
    
    const wrapper = mount(Register)
    const isRegister = jest.spyOn(wrapper.vm, 'register')


    const emailInput  = wrapper.get('[data-test="Email input"]')
    await emailInput.setValue("test@gmail.com")
    

    const passwordInput  = wrapper.get('[data-test="Password input"]')
    await passwordInput.setValue("password")

    const submitBtn  = wrapper.get('[data-test="Submit button"]')
    await submitBtn.trigger('click')

    expect(isRegister).toBeCalled()

    
  })


})