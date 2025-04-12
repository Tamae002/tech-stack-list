import { Avatar, Card } from "./container"

export default function app(){
  return (
    <section>
      <Card>
        <Avatar 
          name='react'
          imageId= '473768'
          isBackend={false}
        />
      </Card>
      <Card>
        <Avatar 
          name='laravel'
          imageId= '473693'
          isBackend={true}
        />
      </Card>
      <Card>
        <Avatar 
          name='express'
          imageId='330398'
          isBackend={true}
        />
      </Card>
      
    </section>
  )
}





// <img src="https://www.svgrepo.com/show/473768/react.svg" alt="icon"/>
// <img src="https://www.svgrepo.com/show/473693/laravel.svg"/>
// <img src="https://www.svgrepo.com/show/330398/express.svg"/>