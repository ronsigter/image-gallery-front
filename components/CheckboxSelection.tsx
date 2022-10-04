import { CheckboxGroupProps, useCheckboxGroup, Flex } from '@chakra-ui/react'
import type { GridProps } from '@chakra-ui/react'
import { CustomCheckbox } from './CustomCheckbox'
import { useId } from 'react'

// ? This component is use for multiple selection of checkbox inputs
// ? This wraps CustomCheckbox component in order to pass the "isChecked" state to the generic "CheckboxComponent"

interface CheckboxSelectionProps<T> extends GridProps {
  options: T[]
  component: React.FC<any>
  checkboxGroupProps?: Partial<CheckboxGroupProps>
}

interface RequiredOptions {
  value: string
}

export const CheckboxSelection = <T extends RequiredOptions>(
  props: CheckboxSelectionProps<T>
): React.ReactElement => {
  const idPrefix = useId()
  const {
    options = [],
    checkboxGroupProps,
    component: CheckboxComponent,
    ...rest
  } = props
  const { getCheckboxProps } = useCheckboxGroup(checkboxGroupProps)

  return (
    <Flex gap='3' wrap='wrap'>
      {options.map((option) => {
        const { value } = option
        const checkbox = getCheckboxProps({ value })
        return (
          <CustomCheckbox checkboxProps={checkbox} key={idPrefix + value}>
            <CheckboxComponent {...option} />
          </CustomCheckbox>
        )
      })}
    </Flex>
  )
}
