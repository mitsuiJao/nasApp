import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  // ファイル選択時に状態を更新
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  // ファイルアップロードを実行
  const handleFileUpload = async () => {
    if (!file) {
      alert("ファイルを選択してください");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/uploadfile/", {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        alert("アップロードに失敗しました");
      }
    } catch (error) {
      alert("エラーが発生しました");
    }
  };

  return (
    <div>
      <h1>ファイルアップロード</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>アップロード</button>
    </div>
  );
};

export default FileUpload;

