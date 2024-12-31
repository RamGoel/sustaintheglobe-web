/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

interface AnalyticsState {
  analytics: any[];
  setAnalytics: (analytics: any[]) => void;
}

export const useAnalyticsStore = create<AnalyticsState>((set) => ({
  analytics: [
    {
      peopleFed: {
        day: 1234,
        week: 7500,
        month: 26544,
      },
      totalDonations: {
        day: 18510,
        week: 123456,
        month: 26544,
      },
      donors: {
        day: 82,
        week: 1234,
        month: 26544,
      },
      impactGallery: [
        "https://b.zmtcdn.com/data/o2_assets/30ac0d6f1126244e2a3889c875c2b0711663835191.jpeg",
        "https://b.zmtcdn.com/data/o2_assets/18f86845604c774ede977f3d32e17e4b1670435214.png",
        "https://b.zmtcdn.com/data/o2_assets/18f86845604c774ede977f3d32e17e4b1670435214.png",
      ],
      impactJourney: {
        nextMilestone: 2000,
        currentMeals: 1234,
        mealsToGo: 766,
        progress: 62,
      },
      donorStats: {
        rank: 28,
        monthStreak: 5,
        totalDonations: 12,
      },
      recentDonations: [
        {
          name: "Rahul",
          amount: 500,
          timestamp: new Date().getTime(),
        },
      ],
    },
  ],
  setAnalytics: (analytics) => set({ analytics }),
}));
