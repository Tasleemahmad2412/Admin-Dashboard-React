import { motion } from "framer-motion";
import { BarChart2, ShoppingBag, User, Zap } from "lucide-react";

import Header from "../components/common/Header";
import StatsCard from "../components/common/StatsCard";
import SalesOverviewChart from "../components/overview/SalesOverviewCharts";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";

function OverviewPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overviw" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb:8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatsCard
            name="Total Sales"
            icon={Zap}
            value="$12.345"
            color="#6366F1"
          />
          <StatsCard
            name="New Users"
            icon={User}
            value="$12.345"
            color="#8B5CF6"
          />
          <StatsCard
            name="Total Products"
            icon={ShoppingBag}
            value="$12.345"
            color="#EC4899"
          />
          <StatsCard
            name="Conversion Rate"
            icon={BarChart2}
            value="$12.345"
            color="#10B981"
          />
        </motion.div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5">
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
}

export default OverviewPage;
