import { useState, ChangeEvent, SetStateAction } from 'react';
import Papa from 'papaparse';

function UploadForm() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setFile(selectedFile || null);
  };

  const handleUpload = () => {
    if (file) {
      Papa.parse(file, {
        complete: (results: { data: any; }) => {
          // 파싱된 데이터를 처리하는 로직을 작성합니다.
          console.log('Parsed data:', results.data);
        },
      });
    }
  };

  return (
    <form className="ml-4">
      <input type="file" accept=".csv" className="mr-2" onChange={handleFileChange} />
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded" onClick={handleUpload}>
        Upload
      </button>
    </form>
  );
}

export default UploadForm;
