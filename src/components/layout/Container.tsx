import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

type ContainerProps = React.HTMLAttributes<HTMLElement> & {
    children: React.ReactNode;
}


const containerVariants = cva("container mx-auto");
export default function Container({ children, className, ...props }: ContainerProps) {
    return (
        <div className={cn(containerVariants(), className)} {...props}>
            {children}
        </div>
    );
}
