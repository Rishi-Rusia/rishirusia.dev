import Image from "next/image";

export default function Practice() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <Image
  src="https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg"
  alt="Koala"
  width={200}
  height={200}
  className="w-[200px] h-[200px] object-cover rounded-lg"
/>
            <h1 className="text-6xl font-bold">Practice</h1>
        </main>
    )
}