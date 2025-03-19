import { Badge } from '@/components/ui/badge'

const BadgesColumn = ({ list }: { list: string[] }) => {
    return (
        list &&
        list.map((item: string) => (
            <Badge key={item} className="capitalize mx-1">
                {item}
            </Badge>
        ))
    )
}

export default BadgesColumn
