import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Hotel as HotelIcon,
  MeetingRoom as MeetingRoomIcon,
  BookOnline as BookOnlineIcon,
  People as PeopleIcon,
  MonetizationOn as MonetizationOnIcon,
  TrendingUp as TrendingUpIcon,
  AttachMoney as AttachMoneyIcon,
  Percent as PercentIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useThemeMode } from "../context/ThemeContext";

export default function AdminDashboardStats() {
  const [stats, setStats] = useState(null);
  const { isDark } = useThemeMode();

  const GOLD = "#C9A96E";
  const GOLD_DARK = "#A68550";

  const th = {
    bgGradient: isDark
      ? "linear-gradient(135deg, #0a0a0a 0%, #111111 100%)"
      : "linear-gradient(135deg, #F7F4EF 0%, #EEE9E2 100%)",
    bgGlass: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,253,249,0.92)",
    bgCard:  isDark ? "rgba(20,18,14,0.9)"    : "rgba(255,253,249,0.98)",
    textPrimary:   isDark ? "#F0EBE1"                    : "#1A1612",
    textSecondary: isDark ? "rgba(240,235,225,0.65)"     : "rgba(26,22,18,0.65)",
    textMuted:     isDark ? "rgba(240,235,225,0.45)"     : "rgba(26,22,18,0.45)",
    borderLight:   isDark ? "rgba(201,169,110,0.12)"     : "rgba(201,169,110,0.2)",
    borderStrong:  isDark ? "rgba(201,169,110,0.32)"     : "rgba(201,169,110,0.4)",
    blur: "blur(10px)",
  };

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axiosInstance.get("/admin/stats", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStats(res.data.stats);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  if (!stats) {
    return (
      <div style={{
        minHeight: '100vh',
        background: th.bgGradient,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        transition: 'background 0.38s ease',
      }}>
        <HotelIcon style={{ fontSize: 60, color: GOLD, opacity: 0.8 }} />
        <p style={{ color: th.textSecondary, margin: 0, letterSpacing: 2, fontSize: '0.9rem', textTransform: 'uppercase' }}>
          Loading luxury experience…
        </p>
      </div>
    );
  }

  const occupancyRate = stats.totalRooms
    ? ((stats.occupiedRooms / stats.totalRooms) * 100).toFixed(1)
    : 0;

  const revenueData = stats.monthlyRevenue && stats.monthlyRevenue.length
    ? stats.monthlyRevenue
    : [
        { month: "Jan", revenue: 0 },
        { month: "Feb", revenue: 0 },
        { month: "Mar", revenue: 0 },
        { month: "Apr", revenue: 0 },
        { month: "May", revenue: 0 },
        { month: "Jun", revenue: 0 },
      ];

  const formatCurrency = (value) => `RS ${value.toLocaleString('en-IN')}`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { y: -6, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const statCards = [
    { title: 'Total Rooms',     value: stats.totalRooms,                                       icon: <HotelIcon       style={{ color: GOLD, fontSize: 28 }} /> },
    { title: 'Occupied Rooms',  value: `${stats.occupiedRooms} (${occupancyRate}%)`,           icon: <MeetingRoomIcon style={{ color: GOLD, fontSize: 28 }} /> },
    { title: 'Available Rooms', value: stats.availableRooms,                                   icon: <HotelIcon       style={{ color: GOLD, fontSize: 28 }} /> },
    { title: 'Total Bookings',  value: stats.totalBookings,                                    icon: <BookOnlineIcon  style={{ color: GOLD, fontSize: 28 }} /> },
    { title: 'Total Guests',    value: stats.totalGuests,                                      icon: <PeopleIcon      style={{ color: GOLD, fontSize: 28 }} /> },
    { title: 'Total Revenue',   value: formatCurrency(stats.totalRevenue),                     icon: <MonetizationOnIcon style={{ color: GOLD, fontSize: 28 }} /> },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        minHeight: '100vh',
        background: th.bgGradient,
        padding: '32px',
        fontFamily: '"Inter", "Arial", sans-serif',
        position: 'relative',
        transition: 'background 0.38s ease',
      }}
    >
      {/* Stat Cards */}
      <motion.div
        variants={itemVariants}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 24,
          marginBottom: 40,
        }}
      >
        {statCards.map((card, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover="hover"
            style={{
              background: th.bgGlass,
              backdropFilter: th.blur,
              border: `1px solid ${th.borderLight}`,
              borderRadius: 20,
              padding: 24,
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'background 0.38s ease, border-color 0.38s ease',
            }}
          >
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 3,
              background: `linear-gradient(90deg, ${GOLD_DARK}, ${GOLD})`,
            }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <p style={{ color: th.textSecondary, margin: '0 0 8px 0', fontSize: '0.9rem', letterSpacing: '0.5px' }}>
                  {card.title}
                </p>
                <h2 style={{ color: th.textPrimary, margin: 0, fontSize: '2rem', fontWeight: 600 }}>
                  {card.value}
                </h2>
              </div>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: 'rgba(201,169,110,0.1)',
                border: `1px solid ${th.borderStrong}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {card.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts */}
      <motion.div
        variants={itemVariants}
        style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}
      >
        {/* Revenue Area Chart */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          style={{
            background: th.bgGlass,
            borderRadius: 20,
            padding: 24,
            backdropFilter: th.blur,
            border: `1px solid ${th.borderLight}`,
            transition: 'background 0.38s ease',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <TrendingUpIcon style={{ color: GOLD }} />
            <h3 style={{ color: th.textPrimary, margin: 0, fontWeight: 500 }}>
              Revenue Trend (Last 6 Months)
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor={GOLD} stopOpacity={0.25} />
                  <stop offset="95%" stopColor={GOLD} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke={th.borderLight} strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="month"
                stroke={th.borderLight}
                tick={{ fill: th.textMuted, fontSize: 12 }}
              />
              <YAxis
                stroke={th.borderLight}
                tick={{ fill: th.textMuted, fontSize: 12 }}
                tickFormatter={v => `RS ${(v / 1000).toFixed(0)}k`}
              />
              <Tooltip
                contentStyle={{
                  background: isDark ? "#111111" : "#FFFDF8",
                  border: `1px solid ${th.borderStrong}`,
                  borderRadius: 12,
                  color: th.textPrimary,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                }}
                formatter={value => [`RS ${value.toLocaleString('en-IN')}`, 'Revenue']}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke={GOLD}
                strokeWidth={2.5}
                fill="url(#revenueGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Quick Overview */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          style={{
            background: th.bgGlass,
            borderRadius: 20,
            padding: 24,
            backdropFilter: th.blur,
            border: `1px solid ${th.borderLight}`,
            transition: 'background 0.38s ease',
          }}
        >
          <h3 style={{ color: th.textPrimary, marginBottom: 28, fontWeight: 500, fontSize: '1.1rem' }}>
            Quick Overview
          </h3>
          {[
            { icon: <PercentIcon style={{ color: GOLD }} />,       label: 'Occupancy Rate',    value: `${occupancyRate}%` },
            { icon: <AttachMoneyIcon style={{ color: GOLD }} />,   label: 'Avg Daily Rate',    value: formatCurrency(stats.totalRevenue / (stats.totalBookings || 1)) },
            { icon: <MonetizationOnIcon style={{ color: GOLD }} />, label: 'Revenue per Room', value: formatCurrency(stats.totalRevenue / stats.totalRooms) },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: i < 2 ? 24 : 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                {item.icon}
                <span style={{ color: th.textSecondary, fontSize: '0.88rem' }}>{item.label}</span>
              </div>
              <span style={{ color: th.textPrimary, fontSize: '1.75rem', fontWeight: 600 }}>
                {item.value}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
