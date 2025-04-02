import "./App.css";
import { Button } from "@/components/ui/button";
import { newJeansMembers } from "./lib/nj";
import NewjeansCard from "./components/newjeans-card";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

function App() {
  const [nj, setNj] = useState("");
  let selectedMember = newJeansMembers.find((member) => member.name === nj);
  function clickBuy() {
    toast("Item added to card");
  }
  console.log(selectedMember);
  return (
    <>
      <div className="flex flex-col gap-4 w-screen h-screen  justify-center items-center p-8">
        {/* <NewjeansCard name={newJeansMembers[0].name} role={newJeansMembers[0].role} profileImage={newJeansMembers[0].profileImage} onBuy={clickBuy} /> */}
        <div className="grid grid-cols-4 gap-4 px-8 ">
          {newJeansMembers.map((e) => (
            <NewjeansCard key={e.name} name={e.name} role={e.role} profileImage={e.profileImage} onBuy={clickBuy} />
          ))}
        </div>
        <div>
          <Select value={nj} onValueChange={setNj}>
            <SelectTrigger>
              <SelectValue placeholder="member" />
            </SelectTrigger>
            <SelectContent>
              {newJeansMembers.map((e) => (
                <SelectItem value={e.name}>{e.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedMember && <NewjeansCard key={selectedMember.name} name={selectedMember.name} role={selectedMember.role} profileImage={selectedMember.profileImage} onBuy={clickBuy} />}
        </div>
      </div>
    </>
  );
}

export default App;
