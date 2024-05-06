import { useState, useEffect } from "react";
import MyBotArmy from "./MyBotArmy";

function BotCollection() {
  const [bots, setBots] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
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

  return (
    <>
      <div className="columns-4">
        <MyBotArmy selectedBots={selectedBots} removeFromArmy={removeFromArmy} />
      </div>
      <div className="columns-4 p-10 bg-green-200 mt-5">
        {bots.map((bot) => (
          <div
            key={bot.id}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-green-500 mb-5 "
          >
            <img className="w-full" src={bot.avatar_url} alt={bot.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{bot.name}</div>
              <p>
                <b>Created at: </b>
                {bot.created_at}
              </p>
              <p>
                <b>Updated at at: </b>
                {bot.updated_at}
              </p>
              <p className="truncate">
                <b>Catchphrase: </b>
                {bot.catchphrase}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Health: {bot.health}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Damage: {bot.damage}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Armor: {bot.armor}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Class:{bot.bot_class}
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
