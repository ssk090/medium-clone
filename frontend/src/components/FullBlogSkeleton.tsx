export const FullBlogSkeleton = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
        <div className="col-span-8">
          <div className="h-10 bg-gray-200 rounded-full w-96 mb-6"></div>
          <div className="text-slate-500 pt-2">
            <div className="h-5 bg-gray-200 rounded-full w-32"></div>
          </div>
          <div className="pt-4">
            <div className="h-5 bg-gray-200 rounded-full w-32"></div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="text-slate-600 text-lg">
            {" "}
            <div className="h-5 bg-gray-200 rounded-full w-16 mb-6"></div>
          </div>
          <div className="flex w-full">
            <div className="pr-4 flex flex-col justify-center">
              <div className="bg-gray-300 rounded-full w-10 h-10"></div>
            </div>
            <div>
              <div className="text-xl font-bold">
                <div className="h-5 bg-gray-200 rounded-full w-32"></div>
              </div>
              <div className="pt-2 text-slate-500">
                <div className="h-5 bg-gray-200 rounded-full w-32"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
