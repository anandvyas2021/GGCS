export * from "./Animation";

export const H2 = ({ children, className }) => {
    return (
        <h2
            className={`flex flex-col items-center text-[30px] !mb-5 !font-axiSemiBold ${className}`}
        >
            {children}
            <p className="w-36 h-[4px] bg-tertiary rounded-full -mt-1" />
        </h2>
    );
};
export const H3 = ({ children, className }) => {
    return (
        <h3 className={`text-[30px] !mb-3 font-axiSemiBold ${className}`}>
            {children}
        </h3>
    );
};
export const H4 = ({ children, className }) => {
    return (
        <h4 className={`text-[25px] font-axiSemiBold ${className}`}>
            {children}
        </h4>
    );
};
export const H5 = ({ children, className }) => {
    return (
        <h5 className={`text-[20px] font-axiSemiBold  ${className}`}>
            {children}
        </h5>
    );
};
export const H6 = ({ children, className }) => {
    return (
        <h6 className={`text-[16px] font-axiMedium text-gray-600 ${className}`}>
            {children}
        </h6>
    );
};

export const Mail = ({ children, className }) => {
    return (
        <a
            className={`text-2xl font-axiMedium text-primary ${className}`}
            href="mailto:ggcs@globalgarner.com"
        >
            {children}
        </a>
    );
};
export const Telephone = ({ children, className }) => {
    return (
        <a
            className={`text-2xl font-axiMedium text-primar ${className}`}
            href="tel:+916354917511"
        >
            {children}
        </a>
    );
};
