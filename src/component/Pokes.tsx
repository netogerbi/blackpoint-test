import { useEffect, useState } from "react";
import { pokeApi } from "../api/pokeApi";

interface IProps {
  pokeurl: string;
  openPokes: boolean;
}

const Pokes: React.FC<IProps> = ({ pokeurl, openPokes }) => {
  const [pokes, setPokes] = useState<{ name: string; url: string }>({} as any);

  useEffect(() => {
    const bringPokes = async () => {
      const r = await pokeApi.get(pokeurl);
      return r.data;
    };

    bringPokes().then((r) => {
      const getSpecificPokemon = (name: string) =>
        (r.results || []).filter((e: any) => e.name === name);

      const [{ name, url }] = getSpecificPokemon("pidgeotto");

      setPokes({ name, url });
    });
  }, [openPokes]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a href={pokes.url}>{pokes.name}</a>
    </div>
  );
};

export default Pokes;
