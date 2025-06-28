import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            GovTech DesignFest
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            A modern application powered by Next.js, Tailwind CSS v4, and shadcn/ui
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="default">Next.js 15</Badge>
            <Badge variant="secondary">Tailwind CSS v4</Badge>
            <Badge variant="outline">shadcn/ui</Badge>
            <Badge variant="secondary">TypeScript</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>🚀 Modern Stack</CardTitle>
              <CardDescription>
                Built with the latest technologies for optimal performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Next.js 15 with App Router, React 19, and TypeScript provide a solid foundation for modern web applications.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🎨 Tailwind CSS v4</CardTitle>
              <CardDescription>
                Next-generation utility-first CSS framework
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                CSS-first configuration with @theme directive, improved performance, and native cascade layers support.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🧩 shadcn/ui</CardTitle>
              <CardDescription>
                Beautifully designed, accessible components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Copy and paste components built with Radix UI primitives and styled with Tailwind CSS.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-lg">
              Build Something Amazing
            </Button>
            <Button variant="outline" size="lg">
              View Documentation
            </Button>
          </div>
        </div>

        <div className="mt-12 p-6 bg-white/50 backdrop-blur-sm rounded-lg border">
          <h3 className="text-lg font-semibold mb-3">✨ Features Included:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
            <div>• TypeScript configuration</div>
            <div>• Tailwind CSS v4 with @theme</div>
            <div>• shadcn/ui components</div>
            <div>• Dark/light mode ready</div>
            <div>• Responsive design</div>
            <div>• Accessible components</div>
            <div>• Optimized for performance</div>
            <div>• Modern development tools</div>
          </div>
        </div>
      </div>
    </div>
  )
}
