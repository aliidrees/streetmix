/* eslint-env jest */
import React from 'react'
import { cleanup } from '@testing-library/react'
import { advanceTo, clear } from 'jest-date-mock'
import { renderWithIntl } from '../../../../test/helpers/render'
import DateTimeRelative from '../DateTimeRelative'

// This will only test `en-US` (default) values. Assume that localized values will
// be handled accurately by the react-intl implementation.

describe('DateTimeRelative', () => {
  beforeAll(() => {
    // Mock global Date object so that Date.now() returns the value we specify
    advanceTo(new Date(1524506400000)) // '2018-04-23T18:00:00.000Z'
  })

  afterEach(cleanup)

  afterAll(() => {
    // Restore the implementation of global Date object
    clear()
  })

  it('renders snapshot', () => {
    const wrapper = renderWithIntl(<DateTimeRelative value={new Date().toISOString()} />)
    expect(wrapper.asFragment()).toMatchSnapshot()
  })

  it('renders "seconds ago" string', () => {
    const wrapper = renderWithIntl(<DateTimeRelative value="2018-04-23T17:59:01.000Z" />)
    expect(wrapper.container).toHaveTextContent('A few seconds ago')
  })

  it('renders "minutes ago" string', () => {
    const wrapper = renderWithIntl(<DateTimeRelative value="2018-04-23T17:50:01.000Z" />)
    expect(wrapper.container).toHaveTextContent('A few minutes ago')
  })

  it('renders "today at {time}" string', () => {
    // Pass in timezone as UTC to force it not to use server's time zone
    const wrapper = renderWithIntl(<DateTimeRelative value="2018-04-23T12:00:00.000Z" timezone="UTC" />)
    expect(wrapper.container).toHaveTextContent('Today at 12:00 PM')
  })

  it('renders "yesterday at {time}" string', () => {
    // Pass in timezone as UTC to force it not to use server's time zone
    const wrapper = renderWithIntl(<DateTimeRelative value="2018-04-22T06:00:00.000Z" timezone="UTC" />)
    expect(wrapper.container).toHaveTextContent('Yesterday at 6:00 AM')
  })

  it('renders a date that happened this year', () => {
    const wrapper = renderWithIntl(<DateTimeRelative value="2018-02-03T18:00:00.000Z" />)
    expect(wrapper.container).toHaveTextContent('February 3')
  })

  it('renders a date in another year', () => {
    const wrapper = renderWithIntl(<DateTimeRelative value="2017-10-17T18:00:00.000Z" />)
    expect(wrapper.container).toHaveTextContent('October 17, 2017')
  })
})
