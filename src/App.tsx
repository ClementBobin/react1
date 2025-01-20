import { useState, useEffect } from 'react';
import './App.css';
import { TeamList } from './Components/ui/TeamList';
import { PlayersList } from './Components/ui/PlayersList';
import { TeamModel } from '@/lib/classes/Team';
import { Title } from './Components/ui/Title';
import { fetchDataFromAPI } from './lib/api.ts';

const App = () => {
  const [teams, setTeams] = useState<TeamModel[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<TeamModel | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromAPI('http://localhost:5000/api/data/teams');
        // Extract the teams array from the response object
        if (data && Array.isArray(data.teams)) {
          setTeams(data.teams); // Set the teams array
        } else {
          console.error('Fetched data is not in the expected format:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleTeamSelect = (teamName: string) => {
    const team = teams.find(t => t.team === teamName) || null;
    setSelectedTeam(team);
  };

  return (
      <div className="text-center p-4">
        <Title text="Teams and Players" className="text-2xl font-bold mb-4 border-black border-b-2" />
        <section className="flex flex-row text-center justify-center content-between gap-2">
          <TeamList onTeamSelect={handleTeamSelect} teamList={teams} />
          <PlayersList players={selectedTeam ? selectedTeam.players : []} />
        </section>
      </div>
  );
};

export default App;
