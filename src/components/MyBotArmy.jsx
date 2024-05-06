import { useState } from "react"
import BotCollection from "./BotCollection";

function MyBotArmy() {

  const [selectedBots, setSelectedBots] = useState([])

  const addToArmy = (bot) => {
    if (!selectedBots.find(selectedBot => selectedBot.id === bot.id)) {
      setSelectedBots([...selectedBots, bot]);
    }
  }

  return (
    <div className="bg-stone-500">
      <h1>Robot Army</h1>
    </div>
  )
}

export default MyBotArmy
