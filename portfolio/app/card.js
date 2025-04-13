import { techStackData } from "./data"
import getImageUrl from "./utils"

export function Card(){
    // const filterItem = techStackData.filter(data => 
    //     data.utility.toLowerCase() === 'back-end'
    // )
    const listItem = techStackData.map(data => 
        <li key={ data.id }
        style={{
            margin: '10px'
        }}>
            <Container>
                <Title 
                    name = { data.name }
                />
                <Image 
                    imageId = { data.imageId } 
                    name = { data.name }
                />
                <Utility 
                    utility = { data.utility }
                />
                <Description
                    description = { data.description }
                />
            </Container>
        </li>
    )
    return(
        <div style={{
            maxWidth: '1100px',
          }}>
            <ol style={{
                display: "flex",
                flexDirection:"row",
                flexWrap: "wrap",
                justifyContent: 'center'
            }}>{listItem}</ol>
        </div>
    )
}

export function Container({ children }){
    return(
        <div style={{
            width:'200px',
            height: "300px",
            border: '1px solid white',
            display: 'flex',
            flexFlow: 'column',
            padding: '16px'
        }}>
            { children }
        </div>
    )
}

function Title({ name }){
    return(
        <div style={{
            height: '50px'
        }}>
            <h2>{ name }</h2>
        </div>
    )
}

function Image(props){
    return(
        <div style={{
            height: '100px',
        }}>
            <img 
            src={getImageUrl(props)} 
            alt={props.name}
            style={{
                filter: "invert(100%)",
            }}
            width={50}
            height={50}
            />
        </div>
    )
}

function Utility({ utility }){
    return(
        <div style={{
            border: '1px solid white',
            padding: '2px',
            paddingLeft: '10px',
            borderRadius: '5px',
            fontSize: '12px',
            marginBottom: '10px'
        }}>
            <p><em>{ utility }</em></p>
        </div>
    )
}

function Description({ description }){
    return(
        <div style={{
            fontSize: '14px',
            color: 'gray'
        }}>
            <p>
            { description }
            </p>
        </div>
    )
}