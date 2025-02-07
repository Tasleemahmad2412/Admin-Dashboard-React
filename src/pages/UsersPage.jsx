import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatsCard from "../components/common/StatsCard";
import { UserCheck, UserIcon, UserPlus, UserX } from "lucide-react";
import UsersTable from "../components/user/UsersTable";
import UserGrowthChart from "../components/user/UserGrowthChart";
import UserActivityHeatMap from "../components/user/UserActivityHeatMap";
import UserDemographicsChart from "../components/user/UserDemographicsChart";

const userStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};

function UsersPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb:8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatsCard
            name="Total Users"
            icon={UserIcon}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <StatsCard
            name="New Users Today"
            icon={UserPlus}
            value={userStats.newUsersToday}
            color="#10B981"
          />
          <StatsCard
            name="Active Users"
            icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#F59E0B"
          />
          <StatsCard
            name="Churn Rate"
            icon={UserX}
            value={userStats.churnRate}
            color="#EF4444"
          />
        </motion.div>

        <UsersTable />

        {/* CHARTS */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <UserGrowthChart />
          <UserActivityHeatMap />
          <UserDemographicsChart />
        </div>
      </main>
    </div>
  );
}

export default UsersPage;
