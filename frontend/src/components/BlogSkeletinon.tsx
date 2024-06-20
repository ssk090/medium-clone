export const BlogSkeleton = () => {
  return (
    <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md">
      <div className="flex">
        <div className="bg-gray-300 rounded-full w-10 h-10"></div>
        <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
          <div className="h-2.5 bg-gray-200 rounded-full w-32"></div>
        </div>
        <div className="flex justify-center flex-col pl-2">·</div>
        <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
          <div className="h-2.5 bg-gray-200 rounded-full w-32"></div>
        </div>
      </div>
      <div className="text-xl font-semibold pt-2">
        {" "}
        <div className="h-5 bg-gray-300 rounded-full w-32 mb-3"></div>
      </div>
      <div className="text-md font-thin">
        <div className="h-5 bg-gray-200 rounded-full w-32"></div>
      </div>
      <div className="text-slate-500 text-sm font-thin pt-4">
        <div className="h-5 bg-gray-200 rounded-full w-32"></div>
      </div>
    </div>
  );
};
