import React from "react";
import { ChevronRight, Piano } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection/AboutSection";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen pt-16 flex items-center justify-center bg-gradient-to-r from-purple-100 to-pink-100">
        {" "}
        <div className="container mx-auto px-6 text-center">
          <Piano className="w-16 h-16 mx-auto mb-6 text-purple-600" />
          <h1 className="text-5xl font-bold mb-6 text-gray-800">
            Aprenda Piano com Paixão
          </h1>
          <p className="text-xl mb-8 text-gray-600">
            Descubra a magia da música através de aulas personalizadas e cursos
            online
          </p>
          <div className="flex gap-4 justify-center flex-col md:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-purple-600 hover:bg-purple-700"
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
              className="border-purple-600 text-purple-600"
            >
              <Link href="/#cursos">Ver Cursos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <AboutSection />

      {/* Courses Preview Section */}
      <section id="cursos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Cursos Disponíveis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Mini curso de Piano para Iniciantes{" "}
                </h3>
                <p className="text-gray-600 mb-4">
                  Descubra os 5 pilares do Piano Essencial para ler e tocar suas
                  primeiras músicas no piano.
                </p>
                <Button variant="link" className="text-purple-600 p-0">
                  <a
                    href="https://giuliaaraujo.kpages.online/piano-para-iniciantes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Saiba mais{" "}
                  </a>
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Teoria Musical Aplicada
                </h3>
                <p className="text-gray-600 mb-4">
                  Aprenda teoria musical de forma prática e divertida
                </p>
                <Button variant="link" className="text-purple-600 p-0">
                  <a
                    href="https://giuliaaraujo.kpages.online/piano-para-iniciantes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Saiba mais{" "}
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            O que dizem meus alunos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent>
                <p className="text-gray-600 mb-4">
                  &quot;As aulas são incríveis! A professora tem muita paciência
                  e um método muito eficiente.&quot;
                </p>
                <p className="font-semibold">Maria Silva</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <p className="text-gray-600 mb-4">
                  &quot;Em poucos meses já consegui tocar minhas músicas
                  favoritas!&quot;
                </p>
                <p className="font-semibold">João Santos</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <p className="text-gray-600 mb-4">
                  &quot;Os cursos online são muito bem estruturados e fáceis de
                  seguir.&quot;
                </p>
                <p className="font-semibold">Ana Oliveira</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
