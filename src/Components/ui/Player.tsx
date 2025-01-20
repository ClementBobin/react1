// src/Components/ui/Player.tsx
interface PlayerProps {
    player: string;
}

export const Player = ({ player }: PlayerProps) => {
    return (
        <h2
            className="text-xl font-medium mb-2"
        >
            {player}
        </h2>
    );
};