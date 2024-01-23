import { Link, useSearchParams } from 'react-router-dom'
import { Sidenav } from '@/components/Sidenav'

export default function Home() {
  const [readSearchParms, setSearchParams] = useSearchParams()

  return (
    <div>
      <Sidenav />
      <h1>Init React</h1>
    </div>
  )
}
