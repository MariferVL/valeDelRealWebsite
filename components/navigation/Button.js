import Image from "next/image";
import Link from "next/link";

const Button = () => {
  return (
    <Link href="/">
      <Image
        src="/images/mainLogo.webp"
        alt="Logo"
        width={100}
        height={100}
        className="relative"
      />

    </Link>
  );
};
export default Button;