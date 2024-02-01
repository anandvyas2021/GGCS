export const Input = ({ type, placeholder, value, name, className, errMsg, onChange }) => {
    return (
        <>
            <input
                value={value}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                className={`w-full rounded-full !px-5 !py-2.5 !outline-none border-none bg-gray-100 ${className ?? ""}`}
            />
            {errMsg && <span className="text-xs pl-5 text-red-500">{errMsg}</span>}
        </>
    );
};

export const Textarea = ({ value, placeholder, name, onChange, errMsg }) => {
    return (
        <>
            <textarea
                value={value}
                name={name}
                placeholder={placeholder}
                id=""
                cols="30"
                rows="10"
                onChange={onChange}
                className="w-full border-[1px] border-gray-200 relative rounded-xl h-40 px-5 outline-none  bg-gray-100"
            />
            {errMsg && <span className="text-xs pl-5 text-red-500">{errMsg}</span>}</>
    )
}