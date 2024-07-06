import PropTypes from "prop-types";

export default function CenterContent({children}) {

    return(
        <main className="w-screen h-screen bg-white flex flex-col justify-center items-center">
            {children}
        </main>
    )
}

CenterContent.propTypes = {
    children: PropTypes.object.isRequired
}
