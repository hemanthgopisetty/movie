import { Hydrate as RQHydrate } from "@tanstack/react-query"


function HydrateClient(props) {
  return (
    <RQHydrate  {...props}/>
  )
}

export default HydrateClient
