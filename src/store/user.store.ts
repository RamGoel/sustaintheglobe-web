/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { UserProps } from "../types/user.types";

export type UserStoreProps = {
  user: any | null;
  saveUser: (userData: UserProps) => void;
  removeUser: () => void;
};
export const useUserStore = create<UserStoreProps>((set) => ({
  user: {
    userID: "1234567890",
    username: "ramgoel",
    fullName: "Ram Goel",
    email: "ram@gmail.com",
    phone: "1234567890",
    location: "Mumbai, Maharashtra, India",
    bio: "I'm a food enthusiast and a proud donor of FeedMore India!",
    totalPlatesDonated: 1200,
    totalPeopleFed: 1350,
    totalAmountDonated: 50_000,
    donationHistory: [
      {
        amount: 1500,
        date: "2024-01-15",
        platesGenerated: 100,
        feedingDriveDetails: {
          location: "Mumbai Central",
          date: "2024-01-16",
          beneficiaries: 100,
          images: [
            "https://www.epa.gov/sites/default/files/styles/medium/public/2015-11/manpic.jpg?itok=YnvEqbSe",
            "https://www.epa.gov/sites/default/files/styles/medium/public/2015-11/manpic.jpg?itok=YnvEqbSe",
          ],
          caption: "Feeding drive at Mumbai Central railway station",
        },
      },
      {
        amount: 3000,
        date: "2024-01-01",
        platesGenerated: 200,
        feedingDriveDetails: {
          location: "Dharavi",
          date: "2024-01-02",
          beneficiaries: 200,
          images: [
            "https://www.epa.gov/sites/default/files/styles/medium/public/2015-11/manpic.jpg?itok=YnvEqbSe",
            "https://www.epa.gov/sites/default/files/styles/medium/public/2015-11/manpic.jpg?itok=YnvEqbSe",
          ],
          caption: "New Year feeding drive in Dharavi",
        },
      },
    ],
  },

  saveUser: (userData: UserProps) => set(() => ({ user: userData })),
  removeUser: () => set({ user: null }),
}));
