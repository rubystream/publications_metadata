import { mount } from '@vue/test-utils'
import NavBar from '@/components/NavBar.vue'

describe('NavBar', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NavBar, {
      stubs: [
        'b-navbar',
        'b-navbar-brand',
        'b-navbar-toggle',
        'b-navbar-nav',
        'b-nav-item',
        'b-collapse',
      ],
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
