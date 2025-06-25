export default function RightSidebar() {
  return (
    <aside className="w-80 p-6 space-y-6 hidden xl:block">
      {/* Achievement */}
      <div className="bg-white rounded-xl p-4 shadow">
        <h4 className="text-sm font-semibold mb-2">Unlocks achievement</h4>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span>60% Achieved</span>
            <span className="text-indigo-600">✔️</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-indigo-500 h-2 rounded-full" style={{ width: "60%" }}></div>
          </div>
          <div className="text-gray-500">2 steps left</div>
        </div>
      </div>

      {/* Best Sales */}
      <div className="bg-white rounded-xl p-4 shadow">
        <h4 className="text-sm font-semibold mb-2">Best sales</h4>
        <ul className="text-sm space-y-2">
          <li className="flex justify-between items-center">
            <span>Grow green</span>
            <button className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs">Order</button>
          </li>
          <li className="flex justify-between items-center">
            <span>Raise a plant</span>
            <button className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs">Order</button>
          </li>
          <li className="flex justify-between items-center">
            <span>Lucky day</span>
            <button className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs">Order</button>
          </li>
        </ul>
      </div>

      {/* Calendar */}
      <div className="bg-white rounded-xl p-4 shadow">
        <h4 className="text-sm font-semibold mb-2">Lịch công tác</h4>
        <div className="text-xs text-center text-gray-600">
          <div className="grid grid-cols-7 gap-1 mt-2 text-gray-700">
            {["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((d) => (
              <div key={d} className="font-semibold">{d}</div>
            ))}
            {Array.from({ length: 30 }, (_, i) => (
              <div
                key={i}
                className="p-1 rounded hover:bg-indigo-100 text-sm cursor-pointer"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}