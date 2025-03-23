import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Edit, Trash } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { Exercise } from '@/app/dashboard/exercises/columns'

export const ActionsColumn = ({ entity, item }: { entity: string; item: Exercise }) => {
    async function deleteExercise() {
        try {
            const res = await fetch(`http://localhost:8080/exercises/${item.id}`, {
                method: 'DELETE',
            })
            if (!res.ok) {
                throw new Error('Something went wrong')
            }
        } catch (error) {
            console.error(error)
        }
        //redirect('/dashboard/exercises')
    }
    const updatePath = `/dashboard/${entity}/update`
    return (
        <div className="flex justify-center">
            <Button asChild variant="ghost" size="icon">
                <Link href={updatePath}>
                    <Edit />
                </Link>
            </Button>
            {item.auditFields.active ? (
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
                            <Trash />
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete the item.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction asChild>
                                <Button
                                    className="bg-destructive hover:bg-red-600 text-neutral-50"
                                    onClick={deleteExercise}
                                >
                                    Yes, delete account
                                </Button>
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            ) : null}
        </div>
    )
}
