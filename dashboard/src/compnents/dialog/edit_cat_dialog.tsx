import React, { useState, useEffect } from "react";

const DialogExample: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Effect to toggle the body class
  // useEffect(() => {
  //   if (isDialogOpen) {
  //     document.body.classList.add("overflow-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }

  //   // Cleanup on component unmount
  //   return () => {
  //     document.body.classList.remove("overflow-hidden");
  //   };
  // }, [isDialogOpen]);

  return (
    <div className="p-4">
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => setIsDialogOpen(true)}
      >
        Open Dialog
      </button>

      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg max-w-sm">
            <p>This is a dialog!</p>
            <button
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
              onClick={() => setIsDialogOpen(false)}
            >
              Close Dialog
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DialogExample;
