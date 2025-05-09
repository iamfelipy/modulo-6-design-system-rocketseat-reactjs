import type { StoryObj, Meta } from '@storybook/react'
import { Box, TextInput, TextInputProps, Text } from '@felipy-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
  args: {},
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}
export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'calc.com/',
    placeholder: 'your-username',
  },
}
