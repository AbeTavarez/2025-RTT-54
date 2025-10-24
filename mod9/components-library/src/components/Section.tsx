
interface SectionProps {
    title: string;
    children: React.ReactNode;
}



function Section({title, children}: SectionProps) {
    return (
        <section className="p-5">
            <h2 className="mb-5">{title}</h2>
            {children}
        </section>
    )
}

export default Section;