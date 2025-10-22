import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <>
      <Button
          startIcon={<PlusIcon size={'lg'} />}
          endIcon={<ShareIcon size={'lg'} />}
          variant='primary' 
          title='share' 
          size='lg'
      ></Button>

      <Button
          startIcon={<PlusIcon size={'lg'} />}
          endIcon={<ShareIcon size={'lg'} />}
          variant='secondary' 
          title='share' 
          size='lg'
      ></Button>

      <Button
          startIcon={<PlusIcon size={'sm'} />}
          endIcon={<ShareIcon size={'sm'} />}
          variant='primary' 
          title='share' 
          size='sm'
      ></Button>

      <Button
          startIcon={<PlusIcon size={'md'} />}
          endIcon={<ShareIcon size={'md'} />}
          variant='primary' 
          title='share' 
          size='md'
      ></Button> 
    </>
  )
}

export default App
