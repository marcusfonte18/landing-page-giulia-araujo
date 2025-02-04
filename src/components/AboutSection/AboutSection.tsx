import React from "react";
import { GraduationCap, Users, Heart, Clock } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const AboutSection = () => {
  return (
    <section
      id="sobre"
      className="py-20 bg-gradient-to-br from-purple-50 to-pink-50"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagem e Credenciais */}
          <div className="space-y-6">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                {/* Placeholder para a foto da professora */}
                <div className="aspect-[3/4] bg-purple-200 relative">
                  <Image
                    src="/assets/giulia-araujo.webp"
                    className="object-cover"
                    alt={""}
                    fill
                  />
                </div>
              </div>
              {/* Card flutuante com estatísticas */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-purple-600">10+</p>
                    <p className="text-sm text-gray-600">Anos de Experiência</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-purple-600">500+</p>
                    <p className="text-sm text-gray-600">Alunos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo e Texto */}
          <div className="space-y-8">
            <div>
              <h4 className="text-purple-600 font-medium mb-2">Sobre mim</h4>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Transformando sonhos em música
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Olá! Sou Giulia Araujo, professora de piano há mais de 10 anos.
                Minha jornada na música começou ainda na infância, e desde então
                venho dedicando minha vida a compartilhar essa paixão com
                pessoas de todas as idades. Acredito que cada aluno tem um
                potencial único que merece ser desenvolvido com atenção e
                cuidado.
              </p>
            </div>

            {/* Para quem é */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                Para quem são as aulas?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Iniciantes</h4>
                    <p className="text-gray-600">
                      Pessoas que nunca tocaram e querem realizar o sonho de
                      aprender música
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Estudantes</h4>
                    <p className="text-gray-600">
                      Alunos que desejam aprofundar seus conhecimentos musicais
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Heart className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Entusiastas</h4>
                    <p className="text-gray-600">
                      Amantes da música que querem desenvolver um novo hobby
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Profissionais</h4>
                    <p className="text-gray-600">
                      Músicos que buscam aperfeiçoamento e novas técnicas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
              <h4 className="font-semibold mb-2">
                Comece sua jornada musical hoje!
              </h4>
              <p className="text-gray-600 mb-4">
                Agende uma aula experimental e descubra como a música pode
                transformar sua vida.
              </p>
              <Button className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200">
                <a
                  href="https://wa.me/5521985536417"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Aula Experimental
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
