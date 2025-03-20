import { Exercise } from '@/app/dashboard/exercises/columns'
import { Button } from '@/components/ui/button'
import { Column } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

export const SortedColumn = ({ column, columnName }: { column: Column<Exercise, unknown>; columnName: string }) => {
    return (
        <div className="flex justify-center">
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                {columnName}
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        </div>
    )
}
