import { RegisterSection, Sidebar } from "./components";

const page = () => {
  return (
    <div className="container px-4 md:px-8">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center lg:px-8 ">
            <RegisterSection />
          </div>
          <div className="hidden lg:col-span-6 lg:flex items-center justify-center py-6 ">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
