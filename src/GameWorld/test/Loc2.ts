import { testArea } from ".";
import Room from "../../obj/Room";

export default function Loc2(): Room {
  const l = new Room()  
l.Name = "lokacja 2"
l.Description = "to jest druga lokacja testowa"
l.Exits = {
    south: testArea.loc1
}

  return l
} 