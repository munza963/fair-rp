import type React from "react"

interface ServerStatusProps {
  serverId: number
  playerCount: number
}

const ServerStatus: React.FC<ServerStatusProps> = ({ serverId, playerCount }) => {
  return (
    <div className="bg-black/40 backdrop-blur-sm border-l-4 border-amber-500 pl-4 py-3">
      <div className="text-amber-500 text-sm">Server {serverId}</div>
      <div className="text-2xl font-bold">{playerCount}</div>
    </div>
  )
}

export default ServerStatus
