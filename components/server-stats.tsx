import type React from "react"

interface ServerStatsProps {
  cpuUsage: number
  memoryUsage: number
  diskUsage: number
}

const ServerStats: React.FC<ServerStatsProps> = ({ cpuUsage, memoryUsage, diskUsage }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* CPU Usage */}
      <div className="p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">CPU Usage</h3>
        <div className="relative h-24">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold">{cpuUsage}%</span>
          </div>
          <div className="h-full w-full rounded-full overflow-hidden">
            <div className="h-full bg-amber-500/20" style={{ width: `${cpuUsage}%` }}>
              <div className="h-full text-amber-500 flex items-center justify-center"></div>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2">Current CPU utilization.</p>
      </div>

      {/* Memory Usage */}
      <div className="p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Memory Usage</h3>
        <div className="relative h-24">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold">{memoryUsage}%</span>
          </div>
          <div className="h-full w-full rounded-full overflow-hidden">
            <div className="h-full bg-amber-500/20" style={{ width: `${memoryUsage}%` }}>
              <div className="h-full text-amber-500 flex items-center justify-center"></div>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2">Current memory utilization.</p>
      </div>

      {/* Disk Usage */}
      <div className="p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Disk Usage</h3>
        <div className="relative h-24">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold">{diskUsage}%</span>
          </div>
          <div className="h-full w-full rounded-full overflow-hidden">
            <div className="h-full bg-amber-500/20" style={{ width: `${diskUsage}%` }}>
              <div className="h-full text-amber-500 flex items-center justify-center"></div>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2">Current disk utilization.</p>
      </div>
    </div>
  )
}

export default ServerStats
