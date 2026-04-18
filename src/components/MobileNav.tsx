import * as React from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="sm:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <SheetHeader className="px-7">
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8 px-7">
          <a
            href="/"
            className="text-lg font-medium hover:text-blue-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <a
            href="/blog"
            className="text-lg font-medium hover:text-blue-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Blog
          </a>
          <a
            href="/about"
            className="text-lg font-medium hover:text-blue-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            About
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
