import { Routes, Route } from "react-router-dom";
import CharacterList from "./components/character/CharacterDetail";
import CharacterDetail from "./components/character/CharacterList";
import EpisodeList from "./components/episode/EpisodeList";
import EpisodeDetail from "./components/episode/EpisodeDetail";
import LocationList from "./components/location/LocationList";
import LocationDetail from "./components/location/LocationDetail";

export const App = () => {
  return (
    <Routes>
      <Route path="/" Component={CharacterList} />
      <Route path="/characters" Component={CharacterList} />
      <Route path="/character/:id" Component={CharacterDetail} />
      <Route path="/episodes" Component={EpisodeList} />
      <Route path="/episode/:id" Component={EpisodeDetail} />
      <Route path="/locations" Component={LocationList} />
      <Route path="/location/:id" Component={LocationDetail} />
    </Routes>
  );
};
