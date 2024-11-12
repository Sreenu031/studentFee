import FeeTransaction from "./FeeTransaction";
import Contact from "./Contact";
import Input from "./Input";
function App() {
  return (
    <>
      <section className="w-full min-h-screen dark:bg-gray-100 dark:text-gray-800 flex items-center">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            FEE TRANSACTIONS <span className="dark:text-violet-600">STUDENT REPORT</span> 
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            This webapp give details about the student fee transaction details.Click get started to show results.
          </p>
          <div className="flex flex-wrap justify-center">
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
             <a href="#Fee">Get started</a> 
            </button>
            <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-900 dark:border-gray-300">
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* Corrected the component name here */}
      <div>
        <Input />
      </div>
      <div>
        <FeeTransaction />
      </div>
      
      <div>
        <Contact />
      </div>
    </>
  );
}

export default App;
