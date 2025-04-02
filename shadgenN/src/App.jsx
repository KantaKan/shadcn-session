import { Button } from "@/components/ui/button";
import "./App.css";
import NewjeansCard from "./components/ui/newjeans-card";
import { newJeansMembers } from "./lib/njs";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
function App() {
  function buyNjs() {
    toast("item added to cart");
  }
  const [member, setMember] = useState("");
  let selectedMember = newJeansMembers.find((e) => e.name === member);
  return (
    <>
      <h1 className="text-5xl py-8">Newjeans</h1>
      <div className="grid grid-cols-3 gap-4">
        {newJeansMembers.map((member) => (
          <NewjeansCard key={member.birthDate} name={member.name} role={member.role} profileImage={member.profileImage} onBuy={buyNjs} />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center py-8 gap-4">
        <Select value={member} onValueChange={setMember}>
          <SelectTrigger>
            <SelectValue placeholder="Select member" />
          </SelectTrigger>
          <SelectContent>
            {newJeansMembers.map((member) => (
              <SelectItem value={member.name}>{member.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {selectedMember && <NewjeansCard key={selectedMember.birthDate} name={selectedMember.name} role={selectedMember.role} profileImage={selectedMember.profileImage} onBuy={buyNjs} />}
      </div>
    </>
  );
}

export default App;
