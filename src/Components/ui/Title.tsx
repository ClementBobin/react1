interface TitleProps {
    className?: string;
    text: string;
}

export const Title = ({ className, text }: TitleProps) => {
    return (
        <h1 className={className}>{text}</h1>
    );
}