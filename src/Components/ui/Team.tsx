interface TeamProps {
    onTeamSelect: (team: string) => void;
    team: string;
}

export const Team = ({ onTeamSelect, team }: TeamProps) => {
    return (
        <li
            onClick={() => onTeamSelect(team)}
            className="cursor-pointer hover:flex-1 px-4 py-2 bg-gray-100 hover:bg-blue-200 rounded-md mb-2 transition-colors"
        >
            {team}
        </li>
    );
};