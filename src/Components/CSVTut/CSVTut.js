import React from "react";

import { useCSVReader } from "react-papaparse";

export default function CSVReader() {
  const { CSVReader } = useCSVReader();
  return (
    <CSVReader
      onUploadAccepted={(results) => {
        console.log(results.data);
      }}
    >
      {({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps }) => (
        <>
          <div className="w-[50%] bg-slate-400">
            <button type="button" {...getRootProps()}>
              Browse file
            </button>
            <div>{acceptedFile && acceptedFile.name}</div>
            <button {...getRemoveFileProps()}>Remove</button>
            <ProgressBar />
          </div>
        </>
      )}
    </CSVReader>
  );
}
