import React from "react";

import { useCSVReader } from "react-papaparse";

export default function CSVReader() {
  const { CSVReader } = useCSVReader();
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-sm md:text-3xl">
        <span style={{ fontFamily: "Press Start 2P" }}>
          Upload your csv file here
        </span>
      </h1>
      <CSVReader
        onUploadAccepted={(results) => {
          console.log(results.data);
        }}
      >
        {({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps }) => (
          <div className="mx-auto">
            <div className="">
              <button
                type="button"
                {...getRootProps()}
                className="my-[5%] btn btn-primary"
              >
                Browse file
              </button>
              <div>{acceptedFile && acceptedFile.name}</div>
              <button
                {...getRemoveFileProps()}
                className="my-[5%] btn btn-primary"
              >
                Remove
              </button>
              <ProgressBar />
            </div>
          </div>
        )}
      </CSVReader>
    </div>
  );
}
