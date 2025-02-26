import React from "react";
import { ChevronRight, Piano } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection/AboutSection";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-earthy-parchment">
      <Navbar />
      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-screen pt-16 flex items-center justify-center bg-gradient-to-r from-earthy-parchment to-earthy-copper/20"
      >
        <div className="container mx-auto px-6 text-center">
          <Piano className="w-16 h-16 mx-auto mb-6 text-earthy-liver" />
          <h1 className="text-5xl font-bold mb-6 text-earthy-dark">
            Aprenda Piano com Paixão
          </h1>
          <p className="text-xl mb-8 text-earthy-bistre">
            Descubra a magia da música através de aulas personalizadas e cursos
            online
          </p>
          <div className="flex gap-4 justify-center flex-col md:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-earthy-liver hover:bg-earthy-copper"
            >
              <a
                href="https://wa.me/5521985536417"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Aula Experimental
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-earthy-liver text-earthy-liver hover:bg-earthy-liver/10"
            >
              <Link href="/#cursos">Ver Cursos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <AboutSection />

      {/* Courses Preview Section */}
      <section id="cursos" className="py-20 bg-earthy-parchment/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-earthy-dark">
            Cursos Disponíveis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-earthy-copper/20 bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-earthy-bistre">
                  Mini curso de Piano para Iniciantes
                </h3>
                <p className="text-earthy-bistre mb-4">
                  Descubra os 5 pilares do Piano Essencial para ler e tocar suas
                  primeiras músicas no piano.
                </p>
                <Button
                  variant="link"
                  className="text-earthy-copper p-0 hover:text-earthy-liver"
                >
                  <a
                    href="https://giuliaaraujo.kpages.online/piano-para-iniciantes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Saiba mais
                  </a>
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-earthy-copper/20 bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-earthy-bistre">
                  Teoria Musical Aplicada
                </h3>
                <p className="text-earthy-bistre mb-4">
                  Aprenda teoria musical de forma prática e divertida
                </p>
                <Button
                  variant="link"
                  className="text-earthy-copper p-0 hover:text-earthy-liver"
                >
                  <a
                    href="https://giuliaaraujo.kpages.online/piano-para-iniciantes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Saiba mais
                  </a>
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-earthy-dark">
            O que dizem meus alunos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border-earthy-copper/20 bg-earthy-parchment/30">
              <CardContent>
                <p className="text-earthy-bistre mb-4">
                  &quot;As aulas são incríveis! A professora tem muita paciência
                  e um método muito eficiente.&quot;
                </p>
                <p className="font-semibold text-earthy-liver">Maria Silva</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-earthy-copper/20 bg-earthy-parchment/30">
              <CardContent>
                <p className="text-earthy-bistre mb-4">
                  &quot;Em poucos meses já consegui tocar minhas músicas
                  favoritas!&quot;
                </p>
                <p className="font-semibold text-earthy-liver">João Santos</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-earthy-copper/20 bg-earthy-parchment/30">
              <CardContent>
                <p className="text-earthy-bistre mb-4">
                  &quot;Os cursos online são muito bem estruturados e fáceis de
                  seguir.&quot;
                </p>
                <p className="font-semibold text-earthy-liver">Ana Oliveira</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
