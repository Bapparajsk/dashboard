export const LogoutIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon-svg"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"/>
            {/* Show on hover */}
            <path className="hover-show" d="M13 12h13l-3 -3" />
            <path className="hover-show" d="M23 15l3 -3" />

            {/* Hide on hover */}
            <path className="hover-hide" d="M9 12h12l-3 -3" />
            <path className="hover-hide" d="M18 15l3 -3" />
        </svg>
    );
};
