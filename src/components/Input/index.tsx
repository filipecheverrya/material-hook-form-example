import { TextField, TextFieldProps } from '@material-ui/core'
import { useController, UseControllerProps } from 'react-hook-form'

type InputProps = UseControllerProps & {
  inputProps?: TextFieldProps
}

const Input = (props: InputProps): JSX.Element => {
  const {
    field: { ref, ...inputElementProps },
    formState: { errors }
  } = useController(props)

  const { name, inputProps } = props

  return (
    <TextField
      {...inputElementProps}
      inputRef={ref}
      error={Boolean(errors?.[name])}
      helperText={
        Boolean(errors?.[name]) && (
          <span>
            {errors?.[name].message || 'Field is required'}
          </span>
        )
      }
      {...inputProps}
    />
  )
}

export default Input