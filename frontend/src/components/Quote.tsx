export const Quote = () => {
  return (
    <div className="bg-slate-200 h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="max-w-lg">
          <div className="text-center text-3xl font-bold">
            "I'm a developer, I'm a designer, I'm a writer, I'm a teacher, I'm a
            researcher, I'm a businessman
          </div>
          <div className="max-w-md mt-4 text-lg font-semibold text-left">
            John Doe
          </div>
          <div className="max-w-md text-sm font-light text-left">
            CEO | ACME
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
