'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@/components/ui/checkbox'
import { DataTableColumnHeader } from '@/components/data-table/data-table-column-header'
import { ActionsColumn, BadgeColumn, BadgesColumn, SortedColumn } from '@/components/data-table/columns'
import { BadgeCheck, BadgeX, BadgeXIcon, LucideAArrowUp } from 'lucide-react'

export type AuditFields = {
    active: boolean
    createdAt: string
    createdBy: string
    updatedAt: string
    updatedBy: string
    deletedAt: string
    deletedBy: string
}

export type Exercise = {
    id: string
    name: string
    description: string
    level: string
    primaryMuscle: string
    secondaryMuscles: string[]
    routines: string[]
    auditFields: AuditFields
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
        header: ({ column }) => <SortedColumn column={column} columnName="Name" />,
        cell: ({ row }) => <div className="capitalize">{row.getValue('name')}</div>,
    },
    {
        accessorKey: 'description',
        header: () => <div className="text-center">Description</div>,
        cell: ({ row }) => <div className="capitalize">{row.getValue('description')}</div>,
    },
    {
        accessorKey: 'level',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Level" />,
        cell: ({ row }) => {
            const level: string = row.getValue('level')
            const levelColor: string =
                level === 'BEGINNER'
                    ? 'bg-green-700 hover:bg-green-800'
                    : level === 'INTERMEDIATE'
                    ? 'bg-sky-700 hover:bg-sky-800'
                    : 'bg-rose-700 hover:bg-rose-800'
            return <BadgeColumn rowValue={level} color={levelColor} />
        },
    },
    {
        accessorKey: 'primaryMuscle',
        header: () => <div className="text-center">Primary Muscle</div>,
        cell: ({ row }) => <BadgeColumn rowValue={row.getValue('primaryMuscle')} color="" />,
    },
    {
        accessorKey: 'secondaryMuscles',
        header: () => <div className="text-center">Secondary Muscles</div>,
        cell: ({ row }) => <BadgesColumn list={row.getValue('secondaryMuscles')} />,
    },
    {
        accessorKey: 'routines',
        header: () => <div className="text-center">Routines</div>,
        cell: ({ row }) => <BadgesColumn list={row.getValue('routines')} />,
    },
    {
        accessorKey: 'active',
        header: () => <div className="text-center">Active</div>,
        cell: ({ row }) => (
            <div className="capitalize flex justify-center">
                {row.original.auditFields.active ? (
                    <BadgeCheck className="text-green-700" />
                ) : (
                    <BadgeX className="text-red-700" />
                )}
            </div>
        ),
    },
    {
        accessorKey: 'actions',
        header: () => <div className="text-center">Actions</div>,
        cell: ({ row }) => <ActionsColumn entity="exercises" item={row.original} />,
    },
]
