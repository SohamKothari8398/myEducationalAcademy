import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      height={200}
      width={200}
      style={{ width: "100%", height: "auto", objectFit: "cover" }}
      priority
      alt="logo not available server error"
      src="/logo.webp"
    />
  )
}