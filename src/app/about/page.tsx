import { Container } from "@/components/container";
import Image from "next/image";
import Avatar from "../../../public/avatar.png";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function About() {
  return (
    <main className="min-h-screen flex justify-center mt-10 ">
      <Container>
        <div className="flex items-center mb-8 gap-4">
          <div className="w-20 h-20 rounded-full">
            <Image alt="avatar" src={Avatar} className="rounded-full" />
          </div>

          <h1 className="font-bold"> Rodrigo Maruya</h1>
        </div>
        <p className="font-semibold text-lg leading-relaxed">
          Sou um entusiasta de tecnologia, finanças e programação, apaixonado
          por explorar o mundo através da curiosidade. Gosto de mergulhar em
          diferentes assuntos, aprender sobre tudo um pouco e conectar ideias de
          áreas diversas. Acredito que a tecnologia e o conhecimento são
          ferramentas poderosas para transformar o mundo, e estou sempre em
          busca de novas formas de aplicá-los para crescer e compartilhar.{" "}
        </p>
        <div className="flex justify-end">
          <div className="w-10 h-10 flex justify-center items-center rounded-full bg-green-700 font-bold mt-8 ">
            <Link href={"/post"}>
              <ArrowLeft color="#fff" />
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
