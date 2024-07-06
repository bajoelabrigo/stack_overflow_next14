'use client'
import { UserButton } from '@clerk/nextjs'
import { useTheme } from '@/context/ThemeProvider'

const Home = () => {
  const { mode } = useTheme()
  return (
    <div>
      {mode}
      <UserButton afterSwitchSessionUrl=''/>
    </div>
  )
}

export default Home