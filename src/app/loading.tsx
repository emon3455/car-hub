export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
      <div className="flex justify-center items-center h-screen bg-base-200 ">
        <div
          className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary
          dark:border-red-400"
        ></div>
      </div>
    );
  }
  