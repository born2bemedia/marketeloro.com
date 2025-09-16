'use client';

import { useRef } from 'react';
import { useDropzone } from 'react-dropzone';

export const Dropdzone = ({
  required,
  name,
  onDrop,
  value,
  label,
}: {
  required?: boolean;
  name?: string;
  onDrop?: (file: File | null) => void;
  value?: File | null;
  label?: string;
}) => {
  const hiddenInputRef = useRef<HTMLInputElement | null>(null);

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    multiple: false,
    onDrop: incomingFiles => {
      if (onDrop) {
        onDrop(incomingFiles[0] || null);
      }
    },
  });

  const file = value ?? acceptedFiles[0];

  return (
    <div className="flex flex-col items-center rounded-2xl border border-white bg-white px-4 py-3">
      <div
        {...getRootProps({ className: 'dropzone' })}
        className="flex w-full flex-col items-center gap-2.5"
      >
        <input
          className="w-full"
          type="file"
          name={name}
          required={required}
          style={{ opacity: 0 }}
          ref={hiddenInputRef}
          {...getInputProps()}
        />
        <button
          className="text-jaguar/20 flex w-full items-center justify-between gap-1 text-base"
          type="button"
          onClick={e => {
            e.stopPropagation();
            open();
          }}
        >
          {file ? file.name : label} <LinkIcon />
        </button>
      </div>
    </div>
  );
};

const LinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M10.2754 10.1249L8.21706 12.1833C7.07539 13.3249 7.07539 15.1666 8.21706 16.3083C9.35872 17.4499 11.2004 17.4499 12.3421 16.3083L15.5837 13.0666C17.8587 10.7916 17.8587 7.0916 15.5837 4.8166C13.3087 2.5416 9.60873 2.5416 7.33372 4.8166L3.80039 8.34994C1.85039 10.2999 1.85039 13.4666 3.80039 15.4249"
      stroke="#030213"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
