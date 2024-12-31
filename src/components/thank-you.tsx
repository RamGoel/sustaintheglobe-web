import { useUserStore } from "../store/user.store";

interface ThankYouModalProps {
  amount: number;
  hideModal: () => void;
}

const ThankYouModal = ({ amount, hideModal }: ThankYouModalProps) => {
  const { user } = useUserStore();
  const platesCount = Math.floor(amount / 15);

  return (
    <div className="fixed inset-0 w-full md:w-1/4 mx-auto z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
      <div className="flex flex-col items-center justify-center h-screen relative">
        <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-xl max-w-md mx-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-center mb-2">
            Thank You {user?.fullName}!
          </h2>
          <p className="text-gray-600 text-center mb-4">
            Your generous donation of ₹{amount} will help provide meals to those
            in need.
          </p>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <span className="text-3xl font-bold text-green-600">
              {platesCount}
            </span>
            <p className="text-green-700">
              {platesCount === 1 ? "Person" : "People"} will receive a meal
              thanks to your kindness
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Together we can make a difference in fighting hunger.
          </p>
          <button
            className="bg-green-500 mt-3 text-white px-4 py-2 rounded-md"
            onClick={hideModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
