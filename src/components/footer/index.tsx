import { Container } from "../container";
export function Footer() {
  return (
    <footer className="w-full bg-slate-900 ">
      <Container>
        <div className="flex justify-center items-center h-32 md:h-28">
          <p className="text-center text-white font-bold">
            Todos os direitos reservados {new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </footer>
  );
}
