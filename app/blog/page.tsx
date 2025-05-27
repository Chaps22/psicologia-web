import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              <span>Volver al inicio</span>
            </Link>
          </div>
          <h1 className="text-xl font-bold">Blog de Psicología</h1>
          <div className="w-[100px]"></div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Artículos sobre Salud Mental y Bienestar
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Recursos y consejos para mejorar tu bienestar emocional y calidad de vida.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=Artículo ${i}`}
                      width={400}
                      height={200}
                      alt={`Imagen del artículo ${i}`}
                      className="rounded-lg object-cover"
                    />
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-lg font-bold">Título del artículo {i}</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Breve descripción del artículo que explica de qué trata y por qué es relevante para los lectores.
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">12 Mayo, 2025</span>
                      <Button variant="link" size="sm" asChild>
                        <Link href={`/blog/articulo-${i}`}>Leer más</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center gap-2">
              <Button variant="outline" size="sm">
                Anterior
              </Button>
              <Button variant="outline" size="sm">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Siguiente
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 PsicoAyuda. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="/terminos" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Términos y Condiciones
            </Link>
            <Link href="/privacidad" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
