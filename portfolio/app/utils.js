export default function getImageUrl(props){
    let url = 'https://www.svgrepo.com/show/'+ props.imageId + '/' + props.name.toLowerCase() + '.svg'
    return url
}