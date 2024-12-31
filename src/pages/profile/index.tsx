/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import profileIcon from "../../assets/icons/ic_default_profile.svg";
import { ArrowLeft, Download, LogOutIcon, MapPin, Share } from "lucide-react";
import { useUserStore } from "../../store/user.store";
import BottomNavbar from "../../components/bottom-nav";
import { useNavigate } from "react-router-dom";
import ScreenLoader from "../../components/screen-loader";
import { toast } from "react-toastify";
import moment from "moment";

const MapShareComponent = () => {
  const { user } = useUserStore();

  const handleDownload = () => {
    // Create a canvas element to draw the stats image
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 600;

    if (ctx) {
      // Draw white background
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw user profile info
      ctx.fillStyle = "#000";
      ctx.font = "24px Arial";
      ctx.fillText(`${user.fullName} (@${user.username})`, 20, 40);
      ctx.font = "18px Arial";
      ctx.fillText(`Location: ${user.location}`, 20, 70);
      ctx.fillText(`Bio: ${user.bio}`, 20, 100);

      // Draw stats
      ctx.font = "20px Arial";
      ctx.fillText(`Total Plates Donated: ${user.totalPlatesDonated}`, 20, 150);
      ctx.fillText(`Total People Fed: ${user.totalPeopleFed}`, 20, 180);
      ctx.fillText(
        `Total Amount Donated: ₹${user.totalAmountDonated}`,
        20,
        210
      );

      // Draw map placeholder (in real implementation, would use a mapping library)
      ctx.strokeStyle = "#ccc";
      ctx.strokeRect(20, 240, 760, 340);
      ctx.font = "16px Arial";
      ctx.fillText("Map showing donation locations:", 30, 270);

      // List donation locations
      let y = 300;
      user.donationHistory.forEach((donation: any) => {
        ctx.fillText(`• ${donation.feedingDriveDetails.location}`, 40, y);
        y += 30;
      });

      // Convert canvas to image and trigger download
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "donation-stats.png";
          a.click();
          URL.revokeObjectURL(url);
        }
      });
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-green-500 text-white px-2 py-1 rounded-lg text-sm flex mr-auto items-center gap-2"
    >
      <Download size={20} />
      Download Stats as Image
    </button>
  );
};

const ProfilePage = () => {
  const { user, removeUser } = useUserStore();
  const navigate = useNavigate();

  const donations = user?.donationHistory;

  if (!user) {
    return <ScreenLoader />;
  }

  return (
    <div className="flex mb-[200px] items-center flex-col justify-top my-auto h-screen ">
      <div className="pb-[100px] relative pt-[60px] w-full flex flex-col items-center min-h-[400px]">
        <div className="fixed top-0 lef-0 md:left-[37.5%] w-full md:w-1/4 bg-green-500 mx-auto p-1 flex items-center justify-between ">
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate(-1);
            }}
          >
            <ArrowLeft className="text-white ml-1" />
          </div>
          {user?.userID === user?.userID ? (
            <div
              onClick={() => {
                removeUser();
                navigate("/", {
                  replace: true,
                });
                toast("Logged out!");
              }}
              className="cursor-pointer flex items-center w-fit justify-center border-[1.2px] border-gray-300 p-2 rounded-lg bg-white "
            >
              <p className="font-semibold text-sm text-green-500">Logout</p>
              <LogOutIcon className="text-green-500 ml-1" size={18} />
            </div>
          ) : null}
        </div>
        <div className="flex py-2 px-3 w-full items-center justify-start">
          <img src={profileIcon} width={80} height={80} />
          <div className="w-full ml-2">
            <h2 className="text-lg font-semibold -mb-1">{user?.fullName}</h2>
            <h4 className="font-semibold text-md text-gray-400 my-1">
              @{user?.username}
            </h4>

            <div className="w-full flex items-center justify-start gap-1">
              <MapPin size={18} className="text-gray-400" />
              <p className="text-sm text-gray-400">{user?.location}</p>
            </div>
          </div>
        </div>
        <p className="text-left px-2 w-full rounded-xl py-1 text-sm">
          {user?.bio?.substring(0, 50)}
        </p>
        <MapShareComponent />
        <div className="flex mt-3 bg-green-100 rounded-xl p-3 w-full items-center justify-around">
          <div className="w-1/3 text-center">
            <h1 className="text-xl font-semibold text-black">
              {user?.totalPlatesDonated}
            </h1>
            <p className="text-black/50">Plates Donated</p>
          </div>
          <div className="w-1/3 text-center">
            <h1 className="text-xl font-semibold text-black">
              {user?.totalPeopleFed}
            </h1>
            <p className="text-black/50">People Fed</p>
          </div>
          <div className="w-1/3 text-center">
            <h1 className="text-xl font-semibold text-black">
              {user?.totalAmountDonated}
            </h1>
            <p className="text-black/50">Amount Donated</p>
          </div>
        </div>
        {donations?.length ? (
          <div className="mt-4 w-full">
            <h1 className="text-xl font-semibold mb-3 px-2">
              Donation History
            </h1>
            {donations?.map((item, index) => (
              <DonationCard key={index} donation={item} />
            ))}
          </div>
        ) : null}
      </div>
      <BottomNavbar />
    </div>
  );
};

const DonationCard = ({ donation }: { donation: any }) => {
  return (
    <div className="bg-white rounded-xl px-2 py-3 mb-4 shadow-md">
      <div className="flex justify-between items-center mb-3">
        <div>
          <h3 className="font-semibold">₹{donation.amount}</h3>
          <p className="text-sm text-gray-500">
            {moment(donation.date).format("DD MMM YYYY")}
          </p>
        </div>
        <div className="text-right">
          <p className="font-medium text-green-600">
            {donation.platesGenerated} plates
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-3">
        <div className="flex items-center gap-2 mb-2">
          <MapPin size={16} className="text-gray-500" />
          <p className="text-sm">{donation.feedingDriveDetails.location}</p>
        </div>
        <p className="text-sm text-gray-600 mb-2">
          {donation.feedingDriveDetails.caption}
        </p>
        <div className="flex gap-2">
          {donation.feedingDriveDetails.images.map((img: string, i: number) => (
            <img
              key={i}
              src={img}
              alt={`Drive photo ${i + 1}`}
              className="w-20 h-20 object-cover rounded-lg"
            />
          ))}
        </div>
        <div className="flex mt-3 justify-between items-center">
          <div className=" text-sm text-gray-500">
            Beneficiaries: {donation.feedingDriveDetails.beneficiaries}
          </div>
          <button
            onClick={() => {
              console.log("Share on Socials");
              const shareData = {
                title: "My FeedMore India Donation",
                text: `I donated ₹${donation.amount} to feed ${donation.platesGenerated} people through FeedMore India at ${donation.feedingDriveDetails.location}`,
                url: window.location.href,
                files: donation.feedingDriveDetails.images.map(
                  (img: string) => new File([], img)
                ),
              };

              try {
                if (navigator.share) {
                  navigator.share(shareData);
                } else {
                  // Fallback for browsers that don't support Web Share API
                  navigator.clipboard.writeText(shareData.text);
                  alert("Share text copied to clipboard!");
                }
              } catch (err) {
                console.error("Error sharing:", err);
              }
            }}
            className="text-sm text-white bg-green-500 px-2 py-1 rounded-md flex items-center gap-1"
          >
            Share on Socials <Share size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
