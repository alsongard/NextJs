import Image from "next/image";
import Hello from "./component/page"

export default function Home() {
  console.log("What i am i doing here ? --Server/Client"); 
  return (
    <div>
      <h1 className="text-[30px] text-center">Welcome to Nextjs</h1>
      <Hello />
    </div>
  );
}
