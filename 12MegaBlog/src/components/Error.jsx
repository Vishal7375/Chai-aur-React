import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error); // Log the error to console for debugging

  return (
    <div className="py-10 text-center min-h-screen bg-gray-400">
      <h1 className="text-4xl font-bold text-gray-800">Oops!</h1>
      <p className="mt-4 text-lg text-gray-600">Sorry, an unexpected error has occurred.</p>
      <p className="mt-2 text-red-600 italic">
        {/* Use optional chaining to handle different error structures */}
        {error.statusText || error.message}
      </p>
    </div>
  );
}