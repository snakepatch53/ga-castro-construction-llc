export default function Button({ text, ...props }) {
    const className = props.className ? " " + props.className : "";
    return (
        <>
            <button
                {...props}
                className={
                    "border-[var(--color2-bg)] border-solid border-2 text-[var(--color1-txt)] hover:bg-[var(--color2-bg)] hover:text-[var(--color2-txt)] transition-all duration-300 rounded-3xl px-4 py-2 font-bold font-link tracking-wide text-nowrap" +
                    className
                }
            >
                {text}
            </button>
        </>
    );
}
