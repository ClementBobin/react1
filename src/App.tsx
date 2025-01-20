// src/App.tsx
import { useState } from 'react';
import './App.css';
import { TeamList } from './Components/ui/TeamList';
import { PlayersList } from './Components/ui/PlayersList';
import { TeamModel } from '@/lib/classes/Team';
import { Title } from './Components/ui/Title';

const teams: TeamModel[] = [
  { team: 'Team A', description: 'Description for Team A', players: ['Player 1', 'Player 2'] },
  { team: 'Team B', description: 'Description for Team B', players: ['Player 3', 'Player 4'] },
  { team: 'Team C', description: 'Description for Team C', players: ['Player 5', 'Player 6'] }
];

const App = () => {
  const [selectedTeam, setSelectedTeam] = useState<TeamModel | null>(null);

  const handleTeamSelect = (teamName: string) => {
    const team = teams.find(t => t.team === teamName) || null;
    setSelectedTeam(team);
  };

  return (
      <div className="text-center p-4">
        <Title text="Teams and Players" className="text-2xl font-bold mb-4 border-black border-b-2"/>
        <section className="flex flex-row text-center justify-center content-between gap-2">
          <TeamList onTeamSelect={handleTeamSelect} teamList={teams} />
          <PlayersList players={selectedTeam ? selectedTeam.players : []} />
        </section>
      </div>
  );
};

export default App;