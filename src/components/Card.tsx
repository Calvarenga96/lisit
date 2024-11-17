import {
    Card as CardShadCN,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface CardProps {
    title: string;
}

export default function Card({ title }: CardProps) {
    return (
        <CardShadCN className="flex justify-center items-center bg-gray-800 p-4 rounded-lg hover:bg-gray-700 hover:shadow-2xl hover:scale-105 hover:translate-y-[-5px] transition duration-300 min-h-[200px] max-h-max">
            <CardHeader>
                <CardTitle className="text-xl font-bold text-yellow-400 text-center">
                    {title}
                </CardTitle>
            </CardHeader>
        </CardShadCN>
    );
}
