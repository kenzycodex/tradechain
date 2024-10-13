import Link from "next/link";
import Image from "next/image";
import logo from "@/public/TCimages/tradechain.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="TradeChain">
      <Image src={logo} alt="TradeChain Logo" width={32} height={32} />
    </Link>
  );
}
