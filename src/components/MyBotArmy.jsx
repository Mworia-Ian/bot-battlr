function MyBotArmy({ selectedBots , removeFromArmy}) {
  return (
    <div>
      {selectedBots &&
        selectedBots.map((bot) => (
          <div
            key={bot.id}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-green-500 mb-5 "
            onClick={() => removeFromArmy(bot)}
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
            </div>
          </div>
        ))}
    </div>
  );
}

export default MyBotArmy;
