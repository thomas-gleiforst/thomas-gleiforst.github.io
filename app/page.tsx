import { AlertCircle, Clock, Mail, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MaintenancePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center">
      <div className="mx-auto max-w-md space-y-6">
        <div className="flex justify-center">
          <div className="relative">
            <RefreshCw className="h-16 w-16 text-primary animate-spin-slow" />
            <AlertCircle className="absolute -right-2 -top-2 h-6 w-6 text-amber-500" />
          </div>
        </div>

        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Site Maintenance</h1>

        <div className="space-y-4 text-muted-foreground">
          <p className="text-lg">
            {`We're currently performing some maintenance on our website to improve your experience.`}
          </p>
          <p>{`We are working hard to rebuild and enhance the site and provide a totally new experience. We'll be back online shortly.`}</p>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Clock className="h-4 w-4" />
            <span>Expected completion: Spring 2025</span>
          </div>
        </div>

        <div className="pt-4">
          <Button variant="outline" asChild>
            <Link href="mailto:contact@thomas-gleiforst.com" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>Contact Me</span>
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-12 text-sm text-muted-foreground">Thank you for your patience and understanding.</div>
    </div>
  )
}