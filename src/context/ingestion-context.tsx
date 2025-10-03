'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type IngestedFile = {
  name: string;
  type: string;
  ingestedAt: Date;
};

type IngestionContextType = {
  ingestedFiles: IngestedFile[];
  addIngestedFile: (file: IngestedFile) => void;
};

const IngestionContext = createContext<IngestionContextType | undefined>(
  undefined
);

export function IngestionProvider({ children }: { children: ReactNode }) {
  const [ingestedFiles, setIngestedFiles] = useState<IngestedFile[]>([]);

  const addIngestedFile = (file: IngestedFile) => {
    setIngestedFiles((prevFiles) => [file, ...prevFiles]);
  };

  return (
    <IngestionContext.Provider value={{ ingestedFiles, addIngestedFile }}>
      {children}
    </IngestionContext.Provider>
  );
}

export function useIngestion() {
  const context = useContext(IngestionContext);
  if (context === undefined) {
    throw new Error('useIngestion must be used within an IngestionProvider');
  }
  return context;
}
