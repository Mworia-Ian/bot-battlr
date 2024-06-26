function MyBotArmy({ selectedBots, removeFromArmy }) {
  return (
    <div className="p-3">
      {selectedBots &&
        selectedBots.map((bot) => (
          <div
            key={bot.id}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-950 mb-5 "
            onClick={() => removeFromArmy(bot)}
          >
            <img className="w-full" src={bot.avatar_url} alt={bot.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-white mb-2">
                {bot.name}
              </div>
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
            </div>
          </div>
        ))}
    </div>
  );
}

export default MyBotArmy;
