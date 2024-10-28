import { Link } from "@inertiajs/react";
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

export default function Pagination({ links }) {
    return (
        <nav className="text-center mt-4">
            {links.map((link, index) => (
                <Link
                    preserveScroll
                    href={link.url || ""}
                    key={index}
                    className={
                        "inline-block py-2 px-3 rounded-lg text-black text-xs "
                            + (link.active ? "bg-gray-950 text-white " : " ")
                            + (!link.url ? "!text-gray-500 cursor-not-allowed " :
                            "hover:bg-gray-950 hover:text-white")
                    }
                >
                    {parse(DOMPurify.sanitize(link.label))}
                </Link>
            ))}
        </nav>
    )
}