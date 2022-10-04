import React from 'react'
import {
  Box,
  BoxProps,
  useCheckbox,
  UseCheckboxProps,
  useId,
  useStyleConfig,
} from '@chakra-ui/react'

interface CheckboxCardProps extends BoxProps {
  checkboxProps?: UseCheckboxProps
}

export const CustomCheckbox: React.FC<CheckboxCardProps> = (props) => {
  const { checkboxProps, children, ...rest } = props
  const { getInputProps, getCheckboxProps, getLabelProps, state } =
    useCheckbox(checkboxProps)
  const id = useId(undefined, 'checkbox-card')
  const styles = useStyleConfig('RadioCard', props)

  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { isChecked: state.isChecked })
    }
    return child
  })

  return (
    <Box as='label' cursor='pointer' {...getLabelProps()}>
      <input {...getInputProps()} aria-labelledby={id} />
      <Box sx={styles} {...getCheckboxProps()} {...rest}>
        {childrenWithProps}
      </Box>
    </Box>
  )
}
