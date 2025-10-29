// types/index.ts
export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}

export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
}

function StatsDisplay({ stats, showReadingTime = true }: StatsDisplayProps) {
  const { characterCount, wordCount, readingTime } = stats;

  return (
    <div>
      <h3>Stats Display </h3>

      <div>
        <div>Characters: {characterCount}</div>
        <div>Words: {wordCount}</div>
        {/* <div>Reading Time: {readingTime} minutes</div> */}
        
        {showReadingTime && <div>Reading Time: {Math.ceil(readingTime)} minutes</div>}
      </div>
    </div>
  );
}

export default StatsDisplay;
