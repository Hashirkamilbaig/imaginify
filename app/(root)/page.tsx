import { SignIn, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Home = () => {
  return (
    <div>
    <SignedOut>
      <SignIn routing="hash"/>
    </SignedOut>
    <SignedIn>
      <header>
      <UserButton />
      </header>
      Home
    </SignedIn>
    </div>
  )
}

export default Home