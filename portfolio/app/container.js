import getImageUrl from "./utils"

export function Avatar(techStack) {
    if(techStack.isBackend){
        return (
            <div>
                <h2>{techStack.name}</h2>
                <img 
                    src={getImageUrl({ ...techStack })} 
                    height={50} 
                    width={50} 
                    style={{
                    filter:"invert(100%)",
                    fontFamily: "Inter"
                }}/>
            </div>
        )
    }
    return null;
}

export function Card({ children }) {
    return (
        <div style={{
            border: "1px solid white",
            backgroundColor: 'magenta'
        }}>
            {children}
        </div>
    )
}

