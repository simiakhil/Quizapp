import React, {useState} from 'react'

function end() {
    const [end,setend] = useState(false);

    const toggleEnd = () => setend(!end);


  return (
    <>
    <div>
        <h1>this is the starting page</h1>
        { end ? <h3>This is end page</h3> : <h3>This is not end</h3>}
        <button onClick={toggleEnd}>Click</button>
    </div>
    </>
  )
}

export default end