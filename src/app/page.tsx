import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div className="h-[60vh] font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-row items-center justify-items-center h-full">
        <Welcome/>
      </div>
    </div>
  );
}
