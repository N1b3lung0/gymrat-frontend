import { Badge } from '@/components/ui/badge'

export const BadgesColumn = ({ list }: { list: string[] }) => {
    return (
        <div className="flex justify-center">
            {list &&
                list.map((item: string) => (
                    <Badge key={item} className="capitalize mx-1">
                        {item}
                    </Badge>
                ))}
        </div>
    )
}
