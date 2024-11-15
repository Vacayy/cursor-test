import AtomTile from './AtomTile';

interface TileColumnProps {
  onTileClick: () => void;
}

export default function TileColumn({ onTileClick }: TileColumnProps) {
  return (
    <div className="flex flex-col">
      {Array.from({ length: 20 }, (_, i) => (
        <AtomTile key={i} onClick={onTileClick} />
      ))}
    </div>
  );
} 