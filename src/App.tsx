import { Box, Button } from '@material-ui/core'
import { FormProvider, useForm } from 'react-hook-form'
import Input from './components/Input'

type FormFields = {
  name: string
}

function App() {
  const formMethods = useForm<FormFields>({
    mode: 'onSubmit',
    defaultValues: {
      name: ''
    },
  })

  const handleSubmit = (data: FormFields) => {
    console.log(data)
  }

  return (
    <FormProvider {...formMethods}>
      <Box
        width={256}
        component="form"
        style={{ padding: '24px' }}
        onSubmit={formMethods.handleSubmit(handleSubmit)}
      >
        <Input
          name="name"
          rules={{
            required: { value: true, message: 'This field is required' }
          }}
          inputProps={{
            label: 'Name',
            variant: 'outlined',
            fullWidth: true,
            style: {
              marginBottom: '16px',
            },
          }}
        />
        <Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Box>
      </Box>
    </FormProvider>
  )
}

export default App
