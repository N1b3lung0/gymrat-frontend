import { columns } from './columns'
import { DataTable } from '@/components/data-table/data-table'

const data = await fetch('http://localhost:8080/exercises')
const exercises = await data.json()
console.log(exercises.items)

export default async function Page() {
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={exercises.items} />
        </div>
    )
}
