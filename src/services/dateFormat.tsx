export const handleChangeDateFormat = ({ date }: { date: string | number | Date }): string => {
    return new Date(date).toLocaleDateString("ru-RU")
}