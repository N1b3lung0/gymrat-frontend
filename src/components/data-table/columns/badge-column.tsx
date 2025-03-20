import { Badge } from '@/components/ui/badge'

export const BadgeColumn = ({ rowValue, color }: { rowValue: string; color: string }) => {
    return !rowValue ? null : (
        <div className="flex justify-center">
            <Badge className={color}>{rowValue}</Badge>
        </div>
    )
}
