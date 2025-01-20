// src/Components/ui/TeamList.tsx
import { Team } from './Team';
import { TeamModel } from '@/lib/classes/Team';

interface TeamsListProps {
    teamList: TeamModel[];
    onTeamSelect: (team: string) => void;
}

export const TeamList = ({ teamList, onTeamSelect }: TeamsListProps) => {
    return (
        <div className="mt-4 basis-1/2">
            <ul className="list-none">
                {teamList.map((team) => (
                    <Team key={team.team} team={team.team} description={team.description} onTeamSelect={onTeamSelect} />
                ))}
            </ul>
        </div>
    );
};