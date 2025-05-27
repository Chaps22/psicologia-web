import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function ServiciosPage() {
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
          <h1 className="text-xl font-bold">Servicios</h1>
          <div className="w-[100px]"></div>
        </div>
      </header>
      <main className="flex-1">
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
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Terapia Individual</CardTitle>
                  <CardDescription>Para adultos y adolescentes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Sesiones personalizadas para abordar problemas como ansiedad, depresión, estrés, duelo y otros
                    desafíos emocionales.
                  </p>
                  <p className="mb-4">
                    <strong>Duración:</strong> 50 minutos
                  </p>
                  <p className="mb-4">
                    <strong>Modalidad:</strong> Presencial u online
                  </p>
                  <Button className="w-full">Agendar cita</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Terapia de Pareja</CardTitle>
                  <CardDescription>Mejora tu relación</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Ayudo a las parejas a mejorar su comunicación, resolver conflictos y fortalecer su vínculo
                    emocional.
                  </p>
                  <p className="mb-4">
                    <strong>Duración:</strong> 60 minutos
                  </p>
                  <p className="mb-4">
                    <strong>Modalidad:</strong> Presencial u online
                  </p>
                  <Button className="w-full">Agendar cita</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Terapia Familiar</CardTitle>
                  <CardDescription>Para toda la familia</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Trabajo con familias para mejorar la dinámica familiar, resolver conflictos y fortalecer los lazos
                    familiares.
                  </p>
                  <p className="mb-4">
                    <strong>Duración:</strong> 75 minutos
                  </p>
                  <p className="mb-4">
                    <strong>Modalidad:</strong> Presencial u online
                  </p>
                  <Button className="w-full">Agendar cita</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Evaluación Psicológica</CardTitle>
                  <CardDescription>Diagnóstico profesional</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Realizo evaluaciones psicológicas completas para diagnosticar trastornos mentales y problemas
                    emocionales.
                  </p>
                  <p className="mb-4">
                    <strong>Duración:</strong> 90 minutos
                  </p>
                  <p className="mb-4">
                    <strong>Modalidad:</strong> Presencial
                  </p>
                  <Button className="w-full">Agendar cita</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Coaching Psicológico</CardTitle>
                  <CardDescription>Desarrollo personal</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Te ayudo a establecer y alcanzar metas personales y profesionales, superar obstáculos y desarrollar
                    tu potencial.
                  </p>
                  <p className="mb-4">
                    <strong>Duración:</strong> 50 minutos
                  </p>
                  <p className="mb-4">
                    <strong>Modalidad:</strong> Presencial u online
                  </p>
                  <Button className="w-full">Agendar cita</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Talleres y Grupos</CardTitle>
                  <CardDescription>Aprendizaje colectivo</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Organizo talleres y grupos terapéuticos sobre temas como manejo del estrés, habilidades sociales y
                    mindfulness.
                  </p>
                  <p className="mb-4">
                    <strong>Duración:</strong> Variable
                  </p>
                  <p className="mb-4">
                    <strong>Modalidad:</strong> Presencial u online
                  </p>
                  <Button className="w-full">Más información</Button>
                </CardContent>
              </Card>
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
                <h3 className="text-xl font-bold">¿Cuánto dura una sesión de terapia?</h3>
                <p>
                  Las sesiones individuales duran 50 minutos, las de pareja 60 minutos y las familiares 75 minutos. Las
                  evaluaciones psicológicas pueden durar hasta 90 minutos.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">¿Cuántas sesiones necesitaré?</h3>
                <p>
                  El número de sesiones varía según cada caso. Algunas personas pueden experimentar mejoras
                  significativas en pocas sesiones, mientras que otras pueden beneficiarse de un tratamiento más
                  prolongado.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">¿Cómo son las sesiones online?</h3>
                <p>
                  Las sesiones online se realizan a través de una plataforma segura de videollamada. Son tan efectivas
                  como las presenciales y ofrecen la comodidad de poder realizarlas desde cualquier lugar.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">¿Está cubierto por el seguro médico?</h3>
                <p>
                  Trabajo con varias compañías de seguros médicos. Te recomiendo consultar con tu aseguradora para
                  verificar la cobertura específica.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">¿Cómo puedo agendar una cita?</h3>
                <p>
                  Puedes agendar una cita llamando al teléfono de contacto, enviando un email o utilizando el formulario
                  de contacto en la web.
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
