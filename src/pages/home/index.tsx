/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import BottomNavbar from "../../components/bottom-nav";
import ThankYouModal from "../../components/thank-you";
import { useAnalyticsStore } from "../../store/analytics.store";
import HowItWorksModal from "../../components/how-works";

const HomePage = () => {
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const { analytics } = useAnalyticsStore();
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  const [timeFrame, setTimeFrame] = useState("day");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("email")) {
      setShowThankYouModal(true);
    }
  }, []);

  const analyticsData = analytics[0];

  return (
    <div>
      {showThankYouModal ? (
        <ThankYouModal
          amount={500}
          hideModal={() => {
            setShowThankYouModal(false);
          }}
        />
      ) : null}

      {showHowItWorks ? (
        <HowItWorksModal
          hideModal={() => {
            setShowHowItWorks(false);
          }}
        />
      ) : null}

      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-md p-4">
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Impact Analytics
              </h2>

              <p
                onClick={() => {
                  setShowHowItWorks(true);
                }}
                className="text-md text-green-500 font-semibold mb-4 cursor-pointer animate-pulse"
              >
                How it works?
              </p>
            </div>

            <div className="flex space-x-2 mb-4">
              <button
                className={`px-3 py-1 rounded-full text-sm font-medium hover:bg-green-200 ${
                  timeFrame === "day"
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-100 text-gray-600"
                }`}
                onClick={() => {
                  setTimeFrame("day");
                }}
              >
                Day
              </button>
              <button
                className={`px-3 py-1 rounded-full text-sm font-medium hover:bg-green-200 ${
                  timeFrame === "week"
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-100 text-gray-600"
                }`}
                onClick={() => {
                  setTimeFrame("week");
                }}
              >
                Week
              </button>
              <button
                className={`px-3 py-1 rounded-full text-sm font-medium hover:bg-green-200 ${
                  timeFrame === "month"
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-100 text-gray-600"
                }`}
                onClick={() => {
                  setTimeFrame("month");
                }}
              >
                Year
              </button>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-center">
                <span className="text-4xl font-bold text-green-600">
                  {analyticsData.peopleFed[timeFrame]}
                </span>
                <p className="text-green-700 font-medium">People Fed</p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <span className="text-2xl font-bold text-green-600">
                    ₹{analyticsData.totalDonations[timeFrame]}
                  </span>
                  <p className="text-green-700 font-medium">Total Donations</p>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold text-green-600">
                    {analyticsData.donors[timeFrame]}
                  </span>
                  <p className="text-green-700 font-medium">Donors</p>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Recent Impact
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {analyticsData.impactGallery.map(
                    (image: string, index: number) => (
                      <div
                        key={index}
                        className="aspect-square rounded-lg overflow-hidden"
                      >
                        <img
                          src={image}
                          alt="Impact gallery"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Your Impact Journey
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Next Milestone</span>
                    <span className="text-green-600 font-medium">
                      {analyticsData.impactJourney.nextMilestone} meals
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-green-600 h-2.5 rounded-full"
                      style={{
                        width: `${analyticsData.impactJourney.progress}%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500">
                    {analyticsData.impactJourney.mealsToGo} more meals to reach
                    your next milestone!
                  </p>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <div className="text-center">
                    <span className="text-xl font-bold text-green-600">
                      #{analyticsData.donorStats.rank}
                    </span>
                    <p className="text-sm text-gray-600">Donor Rank</p>
                  </div>
                  <div className="text-center">
                    <span className="text-xl font-bold text-green-600">
                      {analyticsData.donorStats.monthStreak}
                    </span>
                    <p className="text-sm text-gray-600">Month Streak</p>
                  </div>
                  <div className="text-center">
                    <span className="text-xl font-bold text-green-600">
                      {analyticsData.donorStats.totalDonations}
                    </span>
                    <p className="text-sm text-gray-600">Donations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Random donation popups */}
          <div className="animate-slide-up">
            {analyticsData.recentDonations.map(
              (donation: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-3 mb-2"
                >
                  <p className="text-sm">
                    <span className="font-semibold">{donation.name}</span> just
                    donated{" "}
                    <span className="text-green-600 font-semibold">
                      ₹{donation.amount}
                    </span>{" "}
                    for the cause
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <BottomNavbar />
    </div>
  );
};

export default HomePage;
