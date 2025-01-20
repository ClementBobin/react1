interface TeamProps {
    onTeamSelect: (team: string) => void;
    team: string;
    description: string;
}

export const Team = ({ onTeamSelect, team, description }: TeamProps) => {
    return (
        <li
            onClick={() => onTeamSelect(team)}
            className="cursor-pointer hover:flex-1 px-4 py-2 bg-gray-100 hover:bg-blue-200 rounded-md mb-2 transition-colors"
        >
            {team}
            <p className="text-sm text-gray-500">{description}</p>
        </li>
    );
};