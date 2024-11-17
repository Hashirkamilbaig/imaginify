import { SignIn, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Home = () => {
  return (
    <div>
    <SignedOut>
      <SignIn routing="hash"/>
    </SignedOut>
    <SignedIn>
      Home
    </SignedIn>
    </div>
  )
}

export default Home