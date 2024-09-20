import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
      <Link className="flex items-center justify-center" to="/">
        <Zap className="h-6 w-6 text-primary" />
        <span className="ml-2 text-2xl font-bold text-primary">
          Post-Genius
        </span>
      </Link>
    </header>
  );
}
