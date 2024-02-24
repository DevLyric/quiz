import { Button } from "@/components/ui/button"
import { Gamepad2, Github } from "lucide-react"
import { Link } from "react-router-dom"

export function Home() {
  return (
    <div className="mx-auto my-8 max-w-4xl flex flex-col flex-1 justify-between">
      <div className="flex flex-col space-y-9">
        <div className="flex items-center space-x-4 sm:justify-center">
          <h1 className="text-5xl font-bold">Quiz.io</h1>
          <Gamepad2 className="h-20 w-20" />
        </div>

        <div className="font-medium space-y-2 sm:text-center">
          <p>Se deseja competir com outros jogadores e ter seu nome no placar, faça <Link to="/sign-in" className="text-amber-500 hover:underline">Login</Link> ou <Link to="/sign-up" className="text-amber-500 hover:underline">Cadastre-se</Link></p>
          <p>Ao entrar com uma conta, você também poderá escolher o tema das perguntas</p>
        </div>

        <div className="sm:self-center w-max">
          <Link to="/quiz">
            <Button type="button" size="lg" className="self-center font-semibold bg-amber-500">
              Jogo Rápido
            </Button>
          </Link>
        </div>
      </div>

      <footer className="flex items-center justify-center space-x-3">
        <a href="https://github.com/DevLyric" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
        <a href="https://github.com/DevLyric" target="_blank" rel="noopener noreferrer">
          <p className="text-sm font-medium hover:underline">Criado por DevLyric</p>
        </a>
      </footer>
    </div>
  );
}
