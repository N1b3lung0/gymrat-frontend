'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowUpDown } from 'lucide-react'
import { DataTableColumnHeader } from '@/components/data-table/data-table-column-header'
import { ActionsColumn } from '@/components/data-table/columns/actions-column'
import BadgesColumn from '@/components/data-table/columns/badges-column'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Exercise = {
    id: string
    name: string
    description: string
    level: string
    primaryMuscle: string
    secondaryMuscles: string[]
    routines: string[]
}

export const columns: ColumnDef<Exercise>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'name',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue('name')}</div>,
    },
    {
        accessorKey: 'description',
        header: 'Description',
        cell: ({ row }) => <div className="capitalize">{row.getValue('description')}</div>,
    },
    {
        accessorKey: 'level',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Level" />,
        cell: ({ row }) => row.getValue('level') && <Badge className="capitalize mx-1">{row.getValue('level')}</Badge>,
    },
    {
        accessorKey: 'primaryMuscle',
        header: 'Primary Muscle',
        cell: ({ row }) =>
            row.getValue('primaryMuscle') && <Badge className="capitalize mx-1">{row.getValue('primaryMuscle')}</Badge>,
    },
    {
        accessorKey: 'secondaryMuscles',
        header: 'Secondary Muscles',
        cell: ({ row }) => <BadgesColumn list={row.getValue('secondaryMuscles')} />,
    },
    {
        accessorKey: 'routines',
        header: 'Routines',
        cell: ({ row }) => <BadgesColumn list={row.getValue('routines')} />,
    },
    {
        accessorKey: 'actions',
        header: 'Actions',
        cell: ({ row }) => <ActionsColumn entity="exercises" />,
    },
]
