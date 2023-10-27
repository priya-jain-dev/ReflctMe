import { AddMood } from "@/components/add-mood";
import Sidebar from "@/components/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background z-0 flex w-full overflow-hidden h-screen	">
      <Sidebar
        side={"right"}
        isOpen={true}
        addItemButtonTitle={"Today"}
        itemComponent={<h1>data </h1>}
        items={[]}
        toggleOpen={() => console.log("toggle")}
        handleCreateItem={() => console.log("create new")}
        handleDrop={() => console.log("drop new")}
      />
      <AddMood />
    </main>
  );
}
