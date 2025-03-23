import { unstable_cache } from 'next/cache'
import { columns } from './columns'
import { DataTable } from '@/components/data-table/data-table'
import DataTableSkeleton from '@/components/data-table/data-table-skeleton'

const getExercises = unstable_cache(
    async () => {
        const data = await fetch('http://localhost:8080/exercises')
        return await data.json()
    },
    ['exercises'],
    { revalidate: 3600, tags: ['exercises'] }
)

export default async function Page() {
    const exercises = await getExercises()
    console.log(exercises.items)
    return !exercises.items ? (
        <DataTableSkeleton />
    ) : (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={exercises.items} />
        </div>
    )
}
