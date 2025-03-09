import { FaFacebook } from "react-icons/fa";
import { FC } from "react";

interface FeedbackCard {
  text: string;
}

const testimonials: FeedbackCard[] = [
  {
    text: "Couldn’t recommend Calum enough! Excellent response time and very quick to start work. I got him to cut all the grass on my property, as well as waste removal. 10/10 service provided, absolutely worth it!",
  },
  {
    text: "Calum has done a fantastic job on my mum's garden, responded very quickly to messages and did the job the next day. Top man!",
  },
  {
    text: "We thoroughly recommend Calum. He responded to my text quickly and has come up with some great ideas on what to do with some difficult sections of the garden. He has worked extremely hard to complete the first stage and has booked in further sessions. He gets 5 stars from us. Thanks Calum.",
  },
  {
    text: "Top man put in a great shift would recommend. Look forward to having you back Calum.",
  },
];

const FeedbackCards: FC = () => {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full lg:w-1/2 mb-10">
        <h2 className="text-2xl font-bold text-gray-900">Feedback from gardening clients in Cowal, Dunoon and Argyle</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col h-full">
            {/* Facebook Icon */}
            <div className="mb-2">
              <FaFacebook className="text-blue-600 text-2xl" />
            </div>

            <p className="mb-auto text-gray-700">{testimonial.text}</p>

            {/* Footer */}
            <div className="pt-4 text-gray-500 text-sm">Facebook user</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackCards;