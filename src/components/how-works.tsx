import { X } from "lucide-react";
import { useUserStore } from "../store/user.store";

interface HowItWorksModalProps {
  hideModal: () => void;
}

const HowItWorksModal = ({ hideModal }: HowItWorksModalProps) => {
  const { user } = useUserStore();
  return (
    <div className="fixed inset-0 w-full md:w-1/4 mx-auto z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
      <div className="flex flex-col items-center justify-center h-screen relative">
        <div className="flex flex-col items-start justify-start bg-white p-8 rounded-lg shadow-xl max-w-md mx-6">
          <p>
            <b> Problem:</b> I want to feed people, can donate too, but the
            reason I don't do it because I'm not sure that whatever I'm donating
            is actually getting utilized or not, and if yes then how?
          </p>
          <br />
          <h3 className="text-lg font-bold">Workflow of App:</h3>
          <ul className="list-decimal ml-4 flex flex-col gap-2">
            <li>User Donates on Feeding India Website:</li>
            <li>
              Goes to{" "}
              {`xyz.com/signup?email=${user?.email}&phone=${user?.phone}`}{" "}
            </li>
            <li>
              app fetches their last payment info, & shows thanks for your
              contribution (immediate validation)
            </li>
            <li>
              Dashboard shows some stats like last month delivered, and messages
              like "Shivam donated 500" etc
            </li>
            <li>
              Another tab profile, where users can see their info, badges, and
              and info of their donations
            </li>
          </ul>

          <button
            onClick={hideModal}
            className="bg-green-500 text-white px-4 py-2 mx-auto mt-3 rounded-lg text-sm flex mr-auto items-center gap-2"
          >
            <X size={20} />
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksModal;
