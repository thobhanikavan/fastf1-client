import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Trophy,
  Clock,
  Flag,
  TrendingUp,
  Users,
  Calendar,
  BarChart3,
  Zap,
  Settings,
  Home,
  Activity,
  Target,
  History,
  User,
} from "lucide-react";

// Static Data
const staticData = {
  seasons: [
    { year: 2024, status: "current", races: 24, completed: 15 },
    { year: 2023, status: "completed", races: 23, completed: 23 },
    { year: 2022, status: "completed", races: 22, completed: 22 },
  ],
  drivers: [
    {
      id: 1,
      name: "Max Verstappen",
      team: "Red Bull Racing",
      number: 1,
      points: 393,
      position: 1,
      color: "#0600EF",
    },
    {
      id: 2,
      name: "Lando Norris",
      team: "McLaren",
      number: 4,
      points: 331,
      position: 2,
      color: "#FF8700",
    },
    {
      id: 3,
      name: "Charles Leclerc",
      team: "Ferrari",
      number: 16,
      points: 307,
      position: 3,
      color: "#DC143C",
    },
    {
      id: 4,
      name: "Oscar Piastri",
      team: "McLaren",
      number: 81,
      points: 262,
      position: 4,
      color: "#FF8700",
    },
    {
      id: 5,
      name: "Carlos Sainz",
      team: "Ferrari",
      number: 55,
      points: 244,
      position: 5,
      color: "#DC143C",
    },
  ],
  teams: [
    { id: 1, name: "McLaren", points: 593, position: 1, color: "#FF8700" },
    { id: 2, name: "Ferrari", points: 551, position: 2, color: "#DC143C" },
    {
      id: 3,
      name: "Red Bull Racing",
      points: 504,
      position: 3,
      color: "#0600EF",
    },
  ],
  races: [
    {
      id: 1,
      name: "Bahrain Grand Prix",
      date: "2024-03-02",
      status: "completed",
      winner: "Max Verstappen",
      circuit: "Bahrain International Circuit",
    },
    {
      id: 2,
      name: "Saudi Arabian Grand Prix",
      date: "2024-03-09",
      status: "completed",
      winner: "Max Verstappen",
      circuit: "Jeddah Corniche Circuit",
    },
    {
      id: 3,
      name: "Australian Grand Prix",
      date: "2024-03-24",
      status: "completed",
      winner: "Carlos Sainz",
      circuit: "Albert Park Circuit",
    },
    {
      id: 4,
      name: "Las Vegas Grand Prix",
      date: "2024-11-23",
      status: "upcoming",
      winner: null,
      circuit: "Las Vegas Street Circuit",
    },
  ],
  sessions: {
    practice1: { name: "Practice 1", duration: "90 min", status: "completed" },
    practice2: { name: "Practice 2", duration: "90 min", status: "completed" },
    practice3: { name: "Practice 3", duration: "60 min", status: "completed" },
    qualifying: { name: "Qualifying", duration: "60 min", status: "completed" },
    race: { name: "Race", duration: "300 km", status: "completed" },
  },
  telemetry: [
    {
      lap: 1,
      driver: "Max Verstappen",
      speed: [320, 315, 310, 305, 300],
      throttle: [100, 95, 90, 85, 80],
      brake: [0, 10, 20, 30, 40],
    },
    {
      lap: 1,
      driver: "Lando Norris",
      speed: [318, 313, 308, 303, 298],
      throttle: [98, 93, 88, 83, 78],
      brake: [0, 12, 22, 32, 42],
    },
  ],
  lapTimes: [
    {
      driver: "Max Verstappen",
      lap: 1,
      time: "1:31.456",
      sector1: "28.123",
      sector2: "35.456",
      sector3: "27.877",
    },
    {
      driver: "Lando Norris",
      lap: 1,
      time: "1:31.789",
      sector1: "28.234",
      sector2: "35.678",
      sector3: "27.877",
    },
    {
      driver: "Charles Leclerc",
      lap: 1,
      time: "1:32.123",
      sector1: "28.345",
      sector2: "35.789",
      sector3: "27.989",
    },
  ],
};

// Navigation Component
const Navigation = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "races", label: "Race Explorer", icon: Flag },
    { id: "laptimes", label: "Lap Times", icon: Clock },
    { id: "telemetry", label: "Telemetry", icon: Activity },
    { id: "strategy", label: "Strategy", icon: Target },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "history", label: "History", icon: History },
    { id: "profile", label: "Profile", icon: User },
  ];

  return (
    <nav className="bg-gray-900 border-r border-red-600 w-64 h-screen fixed left-0 top-0 z-40">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-8">
          <span className="text-red-500">F1</span> Analytics
        </h1>
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeTab === item.id
                      ? "bg-red-600 text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

// Dashboard Component
const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl p-6 text-white">
        <h2 className="text-3xl font-bold mb-2">2024 Formula 1 Season</h2>
        <p className="text-red-200">15 of 24 races completed</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Championship Leader
              </p>
              <p className="text-2xl font-bold text-gray-900">Max Verstappen</p>
              <p className="text-sm text-red-600">393 points</p>
            </div>
            <Trophy className="h-8 w-8 text-yellow-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Constructors Leader
              </p>
              <p className="text-2xl font-bold text-gray-900">McLaren</p>
              <p className="text-sm text-red-600">593 points</p>
            </div>
            <Users className="h-8 w-8 text-orange-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Next Race</p>
              <p className="text-2xl font-bold text-gray-900">Las Vegas GP</p>
              <p className="text-sm text-red-600">Nov 23, 2024</p>
            </div>
            <Calendar className="h-8 w-8 text-purple-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Races Remaining
              </p>
              <p className="text-2xl font-bold text-gray-900">9</p>
              <p className="text-sm text-red-600">of 24 total</p>
            </div>
            <Flag className="h-8 w-8 text-green-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Driver Standings</h3>
          <div className="space-y-3">
            {staticData.drivers.slice(0, 5).map((driver, index) => (
              <div
                key={driver.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-medium">{driver.name}</p>
                    <p className="text-sm text-gray-600">{driver.team}</p>
                  </div>
                </div>
                <span className="font-semibold text-red-600">
                  {driver.points}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Constructor Standings</h3>
          <div className="space-y-3">
            {staticData.teams.map((team, index) => (
              <div key={team.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-medium">{team.name}</p>
                    <div
                      className="w-4 h-2 rounded"
                      style={{ backgroundColor: team.color }}
                    ></div>
                  </div>
                </div>
                <span className="font-semibold text-red-600">
                  {team.points}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Race Explorer Component
const RaceExplorer = () => {
  const [selectedRace, setSelectedRace] = useState(null);
  const [activeSession, setActiveSession] = useState("race");

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">Race Explorer</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {staticData.races.map((race) => (
            <div
              key={race.id}
              onClick={() => setSelectedRace(race)}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                selectedRace?.id === race.id
                  ? "border-red-500 bg-red-50"
                  : "border-gray-200 hover:border-red-300"
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{race.name}</h3>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    race.status === "completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {race.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1">{race.circuit}</p>
              <p className="text-sm text-gray-500">{race.date}</p>
              {race.winner && (
                <p className="text-sm font-medium text-red-600 mt-2">
                  Winner: {race.winner}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedRace && (
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-4">
            {selectedRace.name} - Sessions
          </h3>

          <div className="flex space-x-2 mb-6">
            {Object.entries(staticData.sessions).map(([key, session]) => (
              <button
                key={key}
                onClick={() => setActiveSession(key)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeSession === key
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {session.name}
              </button>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">
              {staticData.sessions[activeSession].name}
            </h4>
            <p className="text-gray-600">
              Duration: {staticData.sessions[activeSession].duration}
            </p>
            <p className="text-gray-600">
              Status: {staticData.sessions[activeSession].status}
            </p>
            <div className="mt-4 bg-white rounded p-4">
              <p className="text-sm text-gray-500">
                Session data would be displayed here with detailed timing,
                positions, and other relevant metrics.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Lap Times Component
const LapTimes = () => {
  const [selectedDrivers, setSelectedDrivers] = useState([
    "Max Verstappen",
    "Lando Norris",
  ]);

  const toggleDriver = (driverName) => {
    setSelectedDrivers((prev) =>
      prev.includes(driverName)
        ? prev.filter((d) => d !== driverName)
        : [...prev, driverName]
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">Lap Time Comparison</h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">
            Select Drivers to Compare
          </h3>
          <div className="flex flex-wrap gap-2">
            {staticData.drivers.map((driver) => (
              <button
                key={driver.id}
                onClick={() => toggleDriver(driver.name)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedDrivers.includes(driver.name)
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {driver.name}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Lap Time Data</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Driver</th>
                  <th className="text-left py-2">Lap Time</th>
                  <th className="text-left py-2">Sector 1</th>
                  <th className="text-left py-2">Sector 2</th>
                  <th className="text-left py-2">Sector 3</th>
                </tr>
              </thead>
              <tbody>
                {staticData.lapTimes
                  .filter((lapTime) => selectedDrivers.includes(lapTime.driver))
                  .map((lapTime, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 font-medium">{lapTime.driver}</td>
                      <td className="py-2 font-mono text-red-600">
                        {lapTime.time}
                      </td>
                      <td className="py-2 font-mono">{lapTime.sector1}</td>
                      <td className="py-2 font-mono">{lapTime.sector2}</td>
                      <td className="py-2 font-mono">{lapTime.sector3}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// Telemetry Component
const Telemetry = () => {
  const [selectedDriver, setSelectedDriver] = useState("Max Verstappen");

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">Driver Telemetry</h2>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Driver
          </label>
          <select
            value={selectedDriver}
            onChange={(e) => setSelectedDriver(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
          >
            {staticData.drivers.map((driver) => (
              <option key={driver.id} value={driver.name}>
                {driver.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-3">Speed Data</h3>
            <div className="h-32 bg-white rounded border flex items-center justify-center">
              <p className="text-gray-500">
                Speed chart would be rendered here
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-3">Throttle Data</h3>
            <div className="h-32 bg-white rounded border flex items-center justify-center">
              <p className="text-gray-500">
                Throttle chart would be rendered here
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-3">Brake Data</h3>
            <div className="h-32 bg-white rounded border flex items-center justify-center">
              <p className="text-gray-500">
                Brake chart would be rendered here
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-3">Gear Data</h3>
            <div className="h-32 bg-white rounded border flex items-center justify-center">
              <p className="text-gray-500">Gear chart would be rendered here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Strategy Component
const Strategy = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">Race Strategy Dashboard</h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Pit Stop Analysis</h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded p-4">
                <h4 className="font-medium text-gray-700">Average Pit Time</h4>
                <p className="text-2xl font-bold text-red-600">24.8s</p>
              </div>
              <div className="bg-white rounded p-4">
                <h4 className="font-medium text-gray-700">Fastest Pit Stop</h4>
                <p className="text-2xl font-bold text-green-600">22.1s</p>
              </div>
              <div className="bg-white rounded p-4">
                <h4 className="font-medium text-gray-700">Total Pit Stops</h4>
                <p className="text-2xl font-bold text-blue-600">34</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Tyre Strategy</h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-white rounded">
                <span className="font-medium">Soft Compound</span>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                  <span>12 sets used</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 bg-white rounded">
                <span className="font-medium">Medium Compound</span>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                  <span>18 sets used</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 bg-white rounded">
                <span className="font-medium">Hard Compound</span>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-white border-2 border-gray-400 rounded-full mr-2"></div>
                  <span>8 sets used</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Analytics Component
const Analytics = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">Performance Analytics</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">
            <h3 className="text-sm font-medium mb-1">Average Lap Time</h3>
            <p className="text-2xl font-bold">1:31.456</p>
            <p className="text-sm text-blue-200">↓ 0.3s vs last race</p>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white">
            <h3 className="text-sm font-medium mb-1">Fastest Lap</h3>
            <p className="text-2xl font-bold">1:29.123</p>
            <p className="text-sm text-green-200">↑ New record</p>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white">
            <h3 className="text-sm font-medium mb-1">Positions Gained</h3>
            <p className="text-2xl font-bold">+5</p>
            <p className="text-sm text-purple-200">Start: P8 → Finish: P3</p>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-4 text-white">
            <h3 className="text-sm font-medium mb-1">Points Scored</h3>
            <p className="text-2xl font-bold">15</p>
            <p className="text-sm text-orange-200">Season total: 393</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3">
              Team Performance Comparison
            </h3>
            <div className="h-64 bg-white rounded border flex items-center justify-center">
              <p className="text-gray-500">
                Performance comparison chart would be rendered here
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3">
              Driver vs Driver Analysis
            </h3>
            <div className="h-64 bg-white rounded border flex items-center justify-center">
              <p className="text-gray-500">
                Driver comparison chart would be rendered here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// History Component
const HistoryComponent = () => {
  const [selectedYear, setSelectedYear] = useState(2024);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">Historical Insights</h2>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Season
          </label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
          >
            {staticData.seasons.map((season) => (
              <option key={season.year} value={season.year}>
                {season.year} Season
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Season Overview</h3>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-medium">Total Races:</span> 24
              </p>
              <p className="text-sm">
                <span className="font-medium">Different Winners:</span> 8
              </p>
              <p className="text-sm">
                <span className="font-medium">Pole Positions:</span> 15
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Championship Battle</h3>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-medium">Title Decided:</span> Round 19
              </p>
              <p className="text-sm">
                <span className="font-medium">Margin:</span> 62 points
              </p>
              <p className="text-sm">
                <span className="font-medium">Lead Changes:</span> 3
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Notable Records</h3>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-medium">Fastest Lap:</span> 1:29.123
              </p>
              <p className="text-sm">
                <span className="font-medium">Most Wins:</span> Max Verstappen
                (9)
              </p>
              <p className="text-sm">
                <span className="font-medium">Most Poles:</span> Max Verstappen
                (8)
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Season Timeline</h3>
          <div className="h-32 bg-white rounded border flex items-center justify-center">
            <p className="text-gray-500">
              Interactive season timeline would be displayed here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Profile Component
const Profile = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [favoriteDrivers, setFavoriteDrivers] = useState([
    "Max Verstappen",
    "Lando Norris",
  ]);
  const [favoriteTeams, setFavoriteTeams] = useState(["McLaren"]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">User Profile</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Preferences</h3>

            <div className="flex items-center justify-between">
              <span className="font-medium">Dark Mode</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                  darkMode ? "bg-red-600" : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    darkMode ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Favorite Drivers
              </label>
              <div className="space-y-2">
                {staticData.drivers.map((driver) => (
                  <label key={driver.id} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={favoriteDrivers.includes(driver.name)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFavoriteDrivers([...favoriteDrivers, driver.name]);
                        } else {
                          setFavoriteDrivers(
                            favoriteDrivers.filter((d) => d !== driver.name)
                          );
                        }
                      }}
                      className="mr-2"
                    />
                    {driver.name}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Statistics</h3>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Races Watched</span>
                  <span className="font-semibold">15/24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Predictions Made</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Accuracy Rate</span>
                  <span className="font-semibold text-green-600">75%</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Recent Activity</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Viewed Las Vegas GP qualifying results</p>
                <p>• Compared lap times for Brazilian GP</p>
                <p>• Updated driver predictions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "races":
        return <RaceExplorer />;
      case "laptimes":
        return <LapTimes />;
      case "telemetry":
        return <Telemetry />;
      case "strategy":
        return <Strategy />;
      case "analytics":
        return <Analytics />;
      case "history":
        return <HistoryComponent />;
      case "profile":
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="ml-64 p-6">{renderContent()}</main>
    </div>
  );
};

export default App;
