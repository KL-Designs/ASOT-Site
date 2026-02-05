import { Metadata } from "next"
import Db from '@/lib/mongo'
import { ObjectId } from "mongodb"


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	const resolvedParams = await params

	const operation = await Db.operations.findOne({ _id: new ObjectId(resolvedParams.slug) })
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