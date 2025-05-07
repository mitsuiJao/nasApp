import React, { useEffect, useState } from "react";

// ファイル情報の型定義
interface FileInfo {
	name: string;
	size: number;
	last_modified: string;
}

function FileList() {
	const [files, setFiles] = useState<FileInfo[]>([]);

	useEffect(() => {
		fetch("http://localhost:8000/getfile")
			.then((response) => response.json())
			.then((data: FileInfo[]) => setFiles(data))
			.catch((error) => console.error("Error fetching files:", error));
	}, []);

	return (
		<div>
			<h1>ファイル一覧</h1>
			<table border={1}>
				<thead>
					<tr>
						<th>名前</th>
						<th>サイズ (バイト)</th>
						<th>最終更新日時</th>
					</tr>
				</thead>
				<tbody>
					{files.map((file) => (
						<tr key={file.name}>
							<td>{file.name}</td>
							<td>{file.size}</td>
							<td>{file.last_modified}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default FileList;

