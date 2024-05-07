import { useState, useEffect } from "react";
import MyBotArmy from "./MyBotArmy";
import SortBar from "./SortBar";

function BotCollection() {
  const [bots, setBots] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Mworia-Ian/bot-battlr/bots")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBots(data);
      })
      .catch((error) => {
        console.error("Error fetching bots:", error);
      });
  }, []);

  const addToArmy = (bot) => {
    if (!selectedBots.find((selectedBot) => selectedBot.id === bot.id)) {
      setSelectedBots([...selectedBots, bot]);
      console.log(selectedBots);
    }
  };

  const removeFromArmy = (botToRemove) => {
    setSelectedBots(selectedBots.filter(bot => bot.id !== botToRemove.id));
  };

  const handleSort = (sortBy) => {
    const sortedBots = [...bots].sort((a,b) => {
      if (a[sortBy] < b[sortBy]) return -1
      if (a[sortBy] > b[sortBy]) return 1
      return 0
    })
    setBots(sortedBots)
  }

  return (
    <>
      <div className="columns-4">
        <MyBotArmy selectedBots={selectedBots} removeFromArmy={removeFromArmy} />
      </div>
      <div>
      <SortBar handleSort={handleSort} />
      </div>
      <div className="columns-4 p-10 bg-blue-200 mt-5">
        {bots.map((bot) => (
          <div
            key={bot.id}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-950 mb-5 "
          >
            <img className="w-full" src={bot.avatar_url} alt={bot.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-white mb-2">{bot.name}</div>
              <p className="text-white">
                <b className="text-orange-500">Created at: </b>
                {bot.created_at}
              </p>
              <p className="text-white">
                <b className="text-orange-500">Updated at at: </b>
                {bot.updated_at}
              </p>
              <p className="truncate text-white">
                <b className="text-orange-500">Catchphrase: </b>
                {bot.catchphrase}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-blue-950 mr-2 mb-2">
                Health: {bot.health}
              </span>
              <span className="inline-block bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-blue-950 mr-2 mb-2">
                Damage: {bot.damage}
              </span>
              <span className="inline-block bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-blue-950 mr-2 mb-2">
                Armor: {bot.armor}
              </span>
              <span className="inline-block bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-blue-950 mr-2 mb-2">
                Class: {bot.bot_class}
              </span>
              <button
                onClick={() => addToArmy(bot)}
                className="bg-gray-200 hover:bg-green-300 text-black font-bold py-2 px-4 rounded-full"
              >
                Enlist to Army
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BotCollection;
