// src/Components/ui/PlayersList.tsx
import { Player } from './Player';

interface PlayersProps {
    players: string[];
}

export const PlayersList = ({ players }: PlayersProps) => {
    return (
        <div className="mt-6 basis-1/2">
            <h1 className="text-xl font-bold mb-4">Players:</h1>
            {players.map((player: string) => (
                <Player key={player} player={player} />
            ))}
        </div>
    );
};