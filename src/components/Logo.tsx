import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`} aria-label="Licensing Force home">
      <Image src="/logo-mark.png" alt="" width={44} height={44} className="h-11 w-11 rounded-md" priority />
      <span className="font-display text-lg font-bold leading-none tracking-tight text-white sm:text-xl">
        LICENSING{" "}
        <span className="bg-gradient-to-r from-brand-700 to-brand-500 bg-clip-text text-transparent">FORCE</span>
      </span>
    </Link>
  );
}
