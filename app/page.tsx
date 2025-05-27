import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Mail, MessageSquare, Phone, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">PsicoAyuda</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Inicio
            </Link>
            <Link
              href="/servicios"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Servicios
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Blog
            </Link>
            <Link
              href="/sobre-mi"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Sobre Mí
            </Link>
            <Link
              href="/contacto"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contacto
            </Link>
          </nav>
          <Button className="hidden md:flex">Agendar Cita</Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Abrir menú</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Psicología para el bienestar emocional
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Ofrezco un espacio seguro y confidencial para ayudarte a superar dificultades emocionales y mejorar
                    tu calidad de vida.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Agendar una consulta</Button>
                  <Button size="lg" variant="outline">
                    Conocer más
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Psicólogo profesional"
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Mis Servicios</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrezco diferentes tipos de terapia adaptadas a tus necesidades específicas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Terapia Individual</CardTitle>
                  <CardDescription>Para adultos y adolescentes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Sesiones personalizadas para abordar problemas como ansiedad, depresión, estrés, duelo y otros
                    desafíos emocionales.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Terapia de Pareja</CardTitle>
                  <CardDescription>Mejora tu relación</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Ayudo a las parejas a mejorar su comunicación, resolver conflictos y fortalecer su vínculo
                    emocional.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Terapia Familiar</CardTitle>
                  <CardDescription>Para toda la familia</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Trabajo con familias para mejorar la dinámica familiar, resolver conflictos y fortalecer los lazos
                    familiares.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/servicios">Ver todos los servicios</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Blog de Psicología</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Artículos y recursos sobre salud mental, bienestar emocional y desarrollo personal.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Imagen del artículo"
                    className="rounded-lg object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-bold">Cómo manejar la ansiedad en tiempos difíciles</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Estrategias prácticas para reducir la ansiedad y mantener el equilibrio emocional.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Imagen del artículo"
                    className="rounded-lg object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-bold">La importancia del autocuidado para la salud mental</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Descubre por qué el autocuidado es fundamental para mantener una buena salud mental.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Imagen del artículo"
                    className="rounded-lg object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-bold">Cómo mejorar la comunicación en la pareja</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Consejos prácticos para una comunicación efectiva y saludable en la relación de pareja.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/blog">Ver todos los artículos</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  width={500}
                  height={500}
                  alt="Foto del psicólogo"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Sobre Mí</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Soy un psicólogo licenciado con más de 10 años de experiencia en el campo de la salud mental.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    Mi enfoque terapéutico se basa en la terapia cognitivo-conductual, la terapia centrada en la persona
                    y la terapia de aceptación y compromiso.
                  </p>
                  <p>
                    Me especializo en el tratamiento de la ansiedad, depresión, estrés, problemas de pareja y
                    familiares, y en el desarrollo personal.
                  </p>
                  <p>
                    Mi objetivo es proporcionar un espacio seguro y confidencial donde puedas explorar tus pensamientos
                    y sentimientos, y desarrollar estrategias efectivas para superar los desafíos que enfrentas.
                  </p>
                </div>
                <div>
                  <Button variant="outline" asChild>
                    <Link href="/sobre-mi">Conocer más sobre mí</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Contacto</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estoy aquí para ayudarte. No dudes en contactarme para programar una consulta o para cualquier
                  pregunta que tengas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+34 123 456 789</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>contacto@psicoayuda.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Lunes a Viernes: 9:00 - 20:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  <span>Consultas presenciales y online</span>
                </div>
              </div>
              <div className="space-y-4">
                <Button className="w-full" size="lg">
                  Agendar una consulta
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  Enviar un mensaje
                </Button>
              </div>
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
