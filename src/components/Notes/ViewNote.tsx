import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

type UserType = {
	createdAt: string;
	email: string;
	id: string;
	name: string;
	updatedAt: string;
};

type ViewNote = {
	createdAt: string;
	id: string;
	text: string;
	updatedAt: string;
	user: UserType;
	userId: string;
};

export function ViewNote({ noteId }: { noteId: any }) {
	const [note, setNote] = React.useState<ViewNote | null>(null);
	const [error, setError] = React.useState<string>('');

	const router = useRouter();

	const { data: session } = useSession();

	React.useEffect(() => {
		fetch('/api/v1/notes/note', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				noteId: noteId,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.error) {
					setError(data.error);
				} else {
					setNote(data.note);
				}
			});
	}, [noteId]);

	async function deleteNote() {
		const res = await fetch('/api/v1/notes/delete', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				noteId: noteId,
			}),
		});
		if (res.status === 400) {
			const data = await res.json();
			setError(data.error);
		} else {
			router.push('/notes');
		}
	}
	return (
		<Container
			title="Note"
			action={<Button onClick={deleteNote}>Delete Note</Button>}
		>
			{note && <div className="prose-xl">{note.text}</div>}
			{error && (
				<div className="text-red-500 p-2 bg-red-200 border border-red-400 rounded font-semibold">
					{error}
				</div>
			)}
		</Container>
	);
}
