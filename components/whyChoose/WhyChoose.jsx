import Card from "../cards/Card";

export default function WhyChoose() {
  return (
    <>
      <div className="bg-[#f3f4f6]">
        <div className="flex flex-col gap-5 py-32 Customcontainer">
          <div>
            <h2 className="text-4xl text-center md:text-start">
              {" "}
              Why choose Easybank?
            </h2>
          </div>
          <div className="max-w-xl text-center text-gray-500 md:text-start">
            <p className="text-sm">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          {/* Grid Container */}
          <div className="grid grid-cols-1 mt-6 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card
              src="/assets/images/icon-online.svg"
              title="Online Banking"
              desc="Our modern web and mobile applications allow you to keep track of your finances 
              wherever you are in the world."
            />
            <Card
              src="/assets/images/icon-budgeting.svg"
              title="Simple Budgeting"
              desc="See exactly where your money goes each month. Receive notifications when you’re 
              close to hitting your limits."
            />
            <Card
              src="/assets/images/icon-onboarding.svg"
              title="Fast Onboarding"
              desc="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
            />
            <Card
              src="/assets/images/icon-api.svg"
              title="Open API"
              desc="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
            />
          </div>
        </div>
      </div>
    </>
  );
}
