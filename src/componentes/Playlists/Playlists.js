import axios from "axios";
import React, { useEffect, useState } from "react";
import { headers } from "../../headers";
import CriarPlaylist from "../CriarPlaylist/CriarPlaylist";
import Musicas from "../Musicas/Musicas";

function Playlists() {
  const [playlists, setPlaylists] = useState([]);

  //   Exercício 2 (o 1 é leitura da doc)
  const pegaPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        headers
      )
      .then((res) => {
        setPlaylists(res.data.result.list);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  useEffect(() => {
    pegaPlaylists();
  }, []);
  return (
    <div>
      <CriarPlaylist pegaPlaylists={pegaPlaylists} />
      {playlists.map((playlist) => {
        return <Musicas key={playlist.id} playlist={playlist} />;
      })}
    </div>
  );
}
function Playlists () {
  const [playlistName, setPlaylistName] = useState("");

  const changePlaylistName = (event) => {
    setPlaylistName(event.target.value);
  };
  const buscaPlaylist = async () => {
    try {
      const res = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${playlistName}"
        {
          headers: {
            Authorization: "marcelo-castro-ammal"
          }
        }
      );
      setPlaylists(res.data.result.playlist);
    } catch (error) {
      console.log(error);
    }
  };

  function importarPlaylists() {
    axios
    .get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
    
    {
      headers: {
        Authorization: "marcelo-castro-ammal"
      }
    }
    )
  
  .then((response) => setPlaylists(response.data.result.list)),
  .catch((error) => console.log(error));
}
const [playlists, setPlaylists] = useState(playlistsLocal);

useEffect(() => {
  importarPlaylists();
}, []);

return (
  <div>
    <label htmlfor="busca-playlist-input">Buscar playlist por nome</label>
    <input 
    id="busca-playlist-input"
    type="text"
    placeholder="Sua playlist"
    value={playListName}
    onChange={changePlaylistName}
    />
    <button onClick={buscaPlayList}>Buscar</button>
    <button onClick={importarPlaylists}>Recarregar playlists</button>
    {playlists.map((playlists) => {
      return (
        <Musicas
        key={playlist.id}
        playlist={playlist}
        importarPlaylists={importarPlaylists}
        />
      );
    })}
</div>
  );
  

export default Playlists;
