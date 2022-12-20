import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('should expect that Home.vue is visible', () => {
    const wrapper = shallowMount(Home)

    expect(wrapper.isVisible()).toBe(true)
  })

  it('should see if Home is displayed on the page', () => {
    const wrapper = shallowMount(Home)

    const title  = wrapper.get('[data-test="Home Title"]')

    expect(title.text()).toContain("HOME")
    
  })
})
