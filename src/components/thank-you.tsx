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
          <div className="flex gap-2 mt-3">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md"
              onClick={hideModal}
            >
              Close
            </button>
            <button
              className="bg-green-100 text-green-700 px-4 py-2 rounded-md flex items-center gap-2"
              onClick={() => {
                // Create a canvas element
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                canvas.width = 800;
                canvas.height = 600;

                if (ctx) {
                  // Draw white background
                  ctx.fillStyle = "#fff";
                  ctx.fillRect(0, 0, canvas.width, canvas.height);

                  // Draw success icon
                  ctx.beginPath();
                  ctx.arc(400, 150, 50, 0, 2 * Math.PI);
                  ctx.fillStyle = "#dcfce7";
                  ctx.fill();

                  // Draw checkmark
                  ctx.strokeStyle = "#22c55e";
                  ctx.lineWidth = 8;
                  ctx.beginPath();
                  ctx.moveTo(375, 150);
                  ctx.lineTo(395, 170);
                  ctx.lineTo(425, 130);
                  ctx.stroke();

                  // Draw text
                  ctx.fillStyle = "#000";
                  ctx.font = "bold 24px Arial";
                  ctx.textAlign = "center";
                  ctx.fillText(`Thank you ${user?.fullName}!`, 400, 250);

                  ctx.font = "20px Arial";
                  ctx.fillText(`Your donation of ₹${amount}`, 400, 290);
                  ctx.fillText(
                    `will help feed ${platesCount} people`,
                    400,
                    320
                  );

                  // Convert to image and share
                  canvas.toBlob((blob) => {
                    if (blob) {
                      const file = new File([blob], "donation.png", {
                        type: "image/png",
                      });
                      if (navigator.share) {
                        navigator.share({
                          files: [file],
                          title: "My Donation to FeedMore India",
                          text: `I just donated ₹${amount} to help feed ${platesCount} people!`,
                        });
                      }
                    }
                  });
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
