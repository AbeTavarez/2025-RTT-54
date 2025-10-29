import StatsDisplay from "./StatsDisplay";
import TextInput from "./TextInput";

// types/index.ts
export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}

function CharacterCounter() {
  return (
    <div>
      <h3>Character Count </h3>

      <TextInput />

      <StatsDisplay />
    </div>
  );
}

export default CharacterCounter;
