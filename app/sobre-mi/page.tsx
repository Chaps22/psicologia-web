import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SobreMiPage() {
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
          <h1 className="text-xl font-bold">Sobre Mí</h1>
          <div className="w-[100px]"></div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  width={600}
                  height={600}
                  alt="Foto del psicólogo"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Dr. Juan Pérez</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Psicólogo Clínico - Nº Colegiado: PSI12345
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    Soy un psicólogo licenciado con más de 10 años de experiencia en el campo de la salud mental. Me
                    gradué en Psicología por la Universidad Complutense de Madrid y realicé un Máster en Psicología
                    Clínica en la Universidad Autónoma de Barcelona.
                  </p>
                  <p>
                    Mi enfoque terapéutico se basa en la terapia cognitivo-conductual, la terapia centrada en la persona
                    y la terapia de aceptación y compromiso. Creo firmemente en la importancia de adaptar el tratamiento
                    a las necesidades específicas de cada persona.
                  </p>
                  <p>
                    Me especializo en el tratamiento de la ansiedad, depresión, estrés, problemas de pareja y
                    familiares, y en el desarrollo personal. También tengo experiencia en el tratamiento de traumas,
                    fobias y trastornos de la personalidad.
                  </p>
                  <p>
                    Mi objetivo es proporcionar un espacio seguro y confidencial donde puedas explorar tus pensamientos
                    y sentimientos, y desarrollar estrategias efectivas para superar los desafíos que enfrentas.
                  </p>
                </div>
                <div>
                  <Button className="w-full md:w-auto">Agendar una consulta</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Formación y Experiencia</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mi trayectoria académica y profesional.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Formación Académica</h3>
                  <ul className="space-y-4">
                    <li>
                      <div className="font-semibold">Doctorado en Psicología Clínica</div>
                      <div className="text-sm text-muted-foreground">Universidad Autónoma de Barcelona, 2015-2018</div>
                    </li>
                    <li>
                      <div className="font-semibold">Máster en Psicología Clínica</div>
                      <div className="text-sm text-muted-foreground">Universidad Autónoma de Barcelona, 2012-2014</div>
                    </li>
                    <li>
                      <div className="font-semibold">Licenciatura en Psicología</div>
                      <div className="text-sm text-muted-foreground">Universidad Complutense de Madrid, 2007-2012</div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Experiencia Profesional</h3>
                  <ul className="space-y-4">
                    <li>
                      <div className="font-semibold">Psicólogo Clínico en Consulta Privada</div>
                      <div className="text-sm text-muted-foreground">2018 - Presente</div>
                    </li>
                    <li>
                      <div className="font-semibold">Psicólogo en Centro de Salud Mental</div>
                      <div className="text-sm text-muted-foreground">Hospital Universitario La Paz, 2014-2018</div>
                    </li>
                    <li>
                      <div className="font-semibold">Psicólogo en ONG</div>
                      <div className="text-sm text-muted-foreground">Psicólogos Sin Fronteras, 2012-2014</div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Mi Enfoque Terapéutico</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Cómo trabajo con mis pacientes para ayudarles a alcanzar sus objetivos.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-8 py-12">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Terapia Cognitivo-Conductual</h3>
                <p>
                  La Terapia Cognitivo-Conductual (TCC) es un enfoque terapéutico que se centra en cómo nuestros
                  pensamientos afectan a nuestras emociones y comportamientos. Trabajamos juntos para identificar y
                  cambiar patrones de pensamiento negativos o distorsionados que pueden estar contribuyendo a tus
                  problemas.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Terapia Centrada en la Persona</h3>
                <p>
                  Este enfoque se basa en la creencia de que cada persona tiene la capacidad de crecer y cambiar. Como
                  terapeuta, proporciono un ambiente de aceptación, empatía y autenticidad que te permite explorar tus
                  sentimientos y experiencias sin juicio.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Terapia de Aceptación y Compromiso</h3>
                <p>
                  La Terapia de Aceptación y Compromiso (ACT) te ayuda a aceptar las dificultades que no puedes cambiar
                  y a comprometerte con las acciones que mejoran tu vida. Aprendes a manejar pensamientos y sentimientos
                  difíciles de manera que tengan menos impacto y control sobre ti.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Enfoque Integrador</h3>
                <p>
                  No creo en un enfoque único para todos. Cada persona es única, con sus propias experiencias,
                  fortalezas y desafíos. Por eso, adapto mi enfoque terapéutico a tus necesidades específicas,
                  combinando diferentes técnicas y métodos para ayudarte de la manera más efectiva posible.
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
