export default function SocialItem({ url, icon, value = null }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="flex gap-1 h-full items-center rounded-md hover:bg-slate-50/10 px-1"
        >
            <div className="h-full max-h-4 aspect-square flex mt-1">
                <div dangerouslySetInnerHTML={{ __html: icon }} className="icon" />
            </div>
            {value && <span className="text-sm font-link tracking-[0.5px]">{value}</span>}
        </a>
    );
}
