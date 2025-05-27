import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function ContactoPage() {
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
          <h1 className="text-xl font-bold">Contacto</h1>
          <div className="w-[100px]"></div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
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
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre completo</Label>
                      <Input id="nombre" placeholder="Tu nombre completo" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input id="telefono" type="tel" placeholder="+34 123 456 789" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="asunto">Asunto</Label>
                      <Input id="asunto" placeholder="Motivo de contacto" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mensaje">Mensaje</Label>
                      <Textarea id="mensaje" placeholder="Escribe tu mensaje aquí..." className="min-h-[120px]" />
                    </div>
                    <Button className="w-full">Enviar mensaje</Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Información de contacto</h3>
                  <p className="text-muted-foreground">
                    Puedes contactarme por teléfono, email o visitando mi consulta.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Teléfono</h4>
                      <p className="text-sm text-muted-foreground">+34 123 456 789</p>
                      <p className="text-sm text-muted-foreground">Lunes a Viernes: 9:00 - 20:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-sm text-muted-foreground">contacto@psicoayuda.com</p>
                      <p className="text-sm text-muted-foreground">Respuesta en 24-48 horas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Dirección</h4>
                      <p className="text-sm text-muted-foreground">Calle Principal 123</p>
                      <p className="text-sm text-muted-foreground">28001 Madrid, España</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Button variant="outline" className="w-full">
                    Agendar una consulta
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Preguntas Frecuentes</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Respuestas a las preguntas más comunes sobre mis servicios.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-12">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">¿Cómo puedo agendar una cita?</h3>
                <p>
                  Puedes agendar una cita llamando al teléfono de contacto, enviando un email o utilizando el formulario
                  de contacto en la web.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">¿Cuál es el costo de las sesiones?</h3>
                <p>
                  El costo de las sesiones varía según el tipo de terapia. Puedes consultar los precios en la sección de
                  servicios o contactarme directamente para más información.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">¿Ofrecen sesiones online?</h3>
                <p>
                  Sí, ofrezco sesiones online a través de una plataforma segura de videollamada. Son tan efectivas como
                  las presenciales y ofrecen la comodidad de poder realizarlas desde cualquier lugar.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">¿Qué debo esperar en la primera sesión?</h3>
                <p>
                  En la primera sesión, realizaremos una evaluación inicial para conocer tu situación y establecer
                  objetivos terapéuticos. Es una oportunidad para que me cuentes lo que te preocupa y para que yo pueda
                  explicarte cómo podemos trabajar juntos.
                </p>
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
