export function Button({disabled, children, onClick}) {

    return (
        <span onClick={onClick} className={`px-32 py-8 text-white rounded-2xl text-2xl cursor-pointer ${disabled?"bg-blue-200" : "bg-green-400"}`}>
            {children}
        </span>
    )
}