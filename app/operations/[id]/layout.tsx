import { Metadata, ResolvingMetadata } from "next"
import Db from '@/lib/mongo'
import { ObjectId } from "mongodb"


type Props = {
	params: Promise<{ id: string }>
	searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
	const { id } = await params

	const operation = await Db.operations.findOne({ _id: new ObjectId(id) })
	if (!operation) return {
		title: 'Unknown Operation | ASOT'
	}

	return {
		title: `${operation.title} | ASOT`,
		description: `Details for ${operation.title}`,
	}
}


export default function Page({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="h-full">
			{children}
		</div>
	)
}