import BgHeader from "../components/BgHeader";
import FeedbackForm from "../components/FeedbackForm";
import Heading from "../components/Heading";

const Feedback = () => {
  return (
    <div>
      <div>
        <BgHeader title={"We Value Your Feedback"} />
      </div>
      <div className="flex flex-col items-center my-24">
        <Heading
          name={"Leave a Review"}
          title={"We Value Your Feedback"}
          align={"center"}
        />

        <p className="w-[780px] text-center text-li-gray mt-6">
          Our clinic is equipped with modern facilities and advanced medical
          technology to ensure accurate diagnoses and effective treatments. This
          enables us to provide you with the highest standard of care.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center w-[1100px] h-[625px] bg-white rounded-[30px] p-8">
            <div className="text-[30px] text-dark-blue">Make your Feedback</div>
            <div><FeedbackForm/></div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;