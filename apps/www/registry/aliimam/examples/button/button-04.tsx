import { Mail } from "@aliimam/icons"
import {
  Apple,
  Bluesky,
  Facebook,
  Github, 
  Instagram,
  LinkedIn,
  Threads, 
  Vercel, 
  WhatsApp,
  X,
} from "@aliimam/logos"

import { Button } from "@/registry/aliimam/ui/button"

export default function ButtonDemo() {
  return (
    <div className="flex max-w-lg flex-wrap gap-3">
      <Button className="w-full">Login</Button>
      <Button variant={"outline"} className="w-full">
        Create account
      </Button>
      <div className="grid w-full grid-cols-3 gap-3">
        <Button className="w-full" variant="outline" size="icon">
          <Facebook/>
        </Button>
        <Button className="w-full" variant="outline" size="icon">
          <Github />
        </Button>
        <Button className="w-full" variant="outline" size="icon">
          <Facebook />
        </Button>
      </div>
      <Button size="icon-lg">
        <Instagram />
      </Button>
      <Button size="icon-lg">
        <X />
      </Button>
      <Button variant="outline" size="icon-lg">
        <LinkedIn />
      </Button>
      <Button variant="outline" size="icon-lg">
        <Vercel />
      </Button>
      <Button variant="outline" size="icon-lg">
        <Github />
      </Button>
      <Button variant="outline" size="icon-lg">
        <Facebook />
      </Button>
      <Button variant="outline" size="icon-lg">
        <Bluesky />
      </Button>
      <Button variant="outline" size="icon-lg">
        <WhatsApp />
      </Button>
      <Button variant="outline" size="icon-lg">
        <Threads />
      </Button>
      <Button variant="outline">
        <Facebook />
        Login with Facebook
      </Button>
      <Button variant="outline">
        <Github />
        Signup with Github
      </Button>
      <Button>
        <X />
        Continue with X
      </Button>
      <Button variant={"secondary"}>
        <Mail/>
        Login with email
      </Button>
      <Button variant={"outline"}>
        <Apple/>
        Login with Apple
      </Button>
      <div className="flex items-center gap-2">
        Dont have an account?
        <Button className="px-0" variant={"link"}>
          Sign up
        </Button>
      </div>
    </div>
  )
}
