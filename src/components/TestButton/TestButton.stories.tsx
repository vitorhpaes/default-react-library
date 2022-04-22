import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TestButtonComponent from './'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/TestButton',
  component: TestButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TestButtonComponent>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TestButtonComponent> = (args) => <TestButtonComponent {...args} />

export const TestButton = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TestButton.args = {
  version: '1.0.0',
}

export const ClickMe = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ClickMe.args = {
  version: '1.0.1',
}
