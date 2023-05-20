import { ArrowRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export const metadata = {
  title: "Justin North",
  description: "Développeur fullstack",
}

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-4xl">
          Salut ! Moi c’est <span className="font-bold">Justin North</span>.
        </h1>
        <p>Je suis développeur Fullstack chez Lonestone.</p>
      </div>
      <Link href="a-propos" className="flex items-center gap-1">
        <ArrowRightIcon />
        <p>En savoir plus</p>
      </Link>
    </div>
  )
}
