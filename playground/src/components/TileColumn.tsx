import AtomTile from './AtomTile';

export default function TileColumn() {
  return (
    <div className="flex flex-col">
      {Array.from({ length: 20 }, (_, i) => (
        <AtomTile key={i} />
      ))}
    </div>
  );
} 