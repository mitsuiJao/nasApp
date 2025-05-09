import { useState, useEffect } from 'react';

// ファイル情報の型定義
interface FileInfo {
	name: string;
	size: number;
	last_modified: string;
}

function FileList() {
	const [files, setFiles] = useState<FileInfo[]>([]);
	async function handleDelete(filename: string) {
		const result = await fetch(`http://localhost:8000/delete/${filename}`);
		if (!result.ok) {
			console.error("Error delete files");
			alert("削除に失敗しました");
		}
		window.location.reload();
	}

	useEffect(() => {
		fetch("http://localhost:8000/getfile")
			.then((response) => response.json())
			.then((data: FileInfo[]) => setFiles(data))
			.catch((error) => {
				console.error("Error fetching files:", error);
				alert("取得に失敗しました");
			});
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
						<th>削除</th>
					</tr>
				</thead>
				<tbody>
					{files.map((file) => (
						<tr key={file.name}>
							<td>{file.name}</td>
							<td>{file.size}</td>
							<td>{file.last_modified}</td>
							<td><button onClick={() => handleDelete(file.name)}>削除</button></td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default FileList;

