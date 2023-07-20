export default function Container(
    {
    children,
}: {
    children: React.ReactNode;

}) {
    return (
        <section>
            <div className='px-5s'>{children}</div>
        </section>
    )
}
