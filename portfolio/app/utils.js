export default function getImageUrl(techStack){
    let url = 'https://www.svgrepo.com/show/'+ techStack.imageId + '/' + techStack.name + '.svg'
    return url
}